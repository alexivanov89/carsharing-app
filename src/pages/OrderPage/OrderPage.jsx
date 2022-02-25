import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { SeparatorIcon } from '../../assets/icons/UngroupedIcons';
import Button from '../../components/UI/Button/Button';
import Map from '../../assets/img/map.webp';
import { setCurrentStep, setFilledStep } from '../../store/slices/orderFormSlice';
import { numberWithSpaces } from '../../utils/numberWithSpaces';
import styles from './index.module.scss';
import carImage1 from '../../assets/img/carImage1.png';
import carImage2 from '../../assets/img/carImage2.png';
import './select.scss';

const OrderPage = () => {
  const dispatch = useDispatch();
  const {
    currentStep,
    filledStep,
    pointOfIssue,
    car,
    rentalDuration,
    rate,
    additionalServices,
    price,
  } = useSelector(({ orderForm }) => orderForm);

  const { city, point } = pointOfIssue;
  const { handleSubmit, reset, setValue, control } = useForm();

  const onSubmit = (data) => {};

  const renderButton = (step) => {
    switch (step) {
      case 0:
        return (
          <Button
            classes={styles.orderInfo__button}
            disabled={!(city && point)}
            onClick={() => {
              dispatch(setCurrentStep(currentStep + 1));
              dispatch(setFilledStep(filledStep + 1));
            }}
          >
            Выбрать модель
          </Button>
        );
      case 1:
        return (
          <Button
            classes={styles.orderInfo__button}
            onClick={() => {
              dispatch(setCurrentStep(currentStep + 1));
              dispatch(setFilledStep(filledStep + 1));
            }}
          >
            Дополнительно
          </Button>
        );
      case 2:
        return (
          <Button
            classes={styles.orderInfo__button}
            onClick={() => {
              dispatch(setCurrentStep(currentStep + 1));
              dispatch(setFilledStep(filledStep + 1));
            }}
          >
            Итого
          </Button>
        );
      case 3:
        return (
          <Button
            classes={styles.orderInfo__button}
            onClick={() => {
              dispatch(setCurrentStep(currentStep + 1));
              dispatch(setFilledStep(filledStep + 1));
            }}
          >
            Заказать
          </Button>
        );
      default:
        return (
          <Button
            classes={styles.orderInfo__button}
            onClick={() => {
              dispatch(setCurrentStep(currentStep + 1));
              dispatch(setFilledStep(filledStep + 1));
            }}
          >
            Выбрать модель
          </Button>
        );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigationOrderForm}>
        <div className={styles.wrapper}>
          <Button
            classes={styles.button__navigation}
            filled={filledStep > -1}
            active={currentStep === 0}
            onClick={() => {
              dispatch(setCurrentStep(0));
            }}
          >
            Местоположение
          </Button>
          <div className={styles.separator}>
            <SeparatorIcon />
          </div>
          <Button
            classes={styles.button__navigation}
            filled={filledStep > 0}
            active={currentStep === 1}
            disabled={filledStep < 0}
            onClick={() => {
              dispatch(setCurrentStep(1));
            }}
          >
            Модель
          </Button>
          <div className={styles.separator}>
            <SeparatorIcon />
          </div>
          <Button
            classes={styles.button__navigation}
            filled={filledStep > 1}
            active={currentStep === 2}
            disabled={filledStep < 1}
            onClick={() => {
              dispatch(setCurrentStep(2));
            }}
          >
            Дополнительно
          </Button>
          <div className={styles.separator}>
            <SeparatorIcon />
          </div>
          <Button
            classes={styles.button__navigation}
            filled={filledStep > 2}
            active={currentStep === 3}
            disabled={filledStep < 2}
            onClick={() => {
              dispatch(setCurrentStep(3));
            }}
          >
            Итого
          </Button>
        </div>
      </div>
      <div className={styles.orderForm}>
        <div className={styles.stepForm}>
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
            {currentStep === 2 && <div>step3</div>}
            {currentStep === 3 && <div>step4</div>}
          </form>
        </div>
        <div className={styles.orderInfo}>
          <div className={styles.orderInfo__header}>Ваш заказ:</div>
          <div className={styles.orderInfo__params}>
            {city && point && (
              <div className={styles.orderInfo__param}>
                <div className={styles.orderInfo__param__name}>Пункт выдачи</div>
                <div className={styles.orderInfo__param__value}>
                  <div className={styles.orderInfo__city}>{`${city},`}</div>
                  <div className={styles.pointOfIssue}>{point}</div>
                </div>
              </div>
            )}
            {car.model && (
              <div className={styles.orderInfo__param}>
                <div className={styles.orderInfo__param__name}>Модель</div>
                <div className={styles.orderInfo__param__value}>
                  <div className={styles.orderInfo__car}>{car.model}</div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.orderInfo__price}>
            <p className={styles.orderInfo__price__label}>Цена:&nbsp;</p>
            <p className={styles.orderInfo__price__value}>
              {price.calculated
                ? `${price.calculated} ₽`
                : `от ${numberWithSpaces(price.min)} до ${numberWithSpaces(price.max)} ₽`}
            </p>
          </div>
          {renderButton(currentStep)}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
