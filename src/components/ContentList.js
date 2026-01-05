import React from 'react';

const ContentList = ({ contents, onEdit, onDelete }) => {
  if (contents.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <p className="text-gray-600 text-lg">No content found. Create your first content item!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {contents.map((content) => (
        <div
          key={content._id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{content.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  content.category === 'hero' ? 'bg-purple-100 text-purple-700' :
                  content.category === 'service' ? 'bg-blue-100 text-blue-700' :
                  content.category === 'feature' ? 'bg-green-100 text-green-700' :
                  content.category === 'testimonial' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {content.category}
                </span>
                {!content.isActive && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                    Inactive
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-3">{content.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                {content.image && (
                  <span>Image: <a href={content.image} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View</a></span>
                )}
                {content.link && (
                  <span>Link: <a href={content.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit</a></span>
                )}
                <span>Order: {content.order}</span>
              </div>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => onEdit(content)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(content._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentList;

