import React, { useState } from "react";
import { Home, Search, GitBranch, MessageSquare, BookOpen, LogOut, Menu, X } from "lucide-react";
import ICDLookup from "../components/doctor/ICDLookup";
import SuggestMapping from "../components/doctor/SuggestMapping";
import FeedbackStatus from "../components/doctor/FeedbackStatus";
import KnowledgeBase from "../components/doctor/KnowledgeBase";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "icd-lookup", label: "ICD Lookup", icon: Search },
    { id: "suggest-mapping", label: "Suggest Mapping", icon: GitBranch },
    { id: "feedback-status", label: "Feedback Status", icon: MessageSquare },
    { id: "knowledge-base", label: "Knowledge Base", icon: BookOpen },
  ];
  const dashboardCards = [
    {
      id: "icd-lookup",
      title: "ICD Lookup",
      description: "Search and explore ICD codes, Namaste codes, and disease classifications",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      stats: "Quick Access"
    },
    {
      id: "suggest-mapping",
      title: "Suggest Mapping",
      description: "Propose new mappings between traditional and biomedical codes",
      icon: GitBranch,
      color: "from-purple-500 to-purple-600",
      stats: "Contribute"
    },
    {
      id: "feedback-status",
      title: "Feedback Status",
      description: "Track your submitted suggestions and view feedback from reviewers",
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
      stats: "Monitor"
    },
    {
      id: "knowledge-base",
      title: "Knowledge Base",
      description: "Access comprehensive medical resources and documentation",
      icon: BookOpen,
      color: "from-orange-500 to-orange-600",
      stats: "Learn"
    }
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };
  const handleCardClick = (cardId) => {
    setActiveTab(cardId);
  };
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MediCode
              </h1>
              <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Doctor Portal</p>
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
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
      {isMobileMenuOpen && (
        <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
      )}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-gray-800">
                {navItems.find(item => item.id === activeTab)?.label || "Dashboard"}
              </h2>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-800">Dr. John Smith</p>
                <p className="text-xs text-gray-500">General Practitioner</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                JS
              </div>
            </div>
          </div>
        </header>
        <div className="p-6">
          {activeTab === "home" ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Welcome, Doctor</h2>
                <p className="text-blue-100">Manage medical codes and mappings efficiently</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dashboardCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${card.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {card.stats}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
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
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Stats</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">1,247</div>
                    <div className="text-sm text-gray-600 mt-1">Total Searches</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">32</div>
                    <div className="text-sm text-gray-600 mt-1">Mappings Suggested</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">28</div>
                    <div className="text-sm text-gray-600 mt-1">Approved</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activeTab === "icd-lookup" && (
                <ICDLookup />
              )}
              {activeTab === "suggest-mapping" && (
                <SuggestMapping />
              )}
              {activeTab === "feedback-status" && (
                <FeedbackStatus />
              )}
              {activeTab === "knowledge-base" && (
                <KnowledgeBase />
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;