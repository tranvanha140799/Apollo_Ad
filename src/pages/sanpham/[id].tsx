import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Form, Input, Space, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { getSanPham } from '@core/services/API';

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

  useEffect(() => {
    LoadDetail();
  }, []);

  const LoadDetail = () => {
    getSanPham(id!.toString())
      .then((resp) => {
        const data = resp.data;
        if (data) {
          fillForm(resp.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fillForm = (data: any) => {
    form.setFieldsValue({
      maSanPham: data?.maSanPham,
      tenSanPham: data?.tenSanPham,
      soDangKy: data.soDangKy,
      ngayDangKy: data.ngayDangKy,
      ngaySanXuat: data.ngaySanXuat,
    });
  };

  const handleUpdateProduct = (values: any) => {
    // ProductUpdate(values)
    //   .then((resp) => {
    //     console.log(resp.data);
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //   });
  };

  return (
    <Layout title={'Product'}>
      <Form {...formItemLayout} form={form} name="register" onFinish={handleUpdateProduct} scrollToFirstError>
        <Form.Item name="maSanPham" label="maSanPham" preserve>
          <Input disabled={true} />
        </Form.Item>
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
              Update
            </Button>
            <Button htmlType="button" onClick={() => null}>
              Delete
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default withAuth(index);
