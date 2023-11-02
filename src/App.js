import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useAuthChange from "./hooks/useAuthChange";
import PublicRoute from "./components/ui/PublicRoute";
import PrivateRoute from "./components/ui/PrivateRoute";

function App() {
  const authChecked = useAuthChange();

  return !authChecked ? (
    <div>Checking authentication....</div>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route
          path="/inbox"
          element={
            <PrivateRoute>
              <Conversation />
            </PrivateRoute>
          }
        />
        <Route
          path="/inbox/:id"
          element={
            <PrivateRoute>
              <Inbox />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
