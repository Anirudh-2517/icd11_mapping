import React, { useState, useContext } from "react";
import { Home, Users, Database, Cpu, FileText, Settings, FileSearch, LogOut, Menu, X, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AIMLControl from "../components/admin/AIMLControl";
import DataManagement from "../components/admin/DataManagement";
import Logs from "../components/admin/Logs";
import Reports from "../components/admin/Reports";
import SystemSettings from "../components/admin/SystemSettings";
import UsersManagement from "../components/admin/Users";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "users", label: "Users", icon: Users },
    { id: "data-management", label: "Data Management", icon: Database },
    { id: "ai-ml-control", label: "AI/ML Control", icon: Cpu },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "system-settings", label: "System Settings", icon: Settings },
    { id: "logs", label: "Logs", icon: FileSearch },
  ];

  const dashboardCards = [
    {
      id: "users",
      title: "Users",
      description: "Manage user accounts, roles, permissions, and access controls",
      icon: Users,
      color: "from-rose-500 to-rose-600",
      stats: "Manage Access"
    },
    {
      id: "data-management",
      title: "Data Management",
      description: "Control disease datasets, mappings, and medical terminology databases",
      icon: Database,
      color: "from-amber-500 to-amber-600",
      stats: "Data Control"
    },
    {
      id: "ai-ml-control",
      title: "AI/ML Control",
      description: "Monitor and manage AI models, training pipelines, and performance metrics",
      icon: Cpu,
      color: "from-fuchsia-500 to-fuchsia-600",
      stats: "ML Ops"
    },
    {
      id: "reports",
      title: "Reports",
      description: "Generate comprehensive system reports and analytics dashboards",
      icon: FileText,
      color: "from-sky-500 to-sky-600",
      stats: "Insights"
    },
    {
      id: "system-settings",
      title: "System Settings",
      description: "Configure system parameters, integrations, and global preferences",
      icon: Settings,
      color: "from-violet-500 to-violet-600",
      stats: "Configure"
    },
    {
      id: "logs",
      title: "Logs",
      description: "View system logs, audit trails, and activity monitoring",
      icon: FileSearch,
      color: "from-orange-500 to-orange-600",
      stats: "Audit Trail"
    },
  ];

  const navigate = useNavigate();
  const { auth, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleCardClick = (cardId) => {
    setActiveTab(cardId);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Sidebar */}
      <aside className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 shadow-2xl transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-rose-400" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
                  AdminHub
                </h1>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-gray-400">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1">Administrator Portal</p>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/30"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                {navItems.find(item => item.id === activeTab)?.label || "Dashboard"}
              </h2>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-800">{auth?.username || "Admin User"}</p>
                <p className="text-xs text-gray-500">{auth?.userType || "System Administrator"}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white font-bold shadow-lg">
                <Shield className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {activeTab === "home" ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 rounded-xl p-8 text-white shadow-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="w-8 h-8" />
                  <h2 className="text-3xl font-bold">Admin Control Center</h2>
                </div>
                <p className="text-rose-100">Complete system oversight and management capabilities</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dashboardCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-rose-300"
                    >
                      <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${card.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {card.stats}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-rose-600" />
                    User Statistics
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-rose-50 rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">Total Users</span>
                      <span className="text-2xl font-bold text-rose-600">342</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">Active Today</span>
                      <span className="text-2xl font-bold text-amber-600">128</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">New This Week</span>
                      <span className="text-2xl font-bold text-orange-600">15</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-amber-600" />
                    System Health
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">Server Status</span>
                      <span className="text-sm font-bold text-green-600">Online</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">Database</span>
                      <span className="text-sm font-bold text-blue-600">Healthy</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">API Response</span>
                      <span className="text-sm font-bold text-purple-600">45ms</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <FileSearch className="w-5 h-5 mr-2 text-orange-600" />
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">User created</p>
                        <p className="text-xs text-gray-500">5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">Data imported</p>
                        <p className="text-xs text-gray-500">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-fuchsia-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">Model deployed</p>
                        <p className="text-xs text-gray-500">3 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button className="p-4 bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-lg hover:shadow-lg transition-shadow font-medium text-sm">
                    Add User
                  </button>
                  <button className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition-shadow font-medium text-sm">
                    Backup Data
                  </button>
                  <button className="p-4 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white rounded-lg hover:shadow-lg transition-shadow font-medium text-sm">
                    Deploy Model
                  </button>
                  <button className="p-4 bg-gradient-to-br from-sky-500 to-sky-600 text-white rounded-lg hover:shadow-lg transition-shadow font-medium text-sm">
                    View Reports
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              {activeTab === "users" && <UsersManagement />}
              {activeTab === "data-management" && <DataManagement />}
              {activeTab === "ai-ml-control" && <AIMLControl />}
              {activeTab === "reports" && <Reports />}
              {activeTab === "system-settings" && <SystemSettings />}
              {activeTab === "logs" && <Logs />}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;