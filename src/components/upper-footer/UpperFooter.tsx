import React from 'react';
import './UpperFooter.scss';
import Button from '../button/Button';
import Paragraph from '../paragraph/Paragraph';
import { upperFooter } from '@/data/upper-footer.data';
import Heading from '../heading_one/Heading';

const UpperFooter = () => {
    
  return (
    <div className='upper-footer'>
        <div className="header-box">
            <Heading 
                text={upperFooter.title}
                type='h1'
                color='white'
            />
        </div>
        <div className='para-box'>
            <Paragraph 
                text={upperFooter.description}
                color='white'
                type='large'
            />
        </div>
        <Button 
            link={upperFooter.link}
            isIcon={false}
            type='primary'
            text={upperFooter.button}
        />
    </div>
  );

}

export default UpperFooter;