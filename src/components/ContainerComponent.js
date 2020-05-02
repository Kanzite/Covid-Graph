import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Content from './ContentComponent';

class Container extends Component {

	constructor(props) {
		super(props);

		this.state = {
			arrayline: [9,8,7,6,5,4,3,2,1,0],
			total: 1500000,
			data: [
				{
					name: 'USA',
					cases: 1131030
				},
				{
					name: 'Spain',
					cases: 242988
				},
				{
					name: 'Italy',
					cases: 207428
				},
				{
					name: 'UK',
					cases: 177454
				},
				{
					name: 'France',
					cases: 167346
				},
				{
					name: 'Germany',
					cases: 164077
				},
				{
					name: 'Turkey',
					cases: 122392
				},
				{
					name: 'Russia',
					cases: 114431
				},
				{
					name: 'Iran',
					cases: 95646
				},
				{
					name: 'Brazil',
					cases: 92109
				}
			]
		}
	}

	componentDidMount() {
		var total = 0;
		this.state.data.map((country) => {
			total = total + (country.cases * 0.2);
			if(total < country.cases)
				total = country.cases;
			return total;
		});
		total = parseFloat(total);
		total = (Math.ceil(total / 500000) * 500000);
		this.setState({ total: total });
	}

	render() {

		const num = this.state.arrayline.map((i) => (
			<CSSTransition key = {i} in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
				<section key = {i} className="texthead"> {this.state.total/ 10 * i} </section>
			</CSSTransition>
		));

		const countryname = this.state.data.map((country, i) => (
			<CSSTransition key = {i} in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
				<section key = {country.name} className="textname"> {country.name} </section>
			</CSSTransition>
		));

		return(
			<div className="containerwrapper">
				<section className="left">
					{ num }
				</section>
				<section className="right">
					<Content state={this.state}/>
				</section>
				<section className="zero">
				</section>
				<section className="bottom">
					{ countryname }
				</section>
			</div>
		);
	}

}

export default Container;
