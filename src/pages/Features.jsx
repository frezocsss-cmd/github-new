import React from "react";

function Features() {
  const features = [
    {
      title: "The benefits of working with our team",
      text: "We provide reliable solutions and professional support for businesses around the world.",
    },
    {
      title: "Top regions and freelancers around the world use Client-first",
      text: "Connect with talented professionals and get your work completed quickly and efficiently.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Get the Revisions done and make the most of the maintenance",
      text: "Our team makes sure every detail is reviewed and improved until everything looks perfect.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Working with us, you will be getting 24/7 quality support",
      text: "Our specialists are always ready to help you whenever you need professional assistance.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Guaranteed 1 week delivery for standard Figma projects",
      text: "Fast delivery, clean design and professional results without unnecessary delays.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <main className="w-full bg-white text-[#202020]">
      {/* HERO */}
      <section className="mx-auto max-w-[1180px] px-8 pt-4">
        <div className="mb-5 text-[14px] text-gray-500">Features</div>

        <div className="relative overflow-hidden bg-[#22205d] px-16 py-16">
          <div className="max-w-[470px]">
            <p className="mb-4 text-xs font-medium uppercase tracking-[3px] text-white/50">
              Client-first
            </p>

            <h1 className="text-[52px] font-bold leading-[1.05] text-white">
              All the features
              <br />
              you need
            </h1>

            <p className="mt-6 max-w-[400px] text-[15px] leading-7 text-white/65">
              Everything you need to build, manage and grow your business in
              one simple platform.
            </p>

            <button className="mt-8 rounded-full bg-[#ffd95a] px-7 py-3 text-sm font-semibold text-[#22205d]">
              Get started
            </button>
          </div>

          {/* Dashboard decoration */}
          <div className="absolute right-12 top-12 h-[190px] w-[390px] rounded-lg bg-[#363475] p-5 shadow-2xl">
            <div className="mb-4 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="h-20 rounded bg-white/10" />
              <div className="col-span-2 h-20 rounded bg-white/10" />
              <div className="col-span-2 h-12 rounded bg-white/10" />
              <div className="h-12 rounded bg-white/10" />
            </div>
          </div>

          <div className="absolute bottom-8 right-10 text-4xl">⚙️</div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-[1180px] px-8 py-9">
        <div className="grid grid-cols-5 items-center border-b border-gray-100 pb-8 text-center">
          <div className="text-left">
            <p className="text-xl font-bold">100,000+</p>
            <p className="text-xs text-gray-400">Happy customers</p>
          </div>

          <p className="text-sm font-semibold text-gray-400">Company</p>
          <p className="text-sm font-semibold text-gray-400">Figma</p>
          <p className="text-sm font-semibold text-gray-400">Client-first</p>
          <p className="text-sm font-semibold text-gray-400">Webflow</p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-[980px] px-8 py-12">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#5552a8]">
            Benefits
          </p>

          <h2 className="text-[34px] font-bold">
            The benefits of working
            <br />
            with our team
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {[
            ["01", "Consistent quality", "Professional quality on every project."],
            ["02", "Working as a team", "We work together to achieve your goals."],
            ["03", "Fast & flexible", "Quick solutions without sacrificing quality."],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="border border-gray-100 bg-white p-7 shadow-sm"
            >
              <div className="mb-6 flex h-9 w-9 items-center justify-center bg-[#eeeeff] text-xs font-bold text-[#5552a8]">
                {number}
              </div>

              <h3 className="mb-3 text-[17px] font-bold">{title}</h3>

              <p className="text-sm leading-6 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE BLOCKS */}
      <section className="mx-auto max-w-[1000px] px-8 py-12">
        {features.slice(1).map((feature, index) => (
          <div
            key={feature.title}
            className={`mb-20 flex items-center gap-16 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-1/2">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-[300px] w-full object-cover"
              />
            </div>

            <div className="w-1/2">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#5552a8]">
                Feature {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="mb-5 text-[28px] font-bold leading-tight">
                {feature.title}
              </h2>

              <p className="text-[15px] leading-7 text-gray-500">
                {feature.text}
              </p>

              <div className="mt-7 h-[1px] w-16 bg-[#22205d]" />
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1000px] px-8 pb-16">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#5552a8]">
              FAQ
            </p>

            <h2 className="text-[32px] font-bold leading-tight">
              Frequently
              <br />
              asked questions
            </h2>
          </div>

          <div>
            {[
              "How does your service work?",
              "How quickly can you deliver my project?",
              "Can I make changes after delivery?",
              "How can I contact your support team?",
              "What services do you provide?",
            ].map((question, index) => (
              <div
                key={question}
                className="flex items-center justify-between border-b border-gray-200 py-5"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-bold text-[#5552a8]">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-medium">{question}</span>
                </div>

                <span className="text-xl text-gray-400">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1180px] px-8">
        <div className="grid grid-cols-2 bg-[#22205d] px-14 py-12 text-white">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[3px] text-white/50">
              Client-first
            </p>

            <h2 className="text-[38px] font-bold">Let's Talk</h2>

            <p className="mt-4 max-w-[390px] text-sm leading-6 text-white/60">
              Have a project in mind? Let's create something great together.
            </p>
          </div>

          <div className="flex items-center justify-end">
            <button className="rounded-full bg-[#ffd95a] px-8 py-4 text-sm font-bold text-[#22205d]">
              Get started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Features;