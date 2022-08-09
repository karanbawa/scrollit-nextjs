import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Domain: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      Hi
    </section>
  );
};

export default Domain;

Domain.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
