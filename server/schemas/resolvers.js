const { User, Event, Demo } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth.js')
const mongoose = require('mongoose')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return await User.findOne({ _id: context.user._id });
    },
    eventsFromAllUsers: async () => {
      try {
        const users = await User.find();
        const events = [];

        for (const user of users) {
          events.push(...user.savedEvents);
        }
        return events;
      } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch events from all users');

      }
    },
    demosFromAllUsers: async () => {
      try {
        const users = await User.find();
        const demos = [];

        for (const user of users) {
          demos.push(...user.savedDemos);
        }
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
    },
    allUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch all users');
      }
    },
    eventDetails: async (_, { eventId }) => {
      try {
        const users = await User.find();
        const events = [];

        for (const user of users) {
          events.push(...user.savedEvents);
        }
        for (const event of events){
          if (eventId == event._id){
            return event;
          }
        }
      } catch (error) {
        console.log(error)
        throw new Error('Failed to find event ID:' + eventId);

      }
    }
  },


  Mutation: {
    addUser: async (parent, { username, email, password, isAdmin }) => {
      // Create a user
      const user = await User.create({ username, email, password, isAdmin });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      console.log(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      
      const user = await User.findOne({ email });
      
      
      if (!user) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password');
      }
      
      const token = signToken(user);

      return { token, user };
    },

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

    signUpForEvent: async (_, { userId, eventId }) => {
     console.log(eventId, userId)
      try {
        // Validate input data (you can add more validation as needed)
        if (!userId || !eventId) {
          throw new Error('Invalid input. Both userId and eventId are required.');
        }

        // Check if the event exists
        const event = await Event.findById(eventId);
        if (!event) {
          throw new Error('Event not found');
        }

        // Add the user to the list of vendors for the event
        event.vendors.push(userId);
    
        // Save the updated event in the database
        const updatedEvent = await event.save();

        // Optionally, you can update the user as well (e.g., add the event to the user's savedEvents)
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { savedEvents: eventId } },
          { new: true, runValidators: true }
        );

        // Return the updated event or any relevant information
        return {
          success: true,
          message: 'User signed up for the event successfully.',
          event: updatedEvent,
        };
      } catch (error) {
        return {
          success: false,
          message: error.message,
          event: null,
        };
      }
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