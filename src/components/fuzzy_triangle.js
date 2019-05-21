import React, { Component } from "react";
import FuzzyCircle from './fuzzy_circle.js';

class FuzzyTriangle extends Component {
	render() {
		return (
			<div className="fuzzy-triangle-wrapper">
				<div className="tr-row">
					<div className="tr-circle ">
						<FuzzyCircle/>
					</div>
				</div>
				<div className="tr-row">
					<div className="tr-circle">
						<FuzzyCircle/>
					</div>
					<div className="tr-circle">
						<FuzzyCircle/>
					</div>
				</div>
				<div className="tr-row">
					<div className="tr-circle">
						<FuzzyCircle/>
					</div>
					<div className="tr-circle">
						<FuzzyCircle/>
					</div>
					<div className="tr-circle butt">
						<FuzzyCircle/>
					</div>
				</div>
			</div>
		);
	}
}

export default FuzzyTriangle;
