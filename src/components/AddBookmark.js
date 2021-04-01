import React from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Formik, Form, Field, useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { GET_BOOKMARK } from './GetBookmark'
import * as Yup from 'yup'


const ADD_BOOKMARK = gql`
mutation($input:AddBookmarkInput){
    addBookmark(input:$input){
        id url description
    }
}

`

const validationSchema = Yup.object({
    url: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
});


const AddBookmark = () => {
    const [addBookmark] = useMutation(ADD_BOOKMARK)

    const formik = useFormik({
        initialValues: {
            url: "",
            description: ""
        },
        onSubmit: (values, actions) => {
            console.log(values)
            addBookmark({
                variables: {
                    input: { url: values.url, description: values.description }
                }, refetchQueries: [{ query: GET_BOOKMARK }]
            });
            actions.resetForm({
                values: {
                    url: "",
                    description: ""
                }
            })

        },
        validationSchema: validationSchema
    });
    return (
        <div>
            <Formik formik={formik} >
                <Form onSubmit={formik.handleSubmit} autoComplete="off">

                    <Field as={TextField} name="url" id="url" label="URL:"
                        value={formik.values.url}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.url && formik.touched.url}
                        helperText={formik.errors.url && formik.touched.url ? formik.errors.url : null}
                    />


                    <Field as={TextField} name="description" id="description" label="DESCRIPTION:"
                        value={formik.values.description}
                        onChange={formik.handleChange} />
                    <button type="submit" value="submit" > ADD BOOKMARK</button>
                </Form>
            </Formik>

        </div>
    )
}
export default AddBookmark
