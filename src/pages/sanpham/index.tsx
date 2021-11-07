import React, { useEffect, useState } from 'react';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Table, Space, Pagination } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
import { parse } from 'path/posix';
import Link from 'next/link';
import { getListSanPham } from '@core/services/API';

function index() {
  const [productData, setProductData] = useState<any>();
  const [totalPage, setTotalPage] = useState<number>(2);
  const [totalRecord, setTotalRecord] = useState<number>(0);
  const [pageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getProductList();
  }, [currentPage]);

  const getProductList = async () => {
    getListSanPham(currentPage - 1, pageSize)
      .then((resp) => {
        setProductData(resp.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const columns = [
    {
      title: 'Ma San Pham',
      dataIndex: 'maSanPham',
    },
    {
      title: 'Ten San Pham',
      dataIndex: 'tenSanPham',
    },
    {
      title: 'soDangKy',
      dataIndex: 'soDangKy',
    },
    {
      title: 'ngayDangKy',
      dataIndex: 'ngayDangKy',
    },
    {
      title: 'ngaySanXuat',
      dataIndex: 'ngaySanXuat',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Link href={`sanpham/${record.maSanPham}`}>
            <a>Detail</a>
          </Link>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const onPagingChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout title={'Product'}>
      <div>
        <Table columns={columns} dataSource={productData} pagination={false} />
        <Pagination
          defaultCurrent={currentPage}
          onChange={onPagingChange}
          current={currentPage}
          total={totalPage * pageSize}
        />
      </div>
    </Layout>
  );
}

export default withAuth(index);
