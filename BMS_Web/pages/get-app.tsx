import Card from "@/components/Layout/Card";
import Headline1 from "@/components/Layout/Typography/Headline1";
import Headline2 from "@/components/Layout/Typography/Headline2";
import Lead1 from "@/components/Layout/Typography/Lead1";
import Lead2 from "@/components/Layout/Typography/Lead2";
import Button from "@/components/formUI/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import TestCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
let url = "http://192.168.1.8:8000";


const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const ARR: any = [
	{ num: 4235, title: "Semianrs" },
	{ num: 141, title: "Workshops" },
	{ num: 21, title: "Cities" },
	{ num: 90, title: "Positive Feedback" },
];

const GetApp = ({testimonials = []}) => {
	console.log({})
	return (
		<>
			<section>
				<div className="relative flex flex-col-reverse md:flex-row">
					<Card
						style={{ flex: "1", textAlign: "center", paddingBottom: "1rem" }}
						className=" flex justify-between w-[100%] p-[3.75rem!important]"
					>
						<div className="flex flex-col gap-8">
							<Headline1 text="Experience the Magic" className={"text-left"} />
							<Lead1 className="text-left">
								Our makeup service is all about empowering our clients <br /> to
								feel confident and beautiful.
							</Lead1>
							<Link
								href="https://play.google.com/store/apps"
								// href={"https://play.google.com/store/apps/details?id=" + AppName}
							>
								<Image
									src="/images/playstore.png"
									alt="Playstore"
									width={200}
									height={80}
									className="mt-4 self-start"
								/>
							</Link>
						</div>
						<div></div>
					</Card>
					<Image
						src="/images/get-app.png"
						alt="Hero Image"
						width={600}
						height={400}
						className="md:absolute bottom-0 right-0"
						priority
					/>
					{/* <img
						src="images/get-app.png"
						className="w-[600px] md:absolute bottom-0 right-0"
						alt=""
					/> */}
				</div>
			</section>
			<section>
				<Headline1 className={"text-center"}>Our Features</Headline1>
				<div className="features-item-wrapper flex gap-[1.5rem] pt-8 flex-col md:flex-row flex-wrap">
					<div className="features-item flex flex-col items-center text-center flex-[30%]">
						<Image
							src="/images/schedule.png"
							alt="Hero Image"
							width={150}
							height={150}
							className="mb-8"
						/>
						{/* <img
							src="/images/schedule.png"
							style={{ width: "150px", aspectRatio: "1", marginBottom: "1rem" }}
						/> */}
						<Headline2 text="Schedule Appointments" className="pb-6" />
						<Lead2 className="max-w-[300px]">
							Our makeup service is all about empowering our clients to feel
							confident and beautiful.
						</Lead2>
					</div>
					<div className="features-item flex flex-col items-center text-center flex-[30%]">
						<Image
							src="/images/gallery.png"
							alt="Hero Image"
							width={150}
							height={150}
							className="mb-8"
						/>
						{/* <img
							src="/images/gallery.png"
							style={{ width: "150px", aspectRatio: "1", marginBottom: "1rem" }}
						/> */}
						<Headline2 text="Make Own Gallary" className="pb-6" />
						<Lead2 className="max-w-[300px]">
							Our makeup service is all about empowering our clients to feel
							confident and beautiful.
						</Lead2>
					</div>
					<div className="features-item flex flex-col items-center text-center flex-[30%]">
						<Image
							src="/images/storage.png"
							alt="Hero Image"
							width={150}
							height={150}
							className="mb-8"
						/>
						{/* <img
							src="/images/storage.png"
							style={{ width: "150px", aspectRatio: "1", marginBottom: "1rem" }}
						/> */}
						<Headline2 text="Get Free Storage" className="pb-6" />
						<Lead2 className="max-w-[300px]">
							Our makeup service is all about empowering our clients to feel
							confident and beautiful.
						</Lead2>
					</div>
					<div className="features-item flex flex-col items-center text-center flex-[30%]">
						<img
							src="/images/info.png"
							style={{ width: "150px", aspectRatio: "1", marginBottom: "1rem" }}
						/>
						<Headline2 text="Get Free Advertisement" className="pb-6" />
						<Lead2 className="max-w-[300px]">
							Our makeup service is all about empowering our clients to feel
							confident and beautiful.
						</Lead2>
					</div>
				</div>
			</section>
			<section className="clients-wrapper">
				<Headline1 text="Our Clients" className="font-normal" />
				<div className="p-4">
					<TestCarousel responsive={responsive} className="z-1">
						{testimonials.map((e: any) => (
							<div key={e.id} className="client-card w-[86vw] md:w-[46vw]">
								<div className="w-[60px] h-[60px] client-header flex gap-4 items-center">
									<div className="relative w-[60px] h-[60px]"
									style = {{
										flex : '0 0 60px'
									}}
									>
										<img
											src={url+ e.user?.image}
											alt="Hero Image"
											// fill={true}
											className="rounded-full"
											loading="lazy"
											
										/>
									</div>
									<div className="flex-1">
										<p className="text-[#993232] text-1xl min-w-[300px] ">{e.user?.first_name} {e.user?.last_name}</p>
										<p className="text-gray-600 text-[14px]">{e.user?.city}</p>
									</div>
								</div>
								<div className="client-main text-[18px] mt-4 text-gray-800 text-left h-[160px] max-w-[70vw] md:max-w-[500px]">
									{e.description}
								</div>
								<a
									href={"tel:+" + e.user?.mob_num}
									className="bg-gray-700 text-white block rounded-lg p-3 mt-3 max-w-[fit-content] m-auto "
								>
									Contact Me
								</a>
							</div>
						))}
						
					</TestCarousel>
				</div>
			</section>
		</>
	);
};

export async function getStaticProps(context: any) {

	let testimonialsData = await fetch(`${url}/accounts/testimonials`, {
		method: "GET",
		headers: {
			Authorization:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
		},
	});
	let testimonials = await testimonialsData.json();


	return {
		props: {
			testimonials: testimonials.data,
		},
		revalidate: 60
	};
}


export default GetApp;
