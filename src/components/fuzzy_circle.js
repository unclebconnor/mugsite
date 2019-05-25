import React from "react";
import "../style/App.scss";

class FuzzyCircle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			requestID: null,
			activeWarp: null
		};

		this.makeSound = this.makeSound.bind(this);
		this.stopMakingSound = this.stopMakingSound.bind(this);
	};

	makeSound = e => {
		var circle = e.target;
		var s = circle.parentElement;
		///add class to svg to animate
	}

	stopMakingSound = e => {
		var circle = e.target;
		var s = circle.parentElement;
		///remove class to svg to animate
	}

	render() {
		console.log('state: ',this.state)
		return (
			<div>
				<div className="circle-wrapper rel">
					<svg height="100" width="100">
					<filter id="blurMe">
    					<feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  					</filter>
						<circle
							cx="50"
							cy="50"
							r="47"
							stroke="lightgrey"
							stroke-width="3"
							fill="lightgrey"
							opacity="0.15"
							onMouseOver={e => this.makeSound(e)}
							onMouseLeave={e => this.stopMakingSound(e)}
							filter="url(#blurMe)"
						/>
					</svg>
				</div>
			</div>
		);
	}
}

export default FuzzyCircle;
