import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Resume from './components/Resume';
import TemplateCard from './components/TemplateCard';
import TemplatePicker from './components/TemplatePicker';
import Stepper from './components/Stepper';
import Questions from './components/Questions';
import MyResume from './components/MyResume';
import JobProviderDashboard from './components/Dashboard-JProvider';
import Sidebar from './components/Sidebar';

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editresume" element={<Resume />} />
        <Route path="/templatereview" element={<TemplateCard />} />
        <Route path="/choosetemplate" element={<TemplatePicker />} />
        <Route path="/stepper" element={<Stepper />} />
        <Route path="/question" element={<Questions />} />
        <Route path="/myresume" element={<MyResume />} />
        <Route path="/job-provider-dashboard" element={<JobProviderDashboard />} />
      </Routes>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
