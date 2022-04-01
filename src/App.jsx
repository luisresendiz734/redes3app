import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/home/Home"
import Topology from "./components/topology/Topology"
import Users from "./components/users/Users"
import Logs from "./components/logs/Logs"
import Graphs from "./components/graphs/Graphs"
import Packages from "./components/packages/Packages"
import { useAuth } from "./context/AuthContext"

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}

const App = () => {
  const auth = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/topology"
        element={
          <ProtectedRoute user={auth.user}>
            <Topology />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute user={auth.user}>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="/logs"
        element={
          <ProtectedRoute user={auth.user}>
            <Logs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/graphs"
        element={
          <ProtectedRoute user={auth.user}>
            <Graphs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/packages"
        element={
          <ProtectedRoute user={auth.user}>
            <Packages />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
