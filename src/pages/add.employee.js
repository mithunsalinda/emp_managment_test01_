import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { TextInput, InputButton } from '../components/inputeFields/'
import { Button } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useForm, Controller } from "react-hook-form";
import { nameFormSchema, } from "../lib/schema";
import { yupResolver } from '@hookform/resolvers/yup';
import actions from '../redux/action/add.emp.action';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Header } from '../components/template/header';
/**
* @author
* @function AddNewEmployee
**/

export const AddNewEmployee = (props) => {
    const dispatch = useDispatch();
    const { empId, } = useSelector((state) => state.addNewEmpReducer)
    const [empID, setEmpID] = useState(0);


    useEffect(() => {
        getLocalStorageArray()
    }, [empID])

    const getLocalStorageArray = () => {
        return Math.floor(Date.now() / 1000)
    }

    // const {
    //     firstName,
    //     lastName,
    //     email,
    //     phoneNumber,
    //     gender } = useSelector((state) => state.addNewEmpReducer)


    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: `${getLocalStorageArray}`,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            gender: ''

        },
        resolver: yupResolver(nameFormSchema)
    });
    const onSubmit = (data) => {
        console.log("object", typeof (data));
        data.id = getLocalStorageArray();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Employee has been added',
            showConfirmButton: false,
            timer: 1000
        })
        dispatch(actions.addNewEmp(data))
    };
    return (

        <div className='wrapper '>
            <Header />
            <div className="custome__style">
                <div className="custome__style_col">
                    <Controller
                        name="ID"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                id="outlined-multiline-flexible"
                                maxRows={4}
                                label='ID'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                defaultVal={getLocalStorageArray()}
                                disabled={true}
                            //hiddenOnPage={true}
                            />
                        )}

                    />
                </div>
            </div>
            <div className="custome__style">
                <div className="custome__style_col">

                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label='First Name'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.firstName?.message}
                            />
                        )}

                    />
                </div>
                <div className="custome__style_col">
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label='Last Name'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.lastName?.message}
                            />
                        )}

                    />
                </div>
            </div>

            <div className="custome__style">
                <div className="custome__style_col">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label='Email'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.email?.message}
                            />
                        )}

                    />
                </div>
                <div className="custome__style_col">
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label='Phone Number'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.phoneNumber?.message}
                            />
                        )}

                    />
                </div>
            </div>
            <div className="custome__style">
                <div className="custome__style_col">
                    <div className="custome__style">
                        <div className="custome__style_col">
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            //defaultValue={"female"}
                                            name="radio-buttons-group"
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            error={errors.gender?.message}
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="custome__style">
                <div className="custome__style_col">

                    <Link to="/employee/list">
                        <InputButton variant="contained" buttonName='Back' />
                    </Link>
                </div>
                <div className="custome__style_col">
                    <InputButton variant="contained" buttonName='Save' onPress={handleSubmit(onSubmit)} />
                </div>

            </div >

        </div >

    )
}