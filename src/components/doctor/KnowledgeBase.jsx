import React, { useState, useEffect } from 'react';
import { Search, Plus, BookOpen, Filter, Calendar, Tag, X, Edit, Trash2, FileText, Zap, TrendingUp } from 'lucide-react';

const KnowledgeBase = () => {
  const [entries, setEntries] = useState([
    {
      _id: '1',
      title: 'Understanding Vata Dosha',
      content: 'Vata dosha is one of the three fundamental energies in Ayurveda. It governs all movement in the body and mind, including circulation, breathing, and nerve impulses. When balanced, Vata promotes creativity and flexibility. Imbalances can lead to anxiety, irregular digestion, and dry skin.',
      category: 'tutorial',
      createdAt: '2024-10-29T10:30:00Z',
      views: 245
    },
    {
      _id: '2',
      title: 'ICD-11 Classification Guide',
      content: 'The International Classification of Diseases (ICD-11) is the global standard for diagnostic health information. This comprehensive guide covers the basics of navigating ICD codes, their hierarchical structure, and best practices for accurate disease classification in modern healthcare systems.',
      category: 'guide',
      createdAt: '2024-10-27T14:20:00Z',
      views: 187
    },
    {
      _id: '3',
      title: 'How to Map Ayurvedic Terms?',
      content: 'Follow these steps for accurate mapping: 1) Identify the Ayurvedic condition and its symptoms, 2) Research related modern medical terms, 3) Search the ICD database for corresponding codes, 4) Cross-verify with medical experts, 5) Document your reasoning, 6) Submit for peer review.',
      category: 'faq',
      createdAt: '2024-10-30T09:15:00Z',
      views: 312
    },
    {
      _id: '4',
      title: 'Pitta Dosha Characteristics',
      content: 'Pitta dosha represents transformation and metabolism in the body. It controls digestion, absorption, nutrition, and body temperature. People with dominant Pitta tend to have strong digestion, warm body temperature, and sharp intellect. Imbalances manifest as inflammation, anger, and digestive issues.',
      category: 'tutorial',
      createdAt: '2024-10-28T16:45:00Z',
      views: 198
    },
    {
      _id: '5',
      title: 'Kapha Dosha Overview',
      content: 'Kapha dosha provides structure, stability, and lubrication to the body. It governs growth, immunity, and the formation of body tissues. Balanced Kapha creates strength, stamina, and emotional stability. Excess Kapha leads to weight gain, lethargy, and congestion.',
      category: 'tutorial',
      createdAt: '2024-10-26T11:20:00Z',
      views: 167
    },
    {
      _id: '6',
      title: 'Introduction to Traditional Medicine Codes',
      content: 'Traditional Medicine (TM) codes are extensions of ICD-11 designed specifically for traditional medicine systems including Ayurveda, Traditional Chinese Medicine, and other indigenous practices. These codes enable standardized documentation and research in traditional medicine globally.',
      category: 'guide',
      createdAt: '2024-10-29T13:00:00Z',
      views: 223
    },
    {
      _id: '7',
      title: 'What is AYUSH Integration?',
      content: 'AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy) integration refers to incorporating traditional Indian medicine systems into modern healthcare frameworks. This involves standardizing terminology, creating mappings to ICD codes, and ensuring interoperability with electronic health records.',
      category: 'faq',
      createdAt: '2024-10-25T08:30:00Z',
      views: 289
    },
    {
      _id: '8',
      title: 'Tridosha Theory Explained',
      content: 'The Tridosha theory is the foundation of Ayurvedic medicine, describing three fundamental energies (Vata, Pitta, Kapha) that govern all biological, psychological, and physiopathological functions. Understanding your dominant dosha helps in personalized treatment and lifestyle recommendations.',
      category: 'general',
      createdAt: '2024-10-30T15:20:00Z',
      views: 156
    },
    {
      _id: '9',
      title: 'Common Ayurvedic Diagnostic Methods',
      content: 'Ayurvedic diagnosis involves eight-fold examination: pulse (Nadi), urine (Mutra), stool (Mala), tongue (Jihva), sound (Shabda), touch (Sparsha), eyes (Drik), and overall appearance (Akriti). Each method provides insights into dosha imbalances and disease progression.',
      category: 'tutorial',
      createdAt: '2024-10-24T10:00:00Z',
      views: 203
    },
    {
      _id: '10',
      title: 'ICD Code Structure and Hierarchy',
      content: 'ICD codes follow a hierarchical structure with chapters, blocks, and individual codes. Each code consists of alphanumeric characters representing disease categories, subcategories, and specific conditions. Understanding this structure is crucial for accurate medical coding and billing.',
      category: 'guide',
      createdAt: '2024-10-26T14:30:00Z',
      views: 178
    },
    {
      _id: '11',
      title: 'How to Submit a Mapping Suggestion?',
      content: 'To submit a mapping suggestion: Navigate to the Suggest Mapping page, fill in the Ayurvedic term, provide a detailed definition, search for corresponding ICD codes, select the appropriate AYUSH system, and submit. Your suggestion will be reviewed by medical experts within 48 hours.',
      category: 'faq',
      createdAt: '2024-10-28T09:45:00Z',
      views: 134
    },
    {
      _id: '12',
      title: 'Benefits of Standardized Medical Coding',
      content: 'Standardized medical coding enables accurate disease tracking, facilitates research, improves patient care coordination, ensures proper insurance reimbursement, and allows for meaningful data analysis across healthcare systems. It bridges traditional and modern medicine effectively.',
      category: 'general',
      createdAt: '2024-10-31T11:00:00Z',
      views: 92
    },
    {
      _id: '13',
      title: 'Prakriti Constitution Assessment',
      content: 'Prakriti is an individual\'s unique constitutional makeup determined at conception. It remains constant throughout life and influences physical characteristics, mental tendencies, and disease susceptibility. Assessing Prakriti helps in preventive healthcare and personalized treatment plans.',
      category: 'tutorial',
      createdAt: '2024-10-27T17:15:00Z',
      views: 211
    },
    {
      _id: '14',
      title: 'Unani Medicine Fundamentals',
      content: 'Unani medicine is based on the theory of four humors (blood, phlegm, yellow bile, black bile) and six essential factors (air, food, body movement, mental activity, sleep, and waste elimination). Balance among these elements is key to health in Unani system.',
      category: 'general',
      createdAt: '2024-10-30T12:30:00Z',
      views: 145
    },
    {
      _id: '15',
      title: 'How Long Does Review Take?',
      content: 'The review process typically takes 48-72 hours. Our expert panel of Ayurvedic practitioners and ICD coding specialists carefully evaluate each submission for accuracy, relevance, and proper terminology. You\'ll receive an email notification once your submission is processed.',
      category: 'faq',
      createdAt: '2024-10-29T08:00:00Z',
      views: 167
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    category: 'general'
  });

  const categories = [
    { value: 'all', label: 'All', icon: '📚', color: 'gray' },
    { value: 'general', label: 'General', icon: '📄', color: 'blue' },
    { value: 'tutorial', label: 'Tutorial', icon: '🎓', color: 'purple' },
    { value: 'guide', label: 'Guide', icon: '📖', color: 'emerald' },
    { value: 'faq', label: 'FAQ', icon: '❓', color: 'amber' },
  ];

  useEffect(() => {
    // Simulate API call
    // fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      // const response = await axios.get('http://localhost:5000/api/knowledge');
      // setEntries(response.data);
      setTimeout(() => setLoading(false), 500);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:5000/api/knowledge', newEntry);
      const newEntryData = {
        ...newEntry,
        _id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        views: 0
      };
      setEntries([newEntryData, ...entries]);
      setNewEntry({ title: '', content: '', category: 'general' });
      setShowAddForm(false);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    }
  };

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         entry.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      general: 'bg-blue-100 text-blue-700 border-blue-200',
      tutorial: 'bg-purple-100 text-purple-700 border-purple-200',
      guide: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      faq: 'bg-amber-100 text-amber-700 border-amber-200',
    };
    return colors[category] || colors.general;
  };

  // Calculate stats with demo data
  const stats = {
    total: entries.length,
    mostViewed: Math.max(...entries.map(e => e.views || 0)),
    recentlyAdded: entries.filter(e => {
      const created = new Date(e.createdAt);
      const weekAgo = new Date('2024-10-31T00:00:00Z'); // Current date reference
      weekAgo.setDate(weekAgo.getDate() - 7); // 7 days ago from Oct 31
      return created >= weekAgo;
    }).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  Knowledge Base
                </h2>
                <p className="text-gray-600 text-sm mt-1">Comprehensive medical mapping resources</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 font-semibold"
            >
              {showAddForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {showAddForm ? 'Cancel' : 'Add Entry'}
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                <p className="text-sm text-gray-600">Total Entries</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{stats.mostViewed}</p>
                <p className="text-sm text-gray-600">Most Views</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{stats.recentlyAdded}</p>
                <p className="text-sm text-gray-600">Added This Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Entry Form */}
        {showAddForm && (
          <div className="mb-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in slide-in-from-top duration-300">
            <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5 text-indigo-600" />
                Create New Entry
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newEntry.title}
                    onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="Enter a descriptive title..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                  <textarea
                    value={newEntry.content}
                    onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                    rows="6"
                    placeholder="Write detailed content..."
                    required
                  />
                  <p className="text-xs text-gray-500 mt-2">{newEntry.content.length} characters</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categories.slice(1).map((cat) => (
                      <label
                        key={cat.value}
                        className={`
                          p-4 border-2 rounded-xl cursor-pointer transition-all text-center
                          ${newEntry.category === cat.value
                            ? 'border-indigo-500 bg-indigo-50 shadow-md'
                            : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                          }
                        `}
                      >
                        <input
                          type="radio"
                          name="category"
                          value={cat.value}
                          checked={newEntry.category === cat.value}
                          onChange={(e) => setNewEntry({...newEntry, category: e.target.value})}
                          className="sr-only"
                        />
                        <div className="text-2xl mb-1">{cat.icon}</div>
                        <div className="text-sm font-semibold text-gray-800">{cat.label}</div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg font-semibold"
                  >
                    Publish Entry
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter Section */}
        <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <div className="relative">
                <Filter className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all appearance-none bg-white cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.icon} {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {searchTerm && (
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold">{filteredEntries.length}</span>
              {filteredEntries.length === 1 ? 'result' : 'results'} found for
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-lg font-medium">
                "{searchTerm}"
              </span>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 text-red-700 rounded-xl flex items-center gap-3">
            <X className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}

        {/* Entries List */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading knowledge base...</p>
          </div>
        ) : filteredEntries.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-300">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl font-semibold text-gray-600 mb-2">No entries found</p>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid gap-5">
            {filteredEntries.map((entry, index) => (
              <div 
                key={entry._id || index} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-xl text-gray-800 group-hover:text-indigo-600 transition-colors">
                          {entry.title}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryColor(entry.category)}`}>
                          {entry.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap">
                    {entry.content}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {entry.createdAt && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(entry.createdAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                      )}
                      {entry.views !== undefined && (
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {entry.views} views
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-indigo-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeBase;