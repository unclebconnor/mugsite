import React from "react";
import "../style/App.scss";

class FuzzyCircle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.makeSound = this.makeSound.bind(this);
	};

	makeSound = e => {
		console.log('making sound');
	}

	render() {
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
							filter="url(#blurMe)"
						/>
					</svg>
				</div>
			</div>
		);
	}
}

export default FuzzyCircle;
