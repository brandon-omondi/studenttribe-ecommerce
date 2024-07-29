import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoSidebarLayout from './components/NoSidebarLayout';
import Ecommerce from './components/ecommerce/Ecommerce';
import Dashboard from './components/UserDashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/e-commerce"
          element={
            <NoSidebarLayout>
              <Ecommerce />
            </NoSidebarLayout>
          }
        />
        <Route
          path="/"
          element={
              <Dashboard />
          }
        />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
