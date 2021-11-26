import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Form, Input, Space, Button } from 'antd';
import { addSanPham } from '@core/services/API';
import axios from 'axios';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function index() {
  const router = useRouter();
  const { id } = router.query;
  const [form] = Form.useForm();

  const handleAddProduct = (item: any) => {
    console.log(item);
    axios
      .post('https://localhost:44300/api/Products/InsertProduct', item)
      .then((resp) => {
        const data = resp.data;
        router.push('/sanpham');
        if (data) {
          console.log(`data`, data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout title={'Product'}>
      <Form {...formItemLayout} form={form} name="register" onFinish={handleAddProduct} scrollToFirstError>
        <Form.Item name="brandId" label="brandId">
          <Input type="number" />
        </Form.Item>
        <Form.Item name="typeId" label="typeId">
          <Input />
        </Form.Item>
        <Form.Item name="productCode" label="Mã sản phẩm">
          <Input />
        </Form.Item>
        <Form.Item name="productName" label="Tên sản phẩm">
          <Input />
        </Form.Item>
        <Form.Item name="imageProduct" label="Image">
          <Input />
        </Form.Item>
        <Form.Item name="priceProduct" label="Đơn giá" preserve>
          <Input />
        </Form.Item>
        <Form.Item name="quantityProduct" label="Số lượng" preserve>
          <Input />
        </Form.Item>
        <Form.Item name="descriptionProduct" label="Mô tả" preserve>
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default withAuth(index);
