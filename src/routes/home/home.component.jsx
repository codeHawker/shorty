import ShortnerForm from "../../components/shortner-form/shortner-form";
import "./home.styles.scss"

const Home = () => {
  return (
    <div className="app-container">
      <header className="app-headder">
        <h1>Shorty - URL Shortner</h1>
      </header>

      <ShortnerForm />
    </div>
  );
};

export default Home;
