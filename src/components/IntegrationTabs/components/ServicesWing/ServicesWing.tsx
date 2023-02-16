import { IServicesDictionary } from 'components/IntegrationTabs/servicesDictionary';
import { wingSide, wingLimit } from 'components/IntegrationTabs/types/wingSide';
import { FC } from 'react';
import ServiceSwitcher from '../ServiceSwitcher/ServiceSwitcher';

interface Props {
  side: wingSide;
  services: IServicesDictionary;
  handleActive: (id: string) => void;
}

const ServicesWing: FC<Props> = ({ side, services, handleActive }) => {
  type ServicesKeys = keyof typeof services;
  type ServicesValuesTypes = typeof services[ServicesKeys];

  const renderService = (item: ServicesValuesTypes) => {
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
  };
  return (
    <>
      {side === wingSide.LEFT &&
        Object.values(services)
          .slice(wingLimit.LEFT_START, wingLimit.LEFT_END)
          .map(renderService)}
      {side === wingSide.RIGHT &&
        Object.values(services)
          .slice(wingLimit.RIGHT_START, wingLimit.RIGHT_END)
          .map(renderService)}
    </>
  );
};

export default ServicesWing;
