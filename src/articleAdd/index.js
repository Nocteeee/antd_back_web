import React, { useState, useEffect } from 'react'
import { Row, Col, Select, Input, DatePicker, Button ,message} from 'antd';
import Editor from 'for-editor'
import moment from 'moment';
import { SoundFilled, EditFilled } from '@ant-design/icons';
import { categoryList, articleAdd, editArticle, updateArticle } from '../api/interface'

const dateFormat = 'YYYY-MM-DD HH:mm:ss';
const { Option } = Select;

function ArticleAdd(props) {
    const [content, setContent] = useState();
    const [submit, setSubmit] = useState();
    const [category, setCatgory] = useState([]);
    const [title, setTitle] = useState();
    const [date, setDate] = useState(new Date());
    const [selectValue, setSelectValue] = useState()
    useEffect(() => {
        categoryList().then(res => {
            setCatgory(res.data)
            if (props.location.state) {
                editArticle({ id: props.location.state.id }).then(res => {
                    let result = res.data;
                    setContent(result.content)
                    setTitle(result.title)
                    setSubmit(result.submit)
                    setSelectValue(result.category_id)
                })
            }
        })
    }, [])
    //主体内容
    const handleChange = function (value) {
        setContent(value)
    }
    //标题描述
    function handleChange_desc(value) {
        setSubmit(value)
    }
    function selecteChange(value) {
        setSelectValue(value)
    }
    //保存
    function save() {
        let params = {
            title: title,
            category_id: selectValue,
            is_top: 1,
            submit: submit,
            content: content
        };
        console.log(date)
        !props.location.state && (params.create_time = date);
        props.location.state && (params.id = props.location.state.id);
        (props.location.state ? updateArticle : articleAdd)(params).then(res => {
            console.log(res)
            if(res.code === 200){
                message.success('操作成功',2,()=>{
                    props.history.push('/list')
                });
            }
        })
    }

    function onChange(date, dateString) {
        console.log(dateString)
        setDate(dateString)
    }
    function titleHandle(e) {
        setTitle(e.target.value)
    }
    return (
        <>
            <Row>
                <Col span={4}>
                    <Select defaultValue={selectValue} key={selectValue} style={{ width: 120 }} onChange={selecteChange}>
                        {category.map(item => {
                            return (<Option value={item.id} key={item.id}>{item.category_name}</Option>)
                        })}
                    </Select>
                </Col>
                <Col span={5}>
                    <DatePicker defaultValue={moment(date, dateFormat)} format={dateFormat} onChange={onChange} />
                </Col>
                <Col span={15}>
                    <Input placeholder="请输入标题" required onChange={ titleHandle } value={ title }/>
                </Col>
            </Row><br />
            <div className="editor-tips">
                <SoundFilled />&nbsp;
                标题描述
            </div>
            <Editor value={submit} height="200px" onChange={handleChange_desc} />
            <br />
            <div className="editor-tips">
                <EditFilled />&nbsp;
                内容主体区
            </div>
            <Editor value={content} onChange={handleChange} />
            <br />
            <div style={{ textAlign: 'center' }}>
                <Button>清空</Button>
                <Button type="primary" style={{ marginLeft: 10 }} onClick={save}>保存</Button>
            </div>
        </>
    )
}

export default ArticleAdd;