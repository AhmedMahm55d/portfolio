function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      className="social-link"
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children || label}
    </a>
  );
}

export default SocialLink;