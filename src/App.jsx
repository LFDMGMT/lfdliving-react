export default function PropertyWebsite() {
  const featuredListings = [
    {
      title: "Modern Studio in Inglewood",
      price: "$1,895/mo",
      details: "Studio • 1 Bath • Pet Friendly",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Renovated 1 Bedroom in Gardena",
      price: "$2,250/mo",
      details: "1 Bed • 1 Bath • Gated Parking",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Spacious 2 Bedroom in Torrance",
      price: "$2,950/mo",
      details: "2 Bed • 2 Bath • Balcony",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const locations = ["Inglewood", "Gardena", "Torrance", "Hawthorne", "Los Angeles"];

  const valueProps = [
    {
      title: "Well-Maintained Homes",
      text: "Clean, professionally managed properties with responsive maintenance and straightforward leasing.",
    },
    {
      title: "Simple Leasing Process",
      text: "From availability to application, the process is clear, fast, and built for mobile users.",
    },
    {
      title: "Local Management",
      text: "A hands-on team focused on tenant communication, property upkeep, and long-term value.",
    },
  ];

  const leasingSteps = [
    "Browse active vacancies and compare features.",
    "Schedule a tour or submit an inquiry online.",
    "Complete the application and upload documents.",
    "Receive updates quickly from the leasing team.",
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-tight">LFD Living</div>
            <div className="text-sm text-neutral-500">Modern rentals across Los Angeles</div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-neutral-600">
              Home
            </a>
            <a href="#listings" className="transition hover:text-neutral-600">
              Listings
            </a>
            <a href="#locations" className="transition hover:text-neutral-600">
              Locations
            </a>
            <a href="#contact" className="transition hover:text-neutral-600">
              Contact
            </a>
          </nav>

          <a
            href="#listings"
            className="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            View Rentals
          </a>
        </div>
      </header>

      <section id="home" className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur">
              Leasing made easier
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Thoughtful rental living with a clean, modern leasing experience.
            </h1>

            <p className="mt-6 text-base leading-7 text-neutral-100 md:text-lg">
              Discover professionally managed homes, transparent communication, and an application
              process designed to move quickly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#listings"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-100"
              >
                Browse Available Rentals
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Leasing
              </a>
            </div>
          </div>

          <div className="self-end rounded-3xl border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur">
            <div className="text-sm uppercase tracking-[0.18em] text-neutral-200">Quick Search</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-white/15 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-neutral-200 focus:outline-none"
                placeholder="City or neighborhood"
              />
              <select className="rounded-2xl border border-white/15 bg-white/15 px-4 py-3 text-sm text-white focus:outline-none">
                <option>Bedrooms</option>
                <option>Studio</option>
                <option>1 Bedroom</option>
                <option>2 Bedrooms</option>
                <option>3+ Bedrooms</option>
              </select>
              <select className="rounded-2xl border border-white/15 bg-white/15 px-4 py-3 text-sm text-white focus:outline-none">
                <option>Budget</option>
                <option>Up to $2,000</option>
                <option>$2,000 - $2,500</option>
                <option>$2,500 - $3,000</option>
                <option>$3,000+</option>
              </select>
              <button className="rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90">
                Search Rentals
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Why residents choose us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Built around clarity, responsiveness, and strong property operations.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="listings" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Featured listings
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Available homes that stand out.
              </h2>
            </div>

            <a
              href="#contact"
              className="text-sm font-semibold text-neutral-900 underline underline-offset-4"
            >
              Need help finding the right fit?
            </a>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {featuredListings.map((listing) => (
              <div
                key={listing.title}
                className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm transition hover:-translate-y-1"
              >
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <div className="text-sm font-medium text-neutral-500">Now Leasing</div>
                  <h3 className="mt-2 text-xl font-semibold">{listing.title}</h3>
                  <p className="mt-3 text-sm text-neutral-600">{listing.details}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-semibold">{listing.price}</span>
                    <button className="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Locations
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Rentals across strong Los Angeles neighborhoods.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600">
              Explore homes in central, accessible, and fast-moving rental markets with convenient
              access to work, transit, and everyday essentials.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {locations.map((location) => (
              <div
                key={location}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center text-sm font-semibold shadow-sm"
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Leasing process
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Straightforward from first click to signed lease.
            </h2>
          </div>

          <div className="grid gap-4">
            {leasingSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-900">
                  {index + 1}
                </div>
                <p className="pt-2 text-sm leading-6 text-neutral-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[1fr,0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to find your next home?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
              Reach out for leasing questions, property availability, or application support. This
              section can be connected to AppFolio, a leasing inbox, or your existing contact
              workflow.
            </p>
            <div className="mt-8 space-y-3 text-sm text-neutral-700">
              <p>
                <span className="font-semibold">Phone:</span> (310) 555-0148
              </p>
              <p>
                <span className="font-semibold">Email:</span> leasing@lfdliving.com
              </p>
              <p>
                <span className="font-semibold">Office Hours:</span> Monday through Friday, 9:00
                AM to 6:00 PM
              </p>
            </div>
          </div>

          <form className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              <input
                className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm focus:outline-none"
                placeholder="Full name"
              />
              <input
                className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm focus:outline-none"
                placeholder="Email address"
              />
              <input
                className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm focus:outline-none"
                placeholder="Phone number"
              />
              <textarea
                className="min-h-[140px] rounded-2xl border border-neutral-200 px-4 py-3 text-sm focus:outline-none"
                placeholder="Tell us what you're looking for"
              />
              <button className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 LFD Living. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Equal Housing Opportunity</a>
          </div>
        </div>
      </footer>
    </div>
  );
}