function Button({ hasOutline, customStyle, name }) {
	return (
		<button
			className={`${hasOutline ? 'myButton' : 'woButton'}  ${customStyle}`}
		>
			{name}
		</button>
	);
}

export default Button;
