import { Card, Typography } from '@material-tailwind/react';

export function TableStripedRows({ TABLE_HEAD, TABLE_ROWS }) {
	return (
		<Card className="h-full w-full overflow-auto custom-scrollbar">
			<table className="w-full min-w-max table-auto text-left">
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
					{TABLE_ROWS.map(({ col1, col2, col3, col4 }, index) => (
						<tr key={col1} className="even:bg-blue-gray-50/50">
							<td className="p-4">
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal"
								>
									{col1}
								</Typography>
							</td>
							<td className="p-4">
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal"
								>
									{col2} %
								</Typography>
							</td>
							<td className="p-4">
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal"
								>
									{col3}
								</Typography>
							</td>
							<td className="p-4">
								<Typography
									as="a"
									href="#"
									variant="small"
									color="blue-gray"
									className="font-medium"
								>
									{col4}
								</Typography>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Card>
	);
}
