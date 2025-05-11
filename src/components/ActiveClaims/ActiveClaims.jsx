import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../Wrappers/SectionWrapper';

function ActiveClaims() {
  const [claims, setClaims] = useState(() => {
    // Try to load from localStorage on init
    const saved = localStorage.getItem('activeClaims');
    return saved ? JSON.parse(saved) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Save claims to localStorage anytime they change
    localStorage.setItem('activeClaims', JSON.stringify(claims));
  }, [claims]);

  const handleCreateClaim = () => {
    navigate('/create-claim');
  };

  return (
    <SectionWrapper title="Active Claims">
      {claims.length === 0 ? (
        <p className="text-gray-500">No active claims found.</p>
      ) : (
        <div className="space-y-4">
          {claims.map((claim) => (
            <div
              key={claim.id}
              className="border border-gray-300 rounded p-4 bg-white shadow-sm"
            >
              <h3 className="text-md font-semibold">{claim.title}</h3>
              <p className="text-sm text-gray-600">{claim.type}</p>
              <p className="text-sm text-blue-600 font-medium">{claim.status}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          onClick={handleCreateClaim}
        >
          Make a Claim
        </button>
      </div>
    </SectionWrapper>
  );
}

export default ActiveClaims;
