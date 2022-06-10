import ss from "../../resources/app-screenshot.png";
import playStore from "../../resources/download-play-store.webp";
import appStore from "../../resources/download-app-store.webp";
import styled from "styled-components";

const Container = styled.div`
	width: 1200px;
	margin: auto;
	padding-left: 20px;
	padding-right: 20px;
`;

const DownloadIcon = styled.img`
	width: 180px;
	height: 54px;
	margin: 10px;
`;

const DownloadInfoContainer = styled.div`
	max-width: 400px;
	display: inline-block;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const DownloadPicturesContainer = styled.div`
	display: inline-block;
`;

const ScreenshotImg = styled.img`
	max-width: 660px;
`;

const DownloadSection = () => {
	return (
		<Container className=" d-flex">
			<DownloadInfoContainer>
				<h3>Restaurants in your pocket</h3>
				<p>
					Order from your favorite restaurants & track on the go, with
					the all-new Swiggy app.
				</p>
				<div style={{ marginLeft: -10 }}>
					<a href="#">
						<DownloadIcon src={playStore} />
					</a>
					<a href="#">
						<DownloadIcon src={appStore} />
					</a>
				</div>
			</DownloadInfoContainer>
			<div style={{ flexGrow: 1 }}></div>
			<DownloadPicturesContainer>
				<ScreenshotImg src={ss} />
			</DownloadPicturesContainer>
		</Container>
	);
};

export default DownloadSection;
