import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Templates: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      Hi
    </section>
  );
};

export default Templates;

Templates.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
