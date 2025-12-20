

import { BrowserRouter, Routes, Route } from "react-router-dom";

// -------------------- USER COMPONENTS --------------------
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import BusinessStrategySection from "./components/Bussinessstrategies";
import WhyEntrepreneurFail from "./components/Entrepreneurship";
import BusinessCarePossible from "./components/Bussinesscarepossible";
import BrandGrowthSection from "./components/Brandgrowth";
import Footer from "./components/Footer";
import MediaStrategySection from "./components/Mediastrategies";
import Gallery from "./components/Gallery";
import MediaPlatformSection from "./components/Mediaplateform";
import LowInvestment from "./components/Lowinvestment";

// -------------------- USER FORM PAGES --------------------
import FormPortal from "./pages/FormPortal";
import FormOptionsPage from "./pages/FormOptionsPage";
import UploadForm from "./pages/UploadForm";
import BusinessRegistrationForm from "./components/BusinessRegistrationForm";
import ContactUs from "./pages/ContactUs";
import Award from "./pages/Award";
import Services from "./pages/Services";
import Videos from "./pages/Videos";
import GalleryPage from "./pages/Gallery";
import OurFounder from "./pages/OurFounders";
import MissionVision from "./pages/MissionVision";
import WhyUs from "./pages/WhyUs";
// -------------------- ADMIN PAGES --------------------
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminUpload from "./admin/AdminUpload"; // optional: for admin file upload
import AdminNavbar from "./admin/AdminNavbar"; // if you want navbar for admin pages

// -------------------- HOME PAGE WRAPPER --------------------
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BusinessStrategySection />
      <WhyEntrepreneurFail />
      <BusinessCarePossible />
      <BrandGrowthSection />
      <MediaStrategySection />
      <Gallery />
      <MediaPlatformSection />
      <LowInvestment />
      <Footer />
    </>
  );
}

// -------------------- MAIN APP --------------------
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* -------------------- USER ROUTES -------------------- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/registration-form" element={<BusinessRegistrationForm />} />
        <Route path="/form-portal" element={<FormPortal />} />
        <Route path="/form-options" element={<FormOptionsPage />} />
        <Route path="/upload-form" element={<UploadForm />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/award" element={<Award />} />
        <Route path="/services" element={<Services />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about/founders" element={<OurFounder />} />
        <Route path="/about/mission-vision" element={<MissionVision />} />
        <Route path="/about/why-us" element={<WhyUs />} />
        

        


        {/* -------------------- ADMIN ROUTES -------------------- */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/upload" element={<AdminUpload />} /> {/* optional */}
        <Route path="/admin/navbar" element={<AdminNavbar />} /> {/* optional */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
