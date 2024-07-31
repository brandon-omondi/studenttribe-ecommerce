import { Routes, Route, Navigate } from "react-router-dom";
import Ecommerce from "./components/ecommerce/Ecommerce";
import Dashboard from "./components/UserDashboard/Dashboard";
import Login from "./components/(auth)/Login";
import Signup from "./components/(auth)/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./providers/AuthContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Session } from "@supabase/supabase-js";

function App() {

  const [user] = useLocalStorage<Session | null>('user', null);

  return (
    <AuthProvider>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/e-commerce"
          element={
            <PrivateRoute>
              <Ecommerce />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
            path="*"
            element={user ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />}
          />
      </Routes>
    </AuthProvider>
  );
}

export default App;
