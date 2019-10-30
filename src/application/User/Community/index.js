import React, { memo, useState, useEffect } from "react";
import style from "../../../assets/globalStyle";
import { connect } from "react-redux";
import { Input, Button, Table, Switch } from 'antd';
import { queryList } from "./store/actionCreator";
import { NavLink } from "react-router-dom";
import { changeStatus } from "../../../api/user/community";

const Community = (props) => {
  const { communityList, getList} = props
  useEffect(()=>{
    if(!communityList.size){
      getList({current: 1,size: 10})
    }
  }, [getList, communityList.size])
  const communityListJs = communityList ? communityList.toJS() : [];
  const switchChange = (id, e) => {
    changeStatus({communityId: id, status: e ? 1 : 0})
  }
  const [columns] = useState([
    {
      title: '社区ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '社区名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '社区联系人',
      dataIndex: 'contacts',
      key: 'contacts',
    },
    {
      title: '社区医生',
      dataIndex: 'doctorNum',
      key: 'doctorNum',
    },
    {
      title: '授权套餐',
      dataIndex: 'serviceNum',
      key: 'serviceNum',
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '启用状态',
      key: 'status',
      render: (text, record) => (
        <Switch defaultChecked={record.status ? true : false} onChange={(e) => {switchChange(record.id, e)}}/>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <NavLink to=''>查看</NavLink>
        </span>
      ),
    },
  ])
  return (
    <>
      <style.ContentHeader>
        <div className='left'>
          <div>
            <span>姓名:</span>
            <div>
              <Input placeholder="姓名" />
            </div>
          </div>
          <div>
            <span>疾病类型:</span>
            <div>
              <Input placeholder="疾病类型" />
            </div>
          </div>
        </div>
        <div className='right'>
          <div>
            <Button type="primary">新增社区</Button>
          </div>
          <div>
            <Button>批量删除</Button>
          </div>
        </div>
      </style.ContentHeader>
      <style.ContentTable>
        <Table columns={columns} dataSource={communityListJs} />
      </style.ContentTable>
    </>
  )
}

const mapStateToProps = (state) => ({
  communityList: state.getIn(['community', 'list'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    getList(data) {
      dispatch(queryList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Community))
