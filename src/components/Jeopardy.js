import React, { useEffect, useState } from 'react';
import answer from './hooks/answer';

export default function Jeopardy(props) {
	const [score, updateScore] = useState(0);
	const { value, setValue, resetStatus } = answer(false);

	// console.log(props.jeopardy);

	// useEffect(() => {
	// 	(async () => {
	// 		if (!props.jeopardy.status) {
	// 			try {
	// 				const response = props.jeopardy.status;
	// 				if (response == false) {
	// 					resetStatus();
	// 				}
	// 			} catch (err) {
	// 				console.log(err);
	// 			}
	// 		}
	// 	})();
	// }, [props.jeopardy.status]);

	useEffect(() => {
		if (!props.jeopardy.status) {
			try {
				const response = props.jeopardy.status;
				if (response == false) {
					resetStatus();
				}
			} catch (err) {
				console.log(err);
			}
		}
	}, [props.jeopardy.status]);

	const increment = () => {
		if (props.jeopardy[0]) {
			updateScore(score + props.jeopardy[0].value);
		}
	};
	const decrement = () => {
		if (score < 1) {
			updateScore(0);
		} else {
			updateScore(score - props.jeopardy[0].value);
		}
	};
	const reset = () => {
		updateScore(0);
	};
	const toggleAnswer = () => {
		props.jeopardy.status = true;

		if (props.jeopardy.status == true) {
			value ? setValue(false) : setValue(true);
		}
	};

	return (
		<div className="card">
			<div className="card-body">
				<div className={'scoreDiv'}>
					<h3 className={'scoreTitle'}>
						<span className={'scoreText'}>Score:</span>
						<span className={'score'}>{score}</span>
					</h3>
				</div>
				<div className={'scoreControl'}>
					<button type="button" className="btn dec" onClick={decrement}>
						Decrease
					</button>
					<button type="button" className="btn inc" onClick={increment}>
						Increase
					</button>
					<button type="button" className="btn reset" onClick={reset}>
						Reset
					</button>
				</div>

				<div className={'question'}>
					<label className="label">Question: </label>
					<p>{props.jeopardy[0] ? props.jeopardy[0].question : ''}</p>
				</div>
				<div className={'answerDiv'}>
					<button
						type="button"
						className={'btn answerBtn'}
						onClick={toggleAnswer}
					>
						Reveal Answer
					</button>
					<h3>
						<span className={'answerText'}>Answer:</span>
						<span id={'answer'} className={value == true ? 'show' : 'hide'}>
							{props.jeopardy[0] ? props.jeopardy[0].answer : ''}
						</span>
					</h3>
				</div>
			</div>
		</div>
	);
}
