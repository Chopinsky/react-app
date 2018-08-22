import { getUser } from "../common";

const user = function (root, args, context, info) {
  return getUser(root.user.email);
}

module.exports = {
  user,
}