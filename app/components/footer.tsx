const LEFT_LINKS = [
	{ name: "Become a Member", href: "#" },
	{ name: "Shop Now", href: "/shop" },
	{ name: "Send us Feedback", href: "#" },
];
const MIDDLE_LINKS = [
	{ name: "Order Status", href: "#" },
	{ name: "Delivery", href: "#" },
	{ name: "Payment Options", href: "#" },
	{ name: "Contact Us", href: "#" },
];
const RIGHT_LINKS = [
	{ name: "History", href: "#" },
	{ name: "Facebook", href: "https://www.facebook.com/Peng.com.ph" },
	{ name: "Email", href: "mailto:Alfievargas11@gmail.com" },
];
const BOTTOM_LINKS = [
	{ name: "Guides", href: "#" },
	{ name: "Terms of Sale", href: "#" },
	{ name: "Terms of Use", href: "#" },
	{ name: "Privacy Policy", href: "#" },
];

const Footer: React.FC = () => {
	return (
		<footer className="w-screen text-sm bg-slate-900 text-white pt-20 pl-10 pr-10">
			<div className="w-100 my-10 mx-2 md:mx-24 flex md:flex-row flex-col justify-between items-start">
				<div className="flex lg:flex-row">
					<ul className="list-none">
						<li>ACTIONS</li>
						{LEFT_LINKS.map((item, idx) => {
							return (
								<a key={idx} className="p-2 text-xs" href={item.href}>
									<li>{item.name}</li>
								</a>
							);
						})}
					</ul>
					<ul className="ml-20 list-none">
						<li>GET HELP</li>
						{MIDDLE_LINKS.map((item, idx) => {
							return (
								<a key={idx} className="p-2 text-xs" href={item.href}>
									<li>{item.name}</li>
								</a>
							);
						})}
					</ul>
				</div>
				<div>
					<ul className="md:ml-20 mt-5 md:mt-0 list-none">
						<li>ABOUT US</li>
						{RIGHT_LINKS.map((item, idx) => {
							return (
								<a key={idx} className="p-2 text-xs" href={item.href}>
									<li>{item.name}</li>
								</a>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="flex flex-col md:flex-row  justify-between items-center mx-2 md:mx-24 py-2 text-slate-400">
				<div>
					<p>Philippines</p>
				</div>
				<div>
					<ul className="flex list-none">
						{BOTTOM_LINKS.map((item, idx) => {
							return (
								<a key={idx} className="p-2 text-xs" href={item.href}>
									<li>{item.name}</li>
								</a>
							);
						})}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
