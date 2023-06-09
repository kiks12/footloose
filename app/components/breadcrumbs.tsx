const LINKS = [
	{ name: "Join Us", href: "#" },
	{ name: "Help", href: "#" },
	{ name: "Order Now", href: "#" },
];

const BreadCrumbs: React.FC = () => {
	return (
		<div className="w-screen text-xs">
			<div className="flex justify-end">
				<ul className="flex list-none">
					{LINKS.map((item, idx) => {
						return (
							<a key={idx} className="p-2" href={item.href}>
								<li>{item.name}</li>
							</a>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default BreadCrumbs;
