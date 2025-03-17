javascript
function ParentsVersion() {
  const [activeTab, setActiveTab] = React.useState("schedule");

  const testimonials = [
    {
      quote:
        "The after-prom event gave us complete peace of mind. The security and organization were impeccable.",
      parent: "Sarah Mitchell",
      year: "2023",
    },
    {
      quote:
        "Knowing our children were in a safe, supervised environment made all the difference. Highly recommended!",
      parent: "Michael Rodriguez",
      year: "2023",
    },
    {
      quote:
        "The variety of activities kept the kids engaged all night. A wonderful alternative to unsupervised parties.",
      parent: "Jennifer Thompson",
      year: "2023",
    },
  ];

  const schedule = [
    { time: "11:30 PM", event: "Parent Information Session" },
    { time: "12:00 AM", event: "Doors Open - Student Check-in Begins" },
    { time: "12:30 AM", event: "Welcome Activities & Games Begin" },
    { time: "1:00 AM", event: "Food Court Opens" },
    { time: "2:00 AM", event: "Prize Drawings Begin" },
    { time: "3:30 AM", event: "Final Activities" },
    { time: "4:00 AM", event: "Event Concludes - Supervised Departure" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 md:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-inter">
          After Prom 2024: Peace of Mind
        </h1>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
            Safety First
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <i className="fas fa-shield-alt mr-3"></i>
              <span>Licensed security personnel on premises</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-user-friends mr-3"></i>
              <span>Trained adult chaperones (1:15 ratio)</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-ban mr-3"></i>
              <span>Strict no-alcohol, no-reentry policy</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-first-aid mr-3"></i>
              <span>Medical personnel on site</span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
              Location & Access
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-3">
              <p className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3"></i>
                <span>
                  Community Center
                  <br />
                  123 Main Street
                </span>
              </p>
              <p className="flex items-center">
                <i className="fas fa-car mr-3"></i>
                <span>Designated drop-off at North entrance</span>
              </p>
              <p className="flex items-center">
                <i className="fas fa-parking mr-3"></i>
                <span>Parent parking available in Lot B</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
              Contact Information
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-3">
              <p className="flex items-center">
                <i className="fas fa-phone mr-3"></i>
                <span>Event Hotline: (555) 123-4567</span>
              </p>
              <p className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span>afterprom2024@school.edu</span>
              </p>
              <p className="flex items-center">
                <i className="fas fa-user mr-3"></i>
                <span>Committee Chair: Mrs. Anderson</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
            Schedule of Events
          </h2>
          <div className="space-y-3">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-gray-700 dark:text-gray-300"
              >
                <span className="w-24 font-semibold">{item.time}</span>
                <span>{item.event}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
            Parent Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                  "{testimonial.quote}"
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  {testimonial.parent}
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    - {testimonial.year}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentsVersion;