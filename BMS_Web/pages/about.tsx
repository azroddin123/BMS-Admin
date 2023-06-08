import Headline2 from "@/components/Layout/Typography/Headline2";
import Lead1 from "@/components/Layout/Typography/Lead1";
import Image from "next/image";
import React from "react";

let galleryImages = [
	"IMG_20181020_132514",
	"IMG_20190114_164340",
	"IMG_20190219_120625",
	"IMG_20190422_150542",
	"IMG_20190504_113645",
	"IMG_20190610_164243",
	"IMG_20190706_164303",
	"IMG_20190730_115201",
];

const About = () => {
	return (
		<>
			<section>
				<h1 style={{ display: "none" }}>About Us</h1>
				<div className="flex flex-col md:flex-row justify-between items-center max-w-[500px] m-auto relative">
					<div>
						<div className="w-[200px] md:w-[360px]">
							<Image
								src="/images/about-hero.png"
								width={400}
								height={460}
								alt=""
								priority
							/>
						</div>
						<Lead1 className="text-[2rem] text-[#9F2E2E]">
							20+ Year <br />
							Experience Agency
						</Lead1>
					</div>
					<div className="w-[200px] h-[300px] md:h-[400px] md:w-[320px] relative md:absolute md:left-[80%]">
						<Image
							src="/images/makeupkit.png"
							alt=""
							fill={true}
							sizes="w-[200px] h-[300px] md:h-[400px] md:w-[320px]"
							priority
						/>
					</div>
				</div>
			</section>
			<p className="p-6 border-[1px] border-[transparent] border-s-[#EE7676] max-w-[500px] m-auto">
				“Our makeup service is all about empowering our clients to feel
				confident and beautiful. With a team of talented artists, we offer a
				range of makeup services to suit every style and occasion. Let us help
				you discover the magic of perfectly applied makeup.”
			</p>
			<div className="p-6 border-[1px] border-[transparent] border-t-[#EE7676] flex flex-col md:items-center md:flex-row gap-8">
				<div className="relative w-[100%] h-[200px] md:h-[300px] md:w-[800px]">
					<Image
						src="/images/MISSION.webp"
						fill={true}
						sizes="max-w-[100%] h-[200px] md:h-[400px] md:w-[600px]"
						className="rounded-2xl"
						alt=""
					/>
				</div>
				<p className="p-16">
					“Our makeup service is all about empowering our clients to feel
					confident and beautiful. With a team of talented artists, we offer a
					range of makeup services to suit every style and occasion. Let us help
					you discover the magic of perfectly applied makeup.”
				</p>
			</div>
			<div className="p-6 border-[1px] border-[transparent] border-t-[#EE7676] flex gap-8 flex-col m-auto max-w-[900px]">
				<img
					src="images/OUR-HISTORY.webp"
					className="max-w-[100%] md:max-w-[662px] self-center rounded-2xl"
					alt=""
				/>
				<p className="p-6 border-[1px] border-[transparent] border-s-[#EE7676] max-w-[500px]">
					“Our makeup service is all about empowering our clients to feel
					confident and beautiful. With a team of talented artists, we offer a
					range of makeup services to suit every style and occasion. Let us help
					you discover the magic of perfectly applied makeup.”
				</p>
				<p className="p-6 border-[1px] border-[transparent] border-s-[#EE7676] max-w-[500px] self-end">
					“Our makeup service is all about empowering our clients to feel
					confident and beautiful. With a team of talented artists, we offer a
					range of makeup services to suit every style and occasion. Let us help
					you discover the magic of perfectly applied makeup.”
				</p>
			</div>
			<section>
				<Headline2>Some Memories</Headline2>
				<div className="flex gap-4 flex-wrap">
					{galleryImages.map((elt, index) => (
						<div
							key={index}
							className="relative flex-[100%] md:flex-[20%] bg-black h-[200px]"
						>
							<Image
								src={`/gallery/${elt}.webp`}
								alt="Gallery Images"
								fill={true}
								loading="lazy"
								className="object-cover"
							/>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default About;
