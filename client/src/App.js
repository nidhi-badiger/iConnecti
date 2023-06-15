import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/home/home';
import Activation from './Pages/Activation/Activation';
import Register from './Pages/register/register'; 


function App() {
	return (
		<div>
		<Routes>
			<Route path='/' element={<Home/>}> </Route>
			<Route path='Activation' element={<Activation/>}> </Route>
			<Route path='Register' element={<Register/>}> </Route>

		   
		   </Routes>
		   
		</div>
	);
}

export default App;