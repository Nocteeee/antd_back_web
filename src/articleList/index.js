import React, { useState, useEffect } from 'react'
import { Table, Button , message} from 'antd';
import { articleList, deleteArticle } from '../api/interface'
import { Link } from 'react-router-dom';


function ArticleList(props) {
    const [data, setData] = useState([])
    const [columns, setColums] = useState([
        {
            title: '标题',
            dataIndex: 'title'
        },
        {
            title: '描述',
            dataIndex: 'submit',
            width:500
        },
        {
            title: '置顶',
            dataIndex: 'is_top'
        },
        {
            title: '分类',
            dataIndex: 'category_id'
        },
        {
            title: '创建时间',
            dataIndex: 'create_time'
        },
        {
            title: '修改时间',
            dataIndex: 'modified_time'
        },
        {
            title: '操作',
            render: (row) => {
                return (
                    <div>
                        <Link to={{pathname:'/add',state:{id:row.id}}}>
                            <Button type="primary" style={{marginRight:10}}>修改</Button>
                        </Link>
                        <Button danger type="primary" onClick={ delete_art.bind(null,row.id) }>删除</Button>
                    </div>
                )
            },
            width:200
        },
    ])
    function delete_art(e) {
        deleteArticle({id:e}).then(res=>{
            if(res.code === 200){
                message.success('删除成功',2,()=>{
                    getList()
                })
            }else{
                message.error(res.msg)
            }
        })
    }

    const getList = function(){
        articleList().then(res=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        getList()
    },[])
    return (
        <Table bordered columns={columns} dataSource={data} rowKey="id"/>
    )
}

export default ArticleList;