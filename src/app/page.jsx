'use client';

import Navbar from "../../components/navBar";
import ContactForm from "../../components/ContactForm";
import CardCarousel from "../../components/card";
import Hero from "../../components/Hero"; // Import the Hero component

export default function Home() {
  return (
    <div className="bg-white h-auto "> {/* Added padding for overall spacing */}
      <div>
        <Navbar />
        <Hero />
      </div>
      <div className="min-h-screen h-[90vh] w-full bg-red-500 "> {/* Added margin-top */}
        <CardCarousel />
      </div>
      <div className=" py-16 bg-yellow-400 "> {/* Added margin-top, padding for spacing */}
        <ContactForm />
      </div>
    </div>
  );
}
