import React, { useState, useEffect } from 'react';
import './list.css';

const List = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (props.data) {
            setData(props.data.data.entries);
        }
    }, [props.data]);

    return (data ? <div>
        <h3>List View of APIs </h3>
        {data.map((object, i) => {
            return (<div key={i}>
                {i+1}.   API: {object.API}    Category: {object.Category}    Cors: {object.Cors}    Description: {object.Description}    HTTPS: {object.HTTPS}    Link:{object.Link}
                <br></br>
            </div>)
        })}
    </div> : null)
};

export default List;