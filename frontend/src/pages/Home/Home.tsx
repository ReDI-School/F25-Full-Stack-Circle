import { Modal } from '../../components';
import { useStateToggleHandlers } from '../../hooks';
import WhoIsWatching from '../Profiles/WhoIsWatching';

import styles from './Home.module.css';

const Home = () => {
  const [isModalOpen, , closeModal] = useStateToggleHandlers(true); //TODO: Show only after sign in

  return (
    <>
      <div className={styles.home}>
        <h1>Home</h1>
      </div>
      <Modal isOpen={isModalOpen}>
        <WhoIsWatching onUserClick={closeModal} />
      </Modal>
    </>
  );
};

export default Home;
