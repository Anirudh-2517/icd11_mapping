import React, { useState } from "react";
import { Home, Database, Brain, GitMerge, BarChart3, Users, LogOut, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DataExplorer from "../components/researcher/DataExplorer";
import AITraining from "../components/researcher/AITraining";
import MappingProposals from "../components/researcher/MappingProposals";
import Analytics from "../components/researcher/Analytics";
import CollaborationHub from "../components/researcher/CollaborationHub";

const ResearcherDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "data-explorer", label: "Data Explorer", icon: Database },
    { id: "ai-training", label: "AI Training", icon: Brain },
    { id: "mapping-proposals", label: "Mapping Proposals", icon: GitMerge },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "collaboration-hub", label: "Collaboration Hub", icon: Users },
  ];

  const dashboardCards = [
    {
      id: "data-explorer",
      title: "Data Explorer",
      description: "Browse and analyze comprehensive disease datasets and medical terminologies",
      icon: Database,
      color: "from-emerald-500 to-emerald-600",
      stats: "Explore Data"
    },
    {
      id: "ai-training",
      title: "AI Training",
      description: "Train and optimize AI models for medical code classification and mapping",
      icon: Brain,
      color: "from-cyan-500 to-cyan-600",
      stats: "ML Models"
    },
    {
      id: "mapping-proposals",
      title: "Mapping Proposals",
      description: "Review and validate doctor-submitted mapping suggestions and proposals",
      icon: GitMerge,
      color: "from-teal-500 to-teal-600",
      stats: "Review Queue"
    },
    {
      id: "analytics",
      title: "Analytics",
      description: "Visualize trends, patterns, and insights from medical coding data",
      icon: BarChart3,
      color: "from-indigo-500 to-indigo-600",
      stats: "Insights"
    },
    {
      id: "collaboration-hub",
      title: "Collaboration Hub",
      description: "Connect with researchers and medical professionals for knowledge sharing",
      icon: Users,
      color: "from-violet-500 to-violet-600",
      stats: "Community"
    },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleCardClick = (cardId) => {
    setActiveTab(cardId);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Sidebar */}
      <aside className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                ResearchHub
              </h1>
              <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-slate-400">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-1">Researcher Portal</p>
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
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-700">
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
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                {navItems.find(item => item.id === activeTab)?.label || "Dashboard"}
              </h2>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-800">Dr. Sarah Chen</p>
                <p className="text-xs text-gray-500">Medical Researcher</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                SC
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {activeTab === "home" ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-xl p-8 text-white shadow-lg">
                <h2 className="text-3xl font-bold mb-2">Welcome, Researcher</h2>
                <p className="text-emerald-100">Advanced tools for medical data analysis and AI-driven insights</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dashboardCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-emerald-300"
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
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Research Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">Total Datasets</span>
                      <span className="text-2xl font-bold text-emerald-600">15,847</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">AI Models Trained</span>
                      <span className="text-2xl font-bold text-cyan-600">23</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">Mappings Validated</span>
                      <span className="text-2xl font-bold text-teal-600">1,892</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">New dataset uploaded</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">Model training completed</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">45 mappings reviewed</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              {activeTab === "data-explorer" && <DataExplorer />}
              {activeTab === "ai-training" && <AITraining />}
              {activeTab === "mapping-proposals" && <MappingProposals />}
              {activeTab === "analytics" && <Analytics />}
              {activeTab === "collaboration-hub" && <CollaborationHub />}
              {!["data-explorer", "ai-training", "mapping-proposals", "analytics", "collaboration-hub"].includes(activeTab) && (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 mb-4">
                    {React.createElement(navItems.find(item => item.id === activeTab)?.icon || Home, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {navItems.find(item => item.id === activeTab)?.label}
                  </h3>
                  <p className="text-gray-600">This feature is coming soon</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResearcherDashboard;