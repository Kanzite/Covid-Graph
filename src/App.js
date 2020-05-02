import React from 'react';
import './App.css';
import Container from './components/ContainerComponent';

function App() {
	return (
		<div className="main">
			<div className="wrapper">
				<div className="intro">
					<section className="head"> C
						<section className="headsmall">OVID-19 </section> T
						<section className="headsmall">OTAL </section> C
						<section className="headsmall">ASES </section>
					</section>
					<Container />
				</div>
			</div>
		</div>
	);
}

export default App;
