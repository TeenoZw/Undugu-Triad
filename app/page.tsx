import Image from "next/image";
import ContactForm from "./components/ContactForm";
import SiteHeader from "./components/SiteHeader";

const showcaseImages = [
  {
    src: "/undugu1.jpg",
    alt: "Modern floating vanity with twin basins and warm woven storage baskets.",
    title: "Bathroom vanities",
  },
  {
    src: "/undugu 2.jpg",
    alt: "Decorative white countertop basin paired with a brushed gold tap.",
    title: "Designer basins",
  },
  {
    src: "/undugu 3.jpg",
    alt: "Statement chandelier with layered circular light rings in a bright room.",
    title: "Feature lighting",
  },
  {
    src: "/undugu 4.jpg",
    alt: "Contemporary open-plan interior lit by sleek ring ceiling lights.",
    title: "Interior ambience",
  },
];

const highlights = [
  "Zimbabwean-owned engineering company",
  "Interior finishing design and supply",
  "Professional installation and advisory support",
];

const values = [
  {
    title: "Quality excellence",
    body: "Durable, dependable products selected for performance and long-term value.",
  },
  {
    title: "Customer focus",
    body: "Practical guidance tailored to client requirements, budgets, and timelines.",
  },
  {
    title: "Integrity",
    body: "Honest communication, transparent business practices, and accountable delivery.",
  },
  {
    title: "Innovation",
    body: "Modern materials, contemporary finishes, and solutions that elevate every build.",
  },
];

const solutions = [
  {
    title: "Electrical supplies",
    body: "Modern lighting, chandeliers, plugs, sockets, switches, and energy-efficient LED bulbs.",
  },
  {
    title: "Kitchen supplies",
    body: "Sinks, washing basins, countertop accessories, and cabinet hardware for practical, refined spaces.",
  },
  {
    title: "Interior finishes",
    body: "Flooring materials, wall finishes, ceiling solutions, bathroom fixtures, and decorative upgrades.",
  },
  {
    title: "Design and advisory",
    body: "Decor support, interior finishing guidance, and recommendations for modern home improvements.",
  },
  {
    title: "Supply and logistics",
    body: "Reliable sourcing and product supply for developers, contractors, institutions, and homeowners.",
  },
  {
    title: "Installation services",
    body: "Professional installation support to move projects from specification to completed delivery.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us about the project",
    body: "Share your build type, required materials, installation needs, and preferred timeline.",
  },
  {
    number: "02",
    title: "Receive a tailored recommendation",
    body: "We recommend practical finishing solutions aligned to your budget, design, and site needs.",
  },
  {
    number: "03",
    title: "Confirm supply or installation",
    body: "Once approved, we coordinate product supply and any professional installation support required.",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="page-shell">
      <SiteHeader />

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Engineering + modern finishing materials</p>
            <h1>Built for durable spaces, delivered with modern style.</h1>
            <p className="hero-text">
              Undugu Triad Engineering supports residential, commercial, and industrial
              projects with dependable engineering capability, premium house finishing
              materials, and professional installation services across Zimbabwe.
            </p>

            <div className="hero-actions">
              <a className="button" href="#contact">
                Request a quote
              </a>
              <a className="button button-secondary" href="#solutions">
                Explore solutions
              </a>
            </div>

            <ul className="hero-points" aria-label="Company highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel" aria-label="Undugu Triad highlights">
            <div className="hero-card hero-card-main">
              <span className="metric-tag">Trusted project partner</span>
              <h2>Modern, durable, and aesthetically refined finishing solutions.</h2>
              <p>
                We help property owners, contractors, and institutions source quality
                materials that improve function, comfort, and long-term value.
              </p>
            </div>

            <div className="hero-showcase">
              {showcaseImages.slice(0, 2).map((image) => (
                <article className="showcase-tile" key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={404}
                    className="showcase-image"
                  />
                  <div className="showcase-caption">
                    <span>{image.title}</span>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section showcase-section" id="showcase">
          <div className="section-heading">
            <p className="eyebrow">Front page showcase</p>
            <h2>Signature finishes that bring a softer, more elevated feel to a space.</h2>
          </div>

          <div className="showcase-layout">
            <article className="showcase-feature glass-card">
              <span className="card-kicker">Selected inspirations</span>
              <h3>From refined bathroom details to expressive lighting statements.</h3>
              <p>
                These featured product styles reflect the kind of polished, modern
                finishing direction Undugu Triad can help source, recommend, and install.
              </p>
            </article>

            <div className="showcase-grid">
              {showcaseImages.map((image) => (
                <article className="showcase-card" key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={416}
                    height={404}
                    className="showcase-image"
                  />
                  <div className="showcase-copy">
                    <h3>{image.title}</h3>
                    <p>{image.alt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About us</p>
            <h2>Technical capability with a polished commercial edge.</h2>
          </div>

          <div className="about-layout">
            <article className="glass-card">
              <p>
                Undugu Triad Engineering (Pvt) Ltd is a Zimbabwean-owned business engaged
                in engineering services and the supply of quality house finishing materials
                for residential, commercial, and industrial projects.
              </p>
              <p>
                Our offering is built around products and services that are practical,
                stylish, durable, and ready for real-world installation. We focus on
                helping clients create spaces that feel complete, functional, and visually
                strong.
              </p>
            </article>

            <div className="values-grid">
              {values.map((value) => (
                <article className="value-card" key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-accent" id="solutions">
          <div className="section-heading">
            <p className="eyebrow">What we offer</p>
            <h2>Finishing products and services designed to complete the job properly.</h2>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <h3>{solution.title}</h3>
                <p>{solution.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>A clear, straightforward path from enquiry to delivery.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Start your enquiry with Undugu Triad.</h2>
          </div>

          <div className="contact-layout">
            <article className="contact-card contact-card-info">
              <h3>Contact details</h3>
              <ul className="contact-list">
                <li>
                  <span>Email</span>
                  <a href="mailto:info@undugutriad.co.zw">info@undugutriad.co.zw</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href="tel:+263775628522">+263 775 628 522</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href="tel:+263779691351">+263 779 691 351</a>
                </li>
                <li>
                  <span>Address</span>
                  <p>4084 Empumalanga, Hwange, Zimbabwe</p>
                </li>
              </ul>
              <p className="contact-note">
                Enquiries from the website can be routed through Netlify Forms, with
                notifications delivered to Zoho Mail at info@undugutriad.co.zw.
              </p>
            </article>

            <article className="contact-card">
              <h3>Project enquiry</h3>
              <ContactForm />
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{`© ${year} Undugu Triad Engineering. Built for modern delivery.`}</p>
        <a href="mailto:info@undugutriad.co.zw">info@undugutriad.co.zw</a>
      </footer>
    </div>
  );
}
