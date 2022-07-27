import React, { useEffect, useState } from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { InputButton } from '../components/inputeFields';
import { useDispatch, useSelector } from 'react-redux';
import action from '../redux/action/add.emp.action';
import Swal from 'sweetalert2'
import { Header } from '../components/template/header';
/**
* @author
* @function EmployeeList
**/

export const EmployeeList = (props) => {
    const [items, setItems] = useState({});
    const { empDate } = useSelector((state) => state.addNewEmpReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {

    }, [empDate])
    const rows = empDate.map((item, index) => ({
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        phoneNumber: item.phoneNumber,
        gender: item.gender,
    }));

    const tableProps = [{ field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 130 }]

    const columns = [
        ...tableProps
        ,
        {
            field: 'editAction',
            headerName: 'Action',
            sortable: false,
            width: 100,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    const api = params.api;
                    const thisRow = {};

                    api
                        .getAllColumns()
                        .filter((c) => c.field !== '__check__' && !!c)
                        .forEach(
                            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                        );
                    return navigate('/employee/edit', { state: { rowID: thisRow } });
                };

                return <><Button onClick={onClick} className='mrg-right' variant="outlined">Edit</Button></>;
            },

        }, {
            field: 'deleteAction',
            headerName: 'Action',
            sortable: false,
            width: 100,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    const api = params.api;
                    const thisRow = {};

                    api
                        .getAllColumns()
                        .filter((c) => c.field !== '__check__' && !!c)
                        .forEach(
                            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                        );

                    //alert(JSON.stringify(thisRow, null, 4));
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const empListAfterDeleted = empDate.filter(emp => emp.id !== thisRow.id);
                            console.log(empListAfterDeleted);
                            dispatch(action.deleteEmp(empListAfterDeleted));
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    //navigate('/employee/edit',{state:{id:1,name:'sabaoon'}});

                    // return navigate('/employee/edit', { state: { rowID: thisRow } });
                };

                return <><Button onClick={onClick} className='mrg-right' variant="outlined">Delete</Button></>;
            },

        },
    ];

    return (
        <div className='wrapper'>
            <Header />
            <div className='button__panel'><Link to="/employee/add">
                <InputButton variant="contained" buttonName='Add' />
            </Link></div>

            <div style={{ height: 400, width: '100%', float: 'left' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <DataGrid rows={rows} columns={columns} />
                    </div>
                </div>
            </div>

        </div>
    )

}