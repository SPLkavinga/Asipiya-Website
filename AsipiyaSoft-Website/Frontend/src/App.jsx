import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages copy/Home";
import AboutUs from "./Pages copy/AboutUs";
import Contact from "./Pages copy/Contact";
import Microfinance from "./Pages copy/MicroFinance";
import Services from "./Pages copy/Services";
import Prawing from "./Pages copy/Prawing";
import Leasing from "./Pages copy/Leasing";
import ERP from "./Pages copy/ERP";
import BlogList from "./Pages copy/Blog/BlogList";
import BlogPage from "./Pages copy/Blog/BlogPage";
import InvoiceSystem from "./Pages copy/InvoiceSystem";
import AddCareers from "./Admin/AddCareers";
import Admin from "./Admin/Admin";
import CareerNew from "./Pages copy/CareerNew";
import CareerDetails from "./Pages copy/CareerDetails";
import ApplicationsPage from "./Admin/ApplicationsPage";
import ContactFormdetails from "./Admin/ContactFormdetails";
import DigitalMarketing from "./Pages copy/DigitalMarketing";
import Landingpage from "./Admin/Landingpage";
import JobFormDetails from './Admin/JobFormDetails';
import CareerForm from './Admin/CarrerForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Microfinance" element={<Microfinance />} />
        <Route path="/Prawing" element={<Prawing />} />
        <Route path="/Leasing" element={<Leasing />} />
        <Route path="/Invoice" element={<InvoiceSystem />} />
        <Route path="/ERP" element={<ERP />} />
        <Route path="/Blogs" element={<BlogList />} />
        <Route path="/Blog/:slug" element={<BlogPage />} />
        <Route path="/Landingpage" element={<Landingpage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AddCareers" element={<AddCareers />} />
        <Route path="/CareerNew" element={<CareerNew />} />
        <Route path="/JobFormDetails" element={<JobFormDetails />} />
        <Route path="/career/:title" element={<CareerDetails />} />
        <Route path="/ApplicationsPage" element={<ApplicationsPage />} />
        <Route path="/ContactFormdetails" element={<ContactFormdetails />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/CareerForm" element={<CareerForm />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
