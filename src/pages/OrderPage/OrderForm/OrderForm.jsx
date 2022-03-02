import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import ReactSelect from 'react-select';
import { CarTotalInfo } from '../../../components/CarTotalInfo';
import { numberWithSpaces } from '../../../utils/numberWithSpaces';
import carImage1 from '../../../assets/img/carImage1.png';
import carImage2 from '../../../assets/img/carImage2.png';
import Map from '../../../assets/img/map.webp';
import './select.scss';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.scss';

const OrderForm = () => {
  const dispatch = useDispatch();
  const { currentStep, price } = useSelector(({ orderForm }) => orderForm);

  const { handleSubmit, reset, setValue, control } = useForm();
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(null);

  const carTotalInfo = {
    carModel: 'Hyndai, i30 N',
    stateNumberCar: 'К 761 НА 73',
    isFullTank: true,
    carImage: carImage2,
    accessDate: '12.06.2019 12:00',
  };

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
                  options={[
                    { value: '1', label: 'Ульяновск' },
                    { value: '2', label: 'Саратов' },
                    { value: '3', label: 'Санкт-Петербург' },
                    { value: '4', label: 'Краснодар' },
                    { value: '5', label: 'Воронеж' },
                  ]}
                  onChange={() => {}}
                  className={styles.select}
                  classNamePrefix="select"
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
                  options={[
                    { value: '1', label: 'Нариманова 42' },
                    { value: '2', label: 'Нариманова 24' },
                  ]}
                  onChange={() => {}}
                  className={styles.select}
                  classNamePrefix="select"
                />
              )}
            />
          </div>
          <div className={styles.location__map}>
            <p className={styles.location__map__header}>Выбрать на карте:</p>
            <div
              className={styles.location__map__body}
              style={{
                background: `url(${Map}) center / cover no-repeat `,
              }}
            ></div>
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
                />
                <label htmlFor="allCar" className={styles.label}>
                  Все модели
                </label>
                <div className={styles.circle} />
              </li>

              <li className={styles.list__filters__item}>
                <input
                  type="radio"
                  className={styles.radioBtn}
                  name="choiceFilterCar"
                  id="econom"
                />
                <label htmlFor="econom" className={styles.label}>
                  Эконом
                </label>
                <div className={styles.circle} />
              </li>

              <li className={styles.list__filters__item}>
                <input
                  type="radio"
                  className={styles.radioBtn}
                  name="choiceFilterCar"
                  id="premium"
                />
                <label htmlFor="premium" className={styles.label}>
                  Премиум
                </label>
                <div className={styles.circle} />
              </li>
            </ul>
          </div>

          <div className={styles.wrapper_car__list}>
            <div className={styles.car__list}>
              <input type="radio" name="choiceCar" id="car1" />
              <label htmlFor="car1" className={styles.car__list__item}>
                <div className={styles.car__info}>
                  <div className={styles.car__model}>ELANTRA</div>
                  <div className={styles.car__price}>
                    {`${numberWithSpaces(price.min)} - ${numberWithSpaces(price.max)} ₽`}
                  </div>
                </div>
                <div className={styles.car__img}>
                  <img src={carImage1} alt="car" loading="lazy" />
                </div>
              </label>

              <input type="radio" name="choiceCar" id="car2" />
              <label htmlFor="car2" className={styles.car__list__item}>
                <div className={styles.car__info}>
                  <div className={styles.car__model}>i30 N</div>
                  <div className={styles.car__price}>
                    {`${numberWithSpaces(price.min)} - ${numberWithSpaces(price.max)} ₽`}
                  </div>
                </div>
                <div className={styles.car__img}>
                  <img src={carImage2} alt="car" loading="lazy" />
                </div>
              </label>

              <input type="radio" name="choiceCar" id="car3" />
              <label htmlFor="car3" className={styles.car__list__item}>
                <div className={styles.car__info}>
                  <div className={styles.car__model}>CRETA</div>
                  <div className={styles.car__price}>
                    {`${numberWithSpaces(price.min)} - ${numberWithSpaces(price.max)} ₽`}
                  </div>
                </div>
                <div className={styles.car__img}>
                  <img src={carImage1} alt="car" loading="lazy" />
                </div>
              </label>

              <input type="radio" name="choiceCar" id="car4" />
              <label htmlFor="car4" className={styles.car__list__item}>
                <div className={styles.car__info}>
                  <div className={styles.car__model}>SONATA</div>
                  <div className={styles.car__price}>
                    {`${numberWithSpaces(price.min)} - ${numberWithSpaces(price.max)} ₽`}
                  </div>
                </div>
                <div className={styles.car__img}>
                  <img src={carImage2} alt="car" loading="lazy" />
                </div>
              </label>

              <input type="radio" name="choiceCar" id="car5" />
              <label htmlFor="car5" className={styles.car__list__item}>
                <div className={styles.car__info}>
                  <div className={styles.car__model}>ELANTRA</div>
                  <div className={styles.car__price}>
                    {`${numberWithSpaces(price.min)} - ${numberWithSpaces(price.max)} ₽`}
                  </div>
                </div>
                <div className={styles.car__img}>
                  <img src={carImage1} alt="car" loading="lazy" />
                </div>
              </label>

              <input type="radio" name="choiceCar" id="car6" />
              <label htmlFor="car6" className={styles.car__list__item}>
                <div className={styles.car__info}>
                  <div className={styles.car__model}>i30 N</div>
                  <div className={styles.car__price}>
                    {`${numberWithSpaces(price.min)} - ${numberWithSpaces(price.max)} ₽`}
                  </div>
                </div>
                <div className={styles.car__img}>
                  <img src={carImage2} alt="car" loading="lazy" />
                </div>
              </label>
            </div>
          </div>
        </section>
      )}
      {currentStep === 2 && (
        <section className={styles.additionally}>
          <div className={styles.car__color}>
            <div className={styles.car__color__title}>Цвет</div>
            <ul className={styles.color__list}>
              <li className={styles.color__list__item}>
                <input
                  type="radio"
                  className={styles.radioBtn}
                  name="choiceColorCar"
                  id="allColor"
                />
                <label htmlFor="allColor" className={styles.label}>
                  Любой
                </label>
                <div className={styles.circle} />
              </li>

              <li className={styles.color__list__item}>
                <input type="radio" className={styles.radioBtn} name="choiceColorCar" id="red" />
                <label htmlFor="red" className={styles.label}>
                  Красный
                </label>
                <div className={styles.circle} />
              </li>

              <li className={styles.color__list__item}>
                <input type="radio" className={styles.radioBtn} name="choiceColorCar" id="blue" />
                <label htmlFor="blue" className={styles.label}>
                  Голубой
                </label>
                <div className={styles.circle} />
              </li>
            </ul>
          </div>

          <div className={styles.rentalDuration}>
            <div className={styles.rentalDuration__title}>Дата аренды</div>
            <div className={styles.rentalDuration__dates}>
              <div className={styles.rentalDuration__date}>
                <label className={styles.dateFrom}>С</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  timeInputLabel="Time:"
                  dateFormat="dd.MM.yyyy h:mm"
                  showTimeSelect
                  placeholderText="Введите дату и время"
                  isClearable={true}
                  className={styles.datePicker}
                />
              </div>
              <div className={styles.rentalDuration__date}>
                <label className={styles.dateTo}>По</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  timeInputLabel="Time:"
                  dateFormat="dd.MM.yyyy h:mm"
                  showTimeSelect
                  placeholderText="Введите дату и время"
                  isClearable={true}
                  className={styles.datePicker}
                />
              </div>
            </div>
          </div>

          <div className={styles.rate}>
            <div className={styles.rate__title}>Тариф</div>
            <ul className={styles.rate__list}>
              <li className={styles.rate__list__item}>
                <input type="radio" className={styles.radioBtn} name="choiceRate" id="byMinute" />
                <label htmlFor="byMinute" className={styles.label}>
                  Поминутно, 7₽/мин
                </label>
                <div className={styles.circle} />
              </li>

              <li className={styles.rate__list__item}>
                <input type="radio" className={styles.radioBtn} name="choiceRate" id="byDay" />
                <label htmlFor="byDay" className={styles.label}>
                  На сутки, 1999 ₽/мин
                </label>
                <div className={styles.circle} />
              </li>
            </ul>
          </div>

          <div className={styles.additionalServices}>
            <div className={styles.additionalServices__title}>Доп услуги</div>
            <ul className={styles.additionalServices__list}>
              <li className={styles.additionalServices__list__item}>
                <input type="checkbox" name="choiceFullTank" id="fullTank" />
                <label htmlFor="fullTank" className={styles.label}>
                  Полный бак, 500р
                </label>
                <div className={styles.square} />
              </li>

              <li className={styles.additionalServices__list__item}>
                <input type="checkbox" name="choiceBabyChair" id="babyChair" />
                <label htmlFor="babyChair" className={styles.label}>
                  Детское кресло, 200р
                </label>
                <div className={styles.square} />
              </li>

              <li className={styles.additionalServices__list__item}>
                <input type="checkbox" name="choiceBabyChair" id="rightHandDrive" />
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
