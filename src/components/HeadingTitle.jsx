function HeadingTitle({ title, description }) {
	return (
		<div className='mb-10 text-center'>
			<h1 className='mb-4 font-Sodo__semibold text-2xl lg:text-3xl'>{title}</h1>
			<p className='w-3/5 mx-auto font-Sodo__regular text-sm lg:text-base'>
				{description}
			</p>
		</div>
	);
}

export default HeadingTitle;
