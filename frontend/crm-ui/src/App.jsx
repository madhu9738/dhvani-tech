import React, { useState } from 'react';

function CRMApp() {
  const [mobile, setMobile] = useState('');
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCustomer = async () => {
    if (!mobile) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8001/customer?mobile=${mobile}`);
      const data = await res.json();
      setCustomer(data);
    } catch (err) {
      setCustomer({ error: 'Error fetching customer info' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">CRM: Customer Lookup</h1>

      <div className="flex mb-6">
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter mobile number..."
          className="border px-4 py-2 rounded-l w-72 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={fetchCustomer}
          className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}

      {customer && (
        <div className="bg-white p-6 rounded shadow max-w-xl">
          {customer.error ? (
            <p className="text-red-600">{customer.error}</p>
          ) : (
            <ul className="text-gray-800 space-y-2">
              <li><strong>Name:</strong> {customer.name}</li>
              <li><strong>Mobile:</strong> {customer.mobile}</li>
              <li><strong>Plan:</strong> {customer.plan}</li>
              <li><strong>Status:</strong> {customer.status}</li>
              <li><strong>Language:</strong> {customer.language}</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default CRMApp;
