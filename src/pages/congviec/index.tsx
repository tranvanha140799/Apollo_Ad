import React, { useEffect, useState } from 'react';
import Layout from 'Layouts';
import withAuth from '@hocs/withAuth';
import { Table, Modal, Space } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
import ModalEditStaffInfo from './ModalEditStaffInfo';
// import { getListStaff } from 'core/services/staff';

function index() {
  const [role, setRole] = useState<any>();
  const [listStaff, setListStaff] = useState<any>();
  const [showEditProfileModal, setShowEditProfileModal] = React.useState<boolean>(false);
  const [staffID, setStaffID] = useState<string>('');
  useEffect(() => {
    getStaffList();
  }, []);

  const getStaffList = async () => {
    // getListStaff()
    //   .then((resp) => {
    //     console.log(`resp`, resp);
    //     setListStaff(resp?.data.Data);
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //   });
  };

  const openDetailModal = (id: string) => {
    setShowEditProfileModal(true);
    setStaffID(id);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'DisplayName',
    },
    {
      title: 'Address',
      dataIndex: 'Address',
    },
    {
      title: 'Last login',
      dataIndex: 'LastLogin',
    },
    {
      title: 'Action',
      render: (record: any) => (
        <Space size="middle">
          <a onClick={() => openDetailModal(record.AccountId)}>Detail </a>
          {/* <a>Delete</a> */}
        </Space>
      ),
    },
  ];

  return (
    <>
      <Layout title={'Staff'}>
        <div>
          <Table columns={columns} dataSource={listStaff} />
          <Modal
            width={755}
            bodyStyle={{ height: 'max-content' }}
            title={'Detail of staff'}
            visible={showEditProfileModal}
            onCancel={() => setShowEditProfileModal(false)}
            // onOk={handleOkEditProfileModal}
            destroyOnClose
            footer={null}
            className="edit-profile-modal"
          >
            <ModalEditStaffInfo staffID={staffID} />
          </Modal>
        </div>
      </Layout>
    </>
  );
}

export default withAuth(index);
