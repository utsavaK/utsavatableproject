import React, { useState, useEffect } from 'react';
import './display.css';
import axios from 'axios';
import Switch from 'react-switch';
import List from '../list_view/list'
import TableV from '../table_view/table'

const Display = (props) => {
    const [tableViewType, setTableViewType] = useState(false);
    const [data, setData] = useState(null);

    const switchViewType = () => {
        setTableViewType(!tableViewType);
    }

    useEffect(() => {
        axios.get('https://api.publicapis.org/entries').then(response => { setData(response);}).catch(error => { console.log(error) });
    }, []);

    return (<div>
        <Switch
            onChange={switchViewType} checked={tableViewType}
        />
        {tableViewType ? <List data={data}></List> : <TableV data={data}></TableV>}
    </div>)
};

export default Display;