import Image from 'next/image';
import Link from 'next/link';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center mt-12 sm:mt-36">
      <div className="w-full px-10 pt-14 pb-14">
        <div className="font-normal text-[144px]">
          <h1 className="text-left">WEBSITES</h1>
          <h1 className="text-right">FOR THE</h1>
          <h1 className="text-center">DIGITAL AGE</h1>
        </div>
        <div className="mt-20 flex">
          <div className="grow">
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="540"
              height="589"
            />
          </div>
          <div className="grow font-normal pl-28">
            <div className="flex">
              <div className="text-[104px]">1</div>
              <div className="mt-7 pl-14">
                <h1 className="text-xl">Create a website</h1>
                <p className="text-base">
                  Select and customize any website templates of your choice and
                  curate it as you want.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="text-[104px]">2</div>
              <div className="mt-7 pl-14">
                <h1 className="text-xl">Sell anything</h1>
                <p className="text-base">
                  Use one platform to sell products to anyone, anywhere—in
                  person with Point of Sale and online through your website,
                  social media, and online marketplaces.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="text-[104px]">3</div>
              <div className="mt-7 pl-14">
                <h1 className="text-xl">Manage your business</h1>
                <p className="text-base">
                  Gain the insights you need to grow—use a single dashboard to
                  manage orders, shipping, and payments anywhere you go.
                </p>
              </div>
            </div>
            <button type="button" className="btn-primary">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-black-500 px-10 pt-14 pb-16">
        <div className="font-normal text-[144px] text-white">
          <h1 className="text-left">CREATE A</h1>
          <h1 className="text-right">WEBSITE</h1>
          <div className="text-center">
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="787"
              height="463"
            />
          </div>
        </div>
        <div className="mt-32">
          <div className="w-128 text-white text-5xl">
            Choose website templates that fits your needs.
          </div>
          <div className="w-128 text-lg text-white">
            Start with a versatile template, then adjust it to suit your
            preferences.
          </div>
        </div>
      </div>
      <div className="w-full bg-[#5B6166] px-10 pt-14 pb-16">
        <div className="flex">
          <div>
            <h1 className="text-9xl text-white">SELL ANYTHING</h1>
            <p className="text-xl text-white w-96 mt-9">
              Our robust ecommerce platform facilitates the growth of your
              business whether you&apos;re a startup or an established brand.
            </p>
            <button type="button" className="btn-primary mt-10">
              START SELLING
            </button>
          </div>
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="787"
              height="675"
            />
          </div>
        </div>
        <div className="mt-28 flex justify-between">
          <div>
            <h1 className="font-normal text-4xl text-white">
              Multiple payment gateways
            </h1>
            <div>
              <p className="text-base text-white w-96 mt-16">
                All banks credit/debit cards, netbanking, Google Pay, PayTM,
                PhonePe & pay later options. Collect payments in any payment
                mode you want.{' '}
              </p>
              <p className="text-base text-white w-96 mt-16">
                <Link href="/">Explore Ecommerce</Link>
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="540"
              height="360"
            />
          </div>
        </div>
        <div className="mt-28 flex justify-between">
          <div>
            <h1 className="font-normal text-4xl text-white">
              Worldwide Delivery
            </h1>
            <div>
              <p className="text-base text-white w-96 mt-16">
                Deliver easily anything anywhere with our 3rd party delivery
                integrations.
              </p>
              <p className="text-base text-white w-96 mt-16">
                <Link href="/">Explore Scheduling</Link>
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="540"
              height="360"
            />
          </div>
        </div>
        <div className="mt-28 flex justify-between">
          <div>
            <h1 className="font-normal text-4xl text-white">
              Seamless order-management
            </h1>
            <div>
              <p className="text-base text-white w-96 mt-16">
                Control everything from a single dashboard with centralized
                inventory, order management, pricing & more.
              </p>
              <p className="text-base text-white w-96 mt-16">
                <Link href="/">Browse membership sites</Link>
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="540"
              height="360"
            />
          </div>
        </div>
        <div className="mt-28 flex justify-between">
          <div>
            <h1 className="font-normal text-4xl text-white">
              Seamless order-management
            </h1>
            <div>
              <p className="text-base text-white w-96 mt-16">
                Control everything from a single dashboard with centralized
                inventory, order management, pricing & more.
              </p>
              <p className="text-base text-white w-96 mt-16">
                <Link href="/">Browse membership sites</Link>
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="540"
              height="360"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0EBE3] px-10 pt-14 pb-16">
        <div className="font-normal text-[144px]">
          <h1 className="text-left">MARKET</h1>
          <h1 className="text-right">YOUR</h1>
          <h1 className="text-center">BUSINESS</h1>
        </div>
        <div className="mt-28 flex justify-between text-[#000000]">
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="540"
              height="360"
            />
          </div>
          <div className="pr-24">
            <h1 className="font-normal text-4xl">Manage Dashboard reports</h1>
            <div>
              <p className="text-base w-96 mt-16">
                Set up email campaigns that pull in your site’s styles,
                products, and blog posts so your communications feel
                effortlessly on-brand.
              </p>
              <p className="text-base w-96 mt-16">
                <Link href="/">Create email campaigns</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-28 flex justify-between text-[#000000]">
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="540"
              height="360"
            />
          </div>
          <div className="pr-36">
            <h1 className="font-normal text-4xl">SMS/Email Marketing</h1>
            <div>
              <p className="text-base w-96 mt-16">
                Create stunning, professional-looking content for all your
                social channels and manage your link in bio with the Unfold app.
                Choose from hundreds of templates and unique filters, fonts, and
                animations.
              </p>
              <p className="text-base w-96 mt-16">
                <Link href="/">Try Unfold App</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-28 flex justify-between text-[#000000]">
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="540"
              height="360"
            />
          </div>
          <div className="pr-36">
            <h1 className="font-normal text-4xl">Social Media Marketing</h1>
            <div>
              <p className="text-base w-96 mt-16">
                Create stunning, professional-looking content for all your
                social channels and manage your link in bio with the Unfold app.
                Choose from hundreds of templates and unique filters, fonts, and
                animations.
              </p>
              <p className="text-base w-96 mt-16">
                <Link href="/">Try Unfold App</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
