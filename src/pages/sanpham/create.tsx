import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Form, Input, Space, Button } from 'antd';
import { addSanPham } from '@core/services/API';

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
    addSanPham(item)
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
        <Form.Item name="tenSanPham" label="tenSanPham">
          <Input />
        </Form.Item>
        <Form.Item name="soDangKy" label="soDangKy" preserve>
          <Input />
        </Form.Item>
        <Form.Item name="ngayDangKy" label="ngayDangKy" preserve>
          <Input disabled={true} />
        </Form.Item>
        <Form.Item name="ngaySanXuat" label="ngaySanXuat" preserve>
          <Input disabled={true} />
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
