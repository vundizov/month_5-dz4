import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import {legacy_createStore as createStore} from "redux";

const user = {
    name: '',
    age: 0,
};

const inputReducer = (state = user, action) => {
    switch (action.type) {
        case "name":
            return {...state, name:action.payload};
        case "age":
            return {...state, age:action.payload}
        default:
            return state;
    }
};

const store = createStore(inputReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
