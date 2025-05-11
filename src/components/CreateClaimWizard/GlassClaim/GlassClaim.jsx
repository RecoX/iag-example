import { useState } from 'react';

function GlassClaim({ onBack }) {
  const [selectedRepairer, setSelectedRepairer] = useState('');

  const handleSubmit = () => {
    if (selectedRepairer === 'Smith and Smith') {
      window.open('https://www.smithandsmith.co.nz/access/details?ref=123456', '_blank');
    } else if (selectedRepairer === 'Novus Glass') {
      window.open('https://www.novusbooking.co.nz/default.aspx?insurer=state%20insurance', '_blank');
    } else {
      alert('Please select a repairer.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-6">Windscreen and Glass Damage</h1>

      <h2 className="text-lg font-semibold mt-6">Your Excess</h2>
      <p className="text-sm text-gray-700 mb-4">
        In this instance, your excess doesn't apply. You don't need to pay the repairer anything upon completion of the job.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-6">
        <p className="text-sm">
          An excess is the amount you pay towards your claim. If you'd like to verify your excess, please refer to your policy documents.
        </p>
      </div>

      <h2 className="text-lg font-semibold mt-6">Choose a repairer</h2>
      <p className="text-sm text-gray-700 mb-4">
        Once you've chosen your repairer, your claim will be transferred to their website to book your repair or replacement.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className={`border rounded p-4 text-center cursor-pointer ${selectedRepairer === 'Smith and Smith' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
          <input
            type="radio"
            name="repairer"
            value="Smith and Smith"
            checked={selectedRepairer === 'Smith and Smith'}
            onChange={() => setSelectedRepairer('Smith and Smith')}
            className="hidden"
          />
          <img src="https://insurance.state.co.nz/domain/claim/mfe/motor-lodge-mfe/145c78e48bb3d74e7a4e.png" alt="Smith and Smith" className="mx-auto h-16" />
          <p className="mt-2 font-medium">Smith and Smith</p>
        </label>

        <label className={`border rounded p-4 text-center cursor-pointer ${selectedRepairer === 'Novus Glass' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
          <input
            type="radio"
            name="repairer"
            value="Novus Glass"
            checked={selectedRepairer === 'Novus Glass'}
            onChange={() => setSelectedRepairer('Novus Glass')}
            className="hidden"
          />
          <img src="https://insurance.state.co.nz/domain/claim/mfe/motor-lodge-mfe/e2525e9544dbd11e6be1.png" alt="Novus Glass" className="mx-auto h-16" />
          <p className="mt-2 font-medium">Novus Glass</p>
        </label>
      </div>

      <h2 className="text-lg font-semibold mt-8">Don't want to book with these repairers?</h2>
      <p className="text-sm text-gray-700">
        If you'd like to use a different repairer, give us a call on <a href="tel:0800802424" className="text-blue-600 font-medium">0800 80 24 24</a> to progress your claim.
      </p>

      <div className="flex justify-between mt-10">
        <button
          onClick={onBack}
          className="border px-4 py-2 rounded text-sm text-gray-700"
        >
          ← Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
          disabled={!selectedRepairer}
        >
          Book Repair
        </button>
      </div>
    </div>
  );
}

export default GlassClaim;
