import React from "react";
import { Provider } from "react-redux";
import BookList from "./components/TodoList";
import BookForm from "./components/todoForm";

import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          height: "400px",
          width: "400px",
          paddingTop: "20px",
          paddingLeft: "20px",
        }}
      >
        <BookList />
      </div>
    </Provider>
  );
};

export default App;