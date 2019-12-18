import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

const products = [
    {id:1,
        name:"devops",
        price:"expensive"
    },
    {id:2,
        name:"po's",
        price:"cheaper"
    },
    {id:3,
        name:"UIdevs",
        price:"priceless"
    }
    ];
const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true
}, {
    dataField: 'name',
    text: 'Product Name',
    sort: true
}, {
    dataField: 'price',
    text: 'Product Price',
    sort: true
}];

export default () =>
    <BootstrapTable
        keyField='id'
        data={ products }
        columns={ columns }
    />