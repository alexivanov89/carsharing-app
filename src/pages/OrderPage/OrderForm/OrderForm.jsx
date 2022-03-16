import { Fragment, useCallback, useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import ruLocale from 'date-fns/locale/ru';
import intervalToDuration from 'date-fns/intervalToDuration';
import format from 'date-fns/format';
import ReactSelect from 'react-select';
import { CarTotalInfo } from '../../../components/CarTotalInfo';
import Image from '../../../components/UI/Image/Image';
import NoFoto from '../../../assets/img/noFoto.jpg';
import { Ymap } from '../../../components/Ymap';
import { numberWithSpaces } from '../../../utils/numberWithSpaces';
import { sortList } from '../utils/sortList';
import {
  setCategoryActiveId,
  fetchCarAsync,
  fetchCategoryAsync,
  fetchPointAsync,
  fetchRateAsync,
} from '../../../store/slices/tableSlice';
import {
  setBabyChair,
  setCar,
  setCity,
  setColorCar,
  setDateFrom,
  setDateTo,
  setFilledStep,
  setFullTank,
  setPoint,
  setPriceCalculated,
  setPriceMax,
  setPriceMin,
  setRateOrder,
  setRentalDuration,
  setRightHandDrive,
} from '../../../store/slices/orderFormSlice';
import './select.scss';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.scss';

const OrderForm = () => {
  const dispatch = useDispatch();
  const {
    currentStep,
    pointOfIssue,
    carOrder,
    rateOrder,
    price,
    rentalDuration,
    additionalServices,
  } = useSelector(({ orderForm }) => orderForm);
  const { point, car, category, rate } = useSelector(({ table }) => table);
  const [filterByCityId, setFilterByCityId] = useState(null);
  const [filterByCategory, setfilterByCategory] = useState('');
  const selectPointRef = useRef();
  const [center, setCenter] = useState('Ульяновск');
  const [priceCalc, setPriceCalc] = useState(0);

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
        .map(({ address, id, name }) => ({ value: id, label: address, name: name }));
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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const rangeTime = () => {
    if (startDate && endDate) {
      const interval = intervalToDuration({ start: startDate, end: endDate });
      const milliseconds = endDate.getTime() - startDate.getTime();
      dispatch(
        setRentalDuration({
          label: `${interval.days}д ${interval.hours}ч ${interval.minutes}м`,
          value: milliseconds,
        }),
      );
    }
  };

  useEffect(() => {
    rangeTime();
    if (startDate) {
      dispatch(setDateFrom(startDate.getTime()));
    }
    if (endDate) {
      dispatch(setDateTo(endDate.getTime()));
    }
  }, [startDate, endDate]);

  const carTotalInfo = {
    car: carOrder.car,
    isFullTank: additionalServices.fullTank,
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
    dispatch(setPriceMin(preparePriceMin()));
  }, []);

  useEffect(() => {
    dispatch(setPriceMax(preparePriceMax()));
  }, []);

  const getPriceCalc = useCallback(() => {
    switch (rateOrder.rateTypeId.unit) {
      case 'сутки':
        setPriceCalc(rateOrder.price * Math.ceil(rentalDuration.value / (1000 * 60 * 60 * 24)));
        break;
      case '7 дней':
        setPriceCalc(rateOrder.price * Math.ceil(rentalDuration.value / (1000 * 60 * 60 * 24 * 7)));
        break;
      case '30 дней':
        setPriceCalc(
          rateOrder.price * Math.ceil(rentalDuration.value / (1000 * 60 * 60 * 24 * 30)),
        );
        break;
      case 'мин':
        setPriceCalc(rateOrder.price * Math.ceil(rentalDuration.value / (1000 * 60)));
        break;
      default:
        break;
    }

    if (additionalServices.fullTank) {
      setPriceCalc((prevPrice) => prevPrice + 500);
    }

    if (additionalServices.babyChair) {
      setPriceCalc((prevPrice) => prevPrice + 200);
    }

    if (additionalServices.rightHandDrive) {
      setPriceCalc((prevPrice) => prevPrice + 1600);
    }
  }, [
    rateOrder.price,
    rateOrder.rateTypeId.unit,
    rentalDuration.value,
    additionalServices.fullTank,
    additionalServices.babyChair,
    additionalServices.rightHandDrive,
  ]);

  useEffect(() => {
    getPriceCalc();

    if (priceCalc < price.min) {
      dispatch(setPriceCalculated(price.min));
    } else if (priceCalc > price.max) {
      dispatch(setPriceCalculated(price.max));
    } else {
      dispatch(setPriceCalculated(priceCalc));
    }
  }, [
    priceCalc,
    rateOrder.price,
    rateOrder.rateTypeId.unit,
    rentalDuration.value,
    additionalServices.fullTank,
    additionalServices.babyChair,
    additionalServices.rightHandDrive,
  ]);

  return (
    <form className={styles.form}>
      {currentStep === 0 && (
        <section className={styles.location}>
          <div className={styles.location__city}>
            <label>Город</label>
            <ReactSelect
              id="city"
              placeholder={'Начните вводить город ...'}
              isClearable
              options={cityPreparePoint()}
              onChange={(option, { action }) => {
                if (action === 'clear') {
                  setFilterByCityId(null);
                  dispatch(setCity(''));
                  selectPointRef.current.clearValue();
                  dispatch(
                    setCar({
                      description: '',
                      priceMin: 0,
                      priceMax: 0,
                      name: '',
                      number: '',
                      categoryId: {},
                      thumbnail: {},
                      tank: null,
                      colors: [],
                      id: null,
                    }),
                  );
                  dispatch(setColorCar(''));
                  dispatch(setFilledStep(-1));
                  dispatch(
                    setRateOrder({
                      id: null,
                      price: 0,
                      rateTypeId: {
                        unit: '',
                        name: '',
                        id: '',
                      },
                    }),
                  );
                  dispatch(setFullTank(false));
                  dispatch(setBabyChair(false));
                  dispatch(setRightHandDrive(false));
                  setStartDate(new Date());
                  setEndDate(null);
                  dispatch(setPriceMin(preparePriceMin()));
                  dispatch(setPriceMax(preparePriceMax()));
                  dispatch(
                    setRentalDuration({
                      label: '',
                      value: null,
                    }),
                  );
                  dispatch(setPriceCalculated(null));
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
          </div>
          <div className={styles.location__point}>
            <label>Пункт выдачи</label>
            <ReactSelect
              id="point"
              placeholder={'Начните вводить пункт ...'}
              isClearable
              options={preparePoint()}
              onChange={(option, { action }) => {
                if (action === 'clear') {
                  dispatch(setPoint(''));
                  dispatch(
                    setCar({
                      description: '',
                      priceMin: 0,
                      priceMax: 0,
                      name: '',
                      number: '',
                      categoryId: {},
                      thumbnail: {},
                      tank: null,
                      colors: [],
                      id: null,
                    }),
                  );
                  dispatch(setColorCar(''));
                  dispatch(setFilledStep(-1));
                  dispatch(
                    setRateOrder({
                      id: null,
                      price: 0,
                      rateTypeId: {
                        unit: '',
                        name: '',
                        id: '',
                      },
                    }),
                  );
                  dispatch(setFullTank(false));
                  dispatch(setBabyChair(false));
                  dispatch(setRightHandDrive(false));
                  setStartDate(new Date());
                  setEndDate(null);
                  dispatch(setPriceMin(preparePriceMin()));
                  dispatch(setPriceMax(preparePriceMax()));
                  dispatch(
                    setRentalDuration({
                      label: '',
                      value: null,
                    }),
                  );
                  dispatch(setPriceCalculated(null));
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
                  checked={!category.categoryActiveId}
                  onChange={() => {}}
                  onClick={() => {
                    setfilterByCategory('');
                    dispatch(setCategoryActiveId(null));
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
                      checked={id === category.categoryActiveId}
                      onChange={() => {}}
                      onClick={() => {
                        setfilterByCategory(`&categoryId=${id}`);
                        dispatch(setCategoryActiveId(id));
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
                        checked={id === carOrder.car.id}
                        onChange={() => {}}
                        onClick={() => {
                          dispatch(
                            setCar({
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
                            }),
                          );
                          setStartDate(new Date());
                          setEndDate(null);
                          dispatch(setPriceMin(priceMin));
                          dispatch(setPriceMax(priceMax));
                          dispatch(setColorCar(''));
                          dispatch(setFilledStep(0));
                          dispatch(
                            setRateOrder({
                              id: null,
                              price: 0,
                              rateTypeId: {
                                unit: '',
                                name: '',
                                id: '',
                              },
                            }),
                          );
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
              {carOrder.car.colors.length > 1 && (
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
                      dispatch(setFilledStep(1));
                    }}
                  />
                  <label htmlFor="allColor" className={styles.label}>
                    Любой
                  </label>
                  <div className={styles.circle} />
                </li>
              )}

              {carOrder.car.colors.length > 0 &&
                carOrder.car.colors.map((color) => (
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
                        dispatch(setFilledStep(1));
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
                    dispatch(
                      setRentalDuration({
                        label: '',
                        value: null,
                      }),
                    );
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
                    dispatch(
                      setRentalDuration({
                        label: '',
                        value: null,
                      }),
                    );
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
                        dispatch(setFilledStep(1));
                        dispatch(
                          setRateOrder({
                            id: id,
                            price: price,
                            rateTypeId: rateTypeId,
                          }),
                        );
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
                    dispatch(setFilledStep(1));
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
                    dispatch(setFilledStep(1));
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
                    dispatch(setFilledStep(1));
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
