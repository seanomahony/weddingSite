import React from "react";
import "../styles.css"
import UploadAndDisplayImage from '../components/UploadDisplayPhoto';

const Upload = () => {
	return (
		<div>
			<center>
				<h1>
					Photo Uploads
				</h1>
				<UploadAndDisplayImage/>
			</center>
		</div>
		
	);
};

export default Upload;