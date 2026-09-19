function Card({
  children,
  className = "",
  as: Component = "article",
}) {
  return (
    <Component className={`card ${className}`}>
      {children}
    </Component>
  );
}

export default Card;