import { getLink, getAllLinks } from "../common";

module.exports = {
  info: (obj, args, context, info) => `This is the API of a Hackernews Clone`,
  feed: (obj, args, context, info) => getAllLinks(),
  link: (obj, args, context, info) => getLink(args.id),
};