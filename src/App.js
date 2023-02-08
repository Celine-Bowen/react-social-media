import "./App.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftbar/LeftBar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div className="theme-dark">
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
