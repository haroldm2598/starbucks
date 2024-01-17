import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';

import { handleMenuClick } from '../action/reducer/starbuckSlice';
import Logo from '../assets/images/starbucksLogo.svg';

function Navbar() {
	const { navLinks, isClick } = useSelector((state) => state.starbsTemplate);
	const dispatch = useDispatch();

	const hideScroll = document.querySelector('body');
	isClick
		? hideScroll.classList.add('noscroll')
		: hideScroll.classList.remove('noscroll');

	return (
		<div className='max-w-full p-4 lg:px-8 lg:py-4 flex justify-between items-center'>
			<div className='flex items-center gap-10'>
				<Link to='/'>
					<img
						src={Logo}
						alt='starbucks logo'
						className='h-12 w-12 cursor-pointer'
					/>
				</Link>

				<ul className='hidden lg:flex gap-8'>
					{navLinks.map((item, index) => (
						<li
							key={index}
							className='font-Sodo__bold text-sm uppercase cursor-pointer navbarContent__links  navbarContent__grow '
						>
							<NavLink to={item.path}>{item.name}</NavLink>
						</li>
					))}
				</ul>
			</div>

			<div className='hidden lg:flex items-center gap-10'>
				<div className='flex items-center gap-4'>
					<FaLocationDot />
					<h1 className='font-Sodo__semibold text-sm'>Find a store</h1>
				</div>

				<div className='[&>*]:mr-5'>
					<button className='px-5 btn btn-sm btn-outline rounded-full'>
						Sign in
					</button>

					<button className='px-5 btn btn-sm btn-neutral text-white rounded-full last:mr-0'>
						Join now
					</button>
				</div>
			</div>

			{/* MENU MOBILE RESPONSIVE */}
			<div className='flex lg:hidden'>
				<div
					onClick={() => dispatch(handleMenuClick(isClick))}
					className='cursor-pointer'
				>
					{isClick ? <IoClose size={50} /> : <IoMenuOutline size={50} />}
				</div>
				<AnimatePresence>
					{isClick && (
						<motion.div
							className='absolute z-50 top-[12.8%] right-0 h-full w-full bg-black bg-opacity-70'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.3, type: 'tween', stiffness: 120 }}
						>
							<motion.nav
								className='absolute z-50 top-[0] right-0 bg-base-100 w-[80%] md:w-96 h-full'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 0.3, type: 'tween', stiffness: 120 }}
							>
								<ul className='px-4 py-6 flex flex-col gap-10'>
									{navLinks?.map((item, index) => (
										<motion.li
											key={index}
											className='font-Sodo__bold text-sm uppercase cursor-pointer'
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.4, type: 'tween', stiffness: 90 }}
										>
											{item}
										</motion.li>
									))}

									<hr />

									<div className='[&>*]:mr-5'>
										<motion.button
											className='px-5 btn btn-sm btn-outline rounded-full'
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.6, type: 'tween', stiffness: 120 }}
										>
											Join now
										</motion.button>

										<motion.button
											className='px-5 btn btn-sm btn-neutral text-white rounded-full last:mr-0'
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.6, type: 'tween', stiffness: 120 }}
										>
											Join now
										</motion.button>
									</div>

									<div className='flex items-center gap-2'>
										<FaLocationDot />
										<h1 className='font-Sodo__semibold text-sm'>
											Find a store
										</h1>
									</div>
								</ul>
							</motion.nav>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default Navbar;
