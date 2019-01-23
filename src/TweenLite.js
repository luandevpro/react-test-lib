import React, { Component } from "react";
import { TweenLite as Tween } from "gsap";

class TweenLite extends Component {
	constructor(props) {
		super(props);
		this.logoContainer = null;
		this.logoTween = null;
	}

	componentDidMount() {
		Tween.fromTo(this.logoContainer, 5, { x: "-=200px" }, { x: "+=500px" });
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 mt-3" style={{ textAlign: "center" }}>
						<img
							src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
							alt=""
							className="img-fluid logo"
							ref={img => (this.logoContainer = img)}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default TweenLite;
