import React from 'react';
import { Button } from '@material-tailwind/react';

function PreService() {
	const cashRegisters = [
		{
			id: 1,
			name: 'Main Register',
			status: 'Opened',
			createdAt: new Date(),
			createdBy: 'John Doe',
			balance: 1000,
			currency: 'MXN',
			type: 'Product',
		},
		{
			id: 2,
			name: 'Secondary Register',
			status: 'Opened',
			createdAt: new Date(),
			createdBy: 'John Doe',
			balance: 1000,
			currency: 'MXN',
			type: 'Service',
		},
		{
			id: 3,
			name: 'Fast Register',
			status: 'Opened',
			createdAt: new Date(),
			createdBy: 'John Doe',
			balance: 1000,
			currency: 'MXN',
			type: 'Service',
		},
	];
	return (
		<>
			<section className="flex flex-col  h-full">
				<div className="flex basis-[15%] ">
					<div className="flex flex-col basis-[25%] justify-center items-center ">
						<div className="w-96 flex flex-col ">
							<Button
								fullWidth
								className="flex justify-center items-center gap-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 4.5v15m7.5-7.5h-15"
									/>
								</svg>
								Create New Cash Register
							</Button>
							<div className="flex gap-2 mt-2">
								<Button fullWidth variant="outlined">
									Opened
								</Button>
								<Button fullWidth>Closed </Button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap basis-[85%] gap-4 p-4 rounded-3xl">
					{cashRegisters.map((cashRegister) => (
						<PreServiceCashRegister
							key={cashRegister.id}
							cashRegister={cashRegister}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default PreService;

function PreServiceCashRegister({ cashRegister }) {
	return (
		<div className=" border border-gray-400 shadow-lg bg-gray-200 w-[35rem] h-48 rounded-3xl flex flex-col justify-top  px-12">
			<div className="mt-8 space-y-2">
				<h1 className="text-2xl font-bold">{cashRegister.name}</h1>
				<div className=" bg-green-600 w-24 rounded-3xl py-1 px-4">
					<h1 className="text-white font-bold">{cashRegister.status}</h1>
				</div>
				<div className="flex justify-between">
					<p className="text-gray-700">
						<span className="font-bold">Created at:</span>{' '}
						{cashRegister.createdAt.toLocaleDateString()}
					</p>
					<p className="text-gray-700">
						<span className="font-bold">Type:</span> {cashRegister.type}
					</p>
				</div>
				<div className="flex justify-between">
					<p className="text-gray-900 ">
						<span className="font-bold">Created by:</span>{' '}
						{cashRegister.createdBy}
					</p>
					<p className="text-gray-900">
						<span className="font-bold">Balance:</span> {cashRegister.balance}{' '}
						<span className="text-gray-900">{cashRegister.currency}</span>
					</p>
				</div>
			</div>
		</div>
	);
}
