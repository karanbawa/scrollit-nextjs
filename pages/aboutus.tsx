import AboutUs from '../components/aboutus/body/AboutUs';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Aboutus: NextPageWithLayout = () => {
  return (
    <div className="flex w-full h-full relative">
      <AboutUs />
    </div>
  );
};

export default Aboutus;

Aboutus.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
