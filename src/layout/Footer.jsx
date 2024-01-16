import { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';

import { handleQuestionClick } from '../action/reducer/starbuckSlice';

function Footer() {
	const { footerLinks, isQuestionClick } = useSelector(
		(state) => state.starbsTemplate
	);
	const dispatch = useDispatch();

	return (
		<section className='py-12'>
			<hr className='w-full h-[0.125rem] border-0 bg-black opacity-10' />
			<div className='hidden px-4 py-8 lg:px-8 lg:py-12 lg:grid  lg:grid-cols-7 gap-4 lg:gap-8'>
				{footerLinks[0].intro.map((item, index) => (
					<div key={index}>
						<h1 className='w-96 mb-4 font-Sodo__regular text-[1.188rem]'>
							{item.title}
						</h1>
						{item.content.map((contents, index) => (
							<p key={index} className='font-Sodo__regular opacity-75 mb-3'>
								{contents}
							</p>
						))}
					</div>
				))}
			</div>

			<div className='block lg:hidden'>
				{footerLinks[0].intro.map((item, index) => (
					<div
						key={index}
						className={`${
							isQuestionClick === index ? 'collapse-open' : 'collapse-close'
						} collapse collapse-arrow px-4 flex flex-col`}
						onClick={() => dispatch(handleQuestionClick(index))}
					>
						<h1 className='collapse-title w-96 mb-4 font-Sodo__regular text-[1.188rem]'>
							{item.title}
						</h1>

						<div
							className={`collapse-content ${
								isQuestionClick === index ? 'block' : 'hidden'
							}`}
						>
							{item.content?.map((contents, index) => (
								<h2 key={index} className=' font-Sodo__regular opacity-75 mb-3'>
									{contents}
								</h2>
							))}
						</div>
					</div>
				))}
			</div>

			<div className='px-4 lg:px-8 lg:py-12 [&>*]:mb-8'>
				<hr className='w-full h-[0.125rem] border-0 bg-black opacity-10' />

				<div className='flex flex-row gap-4'>
					{footerLinks[0].icons.map((item, index) => (
						<IconContext.Provider key={index} value={{ className: 'h-8 w-8' }}>
							<h1>{item}</h1>
						</IconContext.Provider>
					))}
				</div>

				<div className='flex flex-col lg:flex-row gap-4'>
					{footerLinks[0].outro.map((item, index) => (
						<Fragment key={index}>
							<h1 className='font-Sodo__regular text-sm lg:text-base'>
								{item}
							</h1>
							<span className='hidden lg:block'>|</span>
						</Fragment>
					))}
				</div>

				<h6 className='font-Sodo__regular text-[0.813rem] lg:text-sm opacity-70'>
					© 2024 Starbucks Coffee Company. All rights reserved.
				</h6>
			</div>
		</section>
	);
}

export default Footer;
