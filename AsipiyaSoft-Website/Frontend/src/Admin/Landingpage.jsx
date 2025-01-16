import { Link } from "react-router-dom";
import AdminNavbar from "./Admincomponent/AdminNavbar";

function Landingpage() {
  return (
    <div>
      <AdminNavbar/>
      <div className="flex flex-col items-center justify-center bg-black w-[400px] h-[500px]">
        {/* First Button */}
        <Link className="block px-5 py-3 mb-4 text-white bg-purple-400 rounded hover:bg-purple-300" to="/AddCareers">
          ADD CAREERS
        </Link>
        {/* Second Button */}
        <Link className="block px-5 py-3 text-white bg-purple-400 rounded hover:bg-purple-300" to="/ShowCareer">
          SEE CAREERS
        </Link>
        <Link className="block px-5 py-3 text-white bg-purple-400 rounded hover:bg-purple-300" to="/ApplicationsPage">
          View Applications
        </Link>
        <Link className="block px-5 py-3 text-white bg-purple-400 rounded hover:bg-purple-300" to="/ContactFormdetails">
          View Form details
        </Link>
      </div>
    </div>
  );
}

export default Landingpage;
