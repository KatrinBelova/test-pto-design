import classNames from 'classnames';
import { IServicesData } from 'components/IntegrationTabs/serviesData';
import { FC } from 'react';
import classes from './EmployeeCard.module.scss';

interface Props {
  services: IServicesData;
}

const EmployeeCard: FC<Props> = ({ services }) => {
  const { card, photoWrapper, name, title, quote } = classes;

  return (
    <div className={card}>
      <div
        className={classNames(classes.LTLineDecor, {
          [classes.LTLineDecorActive]: services['id1'].isActive,
        })}
      />
      <div
        className={classNames(classes.lineDecor, classes.leftLineDecor, {
          [classes.leftLineDecorActive]: services['id2'].isActive,
        })}
      />
      <div
        className={classNames(classes.LBLineDecor, {
          [classes.LBLineDecorActive]: services['id3'].isActive,
        })}
      />
      <div className={photoWrapper}>
        <img src='/images/pm.png' alt='Employee portrait' />
      </div>
      <div className={name}>Lauren Robson</div>
      <div className={title}>HR Director</div>
      <p className={quote}>
        “I want to lower PTO liability and keep my employess happy. I want to
        lower PTO liability.”
      </p>
      <div
        className={classNames(classes.RTLineDecor, {
          [classes.RTLineDecorActive]: services['id4'].isActive,
        })}
      />
      <div
        className={classNames(classes.lineDecor, classes.rightLineDecor, {
          [classes.rightLineDecorActive]: services['id5'].isActive,
        })}
      />
      <div
        className={classNames(classes.RBLineDecor, {
          [classes.RBLineDecorActive]: services['id6'].isActive,
        })}
      />
    </div>
  );
};

export default EmployeeCard;
