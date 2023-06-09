import "./globals.css";

import { CartProvider } from "./hooks/useCart";
import BreadCrumbs from "./components/breadcrumbs";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
	title: "Footloose",
	description: "A Shoe Retail Shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<CartProvider>
					<BreadCrumbs />
					<Navbar />
					{children}
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
