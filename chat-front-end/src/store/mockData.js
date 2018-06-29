export default {
  user: {
    name: "Joe Oliver",
    email: "joe.oliver@mail.com",
    profileURL: "fake-url",
    status: "Author, writer, typer, blah blah blah...",
    userId: "xyz",
  },
  messages: {
    "abc": [
      {
        isUserMsg: false,
        number: 0,
        text: "Hello there!",
      },
      {
        isUserMsg: true,
        number: 1,
        text: "Doing great, you?",
      },
      {
        isUserMsg: false,
        number: 2,
        text: "Can't complain, man, can't complain.",
      }
    ],
    "def": [
      {
        isUserMsg: false,
        number: 0,
        text: "Do you know Redux?",
      },
      {
        isUserMsg: true,
        number: 1,
        text: "A little bit...",
      },
    ],
  },
  typing: "",
  contacts: [
    {
      name: "John Craft",
      email: "j.craft@mail.com",
      profileURL: "another-fake",
      status: "Keeping pumping...",
      userId: "abc",
    },
    {
      name: "Jessica Lovely",
      email: "veryloverly@mail.com",
      profileURL: "yet-fake-again",
      status: "Learning push ups",
      userId: "def",
    },
  ],
  activeUserId: "def",
};