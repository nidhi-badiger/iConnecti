import React from 'react';
// import Navbar from "./src/Components/Navbar";
import Login from '../login/login';
import Topbar from '../../Components/Topbar';
import TextSlider from '../../Components/TextSlider/TextSlider';

function Home() {
	return (
		<React.Fragment>
			<Topbar/>
			<TextSlider/>
            <Login/>
		</React.Fragment>
	);
}

export default Home;