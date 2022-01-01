import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Footer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
