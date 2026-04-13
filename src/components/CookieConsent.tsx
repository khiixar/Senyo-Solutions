'use client';

import { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'senyo_cookie_consent';

type CookieConsentPreference = 'accepted' | 'rejected';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(COOKIE_CONSENT_KEY) as CookieConsentPreference | null;

    if (!savedPreference) {
      setIsVisible(true);
    }
  }, []);

  const handlePreference = (preference: CookieConsentPreference) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, preference);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section
      className="cookie-consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="cookie-consent__content">
        <span className="cookie-consent__icon" aria-hidden="true">🍪</span>
        <div className="cookie-consent__text">
          <h2 id="cookie-consent-title" className="cookie-consent__title">
            Cookie Preferences
          </h2>
          <p id="cookie-consent-description" className="cookie-consent__description">
            We use cookies to improve your browsing experience and understand website performance. You can accept or decline non-essential cookies.
          </p>
        </div>
      </div>

      <div className="cookie-consent__actions">
        <button
          type="button"
          className="btn btn-outline cookie-consent__button"
          onClick={() => handlePreference('rejected')}
        >
          Decline
        </button>
        <button
          type="button"
          className="btn btn-primary cookie-consent__button"
          onClick={() => handlePreference('accepted')}
        >
          Accept All
        </button>
      </div>
    </section>
  );
}