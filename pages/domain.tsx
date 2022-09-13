import DomainBody from '../components/domain/DomainBody';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Domain: NextPageWithLayout = () => {
  return (
    <section className="flex">
      <DomainBody />
    </section>
  );
};

export default Domain;

Domain.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
