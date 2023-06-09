interface Props {
	title: string;
}

const TopBar: React.FC<Props> = ({ title }) => {
	return (
		<div className="w-full px-2 p-2 md:px-5 flex bg-white sticky top-0">
			<div>
				<h1 className="uppercase tracking-wider font-semibold">{title}</h1>
			</div>
		</div>
	);
};

export default TopBar;
