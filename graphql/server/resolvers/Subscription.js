import { post } from "./Mutation";

const newLinkSubscribe = function (parent, args, context, info) {
  return post(parent, args, context, info);
}

const newLink = {
  subscribe: newLinkSubscribe,
}

module.exports = {
  newLink,
}