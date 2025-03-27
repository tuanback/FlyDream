import React from "react";
import {
  GraduationCap,
  Globe2,
  Award,
  Users,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SuccessStories from "./components/SuccessStories";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Countries from "./components/Countries";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <SuccessStories />
      <Services />
      <Countries />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
