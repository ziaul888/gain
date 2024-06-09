'use client'
import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    description: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
    location: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
    startDate: Yup.date()
        .required('Required')
        .nullable(),
    endDate: Yup.date()
        .required('Required')
        .nullable()
        .min(            Yup.ref('startDate'),
            "End date can't be before start date"
        ),
});

const EventForm = ({item,handleFormSubmit}) => {

    const initialValues = {
        title: item?.title ?? '',
        description: item?.description ?? '',
        location: item?.location ?? '',
        startDate: item?.startDate ?? '',
        endDate: item?.endDate ?? '',
    };
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        handleFormSubmit(values)
        resetForm()
    }
    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Create Event</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <Field
                                name="title"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="title" component="div" className="text-red-500 text-xs mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <Field
                                name="description"
                                as="textarea"
                                rows="3"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500 text-xs mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                                Location
                            </label>
                            <Field
                                name="location"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="location" component="div" className="text-red-500 text-xs mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                                Start Date
                            </label>
                            <Field
                                name="startDate"
                                type="date"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="startDate" component="div" className="text-red-500 text-xs mt-2" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                                End Date
                            </label>
                            <Field
                                name="endDate"
                                type="date"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="endDate" component="div" className="text-red-500 text-xs mt-2" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                disabled={isSubmitting}
                            >
                                {!item ? "Create Event":"Update event"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default EventForm;
