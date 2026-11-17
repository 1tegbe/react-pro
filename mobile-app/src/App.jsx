import Pic from "../src/assets/Professional Portrait in Sunglasses.png"

const navItems = ['About', 'My blog', 'Résumé']
const socialLinks = ['LinkedIn', 'GitHub', 'Instagram']

const friends = [
  { name: 'Friend 01', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80' },
  { name: 'Friend 02', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80' },
  { name: 'Friend 03', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
  { name: 'Friend 04', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80' },
  { name: 'Friend 05', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">AD</span>
          <span className="brand-sub">Akinlade Divine || PORTFOLIO</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a href="#" key={item} className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <button type="button" className="talk-button">
          Let&apos;s talk
        </button>
      </header>

      <main className="content">
        <section className="hero section-block">
          <div className="hero-copy">
            <p className="eyebrow">PERSONAL PORTFOLIO</p>
            <h1>
              Curious mind.
              <br />
              Human first.
            </h1>

            <h2>
              Hi, I&apos;m Divine.
            </h2>

            <p className="intro-text">
              A space for my journey, the things I care about, and the people who make it all worthwhile.
            </p>

            <button type="button" className="primary-button">
              Explore my CV
              <span aria-hidden="true">↓</span>
            </button>

            <div className="social-row">
              {socialLinks.map((link) => (
                <a href="#" key={link} className="social-link">
                  {link}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <aside className="portrait-card" aria-label="Profile portrait">
            <div className="portrait-frame">
              <img
                src={Pic}
                alt="Portrait"
              />
            </div>
            <div className="portrait-meta">
              <span className="meta-label">Divine</span>
              <span className="meta-index">01 / 06</span>
            </div>
          </aside>
        </section>

        <section className="about section-block">
          <div className="about-copy">
            <p className="eyebrow">A LITTLE INTRODUCTION</p>
            <h3>
              Always learning.
              <br />
              Always moving forward.
            </h3>
            <p>
              This is where my story goes — my background, what I&apos;m working toward, and what I love to do next.
            </p>
          </div>

          <div className="cv-card">
            <p className="eyebrow right">THE SHORT VERSION</p>
            <h4>My curriculum vitae</h4>
            <p>Experience, education, and the skills I bring.</p>

            <button type="button" className="secondary-button">
              View / download CV
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        </section>

        <section className="friends section-block">
          <p className="eyebrow">02 / THE PEOPLE</p>
          <h3>Good company. Great memories.</h3>
          <p className="friends-subtitle">Five friends. A big part of my story.</p>

          <div className="friend-grid">
            {friends.map((friend, index) => (
              <article className="friend-card" key={friend.name}>
                <div className="friend-image-wrap">
                  <img src={friend.image} alt={friend.name} />
                </div>
                <div className="friend-labels">
                  <span className="friend-name">{friend.name}</span>
                  <span className="friend-order">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-block">
          <div className="contact-copy">
            <p className="eyebrow">03 / STAY IN TOUCH</p>
            <h3>Let&apos;s connect.</h3>
            <p>Find me around the internet.</p>
          </div>

          <div className="contact-links">
            {socialLinks.map((link) => (
              <a href="#" key={link} className="contact-item">
                {link}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Akinlade Divine</p>
        <p>Personal portfolio — Sample photos is personal details</p>
      </footer>
    </div>
  )
}

export default App
