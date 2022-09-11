import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import WebsiteBody from '../components/websites/WebsiteBody';
import { NextPageWithLayout } from './page';

const Websites: NextPageWithLayout = () => {
  return (
    <section className="flex w-full h-full relative">
      <WebsiteBody />
    </section>
  );
};

export default Websites;

Websites.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
