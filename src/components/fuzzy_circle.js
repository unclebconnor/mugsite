import React, { Component } from "react";
import "../style/App.scss";

class FuzzyCircle extends Component {
	render() {
		return (
			<div>
				<div className="circle-wrapper rel">
					<svg height="100" width="100">
						<circle
							cx="50"
							cy="50"
							r="47"
							stroke="lightgrey"
							stroke-width="3"
							fill="lightgrey"
							opacity="0.15"
						/>
					</svg>
				</div>
			</div>
		);
	}
}

export default FuzzyCircle;
