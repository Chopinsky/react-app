import { getLink, getLinkIndex, getNextID, addLink, removeLinkAt, createUser, getUser, getUserByID } from "../common";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const APP_SECRET = "abcd1234";

const signup = async function (parent, args, context, info) {
  const password = bcrypt.hash(args.password, 10);
  const token = jwt.sign({ userId: newUser.id }, APP_SECRET);

  const newUser = {
    id: args.id,
    password,
    name: args.name,
    email: args.email,
    links: [],
  };

  if (createUser(newUser)) {
    return {
      user: newUser,
      token,
    }
  } else {
    return null;
  }
};

const login = async function (parent, args, context, info) {
  const user = getUser(args.email);

  if (user) {
    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      return {
        errMsg: "Invalid password",
      };
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      token,
      user,
    }
  }

  return {
    errMsg: "User doesn't exist",
  };
};

module.exports = {
  post: (parent, args, context, info) => {
    let user = null;
    const now = Date.now().toString();

    const auth = context.request.get('Authorization');
    if (auth) {
      const token = auth.replace('Bearer ', '');
      const { userId } = jwt.verify(token, APP_SECRET);
      user = getUserByID(userId);

      if (!user) {
        return null;
      }
    }

    const link = {
      id: `link-${getNextID()}`,
      createdAt: now,
      updatedAt: now,
      description: args.description,
      url: args.url,
      postedBy: user,
    };

    addLink(link);
    return link;
  },
  updateLink: (parent, args, context, info) => {
    let link = getLink(args.id);
    if (!link) {
      return null;
    }

    if (!args.url && !args.description) {
      return link;
    } else {
      if (args.url) {
        link.url = args.url;
      }

      if (args.description) {
        link.description = args.description;
      }

      link.updatedAt = Date.now().toString();
      return link;
    }
  },
  deleteLink: (parent, args, context, info) => {
    let index = getLinkIndex(args.id);

    if (index < 0) {
      return null;
    }

    let removed = removeLinkAt(index, 1);
    let removedLink = (removed && removed.length > 0) ? removed[0] : null;

    if (removedLink) {
      removedLink.updatedAt = Date.now().toString();
    }

    return removedLink;
  },
  login,
  signup,
};