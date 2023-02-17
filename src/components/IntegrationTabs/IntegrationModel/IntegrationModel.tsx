import { useState } from 'react';
import classes from './IntegrationModel.module.scss';
import EmployeeCard from '../components/EmployeeCard/EmployeeCard';
import { servicesDictionary } from '../servicesDictionary';
import { wingSide } from '../types/wingSide';
import ServicesWing from '../components/ServicesWing/ServicesWing';

const IntegrationModel = () => {
  const [services, setServices] = useState(servicesDictionary);

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
        <ServicesWing
          side={wingSide.LEFT}
          services={services}
          handleActive={handleActive}
        />
      </div>
      <EmployeeCard services={services} />
      <div className={classes.serviceBlock}>
        <ServicesWing
          side={wingSide.RIGHT}
          services={services}
          handleActive={handleActive}
        />
      </div>
    </div>
  );
};

export default IntegrationModel;
