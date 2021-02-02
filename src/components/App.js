import React, { useState, useEffect } from 'react';
import Jeopardy from './Jeopardy';

export default function App(props) {
	const [query, updateQuery] = useState({
		baseUrl: 'http://jservice.io/',
		apiKey: 'api/',
		title: 'random',
		searchURL: ''
	});
	const [question, setQuestion] = useState([]);
	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await setQuestion({ ...data, status: false });
				} catch (err) {
					console.log(err);
				}
			}
		})();
	}, [query]);
	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseUrl + query.apiKey + query.title
		});
	};
	return (
		<div className="Page-wrapper">
			<h1>Welcome to Jeopardy</h1>
			<>
				<Jeopardy jeopardy={question} />
			</>
			<button id="questionBtn" className={'btn'} onClick={handleSubmit}>
				Get Question
			</button>
		</div>
	);
}
