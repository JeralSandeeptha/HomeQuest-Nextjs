import './NotFoundPage.scss';
import notfoundimage from '../../assets/images/not-found-image.png';
import Image from 'next/image';
import Heading from '@/components/heading_one/Heading';
import Paragraph from '@/components/paragraph/Paragraph';
import Button from '@/components/button/Button';
import { notFoundPage } from '@/data/not-found.data';

const NotFoundPage = () => {

  return (
    <div className='not-found-page'>
        <div className='not-found-page-inner'>
            <div className="not-found-left">
                <Image
                    src={notfoundimage} 
                    alt="not-found-image" 
                    className='not-found-image'
                />
            </div>
            <div className="not-found-right">
                <Heading 
                    type='h2'
                    text={notFoundPage.title}
                />
                <Paragraph 
                    text={notFoundPage.description}
                    type='small'
                />

                <Button 
                    text={notFoundPage.buttonText}
                    type='primary'
                    link='/'
                    isIcon={true}
                />
            </div>
        </div>
    </div>
  );

}

export default NotFoundPage;