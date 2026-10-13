/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const NavigationDots = ({ active }) => {
	return (
		<div className='app__navigation'>
			{['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
				(item, i) => (
					<a
						href={`#${item}`}
						key={item + i}
						className='app__navigation-dot'
						style={active === item ? { backgroundColor: '#313bac' } : {}}
						aria-label={`Navigate to ${item} section`}
					/>
				),
			)}
		</div>
	);
};

export default NavigationDots;
