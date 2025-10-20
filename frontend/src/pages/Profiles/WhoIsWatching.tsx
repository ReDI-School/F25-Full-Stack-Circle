import styles from './WhoIsWatching.module.css';

const WhoIsWatching = () => {
  interface User {
    id: string;
    name: string;
  }
  const users: User[] = [
    { id: '1', name: 'Ahmad' },
    { id: '2', name: 'Koubrse' },
    { id: '3', name: 'Chikas' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who's watching?</h1>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id} className={styles.item}>
            {/* Use button component ↓ */}
            <button
              className={styles.profileBtn}
              onClick={() => console.log('Selected user', user.name)}
            ></button>

            <span className={styles.name}>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhoIsWatching;
