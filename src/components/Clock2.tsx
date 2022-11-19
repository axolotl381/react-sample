import React, { useState, useEffect } from "react";

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  US = "en-US",
  JP = "ja-JP",
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const Clock2: React.FC = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  useEffect(() => {
    console.log("timer effect");
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, UPDATE_CYCLE);
    return () => {
      console.log(clearInterval);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    console.log(locale);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, [locale]);

  useEffect(() => {
    console.log("ローカルストレージに保存");
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  );
};
