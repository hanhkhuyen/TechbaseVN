import React from 'react';
import { Modal , Table} from 'antd';
import { format } from 'date-fns'
import './ModalDetail.css';
import 'antd/dist/antd.css';

const ModalDetail = (props) => {
    const {
        visible,
        onCancel,
        infoDetail,
        status,
        selectCountry,
    } = props
    
    const columns = [
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
            render: date => <div>{format(new Date(date), 'MMM dd, yyyy')}</div>,
        },
        {
            title: 'Cases',
            dataIndex: 'Cases',
            key: 'Cases',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
        },
    ];

    return (
        <div className="modal_detail">
            <Modal
                title={`Number of people ${status} in ${selectCountry}`}
                visible={visible}
                footer={null}
                onCancel={onCancel}
                width={700}
            >
                <Table columns={columns} dataSource={infoDetail} rowKey={record => record.Date} scroll={{ y: 300 }} pagination={infoDetail.length > 1 ? true : false}/>
            </Modal>
        </div>
    );
}

export default React.memo(ModalDetail);
