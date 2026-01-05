import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import ContentForm from '../components/ContentForm';
import ContentList from '../components/ContentList';
import LogoManager from '../components/LogoManager';
import ContactManager from '../components/ContactManager';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const AdminPanel = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('content'); // 'content', 'logos', or 'contacts'
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingContent, setEditingContent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchContents();
  }, [filter]);

  const fetchContents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/admin/content`);
      setContents(response.data);
    } catch (error) {
      console.error('Error fetching contents:', error);
      alert('Failed to fetch contents');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (contentData) => {
    try {
      await axios.post(`${API_URL}/admin/content`, contentData);
      fetchContents();
      setShowForm(false);
      setEditingContent(null);
    } catch (error) {
      console.error('Error creating content:', error);
      alert('Failed to create content');
    }
  };

  const handleUpdate = async (id, contentData) => {
    try {
      await axios.put(`${API_URL}/admin/content/${id}`, contentData);
      fetchContents();
      setShowForm(false);
      setEditingContent(null);
    } catch (error) {
      console.error('Error updating content:', error);
      alert('Failed to update content');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this content?')) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/admin/content/${id}`);
      fetchContents();
    } catch (error) {
      console.error('Error deleting content:', error);
      alert('Failed to delete content');
    }
  };

  const handleEdit = (content) => {
    setEditingContent(content);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingContent(null);
  };

  const filteredContents = filter === 'all' 
    ? contents 
    : contents.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-600">Welcome, {user?.username}</p>
            </div>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('content')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'content'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Content Management
            </button>
            <button
              onClick={() => setActiveTab('logos')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'logos'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Logo Management
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'contacts'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Contact Submissions
            </button>
          </nav>
        </div>

        {/* Logo Management Tab */}
        {activeTab === 'logos' && (
          <LogoManager />
        )}

        {/* Contact Management Tab */}
        {activeTab === 'contacts' && (
          <ContactManager />
        )}

        {/* Content Management Tab */}
        {activeTab === 'content' && (
          <>
        {/* Controls */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('hero')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'hero' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Hero
            </button>
            <button
              onClick={() => setFilter('service')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'service' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setFilter('feature')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'feature' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setFilter('testimonial')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'testimonial' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => setFilter('blog')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'blog' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setFilter('work')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'work' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setFilter('about')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'about' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              About
            </button>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add New Content
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="mb-8">
            <ContentForm
              content={editingContent}
              onSubmit={editingContent ? (data) => handleUpdate(editingContent._id, data) : handleCreate}
              onCancel={handleCancel}
            />
          </div>
        )}

        {/* Content List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-blue-600 text-xl">Loading...</div>
          </div>
        ) : (
          <ContentList
            contents={filteredContents}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

