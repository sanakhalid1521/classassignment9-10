
import React from 'react';

function Cards() {
  return (
    <div className="flex justify-around p-6">
      <div className="flex items-center gap-4">
        {/* Card 1 */}
        <div className="w-96 h-80 bg-blue-500 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Card One</h2>
        </div>

        {/* Card 2 */}
        <div className="w-96 h-80 bg-green-500 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Card Two</h2>
        </div>

        {/* Card 3 */}
        <div className="w-96 h-80 bg-red-500 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Card Three</h2>
        </div>
      </div>
    </div>
  );
}

export default Cards;
