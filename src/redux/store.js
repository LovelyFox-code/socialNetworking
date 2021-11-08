import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  _state: {
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
      newPostText: "create new post",
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
          id: 2,
          message:
            "Component-Based Build encapsulated components that manage their own state, then compose them to make complex UIs.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
        },
        {
          id: 3,
          message:
            "Learn Once, Write Anywhere We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native. ",
        },
        { id: 4, message: "Hi" },
        { id: 5, message: "Hi" },
        { id: 6, message: "Hi" },
        { id: 7, message: "Hi" },
      ],
      newMessageBody: "start typing...",
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
  },
  _callSubscriber() {
    console.log("State is changed");
  },
  getState() {
    return this._state;
  },
  //post handlers
  addPost() {
    let newPost = {
      id: 8,
      message: this._state.profilePage.newPostText,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  //message handlers
  addMessage() {
    let newMessage = {
      id: 8,
      message: this._state.dialogPage.newTextMessage,
    };
    this._state.dialogPage.messagesData.push(newMessage);
    this._state.dialogPage.newTextMessage = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogPage.newTextMessage = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    // { type: 'ADD_POST'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
  //store - OOP
};

export default store;
window.store = store;
