import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const LogoManager = () => {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingLogo, setEditingLogo] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    imageData: '',
    imageType: 'url',
    imageFormat: 'png',
    variant: 'light',
    isActive: true
  });

  useEffect(() => {
    fetchLogos();
  }, []);

  const fetchLogos = async () => {
    try {
      const response = await axios.get(`${API_URL}/logo/admin/all`);
      setLogos(response.data);
    } catch (error) {
      console.error('Error fetching logos:', error);
      alert('Failed to fetch logos');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        const ext = file.name.split('.').pop().toLowerCase();
        setFormData({
          ...formData,
          imageData: base64String,
          imageType: 'base64',
          imageFormat: ext
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingLogo) {
        await axios.put(`${API_URL}/logo/${editingLogo._id}`, formData);
      } else {
        await axios.post(`${API_URL}/logo`, formData);
      }
      fetchLogos();
      resetForm();
    } catch (error) {
      console.error('Error saving logo:', error);
      alert('Failed to save logo');
    }
  };

  const handleEdit = (logo) => {
    setEditingLogo(logo);
    setFormData({
      name: logo.name,
      title: logo.title,
      description: logo.description || '',
      imageData: logo.imageData,
      imageType: logo.imageType,
      imageFormat: logo.imageFormat,
      variant: logo.variant,
      isActive: logo.isActive
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this logo?')) {
      return;
    }
    try {
      await axios.delete(`${API_URL}/logo/${id}`);
      fetchLogos();
    } catch (error) {
      console.error('Error deleting logo:', error);
      alert('Failed to delete logo');
    }
  };

  const resetForm = () => {
    setEditingLogo(null);
    setFormData({
      name: '',
      title: '',
      description: '',
      imageData: '',
      imageType: 'url',
      imageFormat: 'png',
      variant: 'light',
      isActive: true
    });
  };

  const getImagePreview = (logo) => {
    return logo.imageType === 'base64' 
      ? `data:image/${logo.imageFormat};base64,${logo.imageData}`
      : logo.imageData;
  };

  if (loading) {
    return <div className="text-center py-8">Loading logos...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {editingLogo ? 'Edit Logo' : 'Add New Logo'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo Name *
            </label>
            <select
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={!!editingLogo}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select logo name</option>
              <option value="logo-light">Logo Light</option>
              <option value="logo-dark">Logo Dark</option>
              <option value="logo-main">Logo Main</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Variant *
            </label>
            <select
              name="variant"
              value={formData.variant}
              onChange={(e) => setFormData({ ...formData, variant: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Light (for light backgrounds)</option>
              <option value="dark">Dark (for dark backgrounds)</option>
              <option value="main">Main</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image *
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required={!editingLogo}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              Upload PNG, SVG, or JPG image. Will be converted to base64 and stored in database.
            </p>
          </div>

          {formData.imageData && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preview
              </label>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <img
                  src={formData.imageType === 'base64' 
                    ? `data:image/${formData.imageFormat};base64,${formData.imageData}`
                    : formData.imageData}
                  alt="Preview"
                  className="max-w-xs max-h-32 object-contain"
                />
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {editingLogo ? 'Update' : 'Create'} Logo
            </button>
            {editingLogo && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Existing Logos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {logos.map((logo) => (
            <div key={logo._id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{logo.title}</h3>
                  <p className="text-sm text-gray-600">{logo.name} - {logo.variant}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(logo)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(logo._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 rounded p-2 bg-gray-50">
                <img
                  src={getImagePreview(logo)}
                  alt={logo.title}
                  className="max-w-full max-h-24 object-contain mx-auto"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {logo.imageType === 'base64' ? 'Base64' : 'URL'} - {logo.imageFormat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoManager;

