import React from "react";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-gray-100 shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="M2 PMVIC Logo" className="h-10" />
          <span className="font-bold text-lg text-red-600">M2 PMVIC Taguig</span>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-red-600">Home</a>
          <a href="#about" className="hover:text-red-600">About Us</a>
          <a href="#services" className="hover:text-red-600">Services</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
          <a href="https://your-booking-link.com" target="_blank" rel="noreferrer" className="bg-red-600 text-white px-4 py-2 rounded-lg">Book Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gray-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">Clean Air. Safe Mobility.</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Your One-Stop Private Motor Vehicle Inspection Center in Taguig. We offer emission testing, free roadworthiness inspection, TPL insurance, and authorized LTO registration assistance.
        </p>
        <a href="https://your-booking-link.com" target="_blank" rel="noreferrer" className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg">Book Your Test</a>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          M2 PMVIC Taguig is committed to ensuring safe and eco-friendly roads. We provide comprehensive motor vehicle inspections to help you comply with government requirements while keeping your vehicle roadworthy.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2">Emission Testing</h3>
            <p>Accurate and government-compliant emission testing for all vehicle types.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2">Roadworthiness Inspection</h3>
            <p>Free inspection to ensure your vehicle is safe and roadworthy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2">TPL Insurance</h3>
            <p>Get your mandatory Third-Party Liability insurance in one stop.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2">LTO Registration Assistance</h3>
            <p>Authorized to process LTO registrations quickly and hassle-free.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">We’re here to help! Reach out to us for inquiries or assistance.</p>
        <p className="text-lg">📍 Taguig City, Metro Manila</p>
        <p className="text-lg">📞 0912 345 6789</p>
        <p className="text-lg">✉️ info@m2pmvic.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} M2 PMVIC Taguig. All rights reserved.</p>
      </footer>
    </div>
  );
}
