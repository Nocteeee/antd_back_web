import React, { useState } from 'react'
import { Row, Col, Select, Input, DatePicker ,Button } from 'antd';
import Editor from 'for-editor'
import moment from 'moment';
import { SoundFilled ,EditFilled } from '@ant-design/icons';

const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;

function ArticleAdd() {
    const [value, setValue] = useState();
    const [desc, setDesc] = useState();
    //主体内容
    const handleChange = function(value) {
        setValue(value)
    }
    //标题描述
    function handleChange_desc(value){
        setDesc(value)
    }
    function selecteChange(value) {
        console.log(`selected ${value}`);
    }
    return (
        <>
            <Row>
                <Col span={4}>
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={selecteChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Col>
                <Col span={4}>
                    <DatePicker defaultValue={moment(new Date(), dateFormat)} format={dateFormat} />
                </Col>
                <Col span={16}>
                    <Input placeholder="请输入标题" />
                </Col>
            </Row><br />
            <div className="editor-tips">
                <SoundFilled />&nbsp;
                标题描述
            </div>
            <Editor value={desc} height="200px" onChange={handleChange_desc} />
            <br/>
            <div className="editor-tips">
                <EditFilled />&nbsp;
                内容主体区
            </div>
            <Editor value={value} onChange={handleChange} />
            <br/>
            <div style={{textAlign:'center'}}>
                <Button>清空</Button>
                <Button type="primary" style={{marginLeft:10}}>保存</Button>
            </div>
        </>
    )
}

export default ArticleAdd;