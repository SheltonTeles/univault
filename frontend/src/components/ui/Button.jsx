import "./Button.css";

function Button({ children, variant = "primary" }) {

  return (
    <button className={`button ${variant}`}>
      {children}
    </button>
  );

}

export default Button;