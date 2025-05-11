import ActiveClaims from '../components/CreateClaimWizard/ActiveClaims/ActiveClaims.jsx';
import Quotes from '../components/Quotes';
import ActivePolicies from '../components/ActivePolicies';

function UserDashboard() {
  return (
    <main className="p-6 space-y-6">
      <ActiveClaims />
      <Quotes />
      <ActivePolicies />
    </main>
  );
}

export default UserDashboard;
