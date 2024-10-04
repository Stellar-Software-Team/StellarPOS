import React from 'react';
import producto from '../assets/imgs/cafeProducto.jpg';

function CartItem({ itemData }) {
	return (
		<div className="grid grid-cols-2">
			<div className="grid grid-cols-2 mr-2">
				<div className="max-w-24 max-h-24">
					<img src={producto} className="w-full h-full rounded-[1.5rem] " />
				</div>
				<div className="grid grid-rows-2 items-center">
					<h1 className="text-xl">Espresso</h1>
					<h3 className="text-xl font-bold">$2.6</h3>
				</div>
			</div>
			<div className="grid grid-cols-3 items-center mr-8">
				<div className="flex justify-end ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</div>

				<div className="flex justify-center ">
					<h2 className="text-xl">1</h2>
				</div>

				<div className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
