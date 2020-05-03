import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Bar extends Component {

	render() {

		const bars = this.props.state.data.map((country, i) => (
			<CSSTransition key = {i} in={true} classNames="scale" enter={false} exit={false} appear={true} timeout={1000}>
				<section key={ country.name } className="bar" style={{ height: country.cases/this.props.state.total*350 - 10}}>
					<section className="numtext"> {country.cases} </section>
				</section>
			</CSSTransition>
		));

		return(
			<div className="graphcontent">
				{ bars }
			</div>
		);
	}

}

export default Bar;
