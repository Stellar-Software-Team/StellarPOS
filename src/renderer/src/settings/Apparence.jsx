import React, { useState } from 'react';
import {
	Switch,
	Select,
	Option,
	Input,
	Textarea,
	Checkbox,
	Typography,
	Button,
} from '@material-tailwind/react';

function Apparence() {
	const [isChecked, setIsChecked] = useState(false);
	const handleSwitchChange = (event) => {
		const newCheckedState = event.target.checked;
		setIsChecked(newCheckedState);
		console.log(isChecked);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<header className="mb-8">
				<h1 className="text-2xl font-bold">Apparence Settings</h1>
			</header>
			<section className="flex flex-col space-y-8 overflow-auto h-[54rem] custom-scrollbar">
				<div className="bg-white rounded-2xl shadow-md p-6">
					<h1 className="font-bold text-xl">General Apparence</h1>
					<span className="text-gray-500">
						Update the view of the application
					</span>

					<div className="grid grid-cols-2 gap-6 mt-8">
						<div className="flex  items-end gap-2">
							<div className="grid gap-2">
								<h1 className="font-bold text-lg">Theme Mode</h1>
								<Select
									label=""
									//           value={value}
									// onChange={(val) => setValue(val)}
									variant="outlined"
									className="text-black  !border-black"
								>
									<Option className="text-black">White Theme</Option>
									<Option className="text-black">Dark Theme</Option>
								</Select>
							</div>
							<div className="grid gap-2 ">
								<h1 className="font-bold text-lg">Palette</h1>
								<Select
									label=""
									//           value={value}
									// onChange={(val) => setValue(val)}
									variant="outlined"
									className="text-black border-black"
								>
									<Option className="text-black">Coffee</Option>
									<Option className="text-black">Moderm UI</Option>
								</Select>
							</div>
						</div>

						<div className="grid gap-2">
							<h1 className="font-bold text-lg">Animations</h1>
							<Checkbox
								label={
									<div>
										<Typography color="blue-gray" className="font-medium">
											Activate
										</Typography>
										<Typography
											variant="small"
											color="gray"
											className="font-normal"
										>
											Animations will be displayed by default
										</Typography>
									</div>
								}
								containerProps={{
									className: '-mt-5',
								}}
							/>
						</div>
						<div className="grid gap-2">
							<h1 className="font-bold text-lg">Notifications</h1>
							<Checkbox
								label={
									<div>
										<Typography color="blue-gray" className="font-medium">
											Activate
										</Typography>
										<Typography
											variant="small"
											color="gray"
											className="font-normal"
										>
											Notifications will be displayed by default
										</Typography>
									</div>
								}
								containerProps={{
									className: '-mt-5',
								}}
							/>
						</div>
					</div>
					<div className="flex justify-start mt-4">
						<Button size="sm">Save</Button>{' '}
					</div>
				</div>
			</section>
		</>
	);
}

export default Apparence;
