import { useEffect, useState } from 'react';

function Reward() {
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
		<div
			className={`rewards w-full p-4 lg:px-8 flex items-center justify-between shadow-xl ${sticky}`}
		>
			<h1 className='font-Sodo__bold text-sm text-white'>STARBUCKS® REWARDS</h1>

			<button className='block lg:hidden px-5 btn btn-sm btn-outline text-white rounded-full last:mr-0'>
				Join in the app
			</button>
		</div>
	);
}

export default Reward;
