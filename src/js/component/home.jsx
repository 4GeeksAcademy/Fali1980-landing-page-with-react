import React from "react";

//include images into your bundle
import Navbar from './navbar'
import Jumbotron from './jumbotron'
import Card from './card'
import Footer from './footer'

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="container g-0 pt-5">
				<div className="row">
					<div className="col">
						<Jumbotron/>
					</div>
				</div>
			</div>
			<div className="container my-4">
				<div className="row row-gap-3 g-4">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>

			<Footer/>
		</>
	);
};

export default Home;