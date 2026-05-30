import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { bicycleTypes } from '../data/bicycleTypes';

function Contact() {
  const [interest, setInterest] = useState(bicycleTypes[0].id);

  const selected = bicycleTypes.find((b) => b.id === interest) || bicycleTypes[0];

  return (
    <PageLayout accent={selected.accent} accentGlow={selected.accentGlow}>
      <header className="bw-hero mb-10">
        <span className="bw-eyebrow">Write to Us</span>
        <h1 className="bw-display bw-hero__title">Contact the Realm</h1>
        <p className="bw-lead max-w-2xl mx-auto">
          Tell us which discipline calls to you. The mood of this chamber shifts
          with the accent of the bicycle you choose.
        </p>
      </header>

      <div className="bw-contact-wrap">
        <aside className="bw-contact-info">
          <h3>Cyclist Support</h3>
          <p>
            We answer inquiries about 3D models, collaborations, and the visual
            catalog of the bicycle world.
          </p>
          <p>
            <a href="mailto:hello@3dbicycleworld.com">hello@3dbicycleworld.com</a>
          </p>
          <p>
            Hours: Mon–Fri, 9:00–18:00
            <br />
            Gothic City, where asphalt meets the cathedral.
          </p>
          <div
            className="bw-contact-preview"
            style={{
              '--preview-accent': selected.accent,
              '--preview-glow': selected.accentGlow,
            }}
          >
            <img src={selected.image} alt="" aria-hidden="true" />
            <span>{selected.name}</span>
            <p>{selected.tagline}</p>
          </div>
        </aside>

        <form
          className="bw-form-panel"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="bw-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" />
          </div>
          <div className="bw-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
            />
          </div>
          <div className="bw-field">
            <label htmlFor="contact-interest">Discipline of interest</label>
            <select
              id="contact-interest"
              name="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              {bicycleTypes.map((bike) => (
                <option key={bike.id} value={bike.id}>
                  {bike.label}
                </option>
              ))}
            </select>
          </div>
          <div className="bw-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Describe your project or your next route..."
            />
          </div>
          <button type="submit" className="bw-btn">
            Send message
          </button>
        </form>
      </div>
    </PageLayout>
  );
}

export default Contact;
