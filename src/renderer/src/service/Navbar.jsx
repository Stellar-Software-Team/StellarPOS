import { useEffect, useRef, useState } from 'react';
import coffeeLogo from '../assets/imgs/catpro.png';
import profileIcon from '../assets/imgs/trump.jpg';

function Navbar() {
	const [searchValue, setSearchValue] = useState('');
	const [imageWidth, setImageWidth] = useState(0);
	const imgRef = useRef(null);

	useEffect(() => {
		setImageWidth(imgRef.current.clientWidth);
	}, [imgRef.current]);
	return (
		<>
			<nav className="">
				<div className=" grid grid-cols-2 w-full items-center py-4">
					<div className="flex flex-row">
						<div className="flex items-center flex-shrink-0">
							<img
								src={coffeeLogo}
								ref={imgRef}
								onLoad={() => setImageWidth(imgRef.current.clientWidth)}
								alt="coffeeLogo"
								className="max-w-28 max-h-16 ml-4 rounded-sm"
							/>
						</div>
						<div className="flex-grow flex items-center justify-left mt-4 md:mt-0 w-12 md:w-auto col-span-3">
							<div className="flex bg-white rounded-lg p-2 w-full mx-10 max-w-3xl items-center justify-center h-14">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="h-6 w-6 text-gray-400 ml-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
									/>
								</svg>
								<input
									className="flex-grow px-4 mt-[4px] bg-white rounded-lg text-black focus:outline-none"
									placeholder="Search Coffee, Food..."
									type="text"
									value={searchValue}
									onChange={(e) => setSearchValue(e.target.value)}
								/>
							</div>
						</div>
					</div>

					<div className="flex items-center space-x-4 mt-4 md:mt-0 justify-end mr-[4rem]">
						<ul className="flex items-center gap-4 w-[30%] h-full space-x-12">
							<li className="bg-white p-2 rounded-3xl text-gray-800">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="h-8 w-8"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
									/>
								</svg>
							</li>
							<li className="bg-white p-2 rounded-3xl text-gray-800">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="h-8 w-8"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									/>
								</svg>
							</li>
						</ul>
						<div className="flex justify-center space-x-2 items-center">
							<div className="bg-white p-2 rounded-full text-gray-800">
								<img
									src={profileIcon}
									alt="Profile Icon"
									className="max-w-12 max-h-10"
								/>
							</div>
							<span className="text-black text-xl">Trump</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
