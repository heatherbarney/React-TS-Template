import * as React from "react";

type AppProps = {
  message: string;
};

const App = function ({ message }: AppProps) {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

const myNewVar      = 'var'
console.log(myNewVar)

export default App;
