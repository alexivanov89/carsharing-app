import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
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
      </Swiper>
    </div>
  );
};

export default Slider;
