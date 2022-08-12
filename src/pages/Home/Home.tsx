import classNames from 'classnames/bind';
import { Welcome, Container, Logo, Button } from '../../components';

import previewImage from '../../assets/images/preview.png';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      <Welcome />
      <Container>
        <main className={cx('main')}>
          <Logo size="lg" variant="colored" />
          <p>
            Stay Organized. Whether work-related task or a personal goal, get
            tasks out of your head and onto your todo list.
          </p>
          <Button to="/login" label="Get Started" className={cx('cta')} />
          <img src={previewImage} alt="App preview" className={cx('preview')} />
        </main>
      </Container>
    </>
  );
}

export default Home;
