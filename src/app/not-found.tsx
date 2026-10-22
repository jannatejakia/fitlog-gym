import Image from 'next/image';
import error from '@/assets/error-404.png'

const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <Image src={error} alt='' height={650} width={700} />
        </div>
    );
};

export default NotFound;