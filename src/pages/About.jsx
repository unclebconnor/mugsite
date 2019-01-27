import React, { Component } from "react";
import "../style/App.scss";

class About extends Component {
	render() {
		return (
			<div className="page left-align">
				<div className="is-size-4 pad-me">For Press:</div>
				<p className="pad-me">
					Gently growling a familiar sort of Americana, looking back
					at you with a restless, wandering psychedelic gaze; a
					collection of vignettes and hard truths, memories and
					dreams, tastefully arranged on the mantle above a crackling
					fire.
				</p>

				<div className="is-size-4 pad-me">For Human Consumption:</div>
				<p className="pad-me">
					I love the resonance of wood and the way sound can interact
					with the 6+ faces of a room... earth and space...the nuances
					of accident & coincidence... magnets & metal and carefully
					harnessing the movement of charged particles and waves of
					air...musicians herd them...they respond to our direction
					but are wild and do not follow straight lines...
				</p>

				<p className="pad-me">
					Music has a way of capturing the intangibles that can't
					exist in a photo or between 1000 pages of the best prose;
					the nostalgia or hurt or joy that can only exist in
					imagination or a moment of complete presence.
				</p>

				<p className="pad-me">
					I don't write and record songs to tell people how to live or
					how to see the world. For my sake, I am focused on painting
					a picture of my experience of something that was worth
					keeping stuck in my head long enough to build words and
					chords and textures around it. Then, I can remember it. I
					can see it. I can process it. Sometimes this happens while I
					work and sometimes when I'm playing it years later, I'll
					think "oh, now I get it."
				</p>

				<p className="pad-me">
					For the listener, I am constantly tinkering and learning,
					building a conduit to connect my experience to something
					others can see too; a story dressed in the intangibles, the
					details that invoke deep memories or embody the space
					someone is swimming in when those waves of air find their
					way to human ears. Then...well...who knows? We are wild and
					do not follow straight lines.
				</p>
			</div>
		);
	}
}

export default About;
