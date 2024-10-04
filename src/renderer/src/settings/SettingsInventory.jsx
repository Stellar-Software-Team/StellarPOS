import React from 'react';
import {
	Switch,
	Select,
	Option,
	Input,
	Textarea,
	Checkbox,
	Typography,
	Button,
	Card,
} from '@material-tailwind/react';
import { TableStripedRows } from '../components/TableStripedRows';

const TABLE_HEAD = ['Category Name', ''];

const TABLE_ROWS = ['Food', 'Cosmetics', 'Ingredient'];

function SettingsInventory() {
	return (
		<div>
			<header className="mb-8">
				<h1 className="text-2xl font-bold">Inventory Settings</h1>
			</header>
			<section className="flex flex-col space-y-8 overflow-auto h-[54rem] custom-scrollbar">
				<div className="bg-white rounded-2xl shadow-md p-6">
					<h1 className="font-bold text-xl">General inventory configuration</h1>
					<span className="text-gray-500">
						Update your inventory configuration
					</span>

					<div className="grid grid-cols-2 gap-6 mt-8">
						<div className="grid gap-2 ">
							<div className="relative flex w-full max-w-[24rem]">
								<Input
									type="text"
									label="Add Category"
									// value={email}
									// onChange={onChange}
									className="pr-20"
									containerProps={{
										className: 'min-w-0',
									}}
								/>
								<Button
									size="sm"
									// color={email ? "gray" : "blue-gray"}
									// disabled={!email}
									className="!absolute right-1 top-1 rounded"
								>
									Add
								</Button>
							</div>
							<br />
							<Card className="w-[55%] h-full overflow-auto">
								<table className=" min-w-max table-auto text-left">
									<thead>
										<tr>
											{TABLE_HEAD.map((head) => (
												<th
													key={head}
													className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
												>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal leading-none opacity-70"
													>
														{head}
													</Typography>
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{TABLE_ROWS.map((item, index) => (
											<tr key={index} className="even:bg-blue-gray-50/50">
												<td className="p-4">
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{item}
													</Typography>
												</td>
												<td>
													<Typography
														as="a"
														href="#"
														variant="small"
														color="blue-gray"
														className="font-medium"
													>
														<button>
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
																	d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
																/>
															</svg>
														</button>
													</Typography>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</Card>
						</div>

						<div className="grid gap-2 ">
							<div>
								<Checkbox
									defaultChecked
									label={
										<div>
											<Typography color="blue-gray" className="font-medium">
												Automatically generate barcode
											</Typography>
											<Typography
												variant="small"
												color="gray"
												className="font-normal"
											>
												This option will allow the creation of bar-codes when a
												product is uploaded
											</Typography>
										</div>
									}
									containerProps={{
										className: '-mt-5',
									}}
								/>
							</div>
							<div></div>
						</div>
					</div>
					<div className="flex justify-start mt-4">
						<Button size="sm">Save</Button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default SettingsInventory;
