import React from 'react';
import Tabs from '../components/organisms/Tabs/Tabs';

const Home = () => {

	const data = [
		{id: 0, title: 1, content: "첫번째 탭"},
		{id: 1, title: 2, content: "두번째 탭"},
		{id: 2, title: 3, content: "세번째 탭"}
	];

	return (
		<div>
			<Tabs
				tabItems={data}
			/>
		</div>
	);
};

export default Home;