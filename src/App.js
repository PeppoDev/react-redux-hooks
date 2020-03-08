import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CourseList from "./components/CouseList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CourseList />
      </Provider>
    </div>
  );
}

export default App;
