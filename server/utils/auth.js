const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';

const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),

  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;

      // Check if the user is an admin
      if (req.user && req.user.isAdmin) {
        return req;
      } else {
        throw new GraphQLError('User is not authorized to perform this action.', {
          extensions: {
            code: 'UNAUTHORIZED',
          },
        });
      }
    } catch {
      throw new GraphQLError('Invalid token or user is not authorized.', {
        extensions: {
          code: 'UNAUTHORIZED',
        },
      });
    }
  },

  signToken: function ({ username, email, _id, isAdmin }) {
    const payload = { username, email, _id, isAdmin };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};