import AdditionalInfo from '../../components/AdditionalInfo';
import HomepageCaroussel from '../../components/HomepageCaroussel';
import DisplayItems from '../../containers/DisplayItems';

const Homepage: React.FC = () => {
    return (
        <main>
            <HomepageCaroussel />
            <AdditionalInfo />
            <DisplayItems />
        </main>
    );
};

export default Homepage;
