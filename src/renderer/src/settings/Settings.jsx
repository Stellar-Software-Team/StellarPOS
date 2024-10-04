import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Settings() {
	const labels = [
		'General',
		'Account',
		'Apparence',
		'Notifications',
		'Advanced Settings',
	];

	return (
		<>
			<section className="bg-gray-50 shadow-lg rounded-3xl h-full flex">
				<aside className="w-60 flex-col border-r md:flex">
					<div className="gap-2 flex items-center justify-left my-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-10"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
							/>
						</svg>

						<span className="font-bold text-3xl">Settings</span>
					</div>

					<nav className="gap-2 flex flex-col">
						<Link
							to="/Settings"
							className="flex items-center gap-2 rounded-md px-3 py-2 text-lg  transition-colors hover:bg-muted hover:text-foreground"
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
									d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
								/>
							</svg>
							General
						</Link>
						<Link
							to="Apparence"
							className="flex items-center gap-2 rounded-md px-3 py-2 text-lg  transition-colors hover:bg-muted hover:text-foreground"
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
									d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
								/>
							</svg>
							Apparence
						</Link>
						<Link
							to="PaymentMethod"
							className="flex items-center gap-2 rounded-md px-3 py-2 text-lg  transition-colors hover:bg-muted hover:text-foreground"
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
									d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
								/>
							</svg>
							Payment method
						</Link>
						<Link
							to="Service"
							className="flex items-center gap-2 rounded-md px-3 py-2 text-lg  transition-colors hover:bg-muted hover:text-foreground"
						>
							<svg
								fill="#000000"
								height="23px"
								width="23px"
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 512 512"
								xml:space="preserve"
							>
								<g>
									<g>
										<path
											d="M495.304,100.174c9.22,0,16.696-7.475,16.696-16.696V16.696C512,7.475,504.525,0,495.304,0H294.957
   c-9.22,0-16.696,7.475-16.696,16.696v66.783c0,9.22,7.475,16.696,16.696,16.696h50.087v44.522H222.609V94.609
   c0-9.22-7.475-16.696-16.696-16.696H105.739c-9.22,0-16.696,7.475-16.696,16.696v50.087H16.696C7.475,144.696,0,152.171,0,161.391
   c0,12.707,0,288.456,0,300.522C0,489.531,22.469,512,50.087,512h411.826C489.531,512,512,489.531,512,461.913
   c0-12.112,0-287.927,0-300.522c0-9.22-7.475-16.696-16.696-16.696h-50.087v-44.522H495.304z M122.435,111.304h66.783v100.174
   h-66.783V111.304z M478.609,461.913c0,9.206-7.49,16.696-16.696,16.696H50.087c-9.206,0-16.696-7.49-16.696-16.696v-83.478
   h133.565v50.087c0,9.22,7.475,16.696,16.696,16.696h144.696c9.22,0,16.696-7.475,16.696-16.696v-50.087h133.565V461.913z
    M200.348,411.826v-33.391h111.304v33.391H200.348z M478.609,178.087v166.956c-8.414,0-428.023,0-445.217,0V178.087h55.652v33.391
   h-6.24c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696c16.86,0,128.492,0,144.696,0
   c9.22,0,16.696-7.475,16.696-16.696c0-9.22-7.475-16.696-16.696-16.696h-4.891v-33.391
   C233.082,178.087,467.395,178.087,478.609,178.087z M378.435,144.696v-44.522h33.391v44.522H378.435z M311.652,66.783V33.391
   h166.957v33.391C462.224,66.783,328.241,66.783,311.652,66.783z"
										/>
									</g>
								</g>
								<g>
									<g>
										<path
											d="M426.874,211.556c-9.463,0.982-16.632,9.748-14.726,19.879c1.819,8.763,10.086,14.899,19.634,13.112
   c8.4-1.752,13.434-8.97,13.434-16.373C445.217,218.626,437.054,210.622,426.874,211.556z"
										/>
									</g>
								</g>
								<g>
									<g>
										<path
											d="M378.357,226.527c-0.926-8.919-8.76-15.842-18.265-14.97c-9.222,0.957-15.884,9.161-14.959,18.265
   c0.744,8.914,9.084,15.911,18.254,14.97C372.978,243.797,379.25,235.218,378.357,226.527z"
										/>
									</g>
								</g>
								<g>
									<g>
										<path
											d="M293.309,211.556c-8.298,0.86-15.048,7.841-15.048,16.618c0,8.943,7.285,16.696,16.696,16.696
   c9.198,0,16.696-7.482,16.696-16.696C311.652,218.333,303.246,210.645,293.309,211.556z"
										/>
									</g>
								</g>
								<g>
									<g>
										<path
											d="M445.139,293.309c-0.943-9.081-9.052-15.896-18.265-14.959c-8.998,0.75-16.699,9.382-14.726,19.868
   c1.687,8.13,8.959,14.097,18.02,13.357C439.691,310.586,446.037,302.053,445.139,293.309z"
										/>
									</g>
								</g>
								<g>
									<g>
										<path
											d="M378.112,291.695c-1.755-8.415-9.481-14.214-18.02-13.345c-9.002,0.751-16.672,9.523-14.726,19.868
   c1.687,8.13,8.959,14.097,18.02,13.357C372.965,310.58,380.002,301.791,378.112,291.695z"
										/>
									</g>
								</g>
								<g>
									<g>
										<path
											d="M293.309,278.35c-8.543,0.712-15.94,8.71-14.97,18.254c0.904,8.71,8.22,15.048,16.618,15.048
   c9.373,0,16.696-7.714,16.696-16.696C311.652,285.291,303.244,277.339,293.309,278.35z"
										/>
									</g>
								</g>
							</svg>
							Service
						</Link>
						<Link
							to="SettingsInventory"
							className="flex items-center gap-2 rounded-md px-3 py-2 text-lg  transition-colors hover:bg-muted hover:text-foreground"
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
									d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
								/>
							</svg>
							Inventory
						</Link>
						<Link
							to="Reporting"
							className="flex items-center gap-2 rounded-md px-3 py-2 text-lg  transition-colors hover:bg-muted hover:text-foreground"
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
									d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
								/>
							</svg>
							Reporting
						</Link>
						<Link
							to="Taxes"
							className="flex items-center gap-2 rounded-md px-3 py-2 text-lg  transition-colors hover:bg-muted hover:text-foreground"
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
									d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
								/>
							</svg>
							Taxes
						</Link>
						{/* <Link
              to="Account"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-lg  transition-colors hover:bg-muted hover:text-foreground"
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <span className="mt-1"> Account</span>
            </Link> */}
					</nav>
				</aside>
				<section className="flex-1 p-6 bg-gray-100">
					<Outlet />
				</section>
			</section>
		</>
	);
}

export default Settings;

function SettingsLabel() {
	return (
		<>
			<div className="gap-2 flex items-center mb-6">
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
						d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
					/>
				</svg>
				<span>Settings</span>
			</div>
		</>
	);
}
