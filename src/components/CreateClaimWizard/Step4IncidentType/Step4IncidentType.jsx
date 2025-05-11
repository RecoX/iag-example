import { useState } from 'react';

const options = [
  { id: 'glass', label: 'Glass damage only', icon: '🪟' },
  { id: 'accident', label: 'An accident', icon: '🚗' },
  { id: 'theft', label: 'Theft or attempted theft', icon: '🕵️‍♂️' },
  { id: 'weather', label: 'Weather or natural event', icon: '🌧️' },
  { id: 'fire', label: 'Fire', icon: '🔥' },
  { id: 'other', label: 'Something else', icon: '❓' },
];

const descriptions = {
  glass: 'Choose this if the only damage to your vehicle is to the glass (like a back window, side window or windscreen).',
  accident: 'Choose this if your vehicle was damaged in an accident (like a collision with another vehicle or you backed into a fence).',
  theft: 'Choose this if your vehicle was stolen, parts of it were stolen, or your things were stolen from it. You should also choose this if your vehicle was damaged while someone tried to steal or break into it.',
  weather: 'Choose this if your vehicle was damaged in severe weather (like a storm or flood), hit by a falling object (like a tree branch) or if it was damaged in a natural event (like an earthquake).',
  fire: 'Choose this if your vehicle was damaged by a fire, including engine fire.',
  other: 'Choose this for keys or lock related incidents or if your vehicle was damaged by something we haven’t listed (like if the wrong fuel was used, or someone vandalised your vehicle).',
};

function Step4IncidentType({ selected, onSelect, onBack, onNext }) {
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    if (!selected) {
      setError('Please select an incident type.');
    } else {
      setError('');
      onNext();
    }
  };

  return (
    <section className="p-6 bg-white shadow rounded space-y-6 relative">
      <h2 className="text-xl font-bold">Which best describes your incident?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            className={`flex items-center p-4 border rounded text-left transition ${
              selected === option.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-300'
            } hover:border-blue-500`}
            onClick={() => onSelect(option.id)}
          >
            <span className="text-3xl mr-4">{option.icon}</span>
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-sm text-blue-600 underline mt-2 flex items-center space-x-1"
        >
          <span>ℹ️</span>
          <span>Not sure what to choose?</span>
        </button>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 border rounded text-sm" onClick={onBack}>
          ← Back
        </button>
        <button
          className={`px-6 py-2 rounded text-white font-semibold ${
            selected ? 'bg-gray-900' : 'bg-gray-400 cursor-not-allowed'
          }`}
          onClick={handleNext}
          disabled={!selected}
        >
          Next
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full p-6 rounded shadow-lg relative">
            <h3 className="text-lg font-bold mb-4">Help choosing an incident type</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              {options.map((option) => (
                <li key={option.id}>
                  <strong>{option.label}</strong>
                  <p className="mt-1">{descriptions[option.id]}</p>
                </li>
              ))}
            </ul>
            <button
              className="absolute top-2 right-4 text-gray-500 text-xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Step4IncidentType;
