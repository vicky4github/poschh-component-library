import { Scroller } from '../../Scroller/Scroller';
import './brands.css';

const images = [
  './c1.png',
  './c2.png',
  './c3.png',
  './c4.png',
  './c5.png',
  './c6.png',
];
export const Brands = () => {
  return (
    <div className='flex flex-col w-[100%] items-center justify-center bg-[#141318] py-12'>
      <div className='w-[60%] mb-12'>
            <p className='text-[#F2F4F7] text-[56px] font-semibold text-center leading-loose'>
            Our Trusted Proud Partners
            </p>
            <p className='text-[#F2F4F7] text-[16px] leading-relaxed text-center w-[70%] mx-auto'>
            Our customer support team is here to help! They can answer any queries you have about our packages and recommend the best fit for your needs.
            </p>
          </div>
      <Scroller
            items={images}
            direction="left"
            pauseOnHover
            pauseOnClick
            gradient={false}
            speed={40}
            delay={0}
            loop={0}
          />  
          <Scroller
            items={images}
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
