'use client'
import React from 'react';
import HomePage from "@/component/pages/home/HomePage";
import AuthLayout from "@/component/layout/AuthLayout";

const Index = () => {
    return (
        <AuthLayout>
            <HomePage/>
        </AuthLayout>
    );
};

export default Index;
