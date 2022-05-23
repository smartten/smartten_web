import './Home.css';
function Home({ languages }) {
  return (
    <>
      <h1>{languages.address}</h1>
      <p>{languages.name}</p>
    </>
  );
}

export default Home;
