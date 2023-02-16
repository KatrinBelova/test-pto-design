import Tabs, { Tab, TabList, TabPanel } from 'components/common/Tabs/Tabs';
import IntegrationModel from './IntegrationModel/IntegrationModel';

const IntegrationTabs = () => {
  return (
    <Tabs initialActiveTabId='id1'>
      <TabList>
        <Tab id='id1'>Small Business</Tab>
        <Tab id='id2'>Medium Business</Tab>
        <Tab id='id3'>Enterprise</Tab>
      </TabList>
      <TabPanel whenActive='id1'>
        <IntegrationModel />
      </TabPanel>
      <TabPanel whenActive='id2'>Panel 2</TabPanel>
      <TabPanel whenActive='id3'>Panel 3</TabPanel>
    </Tabs>
  );
};

export default IntegrationTabs;
