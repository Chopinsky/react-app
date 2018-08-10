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

const getAllLinks = () => {
  return links;
}

const getLinkIndex = (id) => {
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

const getLink = (id) => {
  if (!links || !links.length) {
    return null;
  }

  let index = getLinkIndex(id);

  if (id >= 0 && id < links.length) {
    return links[index];
  }

  return null;
}

const addLink = (link) => {
  if (link) {
    return links.push(link) > 0;
  }

  return false;
}

const removeLink = (id) => {
  if (id === null || id === undefined || !links || !links.length) {
    return null;
  }

  let index = getLinkIndex(id);
  return removeLinkAt(index);
}

const removeLinkAt = (index) => {
  if (index >= links.length || index < 0)
    return null;

  return links.slice(index, 1);
}

const getNextID = () => {
  return idCount++;
}

module.exports = {
  generateUUID,
  getAllLinks,
  getLink,
  getLinkIndex,
  addLink,
  removeLink,
  removeLinkAt,
  getNextID
}