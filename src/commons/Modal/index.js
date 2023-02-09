import React, { useState,useContext } from 'react';
import { Button, Form, Modal,Input } from 'antd';
import { Select } from 'antd';
import users from '../../constants/users';
import CTX from '../../store';

const ALL_USERS = users.map(el => {

    return {
        value:el,
        label:el
    }

})

function AddNewTaskModal() {


    const ctx = useContext(CTX);

    

    

    const handleOk = () => {
        ctx.setState((prev) => {
            return {
                ...prev,
                showModal:false
            }
        })
    };

    const handleCancel = () => {
        ctx.setState((prev) => {
            return {
                ...prev,
                showModal:false
            }
        })
    };

    return (
            <Modal title="Basic Modal" open={ctx.showModal} onOk={handleOk} onCancel={handleCancel}>
                <Form onSubmit={() => { }}>
                    <Form.Item
                        name="description"
                        label="description"
                        rules={[
                            {
                                required: true,
                                message: 'Description is required'
                            }
                        ]}
                    >
                        <Input placeholder="Description" />
                    </Form.Item>
                    <Form.Item
                        name="date"
                        label="date"
                        rules={[
                            {
                                required: true,
                                message: 'Date is required'
                            }
                        ]}
                    >
                        <Input type="date" />
                    </Form.Item>
                    <Form.Item
                        name="task_type"
                        label="Task Type"
                        
                    >
                        <Select
                            options={[
                                {
                                    value: 'planned',
                                    label: 'Planned',
                                },
                                {
                                    value: 'started',
                                    label: 'Started',
                                },
                                {
                                    value: 'done',
                                    label: 'Done',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        name="task_type"
                        label="Task Type"
                        
                    >
                        <Select
                            options={ALL_USERS}
                        />
                    </Form.Item>
                </Form>

            </Modal>
       
    );
};

export default AddNewTaskModal;