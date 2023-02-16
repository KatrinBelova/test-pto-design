import { Container } from 'components/common/Container/Container';
import IntegrationTabs from 'components/IntegrationTabs/IntegrationTabs';
import classes from './Home.module.scss';

const Home = () => {
  const { title, description } = classes;

  return (
    <Container>
      <h2 className={title}>Easy Turn-Key Integration</h2>
      <p className={description}>
        Increase job satisfaction, improve engagement, decrease burnout and
        lower payroll liability by reimagining what employees can do with their
        PTO.
      </p>
      <IntegrationTabs />
    </Container>
  );
};

export default Home;
