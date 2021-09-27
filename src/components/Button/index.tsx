interface ButtonModel {
  children: string;
  classes?: string;
}

const Button: React.FC<ButtonModel> = ({ children, classes }: ButtonModel) => {
  return (
    <div>
      <button className={`button ${classes}`}>{children}</button>
    </div>
  );
};

export default Button;
