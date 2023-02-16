import { useState } from 'react';
import classes from './IntegrationModel.module.scss';
import EmployeeCard from '../components/EmployeeCard/EmployeeCard';
import ServiceSwitcher from '../components/ServiceSwitcher/ServiceSwitcher';
import { servicesData } from '../serviesData';

const IntegrationModel = () => {
  const [services, setServices] = useState(servicesData);

  const handleActive = (id: string) => {
    setServices((prevState) => {
      const newState = { ...prevState };
      newState[id].isActive = !newState[id].isActive;
      return newState;
    });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.serviceBlock}>
        {Object.values(services)
          .slice(0, 3)
          .map((item) => {
            const { id, img, title, text, isActive, direction } = item;

            return (
              <ServiceSwitcher
                key={id}
                imgUrl={img}
                isActive={isActive}
                title={title}
                text={text}
                direction={direction}
                handleActive={() => handleActive(id)}
              />
            );
          })}
      </div>
      <EmployeeCard services={services} />
      <div className={classes.serviceBlock}>
        {Object.values(services)
          .slice(3, 7)
          .map((item) => {
            const { id, img, title, text, isActive, direction } = item;

            return (
              <ServiceSwitcher
                key={id}
                imgUrl={img}
                isActive={isActive}
                title={title}
                text={text}
                direction={direction}
                handleActive={() => handleActive(id)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default IntegrationModel;
