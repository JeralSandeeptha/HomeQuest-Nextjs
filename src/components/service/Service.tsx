import React from 'react';
import './Service.scss';
import { IService } from '@/types/interfaces.types';
import Image from 'next/image';
import Heading from '../heading_one/Heading';
import Paragraph from '../paragraph/Paragraph';

const Service = (props: IService) => {

  return (
    <div className='service'>
        <div className='link-container'>
            <Image 
                width={30}
                height={30}
                alt='link-image'
                src='https://cdn.prod.website-files.com/66f262050f96e0f9e1e4568c/66fa9332a5dee1d6a5ee4e39_fi_7312623.svg'
                className='link-image'
            />
        </div>
        <Image 
            alt={props.service_image}
            src={props.service_image}
            className='service-img'
            width={100}
            height={100}
        />
        <div className="service-content">
            <div className="service-content-left">
                <div className="service-icon-container">
                    <Image 
                        alt='service-icon'
                        src='https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670cac4a2cbb453c6697a9a5_Sale%20(1).svg'
                        className='service-icon'
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            <div className="service-content-right">
                <Heading 
                    text={props.service_name}
                    color='white'
                    type='h5'
                />
                <Paragraph 
                    text={`Starting from $${props.service_start_price}`}
                    color='white'
                    type='medium'
                />
            </div>
        </div>
    </div>
  );

}

export default Service;