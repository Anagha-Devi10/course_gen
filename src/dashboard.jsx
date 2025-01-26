import React from 'react';
import './style.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">MyApp</h1>
        <ul className="menu">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout" className="logout">Logout</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar">
          <h2>Dashboard</h2>
          <span>Welcome, User</span>
        </nav>

        {/* Widgets */}
        <div className="widgets">
          <div className="widget">
            <h3>Total Courses</h3>
            <p>12</p>
          </div>
          <div className="widget">
            <h3>Active Users</h3>
            <p>45</p>
          </div>
          <div className="widget">
            <h3>Revenue</h3>
            <p>$1,200</p>
          </div>
          <div className="widget">
            <h3>New Signups</h3>
            <p>20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
