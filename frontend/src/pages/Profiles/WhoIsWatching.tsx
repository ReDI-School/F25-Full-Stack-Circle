const WhoIsWatching = () => {
  const users = ['Ahmad', 'Koubrse', 'Chikas'];

  return (
    <div>
      <h1>Who's watching?</h1>
      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhoIsWatching;
