import { Logo } from '../';
import styles from './Welcome.module.scss';

function Welcome() {
  return (
    <div className={styles.welcome} data-testid="welcome-screen">
      <Logo variant="striked" size="lg" />
    </div>
  );
}

export default Welcome;
