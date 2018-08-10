import { getLink, getLinkIndex, getNextID, addLink, removeLinkAt } from "../common";

module.exports = {
  post: (root, args) => {
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
  updateLink: (root, args) => {
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
  deleteLink: (root, args) => {
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
};