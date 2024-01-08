const { Event, User, Demo } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth.js')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return await User.findOne({ _id: context.user._id });
    },
    eventsFromAllUsers: async () => {
      try {
        const events = await Event.find().populate('users');
        return events;
      } catch (error) {
        throw new Error('Failed to fetch events from all users');
      }
    },
    demosFromAllUsers: async () => {
      try {
        const demos = await Demo.find().populate('users');
        return demos;
      } catch (error) {
        throw new Error('Failed to fetch events from all users');
      }
    },
    usersFromEvent: async (_, { eventId }) => {
      try {
        const event = await Event.findById(eventId).populate('users');
        if (!event) {
          throw new Error('Event not found');
        }
        return event.users;
      } catch (error) {
        throw new Error('Failed to fetch users from event');
      }
    }
  },
  //_____________________________________________________________________________________________________

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
//_________________________________________________________

    saveEvent: async (parent, { event }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedEvents: event },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('Authentication error: User not logged in');
    },

    saveDemo: async (parent, { demo }, context) => {
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