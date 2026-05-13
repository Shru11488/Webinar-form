export default function Home() {
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
        {/* LEFT CONTENT (comes first naturally) */}
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

          <div className="mt-6">
            <p className="font-semibold text-black text-sm sm:text-base">
              Speaker:
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              To be announced
            </p>
          </div>

          {/* Optional mobile CTA */}
          <a
            href="#form"
            className="inline-block mt-4 text-blue-700 underline md:hidden"
          >
            Register Now ↓
          </a>
        </div>

        {/* RIGHT FORM */}
        <div id="form" className="bg-white p-5 sm:p-6 shadow-md rounded-md">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Register Today
          </h2>

          <form className="space-y-4 text-gray-800">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Last Name*"
              className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Work Email*"
              className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Company Name*"
              className="w-full border border-gray-300 px-3 py-3 text-sm rounded outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
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
