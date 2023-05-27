import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {ListProfile} from "./pages/ListProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "/create",
  //   element: <AddForm />
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/list-profile",
    element: <ListProfile />,
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App
