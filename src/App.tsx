import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import {createContext, useState} from "react";
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
]);

export const UserContext =
  createContext<{user?: string, setUser?: (val: string) => void}>({user: '', setUser: () => {}})

function App() {
  const [user, setUser] = useState('');
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  )
}

export default App
