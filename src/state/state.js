import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Hello" },
      { id: 3, message: "It's my first post" },
      { id: 4, message: "Hello" },
      { id: 5, message: "Hello" },
      { id: 6, message: "Hello" },
      { id: 7, message: "Hello" },
    ],
  },
  dialogPage: {
    dialogsData: [
      { id: 1, name: "Mia" },
      { id: 2, name: "Charlotte" },
      { id: 3, name: "Amelia" },
      { id: 4, name: "Oliver" },
      { id: 5, name: "James" },
      { id: 6, name: "Elijah" },
      { id: 7, name: "Emma" },
    ],
    messagesData: [
      {
        id: 1,
        message:
          "Declarative React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.",
      },
      {
        id: 1,
        message:
          "Component-Based Build encapsulated components that manage their own state, then compose them to make complex UIs.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
      },
      {
        id: 1,
        message:
          "Learn Once, Write Anywhere We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native. ",
      },
      { id: 1, message: "Hi" },
      { id: 1, message: "Hi" },
      { id: 1, message: "Hi" },
      { id: 1, message: "Hi" },
    ],
  },
  sidebar: {
    friends: [	
      { name: "Alex" },
      { name: "Harper" },
      { name: "Evelyn" },
      { name: "Celesta" },
      { name: "Oleg" },
      { name: "Yana" },
      { name: "Isabella" },
      { name: "Mia" },
      { name: "Mia" },
    ],
  },
};
export const addPost = (postMessage) => {
    let newPost = {
        id: 8,
        message: postMessage
    }
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
   
}

export default state;
