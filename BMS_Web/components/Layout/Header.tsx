import React, { useEffect, useState } from "react";
import styles from "@/styles/layout.module.scss";
import Link from "next/link";
import Button from "../formUI/Button";
import useDeviceType from "@/hooks/useDeviceType";
import { useRouter } from "next/router";
import Image from "next/image";
const Header = () => {
	const [open, setOpen] = useState(false);
	const isMobile = useDeviceType();
	const router: any = useRouter();
	const [location, setLocation] = useState(null);

	useEffect(() => {
		if (location !== router.route) setOpen(false);
		setLocation(router.route);
	}, [router, location]);

	return (
		<div className={styles.header} style={{ zIndex: 9999 }}>
			<Link href="/">
				<div className="relative h-6 w-12 md:h-10 md:w-20 md:ml-4">
					<Image
						src="/images/logo.png"
						alt="Logo"
						fill={true}
						sizes="h-6 w-12 md:h-10 md:w-20"
					/>
				</div>
			</Link>
			<nav className={styles.nav}>
				<ul style={{ display: !isMobile ? "flex" : open ? "flex" : "none" }}>
					<li>
						<Link href="/">HOME</Link>
					</li>
					<li>
						<Link href="/about">ABOUT</Link>
					</li>
					<li>
						<Link href="/artists">ARTISTS</Link>
					</li>
					<li>
						<Link href="/parlours">PARLOURS</Link>
					</li>
					<Button link="/get-app" text="GET APP" />
					<Button link="/#get-enquiry" text="GET ENQUIRY" secondary />
				</ul>
			</nav>
			<Image
				className={styles.navImg}
				src={open ? "/images/close.png" : "/images/menu.svg"}
				style={{ cursor: "pointer" }}
				onClick={(e) => setOpen(!open)}
				height={25}
				width={25}
				alt="Menu"
			/>
		</div>
	);
};

export default Header;
