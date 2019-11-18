import React, { useState } from 'react';

const CustomForm = ({ handleSubmit }) => {
	const [data, setData] = useState('');
	
	const handleFormSubmit = e => {
		e.preventDefault();
		console.log(data);
		handleSubmit(data);
	};
	
	return (
		<form className="inline" onSubmit={handleFormSubmit}>
			<div>
				<label className=" ml-3 mr-3 mt-3 mb-5">Name: </label>
				<input type="text" name="data" value={data} onChange={e => setData(e.target.value)}/>
				<button type="submit" className="ml-3 border-0 btn btn-sm btn-info">Submit</button>
			</div>
		</form>
	);
};

export default CustomForm;