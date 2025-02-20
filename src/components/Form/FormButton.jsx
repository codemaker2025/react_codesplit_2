import React from 'react';

export default function FormButton() {
  return (
    <div className="flex justify-center mt-4">
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit
      </button>
    </div>
  );
}
