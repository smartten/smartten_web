import './Home.css';
import Career from "../Career/Career"
function Home({ languages }) {
  return (
    <>
      <h1>{languages.address}</h1>
      <p>{languages.name}</p>
      <Career />
    </>
  );
}

export default Home;
