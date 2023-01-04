import type { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { CONFIG } from "@libs/config";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export interface ILayout {
	title: string;
	children: ReactNode;
}

export const Layout: FC<ILayout> = ({ title, children }) => {
	const router = useRouter();

	return (
		<>
			<NextSeo
				title={title}
				canonical={`${CONFIG.SEO.publishDomain}${router.pathname}`}
			/>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};
