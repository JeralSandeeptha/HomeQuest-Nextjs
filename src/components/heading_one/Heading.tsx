'use client';
import React, { useCallback, useEffect, useState } from 'react'
import { HeadingProps } from '@/types/component.types';
import './Heading.scss';

const Heading = (props: HeadingProps) => {

    const [type, setType] = useState<string>(props.type);

    const setHeaderType = useCallback(() => {
        switch (type) {
            case 'h1':
                setType('h1');
                break;
            case 'h2':
                setType('h2');
                break;
            case 'h3':
                setType('h3');
                break;
            case 'h4':
                setType('h4');
                break;
            default:
                break;
        }
    }, [type]);

    useEffect(() => {
        setHeaderType();
    }, []);

    return (
        <h1 className={`heading ${type}`}>{ props.text }</h1>
    );
}

export default Heading;