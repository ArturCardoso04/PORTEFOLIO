export default function Button({
  href,
  type = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  children,
  className = "",
  disabled = false,
  ...props
}) {
  const classNames = ["btn", `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" /> : null}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={classNames} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classNames} type={type} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
