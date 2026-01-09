import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mb-4"></div>
        <p className="text-blue-600 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

