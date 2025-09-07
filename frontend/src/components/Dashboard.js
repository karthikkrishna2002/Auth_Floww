import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout as apiLogout } from '../api';
import { useAuth } from '../AuthContext';

export default function Dashboard() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  async function onLogout() {
    try {
      await apiLogout();
    } catch {}
    setUser(null);
    navigate('/login', { replace: true });
  }

  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p className="muted">You are logged in as: <strong>{user?.email}</strong></p>
      <div className="spacer-md" />
      <button className="btn btn-primary" onClick={onLogout}>Logout</button>
    </div>
  );
}


