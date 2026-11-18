import Pic from "../src/assets/Professional Portrait in Sunglasses.png"
const navItems = ['About', 'My blog', 'Résumé']
const cvUrl = 'https://docs.google.com/document/d/1JDYvHTq6fi92xRTdLz3PaTUSgV_OPeGp/edit'
const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/itegbe-akinlade-968410401/' },
  { name: 'GitHub', url: 'https://github.com/1tegbe' },
  { name: 'Instagram', url: 'https://www.instagram.com/dev_itegbe/' },
]

const friends = [
  { name: 'Adaeze Okafor', image: 'https://images.pexels.com/photos/10476512/pexels-photo-10476512.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Chinedu Okafor', image: 'https://images.pexels.com/photos/33044977/pexels-photo-33044977.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Teniola Adebayo', image: 'https://images.pexels.com/photos/34107697/pexels-photo-34107697.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Zainab Musa', image: 'https://images.pexels.com/photos/34747815/pexels-photo-34747815.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Efe Omoregie', image: 'https://images.pexels.com/photos/13417077/pexels-photo-13417077.jpeg?auto=compress&cs=tinysrgb&w=900' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">AD</span>
          <span className="brand-sub">Akinlade Divine || PORTFOLIO</span>
        </div>

       

      
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

            <a href={cvUrl} className="primary-button" target="_blank" rel="noreferrer">
              Explore my CV
              <span aria-hidden="true">↓</span>
            </a>

            <div className="social-row">
              {socialLinks.map((link) => (
                <a href={link.url} key={link.name} className="social-link" target="_blank" rel="noreferrer">
                  {link.name}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <aside className="portrait-card" aria-label="Profile portrait">
            <div className="portrait-frame">
              <img
                src={Pic}
                alt="Portrait of a Nigerian man"
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

            <a href={cvUrl} className="secondary-button" target="_blank" rel="noreferrer">
              View / download CV
              <span aria-hidden="true">↓</span>
            </a>
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
              <a href={link.url} key={link.name} className="contact-item" target="_blank" rel="noreferrer">
                {link.name}
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
