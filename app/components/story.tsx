
import { useRouter } from "next/navigation";

const Story: React.FC = () => {
	const router = useRouter();

	return (
		<div className="w-full p-5 mt-10">
			<div className="w-full my-10 p-2 text-center flex flex-col items-center justify-center">
				<h1 className="text-4xl font-bold">THE STORY</h1>
				<p className="mt-2">
					Footloose, a dependable shoe reseller of well-known brands like Nike, Adidas and many more.
				</p>
				<div className="mt-5">
					<button 
						className="py-3 px-10 rounded-full bg-slate-900 text-sm text-white"
						onClick={() => router.replace("/story")}
					>
						Read More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Story;
