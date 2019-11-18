import React, {useEffect, useState} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './App.css';
import Form from './AddFolder/Form';



const App  = (props) => {


    const defaultData = [{
        serial: 1,
        perk: 'Air-condition',
        action:'delete'
    },{
        serial: 2,
        perk: 'Water',
        action:'delete'
    },{
        serial: 3,
        perk: 'Snacks',
        action:'delete'
    },{
        serial: 4,
        perk: 'Newspaper',
        action:'delete'
    },{
        serial: 5,
        perk: 'Air-condition',
        action:'delete'
    },{
        serial: 6,
        perk: 'Air-condition',
        action:'delete'
    }];
    const columns = [{
        Header: 'Serial No',
        accessor: 'serial'
    },{
        Header: 'Perk Name',
        accessor: 'perk'
    },{
        Header: 'Action',
        Cell: row => (
            <div>
                <button className="mr-3 bg-success">Active</button>
                <button className="mr-3 bg-warning">Edit</button>
                <button className="mr-3 bg-danger onClick={() => handleDelete(row.original)}">Delete</button>
            </div>
        )
    }];

    const [data, setData] = useState(defaultData);

    const handleSubmit = e => {
        e.preventDefault();
        console.log (e)
        // const val = {
        //     serial: 7,
        //     perk: value,
        //     action:'delete'
        // };
        // const update = [...defaultData, val];
        // console.log (update);
        // setData(update);
    };

    return (

        <div>
          <Form handleSubmit={handleSubmit}/>
          <ReactTable
              data={data}
              columns={columns}
              defaultPageSize = {10}
              pageSizeOptions = {[2,4, 10]}
          />
        </div>
    )
};
export default App;