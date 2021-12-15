import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Form, Input, Space, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
// import { getSanPham, editSanPham } from '@core/services/API';

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
    axios
      .get('https://localhost:44300/api/Products/' + id)
      .then((res) => {
        const data = res.data;
        if (data) {
          fillForm(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fillForm = (data: any) => {
    form.setFieldsValue({
      productCode: data[0].productCode,
      productName: data[0].productName,
      typeId: data[0].typeId,
      brandId: data[0].brandId,
      imageProduct: data[0].imageProduct,
      priceProduct: data[0].priceProduct,
      quantityProduct: data[0].quantityProduct,
      descriptionProduct: data[0].descriptionProduct,
    });
  };

  const handleUpdateProduct = (item: any) => {
    item.productId = id;
    item.brandId = parseInt(item.brandId);
    item.typeId = parseInt(item.typeId);
    item.priceProduct = parseInt(item.priceProduct);
    item.quantityProduct = parseInt(item.quantityProduct);
    axios
      .post('https://localhost:44300/api/Products/UpdateProduct', item)
      .then((res) => {
        console.log(res);
        router.push('/sanpham');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteProduct = (id: any) => {
    if (confirm('Bạn có chắc muốn xoá sản phẩm?')) {
      axios
        .post('https://localhost:44300/api/Products/DeleteProduct/' + id)
        .then((res) => {
          //   console.log(res);
          router.push('/sanpham');
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  return (
    <Layout title={'Product'}>
      <Form {...formItemLayout} form={form} name="register" onFinish={handleUpdateProduct} scrollToFirstError>
        <Form.Item name="productCode" label="Mã sản phẩm" preserve>
          <Input />
        </Form.Item>
        <Form.Item name="productName" label="Tên sản phẩm">
          <Input />
        </Form.Item>
        <Form.Item name="brandId" label="Mã thương hiệu">
          <Input />
        </Form.Item>
        <Form.Item name="typeId" label="Mã loại">
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
        <Form.Item name="imageProduct" label="Ảnh">
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
            <Button onClick={() => handleDeleteProduct(id)} htmlType="button">
              Delete
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default withAuth(index);
