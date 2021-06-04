import React, {useState} from 'react';
import Tabs from '../components/organisms/Tabs/Tabs';
import {SearchForm as Search} from '../components/molecules/_index';


const Home = () => {

	const [formData, setFormData] = useState({
		keyword: ""
	});

	const handleChange = (text: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [text]: e.target.value})
	}; 

	console.log(formData)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData)
	}

	return (
		<Search
			onSubmit={handleSubmit}
			onChange={handleChange("keyword")}
			value={formData.keyword}
		>
			검색
		</Search>
	);
};

export default Home;