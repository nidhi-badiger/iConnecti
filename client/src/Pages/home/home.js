import React from 'react';
// import Navbar from "./src/Components/Navbar";
import "./home.css"
import Login from '../login/login';
import Topbar from '../../Components/Topbar';
import TextSlider from '../../Components/TextSlider/TextSlider';

function Home() {
	
	return (
		<div>
			<Topbar/>
			
			<div className='content'>
			<TextSlider/>
            <Login/>
			</div>
		</div>
	);
}

export default Home;           