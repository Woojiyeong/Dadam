const icons = {
  alert: (
    <>
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.2 4.3 2.5 18a2 2 0 0 0 1.8 3h15.4a2 2 0 0 0 1.8-3L13.8 4.3a2 2 0 0 0-3.6 0Z" />
    </>
  ),
  calendar: (
    <>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M4 9h16" />
      <rect x="4" y="5" width="16" height="16" rx="2" />
    </>
  ),
  check: (
    <>
      <path d="M20 6 9 17l-5-5" />
      <circle cx="12" cy="12" r="10" />
    </>
  ),
  cup: (
    <>
      <path d="M5 8h11v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5Z" />
      <path d="M16 9h2a3 3 0 0 1 0 6h-2" />
      <path d="M4 21h15" />
      <path d="M8 4c0-1 1-1 1-2" />
      <path d="M12 4c0-1 1-1 1-2" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 2.5 6.8 9.1a7 7 0 1 0 10.4 0Z" />
    </>
  ),
  archive: (
    <>
      <rect x="3" y="4" width="18" height="5" rx="1" />
      <path d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
      <path d="M10 13h4" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </>
  ),
  diamond: (
    <>
      <path d="m12 3 8 9-8 9-8-9Z" />
    </>
  ),
  dry: (
    <>
      <path d="M3 20c2.5-4.5 5.5-6.8 9-6.8s6.5 2.3 9 6.8" />
      <path d="M7 17c1.3-1.3 2.9-2 5-2s3.7.7 5 2" />
      <path d="M12 3v5" />
      <path d="M8.5 4.5 12 8l3.5-3.5" />
    </>
  ),
  edit: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
  home: (
    <>
      <path d="M3 11 12 3l9 8" />
      <path d="M5 10v11h14V10" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  hourglass: (
    <>
      <path d="M6 2h12" />
      <path d="M6 22h12" />
      <path d="M7 2v6a5 5 0 0 0 2.2 4A5 5 0 0 0 7 16v6" />
      <path d="M17 2v6a5 5 0 0 1-2.2 4A5 5 0 0 1 17 16v6" />
      <path d="M9 8h6" />
      <path d="M9 18h6" />
    </>
  ),
  inbox: (
    <>
      <path d="M4 13V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8" />
      <path d="M4 13h5l2 3h2l2-3h5v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 20c2.7-7.9 7.8-12.8 15-15" />
      <path d="M20 5c-7.7-.6-14 3.3-15.2 9.2-.5 2.8 1.2 5.1 4 5.4C14.4 20.2 19 13.3 20 5Z" />
      <path d="M8.5 16.5c2.2-.2 4.4-1.1 6.4-2.8" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8.5 15.5a6 6 0 1 1 7 0c-.8.6-1.2 1.4-1.4 2.5H9.9c-.2-1.1-.6-1.9-1.4-2.5Z" />
    </>
  ),
  list: (
    <>
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  message: (
    <>
      <path d="M20 11.5c0 4.1-3.6 7.5-8 7.5-1.1 0-2.2-.2-3.1-.6L4 21l1.4-4.5A7.1 7.1 0 0 1 4 11.5C4 7.4 7.6 4 12 4s8 3.4 8 7.5Z" />
      <path d="M8.4 12h.01" />
      <path d="M12 12h.01" />
      <path d="M15.6 12h.01" />
      <path d="M17 5.2 17.7 7 19.5 7.7 17.7 8.4 17 10.2 16.3 8.4 14.5 7.7 16.3 7Z" />
    </>
  ),
  odor: (
    <>
      <path d="M6 18c2-2 2-4 0-6s-2-4 0-6" />
      <path d="M12 20c2-2.3 2-4.7 0-7s-2-4.7 0-7" />
      <path d="M18 18c2-2 2-4 0-6s-2-4 0-6" />
    </>
  ),
  scale: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2v20" />
      <path d="m4.9 4.9 14.2 14.2" />
      <path d="M2 12h20" />
      <path d="m4.9 19.1 14.2-14.2" />
      <path d="m8 4 4 4 4-4" />
      <path d="m8 20 4-4 4 4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3 14.4 9.6 21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4Z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </>
  ),
  thermometer: (
    <>
      <path d="M14 14.8V5a4 4 0 0 0-8 0v9.8a6 6 0 1 0 8 0Z" />
      <path d="M10 7v8" />
    </>
  ),
  xCircle: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </>
  ),
  x: (
    <>
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </>
  ),
};

function Icon({ name, className = "", title }) {
  return (
    <svg
      className={`ui-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      {icons[name]}
    </svg>
  );
}

export default Icon;
