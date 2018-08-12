import { getLink, getLinkIndex, getNextID, addLink, removeLinkAt } from "../common";

const bcrypt = require('bcrypt');

const login = async function (parent, args, context, info) {
  const password = bcrypt.hash(args.password, 10);
};

const signup = async function (parent, args, context, info) {

};

module.exports = {
  post: (parent, args) => {
    const now = Date.now().toString();

    const link = {
      id: `link-${getNextID()}`,
      createdAt: now,
      updatedAt: now,
      description: args.description,
      url: args.url,
    };

    addLink(link);
    return link;
  },
  updateLink: (parent, args) => {
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
  deleteLink: (parent, args) => {
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