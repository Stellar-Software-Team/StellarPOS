import React from 'react';

function Item({ data }) {
	return (
		<div className="text-md text-gray-800 flex flex-row justify-left">
			<div className="w-4 mt-[3px] flex items-center justify-center h-4 bg-black rounded-full text-white"></div>
			<div className="border border-gray-200 ml-10 w-0 h-6"></div>
			<span className="flex ml-10 text-md font-semibold">{data.hour}</span>
			<div className="border border-gray-200 ml-10 w-0 h-6"></div>
			<span className="flex ml-10 text-md font-semibold">
				{data.quantity} $/h
			</span>
		</div>
	);
}

export default Item;
