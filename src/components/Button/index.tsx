interface ButtonModel {
  children: JSX.Element | string;
  classes: string;
  fn?: () => void
}

const Button: React.FC<ButtonModel> = ({ children, classes, fn }: ButtonModel) => {
  return (
      <button onClick={fn} className={`button ${classes}`}>{children}</button>
  );
};

export default Button;
