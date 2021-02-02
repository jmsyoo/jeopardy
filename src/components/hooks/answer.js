import { useState } from 'react';

const answer = initialValue => {
	const [value, setValue] = useState(initialValue);
	return {
		value,
		setValue,
		resetStatus: () => setValue(false)
	};
};

export default answer;
