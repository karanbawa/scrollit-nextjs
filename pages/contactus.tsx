import ContactUsBody from '../components/contactus/body/ContactUsBody';
import Header from '../components/contactus/header/Header';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Contactus: NextPageWithLayout = () => {
  return (
    <div>
      <div className="flex flex-col relative">
        <Header />
        <ContactUsBody />
      </div>
    </div>
  );
};

export default Contactus;

Contactus.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
