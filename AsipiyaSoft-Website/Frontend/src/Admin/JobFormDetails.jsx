import { useState, useEffect } from "react";
import AdminNavbar from "./Admincomponent/AdminNavbar";
import axiosClient from "../API/axios";


function JobFormDetails() {
  const [applications, setApplications] = useState([]);
  


  useEffect(() => {
    
    const fetchApplications = async () => {
      try {
        const response = await axiosClient.get("/applications");
        console.log("API Response:", response.data); // Log API response
        setApplications(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Applications:", error.response || error.message);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

 

  return (
    <>
     
        <AdminNavbar/>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-semibold text-center text-gray-800">
          Applications List
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-separate border-gray-200 table-auto">
            <thead>
              <tr className="bg-gradient-to-r from-[#95759b] to-[#95759b] text-white text-sm uppercase font-semibold tracking-wide">
                <th className="px-6 py-3 text-left ">Name</th>
                <th className="px-6 py-3 text-left ">Email</th>
                <th className="px-6 py-3 text-left ">Position</th>
                <th className="px-6 py-3 text-left ">Contact Number</th>
                <th className="px-6 py-3 text-left ">LinkedIn</th>
                <th className="px-6 py-3 text-left ">NIC</th>
                <th className="px-6 py-3 text-left ">CV</th>
                <th className="px-6 py-3 text-left ">Applied At</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200">
                  <td className="px-6 py-3">{application.name}</td>
                  <td className="px-6 py-3">{application.email}</td>
                  <td className="px-6 py-3">{application.position}</td>
                  <td className="px-6 py-3">{application.contact_number}</td>
                  <td className="px-6 py-3">{application.linkedin}</td>
                  <td className="px-6 py-3">{application.nic}</td>
                  <td className="px-6 py-3">
                    {application.cv_path ? (
                      <a
                        href={`http://localhost:5000/${application.cv_path}`}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View CV
                      </a>
                    ) : (
                      "No CV"
                    )}
                  </td>
                  <td className="px-6 py-3">{new Date(application.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
}

export default JobFormDetails;
