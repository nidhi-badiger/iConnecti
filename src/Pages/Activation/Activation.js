import React from 'react';
import ProfileActivate from '../profileActivate/profileActivate';
import Topbar from '../../Components/Topbar';

function Activation() {
	return (
		<div>
			<Topbar/>
			
			<div className='content'>
			<ProfileActivate/>
			</div>
		</div>
	);
}

export default Activation;           