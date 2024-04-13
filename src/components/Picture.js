import React from "react";

const Picture = ({ data }) => {
	return (
		<div className="picture">
			<p className="imageTitle">
				<a
					className="imageTitleLink"
					target="_blank"
					href={data.photographer_url}
				>
					{data.photographer}
				</a>
			</p>
			<div className="imageContainer">
				<img src={data.src.large} alt={data.alt} />
			</div>
			<div className="imageButtonContainer">
				<button className="imageButton">
					<a
						className="imageLink"
						target="_blank"
						href={data.src.large}
					>
						Download Image
					</a>
				</button>
			</div>
		</div>
	);
};

export default Picture;
