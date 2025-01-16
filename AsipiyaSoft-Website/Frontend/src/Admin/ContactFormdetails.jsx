import { useEffect, useState } from "react";
import axios from "../API/axios";
import AdminNavbar from "./Admincomponent/AdminNavbar";

const ContactFormDetails = () => {
  const [contactDetails, setContactDetails] = useState([]);


  useEffect(() => {

    const fetchContactDetails = async () => {
      try {
        const response = await axios.get("/getemaildetails");
        setContactDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching contact details");
        setLoading(false);
      }
    };
  
    fetchContactDetails();
  }, []);
  
 
  return (
    <>
    <AdminNavbar/>
    <div className="container px-4 py-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Contact Form Submissions</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full border border-collapse border-gray-200 table-auto">
          <thead>
            <tr className="bg-gradient-to-r from-[#95759b] to-[#95759b] text-white text-sm uppercase font-semibold tracking-wide">
              <th className="px-4 py-3 text-left border border-gray-300">First Name</th>
              <th className="px-4 py-3 text-left border border-gray-300">Email</th>
              <th className="px-4 py-3 text-left border border-gray-300">Phone Number</th>
              <th className="px-4 py-3 text-left border border-gray-300">Message</th>
              <th className="px-4 py-3 text-left border border-gray-300">Interests</th>
            </tr>
          </thead>
          <tbody>
            {[...contactDetails].reverse().map((detail) => (
              <tr key={detail.id} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200">
                <td className="px-4 py-2 border border-gray-300">{detail.firstName} {detail.lastName}</td>
                <td className="px-4 py-2 border border-gray-300">{detail.email}</td>
                <td className="px-4 py-2 border border-gray-300">{detail.phoneNumber}</td>
                <td
                  className="px-4 py-2 break-words whitespace-normal border border-gray-300"
                  style={{
                    maxWidth: "300px",
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {detail.message}
                </td>
                <td
                  className="px-4 py-2 break-words whitespace-normal border border-gray-300"
                  style={{
                    maxWidth: "300px",
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {detail.interests}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default ContactFormDetails;
