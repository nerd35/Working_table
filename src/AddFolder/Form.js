import React, { useState } from 'react';

const Form = ({handleSubmit}) => {
    const [data, setData] = useState('');

    return (
        <form className="inline" onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label className=" ml-3 mr-3 mt-3 mb-5">Name: </label>
                <input type="text" value={data} onChange={e => setData(e.target.value)}/>
                <button type="submit" className="ml-3 border-0 btn btn-sm btn-info">Submit</button>
            </div>
        </form>
    );
}

export default Form;