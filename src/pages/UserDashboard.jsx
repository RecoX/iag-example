import Claims from '../components/Claims';
import Quotes from '../components/Quotes';
import ActivePolicies from '../components/ActivePolicies';

function UserDashboard() {
  return (
    <main className="p-6 space-y-6">
      <Claims />
      <Quotes />
      <ActivePolicies />
    </main>
  );
}

export default UserDashboard;
