import AdditionalInfo from "../../components/AdditionalInfo";
import HomepageCaroussel from "../../components/HomepageCaroussel";
import DisplayItems from "../../containers/DisplayItems";
import About from "../../components/About";

const Homepage: React.FC = () => {
  return (
    <main>
      <HomepageCaroussel />
      <AdditionalInfo />
      <DisplayItems />
      <About />
    </main>
  );
};

export default Homepage;
