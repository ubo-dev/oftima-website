// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from '@/lib/images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import 'swiper/css/effect-fade';
import { A11y, Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from 'next/image';

export default function Slide() {
  return (
    <section id="hizmetlerimiz" className='py-12 px-4 md:px-12 lg:px-44 scroll-mt-52'>
      <div className='container mx-auto'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
          onSwiper={swiper => console.log(swiper)}
          className='h-64 md:h-96 lg:h-[36rem] w-full rounded-lg' // Responsive heights
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect='fade' // Added fade effect
          fadeEffect={{ crossFade: true }} // Configured fade effect
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-full w-full'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout='fill'
                  objectFit='contain' // Changed to contain to fit images within the container
                  placeholder='blur'
                  blurDataURL='/../public/home.png'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
