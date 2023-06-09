import { motion, AnimatePresence } from "framer-motion";

interface Props {
	genders: string[];
	colors: string[];
	types: string[];
	gender: string;
	color: string;
	type: string;
	setGender: React.Dispatch<React.SetStateAction<string>>;
	setType: React.Dispatch<React.SetStateAction<string>>;
	setColor: React.Dispatch<React.SetStateAction<string>>;
}

const ACTIVE_TYPE =
	"p-3 cursor-pointer text-xs mt-1 bg-slate-900 border border-slate-900 text-white rounded-lg hover:bg-slate-800 duration-200 ease-in-out";
const TYPE =
	"p-3 cursor-pointer text-xs mt-1 bg-white text-slate-900  rounded-lg hover:bg-slate-900 hover:text-white border border-slate-900 duration-200 ease-in-out";

const SideFilter: React.FC<Props> = ({ types, type, genders, gender, color, colors, setColor, setGender, setType }) => {
	const onChangeCallback = (e: any) => {
		setGender(e.target.value);
	};

	return (
		<AnimatePresence>
			<motion.aside 
				className="md:sticky md:top-10 w-full md:w-2/5 lg:w-1/5 h-full px-2 p-3 md:px-5 bg-white"
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
			>
				<div className="border-t border-b py-5">
					<h1 className="text-sm">Types</h1>
					<div className="mt-2">
						{types.length > 0 ? (
							types.map((t, idx) => {
								return (
									<div
										key={idx}
										className={t === type ? ACTIVE_TYPE : TYPE}
										onClick={() => setType(t)}
									>
										<p>{t}</p>
									</div>
								);
							})
						) : (
							<p>No Available Types</p>
						)}
					</div>
				</div>
				<div className="border-b py-5">
					<h1 className="text-sm">Gender</h1>
					<div className="mt-2">
						{genders.length > 0 ? (
							<select className="p-3 border border-slate-900 w-full rounded-lg text-xs" onChange={onChangeCallback}>
								{genders.map((g, idx) => {
									return (
										<option key={idx} selected={g === gender}>
											{g}
										</option>
									);
								})}
							</select>
						) : (
							<p>No Available Gender</p>
						)}
					</div>
				</div>
				<div className="border-b py-5">
					<h1 className="text-sm">Colors</h1>
					<div className="mt-2 grid grid-cols-3 gap-1">
						{colors.length > 0 ? (
							colors.map((c, idx) => {
								return (
									<div key={idx} className={color === c ? ACTIVE_TYPE : TYPE} onClick={() => setColor(c)}>
										{c}
									</div>
								);
							})
						) : (
							<p>No Available Colors</p>
						)}
					</div>
				</div>
			</motion.aside>
		</AnimatePresence>
	);
};

export default SideFilter;
