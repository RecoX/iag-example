import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">IAG Insurance Portal</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Dashboard</Link>
            <Link to="/create-claim" className="hover:underline">Make a Claim</Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full py-6 px-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center text-sm text-gray-600 p-4 mt-8">
        &copy; {new Date().getFullYear()} IAG New Zealand. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
