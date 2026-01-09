import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const OurWork = lazy(() => import('./pages/OurWork'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const LetsTalk = lazy(() => import('./pages/LetsTalk'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/lets-talk" element={<LetsTalk />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;

