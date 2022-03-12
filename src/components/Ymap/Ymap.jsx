import { useEffect, useRef, useState } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { API_YMAP_KEY } from '../../config';
import DotIcon from '../../assets/img/Dot.png';
import styles from './index.module.scss';

const Ymap = ({ placeMarks, center }) => {
  let myMap = useRef(null);

  const [yMapAPI, setYMapAPI] = useState(null);
  const [centerCoords, setCenterCoords] = useState([0, 0]);

  useEffect(async () => {
    if (yMapAPI) {
      const res = await yMapAPI.geocode(center);
      const firstGeoObject = res.geoObjects.get(0);
      const coords = await firstGeoObject.geometry.getCoordinates();
      setCenterCoords(coords);
    }
  }, [center]);

  const myGeoCode = (ymaps, myMap, address) => {
    ymaps
      .geocode(address, {
        results: 1,
      })
      .then(function (res) {
        // Выбираем первый результат геокодирования.
        const firstGeoObject = res.geoObjects.get(0);
        // Координаты геообъекта.
        const coords = firstGeoObject.geometry.getCoordinates();
        // Область видимости геообъекта.
        const bounds = firstGeoObject.properties.get('boundedBy');

        const myPlacemark = new ymaps.Placemark(
          coords,
          {
            hintContent: address,
          },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: DotIcon,
            iconImageSize: [18, 18],
            iconImageOffset: [-20, -20],
          },
        );

        myPlacemark.events.add('click', function () {});

        // Добавляем  геообъект на карту.
        myMap.geoObjects.add(myPlacemark);

        // Масштабируем карту на область видимости геообъекта.
        myMap.setBounds(bounds, {
          checkZoomRange: true,
        });
      });
  };

  const init = (ymaps, myMap) => {
    if (placeMarks && placeMarks.length > 0) {
      placeMarks.forEach(({ address, cityId, name }) =>
        myGeoCode(ymaps, myMap, `${cityId.name}, ${address}`),
      );
    }
  };

  return (
    <YMaps
      query={{
        apikey: API_YMAP_KEY,
        ns: 'ymaps',
        load: 'package.full',
      }}
    >
      <Map
        state={{ center: centerCoords, zoom: 11 }}
        controls={['zoomControl', 'fullscreenControl']}
        modules={[
          'geolocation',
          'geocode',
          'templateLayoutFactory',
          'layout.Image',
          'Placemark',
          'objectManager.addon.objectsBalloon',
          'objectManager.addon.objectsHint',
          'layout.ImageWithContent',
        ]}
        className={styles.map}
        onLoad={(ymaps) => {
          ymaps.ready(() => {
            init(ymaps, myMap);
          });
          setYMapAPI(ymaps);
        }}
        instanceRef={(yaMap) => {
          if (yaMap) {
            myMap = yaMap;
          }
        }}
      ></Map>
    </YMaps>
  );
};

export default Ymap;
