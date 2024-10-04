import React from 'react';
import DateRangePicker from './DateRangePicker';
import Icon from '../components/Icon';
function HomeNavbar() {
	return (
		<>
			<nav className="flex items-center justify-between p-4 shadow-sm">
				<section className="flex items-center space-x-4">
					<NavItem number="01" label="Overview" />
					<NavItem number="02" label="PPC" />
					<NavItem number="03" label="Year to year" />
					<NavItem number="04" label="Customize" />
				</section>
				<section className="flex items-center space-x-4">
					<DateRangePicker />
					<Icon name="folder" />
					<Icon name="add" />
				</section>
			</nav>
		</>
	);
}

const NavItem = ({ number, label }) => (
	<div className="flex items-center space-x-2">
		<div className="border border-gray-700 rounded-full w-8 h-8 justify-center items-center flex">
			<span className="text-lg font-semibold text-gray-500">{number}</span>
		</div>
		<span className="text-lg text-black font-semibold">{label}</span>
	</div>
);

export default HomeNavbar;
