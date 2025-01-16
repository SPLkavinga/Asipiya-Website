// Frontend: React.js with Tailwind CSS
import { useState, useEffect } from 'react';
import axiosClient from '../API/axios';
import AdminNavbar from './Admincomponent/AdminNavbar';

const CareerForm = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });

  const fetchCareers = async () => {
    try {
      const response = await axiosClient.get('/careerdetails'); 
      console.log("API Response:", response.data); 
      setCareers(response.data); 
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching Applications:", error.response || error.message);
      setLoading(false);
    }
  };
  

  const deleteCareer = async (id) => {
    try {
      await axiosClient.delete(`/careerdetails/${id}`);
      fetchCareers();
      showNotification('Data deleted successfully!', 'success');
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const openUpdateModal = (career) => {
    setSelectedCareer(career);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      await axiosClient.put(`/careerdetails/${selectedCareer.id}`, selectedCareer);
      setShowModal(false);
      fetchCareers();
      showNotification('Data updated successfully!', 'success');
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(() => setNotification({ message: '', type: '', visible: false }), 3000);
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  if (loading) {
    return <div className="mt-10 text-center">Loading...</div>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto mt-10">
        <h1 className="mb-5 text-3xl font-bold text-center">Careers Details</h1>
        <table className="min-w-full border border-separate table-auto">
          <thead>
            <tr className="bg-gradient-to-r from-[#95759b] to-[#95759b] text-white text-sm uppercase font-semibold tracking-wide">
              <th className="px-4 py-2 border border-gray-200">Title</th>
              <th className="px-4 py-2 border border-gray-200">Job Type</th>
              <th className="px-4 py-2 border border-gray-200">Description</th>
              <th className="px-4 py-2 border border-gray-200">Bullet Points</th>
              <th className="px-4 py-2 border border-gray-200">Short Description</th>
              <th className="px-4 py-2 border border-gray-200">Short Title</th>
              <th className="px-4 py-2 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {careers.map((career) => (
              <tr key={career.id}>
                <td className="px-4 py-2 border border-gray-200">{career.title}</td>
                <td className="px-4 py-2 border border-gray-200">{career.job_type}</td>
                <td className="px-4 py-2 border border-gray-200">{career.description}</td>
                <td className="px-4 py-2 border border-gray-200">{career.bullet_points}</td>
                <td className="px-4 py-2 border border-gray-200">{career.shortdis}</td>
                <td className="px-4 py-2 border border-gray-200">{career.shortTitle}</td>
                <td className="px-4 py-2 border border-gray-200">
                  <button
                    onClick={() => openUpdateModal(career)}
                    className="px-2 py-1 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteCareer(career.id)}
                    className="px-2 py-1 mt-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/2 p-5 bg-white rounded-md">
            <h2 className="mb-4 text-xl font-bold">Update Career</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Title</label>
                <input
                  type="text"
                  value={selectedCareer.title}
                  onChange={(e) => setSelectedCareer({ ...selectedCareer, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Job Type</label>
                <select
                  value={selectedCareer.job_type}
                  onChange={(e) => setSelectedCareer({ ...selectedCareer, job_type: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Description</label>
                <textarea
                  value={selectedCareer.description}
                  onChange={(e) => setSelectedCareer({ ...selectedCareer, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Bullet Points</label>
                <textarea
                  value={selectedCareer.bullet_points}
                  onChange={(e) => setSelectedCareer({ ...selectedCareer, bullet_points: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Short Description</label>
                <input
                  type="text"
                  value={selectedCareer.shortdis}
                  onChange={(e) => setSelectedCareer({ ...selectedCareer, shortdis: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Short Title</label>
                <input
                  type="text"
                  value={selectedCareer.shortTitle}
                  onChange={(e) => setSelectedCareer({ ...selectedCareer, shortTitle: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 mr-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {notification.visible && (
        <div className={`fixed inset-0 flex items-center justify-center `}>  
          <div className={`px-32 py-20 text-center bg-purple-500 border text-white rounded-md shadow-lg text-${notification.type}`}>  
          {notification.message}</div> 
          )
        </div>
      )}
    </>
  );
};

export default CareerForm;
