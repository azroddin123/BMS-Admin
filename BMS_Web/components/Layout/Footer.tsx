import Link from "next/link";
import React from "react";
import { AppName } from "../../constants/globalVariables";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="border border-gray-300 p-4 flex items-center flex-col md:flex-row justify-evenly rounded-lg">
			<div className="flex flex-col gap-6">
				<Link href="/">
					<Image
						src="/images/logo.png"
						alt="Logo"
						width={200}
						height={150}
						className="mt-8"
						loading="lazy"
					/>
				</Link>
				<Link
					href="https://play.google.com/store/apps"
					// href={"https://play.google.com/store/apps/details?id=" + AppName}
				>
					<Image
						src="/images/playstore.png"
						alt="Playstore"
						width={200}
						height={150}
						className="self-center"
						loading="lazy"
					/>
				</Link>
			</div>
			<div>
				<h5 className="text-gray-500 text-center">Helpful Links</h5>

				<ul
					style={{ listStyleType: "none" }}
					className="flex flex-col gap-4 mt-6"
				>
					<Link className="text-center" href="/">
						HOME
					</Link>
					<Link className="text-center" href="/about">
						ABOUT
					</Link>
					<Link className="text-center" href="/artists">
						ARTISTS
					</Link>
					<Link className="text-center" href="/parlours">
						PARLOURS
					</Link>
					<Link className="text-center" href="/get-app">
						GET APP
					</Link>
					<Link className="text-center" href="/#get-enquiry">
						GET ENQUIRY
					</Link>
				</ul>
			</div>
			<Image
				src="/images/makeupkit.png"
				alt="Makeup Kit"
				width={320}
				height={320}
				loading="lazy"
			/>
		</div>
	);
};

export default Footer;
