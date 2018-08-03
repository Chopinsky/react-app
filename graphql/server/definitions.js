const defaultLinks = [{
  id: 'link-0',
  description: 'Full stack tutorial for GraphQL',
  url: 'https://www.howtographql.com',
}];

let links = defaultLinks.slice();
let idCount = defaultLinks.length;

const generateUUID = () => {
  return Math.random().toString(36).substring(2, 15);
}

const findLinkIndex = (id) => {
  if (!id || !links || links.length === 0) {
    return -1;
  }


  for (let i = 0; i < links.length; i++) {
    if (links[i].id === id) {
      return i;
    }
  }

  return -1;
}

exports.resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (obj, args, context, info) => {
      let index = findLinkIndex(args.id);

      if (index >= 0) {
        return links[index];
      }
    },
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };

      links.push(link);
      return link;
    },
    updateLink: (root, args) => {
      let index = findLinkIndex(args.id);

      if (index < 0) {
        return null;
      }

      if (!args.url && !args.description) {
        return links[index];

      } else {
        if (args.url) {
          links[index].url = args.url;
        }

        if (args.description) {
          links[index].description = args.description;
        }

        return links[index];

      }
    },
    deleteLink: (root, args) => {
      let index = findLinkIndex(args.id);

      if (index < 0) {
        return null;
      }

      let removed = links.splice(index, 1);
      return (removed && removed.length > 0) ? removed[0] : null;
    },
  },
  Link: {
    id: (root) => root.id,
    description: (root) => root.description,
    url: (root) => root.url,
  }
}