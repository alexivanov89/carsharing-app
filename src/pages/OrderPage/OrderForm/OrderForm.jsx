import { Fragment, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import ruLocale from 'date-fns/locale/ru';
import intervalToDuration from 'date-fns/intervalToDuration';
import format from 'date-fns/format';
import ReactSelect from 'react-select';
import { CarTotalInfo } from '../../../components/CarTotalInfo';
import { numberWithSpaces } from '../../../utils/numberWithSpaces';
import MapImg from '../../../assets/img/map.webp';
import Image from '../../../components/UI/Image/Image';
import NoFoto from '../../../assets/img/noFoto.jpg';
import {
  fetchCarAsync,
  fetchCategoryAsync,
  fetchPointAsync,
  fetchRateAsync,
} from '../../../store/slices/tableSlice';
import { sortList } from '../utils/sortList';
import { useRef } from 'react';
import {
  setBabyChair,
  setCarId,
  setCarImage,
  setCategoryId,
  setCity,
  setColorCar,
  setColorsCar,
  setFilledStep,
  setFullTank,
  setNameCar,
  setPoint,
  setPrice,
  setRateOrder,
  setRentalDuration,
  setRightHandDrive,
  setStateNumberCar,
} from '../../../store/slices/orderFormSlice';
import './select.scss';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.scss';
import { Ymap } from '../../../components/Ymap';

const OrderForm = () => {
  const dispatch = useDispatch();
  const { currentStep, pointOfIssue, carOrder, rateOrder, additionalServices } = useSelector(
    ({ orderForm }) => orderForm,
  );
  const { point, car, category, rate } = useSelector(({ table }) => table);
  const [filterByCityId, setFilterByCityId] = useState(null);
  const [filterByCategory, setfilterByCategory] = useState('');
  const selectPointRef = useRef();
  const [center, setCenter] = useState('Ульяновск');

  const preparePriceMin = () => {
    if (!car.cars.length) {
      return null;
    }
    return Math.min(...car.cars.map(({ priceMin }) => priceMin));
  };

  const preparePriceMax = () => {
    if (!car.cars.length) {
      return null;
    }
    return Math.max(...car.cars.map(({ priceMax }) => priceMax));
  };

  const preparePoint = () => {
    if (!point.points.length) {
      return null;
    }

    if (filterByCityId) {
      return point.points
        .filter(({ cityId }) => cityId)
        .filter(({ cityId }) => cityId.id === filterByCityId)
        .map(({ address, id }) => ({ value: id, label: address }));
    }

    return point.points.filter(({ cityId }) => cityId);
  };

  const placeMarks = () => {
    if (!point.points.length) {
      return null;
    }

    if (filterByCityId) {
      return point.points
        .filter(({ cityId }) => cityId)
        .filter(({ cityId }) => cityId.id === filterByCityId);
    }

    return point.points.filter(({ cityId }) => cityId);
  };

  //city с сущ point
  const cityPreparePoint = () => {
    if (point.points.length) {
      return sortList(
        point.points
          .filter(({ cityId }) => cityId)
          .map(({ cityId }) => cityId)
          .map(({ name, id }) => ({ value: id, label: name })),
      );
    }
  };

  const { handleSubmit, reset, setValue, control } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const rangeTime = () => {
    if (startDate && endDate) {
      const value = intervalToDuration({ start: startDate, end: endDate });
      dispatch(setRentalDuration(`${value.days}д ${value.hours}ч ${value.minutes}м`));
    }
  };

  useEffect(() => {
    rangeTime();
  }, [startDate, endDate]);

  const carTotalInfo = {
    carModel: carOrder.carName,
    stateNumberCar: carOrder.stateNumberCar,
    isFullTank: additionalServices.fullTank,
    carImage: carOrder.carImage,
    accessDate: format(startDate, 'dd.MM.yyyy k:mm'),
  };

  useEffect(() => {
    dispatch(fetchPointAsync());
    dispatch(fetchCategoryAsync());
    dispatch(fetchRateAsync());
  }, []);

  useEffect(() => {
    dispatch(fetchCarAsync(`?limit=10${filterByCategory}`));
  }, [filterByCategory]);

  useEffect(() => {
    dispatch(
      setPrice({
        min: preparePriceMin(),
        max: preparePriceMax(),
        calculated: null,
      }),
    );
  }, []);

  const onSubmit = (data) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {currentStep === 0 && (
        <section className={styles.location}>
          <div className={styles.location__city}>
            <label>Город</label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  id="city"
                  placeholder={'Начните вводить город ...'}
                  isClearable
                  {...field}
                  options={cityPreparePoint()}
                  onChange={(option, { action }) => {
                    if (action === 'clear') {
                      setFilterByCityId(null);
                      dispatch(setCity(''));
                      selectPointRef.current.clearValue();
                      dispatch(setNameCar(''));
                      dispatch(setCarId(null));
                      dispatch(setFilledStep(-1));
                    }

                    if (option && option.value) {
                      setFilterByCityId(option.value);
                      dispatch(setCity(option));
                      setCenter(option.label);
                    }
                  }}
                  className={styles.select}
                  classNamePrefix="select"
                  value={pointOfIssue.city.value ? pointOfIssue.city : null}
                />
              )}
            />
          </div>
          <div className={styles.location__point}>
            <label>Пункт выдачи</label>
            <Controller
              name="point"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  id="point"
                  placeholder={'Начните вводить пункт ...'}
                  isClearable
                  {...field}
                  options={preparePoint()}
                  onChange={(option, { action }) => {
                    if (action === 'clear') {
                      dispatch(setPoint(''));
                      dispatch(setNameCar(''));
                      dispatch(setCarId(null));
                      dispatch(setFilledStep(-1));
                    }

                    if (option && option.value) {
                      dispatch(setPoint(option));
                      setCenter(`${pointOfIssue.city.label}, ${option.label}`);
                    }
                  }}
                  className={styles.select}
                  classNamePrefix="select"
                  ref={selectPointRef}
                  value={pointOfIssue.point.value ? pointOfIssue.point : null}
                />
              )}
            />
          </div>
          <div className={styles.location__map}>
            <p className={styles.location__map__header}>Выбрать на карте:</p>
            <div className={styles.location__map__body}>
              <Ymap placeMarks={placeMarks()} center={center} />
            </div>
          </div>
        </section>
      )}
      {currentStep === 1 && (
        <section className={styles.car}>
          <div className={styles.car__filters}>
            <ul className={styles.list__filters}>
              <li className={styles.list__filters__item}>
                <input
                  type="radio"
                  className={styles.radioBtn}
                  name="choiceFilterCar"
                  id="allCar"
                  value={''}
                  checked={'' === carOrder.categoryId}
                  onChange={() => {}}
                  onClick={() => {
                    setfilterByCategory('');
                    dispatch(setCategoryId(''));
                  }}
                />
                <label htmlFor="allCar" className={styles.label}>
                  Все модели
                </label>
                <div className={styles.circle} />
              </li>

              {!category.loading &&
                !category.error &&
                category.categories.length > 0 &&
                category.categories.map(({ name, id, description }) => (
                  <li className={styles.list__filters__item} key={id}>
                    <input
                      type="radio"
                      className={styles.radioBtn}
                      name="choiceFilterCar"
                      id={id}
                      value={id}
                      checked={id === carOrder.categoryId}
                      onChange={() => {}}
                      onClick={() => {
                        setfilterByCategory(`&categoryId=${id}`);
                        dispatch(setCategoryId(id));
                      }}
                    />
                    <label htmlFor={id} className={styles.label}>
                      {name}
                    </label>
                    <div className={styles.circle} />
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles.wrapper_car__list}>
            {car.loading && (
              <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            {car.error && <div>Error</div>}
            <div className={styles.car__list}>
              {!car.loading &&
                !car.error &&
                car.cars.length > 0 &&
                car.cars.map(
                  ({
                    name,
                    number,
                    priceMin,
                    priceMax,
                    description,
                    categoryId,
                    thumbnail,
                    tank,
                    colors,
                    id,
                  }) => (
                    <Fragment key={id}>
                      <input
                        type="radio"
                        name="choiceCar"
                        id={id}
                        value={id}
                        checked={id === carOrder.carId}
                        onChange={() => {}}
                        onClick={() => {
                          dispatch(setNameCar(name));
                          dispatch(setCarId(id));
                          dispatch(setColorsCar(colors));
                          dispatch(setStateNumberCar(number));
                          dispatch(setCarImage(thumbnail.path));
                          setStartDate(new Date());
                          setEndDate(null);
                          dispatch(
                            setPrice({
                              min: priceMin,
                              max: priceMax,
                              calculated: null,
                            }),
                          );
                          dispatch(setColorCar(''));
                          dispatch(setFilledStep(0));
                          dispatch(setRateOrder({ name: '', id: null }));
                          dispatch(setFullTank(false));
                          dispatch(setBabyChair(false));
                          dispatch(setRightHandDrive(false));
                        }}
                      />
                      <label htmlFor={id} className={styles.car__list__item}>
                        <div className={styles.car__info}>
                          <div className={styles.car__model}>{name}</div>
                          <div className={styles.car__price}>
                            {`${numberWithSpaces(priceMin)} - ${numberWithSpaces(priceMax)} ₽`}
                          </div>
                        </div>
                        <div className={styles.car__img}>
                          <Image src={thumbnail.path} alt={name} fallback={NoFoto} loading="lazy" />
                        </div>
                      </label>
                    </Fragment>
                  ),
                )}
            </div>
          </div>
        </section>
      )}
      {currentStep === 2 && (
        <section className={styles.additionally}>
          <div className={styles.car__color}>
            <div className={styles.car__color__title}>Цвет</div>
            <ul className={styles.color__list}>
              {carOrder.colors.length > 1 && (
                <li className={styles.color__list__item}>
                  <input
                    type="radio"
                    className={styles.radioBtn}
                    name="choiceColorCar"
                    id="allColor"
                    value="allColor"
                    checked={'Любой' === carOrder.color}
                    onChange={() => {}}
                    onClick={() => {
                      dispatch(setColorCar('Любой'));
                    }}
                  />
                  <label htmlFor="allColor" className={styles.label}>
                    Любой
                  </label>
                  <div className={styles.circle} />
                </li>
              )}

              {carOrder.colors.length > 0 &&
                carOrder.colors.map((color) => (
                  <li className={styles.color__list__item} key={color}>
                    <input
                      type="radio"
                      className={styles.radioBtn}
                      name="choiceColorCar"
                      id={color}
                      value={color}
                      checked={color === carOrder.color}
                      onChange={() => {}}
                      onClick={() => {
                        dispatch(setColorCar(color));
                      }}
                    />
                    <label htmlFor={color} className={styles.label}>
                      {color}
                    </label>
                    <div className={styles.circle} />
                  </li>
                ))}
            </ul>
          </div>

          <div className={styles.rentalDuration}>
            <div className={styles.rentalDuration__title}>Дата аренды</div>
            <div className={styles.rentalDuration__dates}>
              <div className={styles.rentalDuration__date}>
                <label className={styles.dateFrom}>С</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    dispatch(setFilledStep(1));
                    dispatch(setRentalDuration(''));
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  timeInputLabel="Time:"
                  dateFormat="dd.MM.yyyy k:mm"
                  showTimeSelect
                  placeholderText="Введите дату и время"
                  isClearable={true}
                  className={styles.datePicker}
                  locale={ruLocale}
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  minDate={startDate}
                />
              </div>
              <div className={styles.rentalDuration__date}>
                <label className={styles.dateTo}>По</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                    dispatch(setFilledStep(1));
                    dispatch(setRentalDuration(''));
                  }}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  timeInputLabel="Time:"
                  dateFormat="dd.MM.yyyy k:mm"
                  showTimeSelect
                  placeholderText="Введите дату и время"
                  isClearable={true}
                  className={styles.datePicker}
                  locale={ruLocale}
                  timeFormat="HH:mm"
                  timeIntervals={30}
                />
              </div>
            </div>
          </div>

          <div className={styles.rate}>
            <div className={styles.rate__title}>Тариф</div>
            <ul className={styles.rate__list}>
              {rate.rates.length > 0 &&
                rate.rates.map(({ price, rateTypeId, id }) => (
                  <li className={styles.rate__list__item} key={id}>
                    <input
                      type="radio"
                      className={styles.radioBtn}
                      name="choiceRate"
                      id={id}
                      value={id}
                      checked={id === rateOrder.id}
                      onChange={() => {}}
                      onClick={() => {
                        dispatch(setRateOrder({ name: rateTypeId.name, id: id }));
                      }}
                    />
                    <label htmlFor={id} className={styles.label}>
                      {`${rateTypeId.name}, ${price} ₽/${rateTypeId.unit}`}
                    </label>
                    <div className={styles.circle} />
                  </li>
                ))}
            </ul>
          </div>

          <div className={styles.additionalServices}>
            <div className={styles.additionalServices__title}>Доп услуги</div>
            <ul className={styles.additionalServices__list}>
              <li className={styles.additionalServices__list__item}>
                <input
                  type="checkbox"
                  name="choiceFullTank"
                  id="fullTank"
                  value={additionalServices.fullTank}
                  checked={additionalServices.fullTank === true}
                  onChange={() => {}}
                  onClick={() => {
                    dispatch(setFullTank(!additionalServices.fullTank));
                  }}
                />
                <label htmlFor="fullTank" className={styles.label}>
                  Полный бак, 500р
                </label>
                <div className={styles.square} />
              </li>

              <li className={styles.additionalServices__list__item}>
                <input
                  type="checkbox"
                  name="choiceBabyChair"
                  id="babyChair"
                  value={additionalServices.babyChair}
                  checked={additionalServices.babyChair === true}
                  onChange={() => {}}
                  onClick={() => {
                    dispatch(setBabyChair(!additionalServices.babyChair));
                  }}
                />
                <label htmlFor="babyChair" className={styles.label}>
                  Детское кресло, 200р
                </label>
                <div className={styles.square} />
              </li>

              <li className={styles.additionalServices__list__item}>
                <input
                  type="checkbox"
                  name="choiceBabyChair"
                  id="rightHandDrive"
                  value={additionalServices.rightHandDrive}
                  checked={additionalServices.rightHandDrive === true}
                  onChange={() => {}}
                  onClick={() => {
                    dispatch(setRightHandDrive(!additionalServices.rightHandDrive));
                  }}
                />
                <label htmlFor="rightHandDrive" className={styles.label}>
                  Правый руль, 1600р
                </label>
                <div className={styles.square} />
              </li>
            </ul>
          </div>
        </section>
      )}
      {currentStep === 3 && <CarTotalInfo carTotalInfo={carTotalInfo} />}
    </form>
  );
};

export default OrderForm;
