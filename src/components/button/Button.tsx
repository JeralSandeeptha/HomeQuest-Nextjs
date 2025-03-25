import { ButtonProps } from '@/types/component.types'
import React from 'react'
import Paragraph from '../paragraph/Paragraph';
import Link from 'next/link';
import Image from 'next/image';
import './Button.scss';
import rightIcon from '../../assets/icons/right-arrow.svg';

const Button = (props: ButtonProps) => {
  return (
    <Link href={`${props.link}`}>
        <button className={`button ${props.type}`}>
            <Paragraph
                text={props.text}
                type='small'
                color={props.type == 'secondary' ? 'white' : 'black'}
            />
            {
                props.isIcon && <Image src={rightIcon} alt='right-arrow' className='right-arrow'/>
            }
        </button>
    </Link>
  );
}

export default Button;