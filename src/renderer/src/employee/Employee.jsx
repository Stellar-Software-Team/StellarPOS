import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import defaultUser from '../assets/imgs/user.png';

function Employee() {
	const employees = [
		{
			name: 'Josue',
			position: 'Marketing leader',
			email: 'josue@gmail.com',
			hiredDate: '19/08/24',
		},
		{
			name: 'Elsy Maria',
			position: 'Chikistrikis',
			email: 'maria@elsy.com',
			hiredDate: '19/08/24',
		},
	];
	return (
		<>
			<section className="w-full h-full bg-white shadow-md rounded-3xl flex flex-col font-mono">
				<nav className="flex flex-row m-6 justify-between">
					<div className="flex justify-center items-center gap-2 cursor-default">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="h-10"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
							/>
						</svg>
						<span className="text-3xl font-semibold">32</span>
						<span className="text-3xl "> Employees</span>
						<div className="bg-gray-200 rounded-md p-2 flex justify-center items-center">
							<span> +1 New Hire </span>
						</div>
					</div>
					<div className="flex flex-row gap-2">
						<div className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex justify-center items-center">
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
									d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</svg>
						</div>
						<div className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex justify-center items-center">
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
									d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
								/>
							</svg>
						</div>
						<button className="px-4 gap-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl py-2 flex flex-row justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
							<span className="text-lg">Add New Employee</span>
						</button>
					</div>
				</nav>
				<section className="m-6 flex flex-col ">
					<div>
						<nav className="flex flex-row gap-2 ">
							<div className="bg-black p-2 text-white rounded-2xl">
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
										d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
									/>
								</svg>
							</div>
							<div className="p-1 flex justify-center items-center">
								<h1 className="text-xl font-poppins">Your Employees</h1>
							</div>
						</nav>

						<div className="mt-4 h-10 w-full  flex justify-center items-center">
							<div className="flex flex-row ">
								<div className="flex flex-row items-center gap-4 cursor-pointer ">
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
											d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
										/>
									</svg>
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
											d="M15.75 19.5 8.25 12l7.5-7.5"
										/>
									</svg>

									<div className="bg-gray-100 rounded-lg p-2 w-10 h-10 flex justify-center items-center hover:bg-gray-200">
										<span>1</span>
									</div>
									<div className="bg-gray-100 rounded-lg p-2 w-10 h-10 flex justify-center items-center hover:bg-gray-200">
										<span>2</span>
									</div>

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
											d="m8.25 4.5 7.5 7.5-7.5 7.5"
										/>
									</svg>
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
											d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
										/>
									</svg>
								</div>
							</div>
						</div>

						<div className="mt-20 flex flex-wrap gap-2 overflow-auto">
							{employees.map((employee) => (
								<EmployeeCard props={employee} />
							))}
						</div>
					</div>
				</section>
			</section>
		</>
	);
}

function EmployeeCard({ props }) {
  return (
    <div className="h-[21rem] w-[18rem] bg-white rounded-3xl flex flex-col p-2">
      <div className="flex justify-between basis-1/2 w-full m-2">
        <div>
          <div className=" rounded-full mt-6 h-20 w-20 ">
            <img src={defaultUser} alt="UserProfilePic" className="rounded-full" />
          </div>
          <h1 className="text-xl font-semibold">{props.name}</h1>
          <small className="text-md text-gray-700">{props.position}</small>
        </div>
        <div className="mt-4 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>

			<div className="bg-white rounded-3xl basis-1/2 flex flex-col gap-2">
				<div className="flex m-4 justify-between">
					<div>
						<h6 className="text-gray-600 text-sm">Department</h6>
						<span className=" font-semibold">Design team</span>
					</div>
					<div>
						<h6 className="text-gray-600 text-sm">Hired date</h6>
						<span className=" font-semibold">7/27/13</span>
					</div>

					<div></div>
				</div>
				<div className="flex flex-col mx-4 w-full bg-">
					<div className="flex gap-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
							/>
						</svg>
						<span className="font-bold">Josue@email.com</span>
					</div>
					<div className="flex gap-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
							/>
						</svg>

						<span className="font-semibold">(+52) 6141414390</span>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default Employee;
