import { useRef } from 'react';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import { Slide } from './Slide';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../assets/icons/Buttons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './index.module.scss';

const Slider = ({ menuActive, slides }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div
      className={cn(styles.slider, {
        [styles.menuActive]: menuActive,
      })}
    >
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'disabled',
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        pagination={{
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        id="mySwiper"
        ref={swiperRef}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.routePathBtn}>
            <Slide
              background={slide.background}
              label={slide.label}
              stylesBtn={slide.stylesBtn}
              routePathBtn={slide.routePathBtn}
            />
          </SwiperSlide>
        ))}
        <div
          ref={prevRef}
          className={styles.prevRef}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <div className={styles.opacity} />
          <ArrowLeftIcon />
        </div>
        <div
          ref={nextRef}
          className={styles.nextRef}
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <div className={styles.opacity} />
          <ArrowRightIcon />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
