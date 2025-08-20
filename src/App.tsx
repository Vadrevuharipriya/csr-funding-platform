import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ProjectsPage from './pages/ProjectsPage';
import ImpactStoriesPage from './pages/ImpactStoriesPage';
import ResourcesPage from './pages/ResourcesPage';
import SDGPage from './pages/SDGPage';
import SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/impact-stories" element={<ImpactStoriesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/sdg-goals" element={<SDGPage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;