import { Link } from 'react-router-dom';

function CreateClaim() {
  return (
    <main className="p-6 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Make a Claim</h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded">
        <p className="font-semibold">Need to make a claim for a policy not listed?</p>
        <p className="mt-1">
          If you can’t see the policy you need to make a claim for, try
          {' '}
          <a href="https://example.com/missing-policy" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">
            here
          </a>
          {' '} first. If you’re still having trouble, go to your{' '}
          <a href="https://www.state.co.nz/app" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">
            State app
          </a>.
        </p>
      </div>

      <section className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Which asset would you like to make a claim for?</h2>

        <div className="border border-gray-300 p-3 rounded space-y-1">
          <p className="font-medium">Comprehensive Car Insurance</p>
          <p>2007 Mercedes-Benz Sprinter EDE679</p>
          <p className="text-sm text-gray-600">Policy number: <span className="font-mono">MOTS00579439</span></p>
        </div>
      </section>

      <div className="bg-gray-100 border-l-4 border-gray-400 text-gray-800 p-4 rounded">
        <p className="font-semibold">Can't find what you are looking for?</p>
        <p className="mt-1">
          Some policies and/or claims might not be visible here yet. If you can't find what you're looking for, try{' '}
          <a href="https://www.state.co.nz/help" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">
            here
          </a>, or call us on <strong>0800 80 24 24</strong> (8am–6pm Mon–Fri, 9am–6pm Sat–Sun & public holidays).
        </p>
      </div>

      <Link to="/" className="text-blue-600 underline">← Back to Dashboard</Link>
    </main>
  );
}

export default CreateClaim;
