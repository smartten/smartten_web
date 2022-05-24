import "./Button.scss";
const Button = ({ padding, content, bgColor, textColor }) => {
	return <button className="button" style={{
		padding: padding,
		color: textColor,
		backgroundColor: bgColor
	}} type="button">{content}</button>;
};

export default Button;
