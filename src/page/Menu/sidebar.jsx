import { useSelector } from 'react-redux';

function Sidebar() {
	const { menuContent } = useSelector((state) => state.starbsTemplate);

	return (
		<div className='hidden lg:block'>
			{menuContent.map((item, index) => (
				<ul key={index} className='mb-4 [&>*]:mb-4'>
					<li className='font-Sodo__semibold text-xl'>{item.title}</li>
					{item.listItem.map((menu, index) => (
						<li
							key={index}
							className='w-40 font-Sodo__regular text-base opacity-75'
						>
							{menu.name}
						</li>
					))}
				</ul>
			))}
		</div>
	);
}

export default Sidebar;
