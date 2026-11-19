// Draft homepage. Copy, numbers, events and contact details are placeholders to be replaced
// with the client's real content. Layout follows the design reference (yellow page, blue accents).

const nav = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { label: "Volunteers" },
  { label: "Projects completed" },
  { label: "Lives changed" },
];

const events = [
  { date: "DD MMM", title: "Event title to come", venue: "Venue to come", time: "Time to come" },
  { date: "DD MMM", title: "Event title to come", venue: "Venue to come", time: "Time to come" },
];

export default function Home() {
  return (
    <main>
      <header className="wrap">
        <nav className="nav" aria-label="Main">
          <a className="logo" href="#home">CL</a>
          <ul className="nav-links">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="home" className="wrap hero">
        <div className="hero-art" aria-hidden>
          <div className="circle" />
          <div className="photo-slot">Hero photo to come</div>
        </div>
        <div className="hero-copy">
          <h1>Changing Lives</h1>
          <p className="tagline">Spread the love, touch a life</p>
          <a className="btn" href="#donate">Donate</a>
        </div>
      </section>

      <section id="story" className="wrap">
        <div className="two-col">
          <div className="story-art light">Story photo to come</div>
          <div>
            <h2>Our Story</h2>
            <p>
              Placeholder: the founding story and mission of Changing Lives will go here, in the
              client&rsquo;s own words.
            </p>
          </div>
        </div>
      </section>

      <section id="impact" className="wrap">
        <h2>Our Impact</h2>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">00</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="events" className="wrap">
        <h2>Events</h2>
        <div className="events">
          {events.map((e, i) => (
            <article className="event" key={i}>
              <div className="img">Event photo to come</div>
              <span className="date">{e.date}</span>
              <div className="meta">
                <div>Venue: {e.venue}</div>
                <div>Time: {e.time}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-grid">
          <div>
            <h3>CL</h3>
            <p>Spread the love, touch a life.</p>
          </div>
          <div>
            <h3>Links</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Have a question?</h3>
            <ul>
              <li>Email: to come</li>
              <li>Phone: to come</li>
              <li>Location: to come</li>
            </ul>
          </div>
        </div>
        <p className="fine">&copy; Changing Lives. All rights reserved.</p>
      </footer>
    </main>
  );
}
