import React, { useEffect, useState } from 'react';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Table, DatePicker } from 'antd';
import { slk_thang } from '@core/services/API';

function index() {
  const [orderData, setOrderData] = useState<any>([]);
  const [date, setDate] = useState<string>('20190719');

  useEffect(() => {
    getOrderList();
  }, [date]);

  //   const getSLKList = async () => {
  //     slk_thang(date)
  //       .then((resp: any) => {
  //         console.log(resp.data);

  //         setSlkData(resp.data);
  //       })
  //       .catch((error: any) => {
  //         console.log('error', error);
  //       });
  //   };
  const data = [
    {
      maDonHang: 1,
      maNhanVien: 113,
      maKhachHang: 115,
      trangThai: 1,
      diaChiNhan: 'Dak Duc, Ngoc Hoi, Kon Tum',
      soDienThoai: '0354646365',
      email: 'donghai9x@gmail.com',
      tongTien: 13990,
      ghiChu: '',
    },
    {
      maDonHang: 2,
      maNhanVien: 114,
      maKhachHang: 116,
      trangThai: 0,
      diaChiNhan: 'Dak Duc, Ngoc Hoi, Kon Tum',
      soDienThoai: '0354646365',
      email: 'tranvanha140799@gmail.com',
      tongTien: 17990,
      ghiChu: '',
    },
  ];

  const getOrderList = () => {
    setOrderData(data);
  };

  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'maDonHang',
    },
    {
      title: 'Mã nhân viên phụ trách',
      dataIndex: 'maNhanVien',
    },
    {
      title: 'Mã khách hàng',
      dataIndex: 'maKhachHang',
    },
    {
      title: 'Trạng thái đơn hàng',
      dataIndex: 'trangThai',
    },
    {
      title: 'Địa chỉ nhận hàng',
      dataIndex: 'diaChiNhan',
    },
    {
      title: 'Số điện thoại nhận hàng',
      dataIndex: 'soDienThoai',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'tongTien',
    },
    {
      title: 'Ghi chú',
      dataIndex: 'ghiChu',
    },
  ];
  function onChange(date: any, dateString: any) {
    const selectedDate = dateString.replaceAll('-', '') + '01';
    setDate(selectedDate);
  }
  return (
    <Layout title={'Order'}>
      <div>
        <DatePicker onChange={onChange} picker="month" />
      </div>
      <div>
        <Table columns={columns} dataSource={orderData} />
      </div>
    </Layout>
  );
}

export default withAuth(index);
