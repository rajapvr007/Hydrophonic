import React from "react";
import SocialIcons from "./SocialIcons";
import {Icons} from "./Menus";
import {Link} from "react-router-dom";

function ItemsContainer() {
	return (
		<>
			<div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3  gap-6 sm:px-8  py-16 md:px-28">
				<div>
					<h1 className="text-2xl py-4">Hydroponic</h1>
					<p className="text-justify">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
						            obcaecati repudiandae consectetur dolore ipsam alias voluptates
						            eligendi id voluptate! Cumque doloribus nostrum quia obcaecati,
						            magni blanditiis debitis dignissimos quasi alias!
					</p>
				</div>
				<div className="flex  flex-col md:px-20">
					<h1 className="text-2xl py-4">Quick Links</h1>
					<ul className="gap-y-1 flex  flex-col items-start">
						<li className="">
							<Link to="/">Home</Link>
						</li>
						<li className="">
							<Link to="/shop">Shopping</Link>
						</li>
						<li className="">
							<Link to="/contact">Contact</Link>
						</li>
						<li className="">
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>

				<div>
					<h1 className="text-2xl pt-4 ">Contact Us</h1>
					<ul>
						<li className="py-3 gap-x-2 flex  items-center">
							<span className="">
								<ion-icon name="mail-open-outline"></ion-icon>
							</span>
							Hydroponic@gmail.com
						</li>
						<li className=" gap-x-2 flex  items-center">
							<span className="">
								<ion-icon name="location-outline"></ion-icon>
							</span>
							Hyderabad
						</li>
						<li className="py-3  gap-x-2 flex  items-center">
							<span className="">
								<ion-icon name="call-outline"></ion-icon>
							</span>
							+040 24025674
						</li>
					</ul>
				</div>

				<div>
					<h1 className="text-2xl py-4">Follow Us</h1>
					<SocialIcons Icons={Icons}/>
				</div>
			</div>
		</>
	);
}

export default ItemsContainer;
