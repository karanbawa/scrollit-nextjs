import AuthButton from '../components/buttons/auth/AuthButton';
import CatCard from '../components/cards/cat/CatCard';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Templates: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <AuthButton />
      <CatCard
        tag={'123'}
        title={'234'}
        body={'456'}
        author={'789'}
        time={Date.now().toString()}
      />
    </section>
  );
};

export default Templates;

Templates.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
