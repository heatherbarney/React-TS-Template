import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const message = "This is my React app! Look at me using types!!";

ReactDOM.render(<App message={message} />, document.getElementById("root"));
