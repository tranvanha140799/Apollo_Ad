import React, { useEffect, useState } from 'react';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Table, Space, Pagination, DatePicker } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
import { parse } from 'path/posix';
import Link from 'next/link';
import { deleteSanPham, getListSanPham } from '@core/services/API';
import router from 'next/router';

function index() {
  const [productData, setProductData] = useState<any>();
  const [totalPage, setTotalPage] = useState<number>(1);
  const [totalRecord, setTotalRecord] = useState<number>(0);
  const [pageSize] = useState<number>(7);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [date, setDate] = useState<string>('20190719');

  useEffect(() => {
    getProductList();
  }, [currentPage]);

  //   const getProductList = async () => {
  //     getListSanPham(currentPage - 1, pageSize)
  //       .then((resp) => {
  //         setProductData(resp.data);
  //       })
  //       .catch((error) => {
  //         console.log('error', error);
  //       });
  //   };

  const getProductList = () => {
    axios
      .get('https://localhost:44300/api/Products')
      .then((res) => {
        setProductData(res.data);
        // setTotalRecord(res.data.length);
        // setTotalPage(totalRecord%pageSize);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const handleDeleteProduct = (productId: any) => {
    if (confirm('Bạn có chắc muốn xoá sản phẩm?')) {
      axios
        .post('https://localhost:44300/api/Products/DeleteProduct/' + productId)
        .then((res) => {
          //   console.log(res);
          getProductList();
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  const columns = [
    {
      title: 'Ma San Pham',
      dataIndex: 'productCode',
    },
    {
      title: 'Ten San Pham',
      dataIndex: 'productName',
    },
    {
      title: 'Don Gia',
      dataIndex: 'priceProduct',
    },
    {
      title: 'So Luong',
      dataIndex: 'quantityProduct',
    },
    {
      title: 'Mo Ta',
      dataIndex: 'descriptionProduct',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Link href={`sanpham/${record.productId}`}>
            <a>Detail</a>
          </Link>
          <a onClick={() => handleDeleteProduct(record.productId)}>Delete</a>
        </Space>
      ),
    },
  ];

  const onPagingChange = (page: number) => {
    setCurrentPage(page);
  };

  function onChange(date: any, dateString: any) {
    const selectedDate = dateString.replaceAll('-', '');
    console.log(dateString.replaceAll('-', ''));
    setDate(selectedDate);
  }

  return (
    <Layout title={'Product'}>
      {/* <div>
        <DatePicker onChange={onChange} />
      </div> */}
      <div>
        <Table columns={columns} dataSource={productData} />
        {/* <Pagination
          defaultCurrent={currentPage}
          onChange={onPagingChange}
          current={currentPage}
          total={totalPage * pageSize}
        /> */}
      </div>
    </Layout>
  );
}

export default withAuth(index);
