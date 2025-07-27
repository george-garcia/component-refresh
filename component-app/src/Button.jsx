function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return (
    <button className="bg-blue-500 px-3 py-1.5 border border-blue-600 text-white">
      {children}
    </button>
  );
}

export default Button;
