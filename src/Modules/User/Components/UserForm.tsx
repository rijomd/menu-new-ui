import * as Yup from 'yup';
import { Box } from "@mui/material";

import { GeneralForm, TypeFormValues, FormButtonField } from 'Components/FormElements'
import { useAppSelector } from "Services/Hook/Hook";
import { getAuthUser } from 'Services/Methods/AuthMethods';

import { getUserState } from "../Reducer/UserAction";

export const UserForm = ({ formRef, handleSubmit, initialData, }: { formRef?: any, handleSubmit: (data: any) => void, initialData: any, }) => {
    const userState = useAppSelector(getUserState);
    const user = getAuthUser();

    const Schema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().required('Required'),
        location: Yup.string().required('Required'),
        userRole: Yup.string().required('Required'),
    });

    const formValues: TypeFormValues[] = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
            grid: { largeDevice: 6, mediumDevice: 6 }
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            disabled: initialData._id ? true : false,
            grid: { largeDevice: 6, mediumDevice: 6 }
        },
        {
            name: 'password',
            label: 'Password',
            type: 'text',
            required: true,
            hideColumn: initialData._id ? true : false,
            grid: { largeDevice: 6, mediumDevice: 6 }
        },
        {
            name: 'location',
            label: 'Location',
            type: 'autocomplete',
            options: userState.locationCompo,
            required: true,
            hideColumn: user?.userRole === 'superAdmin' ? false : true,
            grid: { largeDevice: 6, mediumDevice: 6 }
        },
        {
            name: 'userRole',
            label: 'User Type',
            type: 'select',
            options: [
                { label: 'Admin', value: 'Admin' },
                { label: 'User', value: 'User' },
            ],
            required: true,
            hideColumn: user?.userRole === 'superAdmin' ? false : true,
            grid: { largeDevice: 6, mediumDevice: 6 }
        },
        {
            name: 'status',
            label: 'Status',
            type: 'checkBox',
            hideColumn: initialData._id ? false : true,
            grid: { largeDevice: 6, mediumDevice: 6 }
        },
    ];


    return (
        <Box sx={{ margin: '8px 4px' }}>
            <GeneralForm
                handleSubmit={handleSubmit}
                initialValues={initialData}
                validationSchema={Schema}
                formValues={formValues}
                ref={formRef}
            />
            <FormButtonField sx={{ display: 'none' }} >Save</FormButtonField>
        </Box>
    )

}