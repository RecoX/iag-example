import { useState } from 'react';

function Step2Disclaimer({ onBack, onNext }) {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="space-y-6 bg-white shadow p-6 rounded border border-blue-200">
      <h2 className="text-xl font-bold">Make a vehicle claim</h2>
      <p>
        Making an online claim will take no longer than <strong>10 minutes.</strong> What we'll need from you is:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>Details of what happened</li>
        <li>Details of any other people involved</li>
        <li>What has been damaged and/or lost</li>
        <li>If your vehicle is safe to drive or not</li>
      </ul>
      <p className="text-sm text-gray-600">
        <strong>Note:</strong> You'll have a chance to review all the information before you submit your claim.
      </p>

      <div className="bg-gray-50 p-4 border rounded">
        <h3 className="font-semibold mb-2">Important information</h3>
        <ul className="space-y-2 text-sm">
          <li>
            Some details of your claim will be held on the <a href="https://www.icnz.org.nz/industry-leadership/insurance-claims-register" target="_blank" className="text-blue-700 underline">Insurance Claims Register</a>.
          </li>
          <li>
            We may share information with others as part of your claim.
          </li>
          <li>
            Be honest — inaccurate info can lead to claim denial.
          </li>
          <li>
            By continuing, you agree to our <a href="https://www.state.co.nz/about/privacy-policy" target="_blank" className="text-blue-700 underline">Privacy Policy</a>.
          </li>
        </ul>

        <div className="mt-4">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="mt-1"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span>Yes, I understand and agree to the above and promise to answer all questions truthfully to the best of my knowledge.</span>
          </label>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 border rounded text-sm" onClick={onBack}>
          ← Back
        </button>
        <button
          className={`px-4 py-2 rounded text-white ${
            accepted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
          onClick={onNext}
          disabled={!accepted}
        >
          Start my claim
        </button>
      </div>
    </section>
  );
}

export default Step2Disclaimer;
