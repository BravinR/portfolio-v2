import { Footer } from './Footer';
import NavBar from './NavBar';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="overflow-hidden bg-[#030014] ">
			<NavBar />
			<main className="dark z-10 m-auto max-w-[100rem] dark:text-white">{children}</main>
			<Footer />
		</div>
	);
}