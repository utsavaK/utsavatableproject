import React, { useState, useEffect } from 'react';
import './table.css';

const TableV = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (props.data) {
            setData(props.data.data.entries);
        }
    }, [props.data]);

    return (data ? <div>
        <h3>Table View of APIs </h3>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>API</th>
                    <th>Category</th>
                    <th>Cors</th>
                    <th>Description</th>
                    <th>HTTPS</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {data.map((object, i) => {
                    return (<tr key={i}>
                        <td>{i + 1}</td>
                        <td>{object.API}</td>
                        <td>{object.Category}</td>
                        <td>{object.Cors}</td>
                        <td>{object.Description}</td>
                        <td>{object.HTTPS}</td>
                        <td>{object.Link}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div> : null)
};

export default TableV;