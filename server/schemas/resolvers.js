const { Event, User, Demo } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth.js')

const resolvers = {

  Query: {
    me: async (parent, args, context) => {
      return await User.findOne({ _id: context.user._id })
    },
  },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            // Create a user
            const user = await User.create({ username, email, password });
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
          addEvent: async (parent, { title, date, time, description, image }, context) => {
            // Check if the user is authenticated
            if (!context.user) {
              throw new AuthenticationError('Authentication required');
            }
                  // Create and return the new Event object associated with the authenticated user
      return Event.create({
        title,
        date,
        time,
        description,
        image,
        user: context.user._id, // Associate the event with the authenticated user
      });
    },
    addDemo: async (parent, { demotitle, date, time }, context) => {
      // Check if the user is authenticated
      if (!context.user) {
        throw new AuthenticationError('Authentication required');
      }

      // Create and return the new Demo object associated with the authenticated user
      return Demo.create({
        demotitle,
        date,
        time,
        user: context.user._id, // Associate the demo with the authenticated user
      });
    },
  },
};
module.exports = resolvers;