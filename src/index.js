import React , {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import './Componets/i18next';

console.log(store);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <Suspense fallback={(<div>Loading</div>)}>
      <App />
      </Suspense>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
