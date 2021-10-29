import React, { useEffect, useState } from 'react';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Table } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
import { parse } from 'path/posix';

function index() {
  const [role, setRole] = useState<any>();

  useEffect(() => {
    let value = localStorage.getItem('roles') ?? '';
    setRole(JSON.parse(value));
    getStaffList();
  }, []);

  const getStaffList = async () => {
    const token = Cookies.get('accessToken');

    axios
      .get('https://ollivander-backn.herokuapp.com/admin/staff/list', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'Application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  console.log(`role`, role);
  return (
    <>
      {role && role[0] === 'ROLE_ADMIN' ? (
        <Layout title={'Staff'}>
          <div>
            <Table columns={columns} dataSource={data} />
          </div>
        </Layout>
      ) : (
        <p style={{ textAlign: 'center' }}>You dont have permissions to view this page</p>
      )}
    </>
  );
}

export default withAuth(index);
