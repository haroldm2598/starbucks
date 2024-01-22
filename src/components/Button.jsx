function Button({ customStyle, name }) {
	return <button className={`myButton ${customStyle}`}>{name}</button>;
}

export default Button;
