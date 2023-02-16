import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import classes from './Switch.module.scss';

interface Props {
  isActive: boolean;
  handleActive: () => void;
}

const Switch: FC<Props> = ({ isActive, handleActive }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(isActive);
  }, [isActive]);

  const handleChange = () => {
    if (handleActive) handleActive();
    if (!handleActive) setChecked((prevState) => !prevState);
  };

  return (
    <>
      <label className={classes.switch}>
        <input type='checkbox' checked={checked} onChange={handleChange} />
        <span className={classNames(classes.slider, classes.round)} />
      </label>
    </>
  );
};

export default Switch;
