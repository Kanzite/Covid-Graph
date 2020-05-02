import React, { Component } from 'react';
import Bar from './BarComponent'

class Content extends Component {

	constructor(props) {
		super(props);

		this.state = {
			arrayline: [9,8,7,6,5,4,3,2,1]
		}
	}

	render() {

		const line = this.state.arrayline.map((i) => {
			return(
				<section key = {i} className="line" style={{ marginTop: 34 }}> </section>
			);
		});

		return(
			<div className="graph">
				{ line }
				<Bar state={this.props.state}/>
			</div>
		);
	}

}

export default Content;
