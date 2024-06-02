import { Scroller } from '../../Scroller/Scroller';
import './brands.css';

const images1 = [
  './c1.svg',
  './c2.svg',
  './c3.svg',
  './c4.svg',
  './c5.svg',
  // './c6.svg',
];
const images2 = [
  './c7.svg',
  './c8.svg',
  './c9.svg',
  './c10.svg',
  './c11.svg',
  './c12.svg',
];
export const Brands = () => {
  return (
    <div className='flex flex-col w-[100%] items-center justify-center bg-[#141318] py-12'>
      <div className='md:w-[60%] w-[90%] mb-12'>
            <p className='text-[#F2F4F7] md:text-[56px] text-[30px] font-semibold text-center md:leading-loose'>
            Our Trusted Proud Partners
            </p>
            <p className='text-[#F2F4F7] md:text-[16px] text-[12px] md:leading-relaxed text-center md:w-[70%] mx-auto'>
            Our customer support team is here to help! They can answer any queries you have about our packages and recommend the best fit for your needs.
            </p>
          </div>
      <Scroller
            items={images1}
            direction="left"
            pauseOnHover
            pauseOnClick
            gradient={false}
            speed={40}
            delay={0}
            loop={0}
          />  
          <Scroller
            items={images2}
            direction="right"
            pauseOnHover
            pauseOnClick
            gradient={false}
            speed={40}
            delay={0}
            loop={0}
          />  
    </div>
    
  );

};
