import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
}) {
  const classes = `button button--${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}

export default Button;