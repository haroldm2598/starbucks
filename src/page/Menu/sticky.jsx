import { useEffect, useState } from 'react';

function Sticky() {
	const [sticky, setSticky] = useState('');

	useEffect(() => {
		window.addEventListener('scroll', isSticky);

		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	}, []);

	const isSticky = () => {
		const scrollTop = window.scrollY;
		const stickyClass = scrollTop >= 50 ? 'is-sticky' : '';
		setSticky(stickyClass);
	};

	return (
		<div className={`rewards w-full p-4 lg:px-8 ${sticky}`}>
			<div className='max-w-7xl mx-auto'>
				<h1 className='font-Sodo__bold text-sm text-white'>
					STARBUCKS® REWARDS
				</h1>
			</div>
		</div>
	);
}

export default Sticky;
