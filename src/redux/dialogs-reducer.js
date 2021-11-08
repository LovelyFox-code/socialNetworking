const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({ id: 9, message: body });
      return state;
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
