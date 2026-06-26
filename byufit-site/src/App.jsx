import { motion } from "framer-motion";
import { Dumbbell, Utensils, Video, MessageCircle, Check } from "lucide-react";
import "./App.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function App() {
  return (
    <main className="site">
      <nav className="nav">
        <div className="ak-logo">AK</div>
        <div className="nav-links">
          <a>Home</a>
          <a>Coaching</a>
          <a>Transformations</a>
          <a>Packages</a>
          <a>Contact</a>
        </div>
        <button className="nav-btn">Apply Now</button>
      </nav>

      <section className="hero" id="home">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <p className="eyebrow">Ali K presents</p>

          <h1 className="hero-title">
            BYU<span>FIT</span>
          </h1>

          <h2 className="hero-subtitle">
            Build your ultimate. Become unstoppable.
          </h2>

          <p className="hero-text">
            Online 1-on-1 coaching built for athletes, bodybuilders, and anyone ready
            to train with structure, intensity, and purpose.
          </p>

          <div className="hero-buttons">
            <a href="#packages" className="button">View Packages</a>
            <a href="#contact" className="button secondary">Apply for 1-on-1</a>
          </div>

          <div className="rotating-words">
            <span>STRONGER</span>
            <span>LEANER</span>
            <span>DISCIPLINED</span>
            <span>UNSTOPPABLE</span>
          </div>
        </motion.div>
      </section>

      <section className="section grid-two">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow">Transform your life</p>
          <h2>Real coaching. Real accountability. Real results.</h2>
          <p>
            BYUFIT combines custom training, nutrition guidance, weekly
            check-ins, and direct coach support to help you build a stronger
            body and sharper mindset.
          </p>

          <div className="features">
            <Feature icon={<Dumbbell />} title="Custom Training" text="Programs built around your body, goals, and schedule." />
            <Feature icon={<Utensils />} title="Nutrition Guidance" text="Simple, realistic nutrition that supports results." />
            <Feature icon={<MessageCircle />} title="Coach Support" text="Stay accountable with check-ins and feedback." />
          </div>
        </motion.div>

        <motion.div className="image-placeholder" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span>Before / After Transformation</span>
        </motion.div>
      </section>

      <section className="section packages">
        <p className="eyebrow">Coaching packages</p>
        <h2>Choose your path.</h2>

        <div className="cards">
          <Package title="Starter" price="$199" length="4 Weeks" items={["Custom training plan", "Nutrition targets", "Weekly check-in"]} />
          <Package popular title="Elite" price="$499" length="12 Weeks" items={["Custom training plan", "Nutrition guidance", "Weekly check-ins", "Form feedback", "24/7 support"]} />
          <Package title="1-on-1 Coaching" price="$999" length="12 Weeks" items={["Everything in Elite", "Priority support", "Video calls", "Advanced customization"]} />
        </div>
      </section>

      <section className="cta">
        <h2>Ready to become your strongest self?</h2>
        <button>Apply for Coaching</button>
      </section>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Package({ title, price, length, items, popular }) {
  return (
    <motion.div
      className={`package ${popular ? "popular" : ""}`}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {popular && <div className="badge">Most Popular</div>}
      <h3>{title}</h3>
      <p className="length">{length}</p>
      <h4>{price}</h4>
      <p className="payment">one-time payment</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check size={16} /> {item}
          </li>
        ))}
      </ul>
      <button>{popular ? "Get Started" : "Apply Now"}</button>
    </motion.div>
  );
}