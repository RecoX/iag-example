import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';

function Claims() {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getClaims();
      setClaims(data);
      setLoading(false);
    })();
  }, []);

  const getClaims = async () => {
    return [
      {
        id: 1,
        title: '2007 Mercedes-Benz Sprinter 311 Cdi XYZ987',
        type: 'Motor insurance claim',
        status: 'Open claim',
      },
      {
        id: 2,
        title: '2008 Ford Transit 311 Cdi ABC123',
        type: 'Motor insurance claim',
        status: 'Open claim',
      },
    ];
  };

  return (
    <SectionWrapper title="Claims">
      {loading ? (
        <p className="text-gray-500">Loading claims...</p>
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
          onClick={() => navigate('/create-claim')}
        >
          Make a Claim
        </button>
      </div>
    </SectionWrapper>
  );
}

export default Claims;
