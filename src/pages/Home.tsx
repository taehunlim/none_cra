import React from 'react';
import Accordion from '../Components/oraganisms/Accordion/Accordion';

const Home = () => {

	const lists = [
		{
			title: "first title", content: "first content"
		},
		{
			title: "second title", content: "second content"
		}
	]

	return (
		<div>
			<Accordion
			
				lists={lists}
			/>
		</div>
	);
};

export default Home;