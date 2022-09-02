import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* <div className={styles.aboutImage}></div> */}
      {/* <Image
        src="/aboutus.jpg"
        alt="Image description"
        width="64"
        height="64"
      /> */}
      <div className="flex flex-col bg-[#9FA2A5] px-10 pt-28 pb-28">
        <div className="text-white font-normal text-2xl">
          We believe in the power of the individual to make great things.
        </div>
        <div className="mt-7 text-white font-normal text-lg w-96">
          We exist to help people with creative ideas stand out and succeed. We
          create a modern platform that enables millions to build a brand, share
          their stories, and transact with their customers in an impactful and
          beautiful online presence.
        </div>
        <div className="mt-14 text-white font-normal text-8xl w-96">2022</div>
        <div className="mt-7 text-white font-normal text-lg w-96">
          Scrollit was founded over a call in gurugram
        </div>
        <div className="mt-14 text-white font-normal text-8xl w-96">20+</div>
        <div className="mt-7 text-white font-normal text-lg w-96">
          Scrollit has grown to a team of more than 1,640 talented individuals.
        </div>
        <div className="mt-14 text-white font-normal text-8xl w-96">
          Hundreds
        </div>
        <div className="mt-7 text-white font-normal text-lg w-96">
          Since launch, millions of websites have been created on the Scrollit
          platform.
        </div>
        <div className="flex gap-10 mt-28">
          <Image
            src="/aboutus.jpg"
            alt="Image description"
            width="320"
            height="448"
          />
          <Image
            src="/aboutus.jpg"
            alt="Image description"
            width="320"
            height="448"
          />
        </div>
        <div className="mt-28">
          <Image
            src="/aboutus.jpg"
            alt="Image description"
            width="680"
            height="476"
          />
        </div>
      </div>
      <div className="flex flex-col px-10 pt-28 pb-28">
        <h1 className="font-normal text-5xl">Our values</h1>
        <div className="grid gap-x-8 gap-y-20 grid-cols-3 mt-20">
          <div>
            <h1 className="font-normal text-5xl">01</h1>
            <p className="mt-4 text-xl">Be the customer.</p>
            <p className="w-80 h-32 mt-4 text-lg">
              Developing deep empathy for our customer’s needs, challenges, and
              dreams is critical to ensuring we do that well. We want to provide
              the same standard of tools and services to our customers that we
              would want for ourselves.
            </p>
          </div>
          <div>
            <h1 className="font-normal text-5xl">01</h1>
            <p className="mt-4 text-xl">Be the customer.</p>
            <p className="w-80 h-32 mt-4 text-lg">
              Developing deep empathy for our customer’s needs, challenges, and
              dreams is critical to ensuring we do that well. We want to provide
              the same standard of tools and services to our customers that we
              would want for ourselves.
            </p>
          </div>
          <div>
            <h1 className="font-normal text-5xl">01</h1>
            <p className="mt-4 text-xl">Be the customer.</p>
            <p className="w-80 h-32 mt-4 text-lg">
              Developing deep empathy for our customer’s needs, challenges, and
              dreams is critical to ensuring we do that well. We want to provide
              the same standard of tools and services to our customers that we
              would want for ourselves.
            </p>
          </div>
          <div>
            <h1 className="font-normal text-5xl">01</h1>
            <p className="mt-4 text-xl">Be the customer.</p>
            <p className="w-80 h-32 mt-4 text-lg">
              Developing deep empathy for our customer’s needs, challenges, and
              dreams is critical to ensuring we do that well. We want to provide
              the same standard of tools and services to our customers that we
              would want for ourselves.
            </p>
          </div>
          <div>
            <h1 className="font-normal text-5xl">01</h1>
            <p className="mt-4 text-xl">Be the customer.</p>
            <p className="w-80 h-32 mt-4 text-lg">
              Developing deep empathy for our customer’s needs, challenges, and
              dreams is critical to ensuring we do that well. We want to provide
              the same standard of tools and services to our customers that we
              would want for ourselves.
            </p>
          </div>
          <div>
            <h1 className="font-normal text-5xl">01</h1>
            <p className="mt-4 text-xl">Be the customer.</p>
            <p className="w-80 h-32 mt-4 text-lg">
              Developing deep empathy for our customer’s needs, challenges, and
              dreams is critical to ensuring we do that well. We want to provide
              the same standard of tools and services to our customers that we
              would want for ourselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
