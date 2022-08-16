import AffiliateBody from '../components/affiliate/body/AffiliateBody';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Affiliate: NextPageWithLayout = () => {
  return (
    <div>
      <div className="flex flex-col relative">
        <AffiliateBody />
      </div>
    </div>
  );
};

export default Affiliate;

Affiliate.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
