import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Tailwind Demo App!</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          onClick={() => alert('Button pressed!')}
        >
          Press Me
        </button>
      </div>
    </div>
  );
}

export default App;
