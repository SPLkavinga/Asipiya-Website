import { useEffect, useState } from "react";
import AdminNavbar from "./Admincomponent/AdminNavbar";

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
   
    const fetchApplications = async () => {
      try {
        const response = await fetch("http://localhost:5000/applications");
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <>
    <AdminNavbar/>
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="mx-auto max-w-8xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Job Applications</h1>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full border border-collapse border-gray-200 table-auto">
            <thead>
              <tr className="bg-gradient-to-r from-[#95759b] to-[#95759b] text-white text-sm uppercase font-semibold tracking-wide">
                <th className="px-4 py-3 text-left border border-gray-300">ID</th>
                <th className="px-4 py-3 text-left border border-gray-300">Name</th>
                <th className="px-4 py-3 text-left border border-gray-300">Email</th>
                <th className="px-4 py-3 text-left border border-gray-300">Contact Number</th>
                <th className="px-4 py-3 text-left border border-gray-300">NIC Number</th>
                <th className="px-4 py-3 text-left border border-gray-300">LinkedIn Profile</th>
                <th className="px-4 py-3 text-left border border-gray-300">Position</th>
                <th className="px-4 py-3 text-left border border-gray-300">Message</th>
                <th className="px-4 py-3 text-left border border-gray-300">Resume</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((application) => (
                  <tr
                    key={application.id}
                    className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200"
                  >
                    <td className="px-4 py-2 border border-gray-300">{application.id}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.name}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.email}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.contactNumber}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.nicNumber}</td>
                    <td className="px-4 py-2 border border-gray-300">
                      <a
                        href={application.linkedinProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5C0091] hover:underline"
                      >
                        LinkedIn
                      </a>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">{application.position}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.message}</td>
                    <td className="px-4 py-2 border border-gray-300">
                      {application.filePath ? (
                        <a
                          href={`http://localhost:5000/${application.filePath}`}
                          className="inline-block px-3 py-1 text-sm text-white bg-[#7D00C5] rounded hover:bg-[#5C0091]"
                          download
                        >
                          Download
                        </a>
                      ) : (
                        <span className="text-gray-500">No File</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="py-4 font-medium text-center text-gray-600"
                  >
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default ApplicationsPage;
