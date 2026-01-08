import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ShieldCheck, Loader2 } from 'lucide-react';

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password) {
      setError('Please enter username and password.');
      return;
    }

    if (!userType) {
      setError('Please select a user role.');
      return;
    }

    setLoading(true);
    try {
      const payload = { username: username.trim(), password, userType };

      if (onLogin) await onLogin(payload);
      else {
        localStorage.setItem(
          'medi_ai_user',
          JSON.stringify({ username: payload.username, role: userType })
        );
      }

      if (userType === 'admin') navigate('/admin-dashboard');
      else if (userType === 'doctor') navigate('/doctor-dashboard');
      else if (userType === 'researcher') navigate('/researcher-dashboard');
      else navigate('/');
    } catch (err) {
      setError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 overflow-hidden px-4" > 
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="/images/back.png"
      >
        <source src="/images/back1.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-sm bg-slate-800 border border-slate-700 rounded-lg shadow-2xl p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-cyan-400 tracking-wide">
            MedConnect Aura
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Intelligent Healthcare Access Portal
          </p>
        </div>

        {error && (
          <div className="mb-4 text-sm text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="relative">
            <ShieldCheck
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select Role</option>
              <option value="doctor">Doctor</option>
              <option value="researcher">Researcher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          © {new Date().getFullYear()} MedConnect Aura. All rights reserved.
        </p>
      </div>
    </div>
  );
}