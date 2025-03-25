'use client';
import { ParagraphProps } from '@/types/component.types';
import React, { useCallback, useEffect, useState } from 'react';
import './Paragraph.scss';

const Paragraph = (props: ParagraphProps) => {

    const [type, setType] = useState(props.type);

    const setParaType = useCallback(() => {
        switch (type) {
            case 'large':
                setType('large');
                break;
            case 'medium':
                setType('medium');
                break;
            case 'small':
                setType('small');
                break;
            case 'extra-small':
                setType('extra-small');
                break;
            default:
                break;
        }
    }, [type]);

    useEffect(() => {
        setParaType();
    }, []);

    return (
        <p className={`paragraph ${props.type} ${props.color}`}>{ props.text }</p>
    );

}

export default Paragraph;