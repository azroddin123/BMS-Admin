import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, tags }: any) => {
	// console.log({tags})
	// let tags: any[] = [];
	// useEffect(() => {
	// 	fetch(`/api/accounts/meta-tags/0`, {
	// 		method: "GET",
	// 		headers: {
	// 			Authorization:
	// 				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			res.data.map((e: any) => {
	// 				tags.push(e.name);
	// 			});
	// 		});
	// }, []);

	return (
		<div className="flex flex-col min-h-screen gap-2 max-w-[1250px] m-auto">
			<Head>
				<title>BMS | Enhance your natural beauty</title>
				<meta
					name="description"
					content="Grow with us, Glow with us | Makeup and Training"
				/>
			</Head>
			<Header />
			<main className="flex-1 px-2 md:px-4">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
// export async function getStaticProps(context: any) {
// 	let { id } = context.params;
// 	let data = await fetch(`/api/accounts/meta-tags/0`, {
// 				method: "GET",
// 				headers: {
// 					Authorization:
// 						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
// 				},
// 			})
// 	let artistsData = await data.json();

	
// 	return {
// 		// Passed to the page component as props
// 		props: {
// 			tags: 'Hello'
// 		},
// 		revalidate: 10,
// 	};
// }
