import { useRef } from 'react';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import { Slide } from './Slide';
import BG1 from '../../../assets/img/Slider1.png';
import BG2 from '../../../assets/img/Slider2.png';
import BG3 from '../../../assets/img/Slider3.png';
import BG4 from '../../../assets/img/Slider4.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './index.module.scss';
import { routePaths } from '../../../router/routes';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../assets/icons/Buttons';

const Slider = ({ menuActive }) => {
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
        <SwiperSlide>
          <Slide
            background={BG1}
            label={{
              title: 'Бесплатная парковка',
              subtitle: `Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а
          также в аэропортах.`,
            }}
            stylesBtn={styles.slider1Btn}
            routePathBtn={routePaths.parking}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            background={BG2}
            label={{
              title: 'Страховка',
              subtitle: `Полная страховка страховка автомобиля`,
            }}
            stylesBtn={styles.slider2Btn}
            routePathBtn={routePaths.insurance}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            background={BG3}
            label={{
              title: 'Бензин',
              subtitle: `Полный бак на любой заправке города за наш счёт`,
            }}
            stylesBtn={styles.slider3Btn}
            routePathBtn={routePaths.benzine}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            background={BG4}
            label={{
              title: 'Обслуживание',
              subtitle: `Автомобиль проходит еженедельное ТО`,
            }}
            stylesBtn={styles.slider4Btn}
            routePathBtn={routePaths.service}
          />
        </SwiperSlide>
        <div
          ref={prevRef}
          className={styles.prevRef}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <ArrowLeftIcon />
        </div>
        <div
          ref={nextRef}
          className={styles.nextRef}
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <ArrowRightIcon />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
