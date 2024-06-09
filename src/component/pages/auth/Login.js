"use client"

import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import {users} from "@/utils/model/users";
import {useRouter} from "next/navigation";
import {setToken} from "@/redux/slices/token";
import {useDispatch} from "react-redux";

const LoginForm = () => {
    const dispatch=useDispatch()
    const router=useRouter()
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Required'),
    });
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post('/api/auth/login', values);
            localStorage.setItem('token', response.data.token);
            dispatch(setToken(response.data.token))
            router.push('/');
          // Redirect to a protected page
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };


    return (
            <div className="max-w-md mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-5">Sign Up</h1>
                <Formik
                    initialValues={{ email: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-2"/>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-2"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    disabled={isSubmitting}
                                >
                                    login
                                </button>
                            </div>
                            <p className="text-gray-700 text-sm"><strong>email:</strong> zia@gmail.com</p>
                            <p className="text-gray-700 text-sm"><strong>password:</strong> 12345678</p>

                            {/*<Link href="/auth/sign-up" className="text-start pt-2 text-gray-500 text-xs">*/}
                            {/*    Create a new account*/}
                            {/*</Link>*/}
                        </Form>
                    )}
                </Formik>
            </div>

    );
};

export default LoginForm;
