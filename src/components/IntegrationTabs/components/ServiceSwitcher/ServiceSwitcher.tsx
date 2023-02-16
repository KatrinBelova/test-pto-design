import classNames from 'classnames';
import Switch from 'components/common/Switch/Switch';
import { FC } from 'react';
import classes from './ServiceSwitcher.module.scss';

interface Props {
  imgUrl: string;
  isActive: boolean;
  title: string;
  text: string;
  direction: DirectionType;
  handleActive: () => void;
}

const ServiceSwitcher: FC<Props> = ({
  imgUrl,
  isActive,
  title,
  text,
  direction,
  handleActive,
}) => {
  const { wrapper, wrapperActive, content, imgWrapper, heading, subheading } =
    classes;

  return (
    <div
      className={classNames(wrapper, {
        [wrapperActive]: isActive,
        [classes.LTElement]: direction === 'lt',
        [classes.LBElement]: direction === 'lb',
        [classes.RTElement]: direction === 'rt',
        [classes.RBElement]: direction === 'rb',
      })}
    >
      <div className={content}>
        <div className={imgWrapper}>
          <img src={imgUrl} alt={title} />
        </div>
        <div>
          <div className={heading}>{title}</div>
          <div className={subheading}>{text}</div>
        </div>
      </div>
      <Switch isActive={isActive} handleActive={handleActive} />
    </div>
  );
};

export default ServiceSwitcher;
