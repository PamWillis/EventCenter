const { Event, User, Demo } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth.js')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return await User.findOne({ _id: context.user._id });
    },
    events: async () => {
      return await Event.find({}).populate('users');
    },
    users: async () => {
      return await User.findAll({}).populate('users');
    },
    demos: async () => {
      return await Demo.find({}).populate('users');
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password, isAdmin }) => {
      // Create a user
      const user = await User.create({ username, email, password, isAdmin });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const token = signToken(user);

      return { token, user };
    },
    // addEvent: async (parent, { title, date, time, description, image  }) => {
    //   return await Event.create({ title, date, time, description, image  });
    // },
    // addEvent: async (parent, { title, date, time, description, image }, { user }) => {
    //   // Check if the user is authorized (e.g., based on their role or specific conditions)
    //   if (!user) {
    //     throw new Error('Unauthorized. Please log in.');
    //   }

    //   const event = await Event.create({ title, date, time, description, image });

    //   return { event };
    // },
    createEvent: async (parent, { eventInput, User }, context) => {
      // Check if the user is authenticated
      if (context.user) {
        const user = await User.findById(context.user._id);
    
        // Check if the user exists
        if (!user) {
          throw new AuthenticationError('User not found');
        }
        // Create a new event object
        const event = new Event(eventInput);
        // Add the event to the user's events array
        user.events.push(event);
        // Save the updated user document
        await user.save();
    
        return event;
      }
    
      throw new AuthenticationError('User not authenticated');
    },
    addDemo: async (parent, { demo }, context) => {
      // Check if the user is authenticated
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedDemos: demo },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('Authentication error: User not logged in');
    },
    removeEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedEvents: { eventId } } },
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You are not authenticated.');
    },
    removeDemo: async (parent, { demoId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedDemos: { demoId } } },
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You are not authenticated.');
    },
  },
};

module.exports = resolvers;