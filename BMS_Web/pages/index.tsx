import React, { useEffect, useState } from "react";
import styles from "@/styles/home.module.scss";
import Headline1 from "@/components/Layout/Typography/Headline1";
import Button from "@/components/formUI/Button";
import Lead1 from "@/components/Layout/Typography/Lead1";
import Card from "@/components/Layout/Card";
import Headline2 from "@/components/Layout/Typography/Headline2";
import Lead2 from "@/components/Layout/Typography/Lead2";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import "node_modules/react-responsive-carousel/lib/styles/carousel.css";

import TestCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ARR: any = [
	{ num: 4235, title: "Semianrs" },
	{ num: 141, title: "Workshops" },
	{ num: 21, title: "Cities" },
	{ num: 90, title: "Positive Feedback", per : true },
];
import Marquee from "react-fast-marquee";
import Head from "next/head";


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

let url = "http://192.168.1.8:8000";

const HomePage = ({ banners, testimonials , keywords}: any) => {
	console.log("logs",{ banners, testimonials, keywords});

	return (
		<>
		<Head>
				<meta name="keywords" content={keywords} />
				
			</Head>
			<section className={styles.heroSection + " flex-col sm:flex-row "}>
				<div className="min-h-[204px] md:min-h-[400px]">
					<Carousel>
						{banners?.length &&
							banners?.map(function (e: any) {
								return (
										<a key={e.id} href={e.video_url} target = "_blank" >
											<div className="relative object-cover h-[204px] md:h-[400px]">
												<img
													alt={e.title || e.description || "Hero Image"}
													src={"http://192.168.1.8:8000" + e.image}
												/>
											</div>
										</a>
							
								);
							})}
					</Carousel>
					{/* <div className="relative object-cover w-[400px] h-[204px] md:h-[400px]">
							<Image src="/images/hero.png" fill={true} alt="Hero Image" />
						</div> */}
				</div>

				<div className="py-4 px-4 md:py-14 md:px-14 text-center">
					<Headline1
						className={"mt-8"}
						isH1
						// eslint-disable-next-line react/no-children-prop
						children={
							<span>
								Enhance Your
								<br /> Natural Beauty
							</span>
						}
					/>
					<div className="flex gap-8 md:pt-12 py-4 flex-col md:flex-row self-center items-center">
						<Button text={"GET ENQUIRY"} link="/#get-enquiry" />
						<Button text={"ABOUT US"} secondary link="/about" />
					</div>
				</div>
			</section>
			<Lead1
				text="For all your salon business needs whether you are a NEW SALON, JUST OPENED, OR ALREADY IN BUSINESS, BUT STUCK UP."
				className="pt-8 text-center pb-8 "
			/>
			<section className="flex gap-16 justify-center flex-col md:flex-row items-center md:h-[18rem] max-w-[1200px] mx-auto">
				<Image
					src="/images/makeupkit.png"
					alt="Makeup Kit"
					style={{ height: "100%" }}
					height={200}
					width={200}
					loading="lazy"
				/>
				<Card
					style={{ flex: "1", textAlign: "center", paddingBottom: "1rem" }}
					className=" flex flex-col justify-between md:h-[20rem] w-[100%] p-[16px!important]"
				>
					<Headline1 text="Grow With Us" />
					<div className="flex justify-between item-end flex-col md:flex-row">
						{ARR.map((t: { num: number; title: string, per : boolean }, index: number) => (
							<div className="flex flex-col justify-center" key={index}>
								<Headline1 text={t.num + (t.per ? '%' : "+")} style={{ color: "#FF7D45" }} />
								<Lead1
									text={t.title}
									style={{ fontWeight: "500", textAlign: "center" }}
								/>
							</div>
						))}
					</div>
					<Button
						text="ABOUT US"
						secondary
						className="m-auto mt-[1rem] mb-2"
						link="/about"
					/>
				</Card>
			</section>

			<section className="feateures-wrapper">
				<div className="feautes-wrapper_header flex flex-col gap-8 md:pl-[160px] pb-8">
					<Headline1>
						Our Training <br />
						<span className="font-light"> Will Train you like a</span> PRO
					</Headline1>
					<Button text="GET ENQUIRY" link="/#get-enquiry" />
				</div>
				<Marquee>
					<p style={{ padding: "1rem", fontSize: "2rem", color: "#C760D0" }}>
						1 Day Workshop | 1 Day Specialized Workshop | The Management Cycle |
						Mentorships
					</p>
				</Marquee>

				<div className="features-item-wrapper flex gap-[1.5rem] pt-8 flex-col md:flex-row ">
					<div className="features-item flex flex-col items-center text-center flex-1">
						<Image
							src="/images/training.png"
							alt="Training"
							height={150}
							width={150}
							loading="lazy"
						/>
						{/* <img
							src="/images/training.png"
							style={{ width: "150px", aspectRatio: "1" }}
						/> */}
						<Headline2 text="Module-wise Training" className="mb-[1.2rem]" />
						<Lead2>
							The subjects & topics are spread into modules that become easy for
							learners to select exactly what they would like to learn and gain
							knowledge about.
						</Lead2>
					</div>
					<div className="features-item flex flex-col items-center text-center flex-1">
						<Image
							src="/images/pocket.png"
							alt="Pocket"
							height={150}
							width={150}
							loading="lazy"
						/>
						{/* <img
							src="/images/pocket.png"
							style={{ width: "150px", aspectRatio: "1" }}
						/> */}
						<Headline2
							text="Easy on pocket solutions"
							className="mb-[1.2rem]"
						/>
						<Lead2>
							We provide Online training that are easy on pocket for salon
							owners and in a common language spoken across different states in
							India. The instructor led {"training’s"} are full day trainings
							and value add exercises are given to participants.
						</Lead2>
					</div>
					<div className="features-item flex flex-col items-center text-center flex-1">
						<Image
							src="/images/chain.png"
							alt="Chain"
							height={150}
							width={150}
							loading="lazy"
						/>
						{/* <img
							src="/images/chain.png"
							style={{ width: "150px", aspectRatio: "1" }}
						/> */}
						<Headline2 text="Corporate chain" className="mb-[1.2rem]" />
						<Lead2>
							We provide selected and targeted trainings to salon staff 1 or
							multiple branches and also to corporate chain of salon staff. They
							trainings are discussed in advance and particular module trainings
							are provided to their staff.
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

			<section className="enquiry-wrapper" id="get-enquiry">
				<Card
					style={{
						background: "linear-gradient(180deg, #F7CDFB 0%, #FDDFD2 100%)",
					}}
					className="flex gap justify-around flex-col md:flex-row  p:2 md:p-[3.75rem!important]"
				>
					<div className="mt-4">
						<Headline1 className="font-normal text-center md:text-left">
							Get Enquiry
						</Headline1>
						<Lead1 className="max-w-[300px]">
							Have a question about our makeup services? Contact us using
							contact details and we will be happy to assist you.
						</Lead1>
					</div>
					<div className="mt-4">
						<div className="md:pl-4 text-center md:text-left">
							<Lead1>Phone</Lead1>
							<Lead1>+91 9595 605 342</Lead1>
						</div>
						<div className="md:pl-4 text-center md:text-left">
							<Lead1>Email</Lead1>
							<Lead1>thesalonmanagement@gmail.com</Lead1>
						</div>
						<Link
							href="https://play.google.com/store/apps"
							// href={"https://play.google.com/store/apps/details?id=" + AppName}
						>
							<Image
								src="/images/playstore.png"
								alt="Playstore"
								width={200}
								height={150}
								className="mt-4 ml-[0rem] m-auto"
								loading="lazy"
							/>
						</Link>
					</div>
				</Card>
			</section>
		</>
	);
};

export async function getStaticSideProps(context: any) {
	let bannersData = await fetch(`${url}/accounts/banners`, {
		method: "GET",
		headers: {
			Authorization:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
		},
	});
	let metaData = await fetch(`${url}/accounts/meta-tags/0`, {
		method: "GET",
		headers: {
			Authorization:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
		},
	});
	let banners = await bannersData.json();
	let meta = await metaData.json();
	let testimonialsData = await fetch(`${url}/accounts/testimonials`, {
		method: "GET",
		headers: {
			Authorization:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6aGFyQG1haWwuY29tIn0.3NPQleNe38oWlbO5E3W6lQkD3FifEjJ7JB2M3tGmDeM",
		},
	});
	let testimonials = await testimonialsData.json();


	let keywords = meta.data.map((m : any) => m.name).join(', ')
	return {
		props: {
			banners: banners.data,
			testimonials: testimonials.data,
			keywords
		},
		revalidate: 60 

	};
}

export default HomePage;
