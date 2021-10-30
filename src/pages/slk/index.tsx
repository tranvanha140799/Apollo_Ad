import React, { useEffect, useState } from 'react';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Table } from 'antd';
import { slk_all } from '@core/services/API';

function index() {
  const [slkData, setSlkData] = useState([]);

  useEffect(() => {
    getSLKList();
  }, []);

  const getSLKList = async () => {
    slk_all()
      .then((resp: any) => {
        setSlkData(resp.data);
      })
      .catch((error: any) => {
        console.log('error', error);
      });
  };

  const columns = [
    {
      title: 'Ma NKSLK',
      dataIndex: 'maNKSLK',
    },
    {
      title: 'Ho Ten',
      dataIndex: 'hoTen',
    },
    {
      title: 'Ten Cong Viec',
      dataIndex: 'tenCongViec',
    },
    {
      title: 'Ngay',
      dataIndex: 'ngay',
    },
    {
      title: 'Gio Bat Dau',
      dataIndex: 'gioBatDau',
    },
    {
      title: 'Gio Ket Thuc',
      dataIndex: 'gioKetThuc',
    },
  ];

  return (
    <Layout title={'Staff'}>
      <div>
        <Table columns={columns} dataSource={slkData} />
      </div>
    </Layout>
  );
}

export default withAuth(index);
