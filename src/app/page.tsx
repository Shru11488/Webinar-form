"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    discussion: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    const phone = formData.phone.trim();

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+[1-9]\d{7,14}$/.test(phone)) {
      newErrors.phone =
        "Enter valid phone number with country code (e.g. +919876543210)";
    }

    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Registration successful!");
    }
  };

  const fullText = "Driving Digital Transformation in the\nChemical Industry";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 40); // Slightly faster for better feel
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] flex items-end overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/webinar-banner-v3.png"
          alt="Webinar Banner"
          fill
          priority
          className="object-cover object-top"
        />


        {/* Heading Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-10">
          <div className="max-w-3xl">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold leading-[1.3] text-gray-900 tracking-tight whitespace-pre-line">
              {displayText}
              <span 
                className={`inline-block w-[3px] h-[0.9em] bg-blue-600 ml-1.5 align-middle transition-opacity duration-100 ${
                  displayText.length === fullText.length ? 'animate-none opacity-0' : 'animate-pulse'
                }`}
              ></span>
            </h1>

            <div
              className="h-1 bg-blue-600 mt-4 sm:mt-6 rounded-full"
              style={{
                width: displayText.length === fullText.length ? "80px" : "0",
                transition: "width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid md:grid-cols-2 gap-8 md:gap-10">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm sm:text-md font-semibold text-black mb-4">
            | May 26, 2026 &nbsp;&nbsp; 3:00 - 3:45 pm IST
          </p>

          <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed">
            In an increasingly complex and fast-paced business landscape, CFOs
            are expected to move beyond traditional financial management and
            drive strategic decision-making with speed and precision.
          </p>

          <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed">
            Yet, many organizations still struggle with limited cash flow
            visibility, disconnected data systems, and manual processes—
            resulting in delayed insights and reactive forecasting.
          </p>

          <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
            Join us for this exclusive webinar to discover how forward-thinking
            finance leaders are leveraging real-time financial data and modern
            IT solutions to gain complete visibility, improve forecasting
            accuracy, and make faster, more confident business decisions.
          </p>

          <h3 className="font-semibold text-black text-base sm:text-lg mb-3">
            Join Us As We Discuss:
          </h3>

          <ul className="list-disc pl-5 text-sm sm:text-base text-gray-700 mb-6 space-y-1">
            <li>
              How leading CFOs are achieving real-time cash flow visibility.
            </li>
            <li>Moving from reactive to predictive financial forecasting.</li>
            <li>Eliminating data silos to build a single source of truth.</li>
            <li>Reducing reliance on spreadsheets through automation.</li>
            <li>
              Leveraging technology to drive faster, data-driven decisions.
            </li>
            <li>
              Key strategies to strengthen financial planning and control.
            </li>
          </ul>
        </div>

        {/* RIGHT FORM (UNCHANGED) */}
        <div
          id="form"
          className="bg-white p-6 sm:p-8 shadow-2xl rounded-2xl border border-gray-100 h-fit sticky top-8"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Register Today
            </h2>
            <p className="text-gray-500 text-sm">
              Fill in the details to secure your spot.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  //placeholder="John"
                  className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-gray-50/30"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-[10px] mt-1 ml-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  //placeholder="Doe"
                  className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-gray-50/30"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-[10px] mt-1 ml-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">
                Work Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                //placeholder="john@company.com"
                className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-gray-50/30"
              />
              {errors.email && (
                <p className="text-red-500 text-[10px] mt-1 ml-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                //placeholder="+91 98765 43210"
                className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-gray-50/30"
              />
              {errors.phone && (
                <p className="text-red-500 text-[10px] mt-1 ml-1">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                //placeholder="Acme Corp"
                className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-gray-50/30"
              />
              {errors.company && (
                <p className="text-red-500 text-[10px] mt-1 ml-1">
                  {errors.company}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">
                Key Discussion Points
              </label>
              <textarea
                name="discussion"
                value={formData.discussion}
                onChange={handleChange}
                //placeholder="What would you like to learn?"
                rows={3}
                className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-gray-50/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98]"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
