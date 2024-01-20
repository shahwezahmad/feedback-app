const Button = ({ children, version, isDisable, type }) => {
  return (
    <button
      type={type}
      className={`btn btn-${isDisable === false ? "primary" : "secondary"}`}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "secondary",
  type: "button",
  isDisable: true,
};

export default Button;
