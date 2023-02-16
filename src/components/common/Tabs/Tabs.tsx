import { useState, createContext, useContext, FC, useEffect } from 'react';
import Button from '../Button/Button';
import {
  TabsProps,
  TabProps,
  TabPanelProps,
  TabsContextType,
  TabListProps,
} from './Tabs.types';
import classes from './Tabs.module.scss';

const TabsContext = createContext<TabsContextType>(null!);

const TabList: FC<TabListProps> = ({ children }) => {
  return <div className={classes.tabs}>{children}</div>;
};

const Tab: FC<TabProps> = ({ id, children }) => {
  const { activeTabID, setActiveTabID } = useContext(TabsContext);

  return (
    <Button
      variant={activeTabID === id ? 'contained' : 'outlined'}
      onClick={() => {
        setActiveTabID(id);
      }}
    >
      {children}
    </Button>
  );
};
const TabPanel: FC<TabPanelProps> = ({ whenActive, children }) => {
  const { activeTabID } = useContext(TabsContext);

  return <div>{activeTabID === whenActive ? children : null}</div>;
};

const Tabs: FC<TabsProps> = ({ children, initialActiveTabId }) => {
  const [activeTabID, setActiveTabID] = useState('');

  useEffect(() => {
    setActiveTabID(initialActiveTabId);
  }, [initialActiveTabId]);

  return (
    <TabsContext.Provider value={{ activeTabID, setActiveTabID }}>
      <>{children}</>
    </TabsContext.Provider>
  );
};

export default Tabs;
export { Tab, TabList, TabPanel };
