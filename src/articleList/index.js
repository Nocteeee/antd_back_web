import React, { useState } from 'react'
import { Table, Button } from 'antd';


function ArticleList(props) {
    const [data, setData] = useState([
        {
            key: 0,
            date: '2018-02-11',
            amount: 120,
            type: 'income',
            note: 'transfer',
        }
    ])
    const [columns, setColums] = useState([
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Note',
            dataIndex: 'note',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => {
                return (
                    <div>
                        <Button type="primary" style={{marginRight:10}} onClick={edit}>修改</Button>
                        <Button danger type="primary">删除</Button>
                    </div>
                )
            },
            width:200
        },
    ])
    const edit = function(){
        console.log(11)
    }
    return (
        <Table bordered columns={columns} dataSource={data}>

        </Table>
    )
}

export default ArticleList;