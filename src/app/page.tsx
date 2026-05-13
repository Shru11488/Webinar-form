"use client";

import { useState } from "react";

export default function Home() {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
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
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+[1-9]\d{7,14}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter valid phone number with country code (e.g. +919876543210)";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <div className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex items-center">
          <div className="w-full md:w-2/3">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              Webinar: Driving Digital Transformation in the Chemical Industry
            </h1>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid md:grid-cols-2 gap-8 md:gap-10">
        {/* LEFT CONTENT (unchanged) */}
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

          {/* <div className="mt-6">
            <p className="font-semibold text-black text-sm sm:text-base">
              Speaker:
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              To be announced
            </p>
          </div> */}

          {/* <a
            href="#form"
            className="inline-block mt-4 text-blue-700 underline md:hidden"
          >
            Register Now ↓
          </a> */}
        </div>

        {/* RIGHT FORM */}
        <div id="form" className="bg-white p-5 sm:p-6 shadow-md rounded-md">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Register Today
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
            {/* First Name */}
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name*"
                className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Work Email*"
                className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            {/* Phone */}
            <div>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            {/* Company */}
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name*"
                className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            {/* Discussion */}
            <textarea
              name="discussion"
              value={formData.discussion}
              onChange={handleChange}
              placeholder="Key Discussion Points"
              rows={4}
              className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 text-sm rounded hover:bg-blue-800 transition"
            >
              Register Today
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
