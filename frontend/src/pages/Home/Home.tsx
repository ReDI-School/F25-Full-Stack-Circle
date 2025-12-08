import { useEffect } from 'react';

import { Modal } from '../../components/Modal';
import { useStateToggleHandlers } from '../../hooks';
import Profiles from '../Profiles/Profiles';

import styles from './Home.module.css';

const PROFILES_MODAL_KEY = 'isProfilesModalShown';

const Home = () => {
  const [isModalOpen, openModal, closeModal] = useStateToggleHandlers(false);

  useEffect(() => {
    const wasShownPreviously = sessionStorage.getItem(PROFILES_MODAL_KEY);
    if (!wasShownPreviously) {
      openModal();
      sessionStorage.setItem(PROFILES_MODAL_KEY, 'true');
    }
  }, [openModal]);

  return (
    <>
      <div className={styles.home}>
        <h1>Home</h1>
      </div>
      <Modal isOpen={isModalOpen}>
        <Profiles onProfileClick={closeModal} />
      </Modal>
    </>
  );
};

export default Home;
