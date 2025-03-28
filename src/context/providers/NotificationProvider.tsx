'use client';
import React, { useState } from 'react'
import NotificationContext from '../context/NotificationProvider';

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {

    const [isError, setIsError] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    return (
        <NotificationContext.Provider value={{ isError, setIsError, isSuccess, setIsSuccess }}>
            { children }
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;