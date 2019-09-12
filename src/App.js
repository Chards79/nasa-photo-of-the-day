import React from "react";
import "./App.css";
import Apod from "./components/Apod";
import styled from "styled-components";

// import Example from "./components/NavBar";

const WholeCard = styled.div`
	text-align: center;
`;

function App() {
	return (
		<WholeCard>
			{/* <Example /> */}
			<Apod />
		</WholeCard>
	);
}

export default App;
