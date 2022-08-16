import Image from 'next/image';

const AffiliateBody = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-[#6D8A85] pl-10 pt-28 flex">
        <div className="grow ">
          <h1 className="w-96 h-44 font-normal text-6xl text-white">
            Share Scrollit. Grow your business.
          </h1>
          <p className="mt-20 w-80 h-28 font-normal text-white text-lg">
            Scrollit empowers millions of people to create an impactful and
            easy-to-manage online presence. Earn commission by helping your
            audience share their passions with the world.{' '}
          </p>
          <button className="mt-10 bg-white z-10 h-10 w-36">
            Start Earning
          </button>
        </div>
        <div>
          <Image
            src="/aboutus.jpg"
            alt="Image description"
            width="700"
            height="559"
          />
        </div>
      </div>
      <div className="bg-black-500 px-10 pt-16 pb-16 flex">
        <div>
          <Image
            src="/aboutus.jpg"
            alt="Image description"
            width="540"
            height="405"
          />
        </div>
        <div className="text-white flex justify-center">
          <div className="pl-36 pr-24">
            <h1 className="text-4xl">Here to help. Every step of the way.</h1>
            <p className="text-base">
              We’ll provide you with support, including creative resources and
              tracking links, so you can grow your business.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white px-10 pt-16 pb-16 flex flex-col">
        <div className="text-center font-normal text-5xl">
          <h1>What you’ll earn.</h1>
        </div>
        <div className="flex mt-14">
          <div className="grow">
            <div>
              <Image
                src="/aboutus.jpg"
                alt="Image description"
                width="540"
                height="346"
              />
            </div>
            <h1 className="text-xl mt-6">Earn $ per conversion</h1>
            <p className="w-128 text-base mt-3">
              As an affiliate partner, you’re eligible to earn payouts for every
              website or commerce subscription that you drive from a first-time
              Scrollit customer. Learn more about our qualified referral payouts
              once you apply.
            </p>
          </div>
          <div className="grow">
            <div>
              <Image
                src="/aboutus.jpg"
                alt="Image description"
                width="540"
                height="346"
              />
            </div>
            <h1 className="text-xl mt-6">Unlimited referrals</h1>
            <p className="w-128 text-base mt-3">
              Subject to compliance with our affiliate terms and conditions,
              affiliate partners can receive commissions as long as their
              audience is converting. We don’t place caps on the number of
              referrals our partners can make in a year, so you can continue to
              encourage your audience to sign up for Scrollit.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#6E717B] px-10 pt-28 pb-28 flex">
        <div className="grow text-white relative">
          <p className="w-80 font-normal">
            “The Scrollit Affiliate Program gives me predictability and
            confidence. Scrollit products are best-in-class—so when I recommend
            Scrollit, I’m confident that I’m recommending products worth
            buying.”
          </p>
          <div className="absolute bottom-0">Karan, Site Builder Report</div>
        </div>
        <div>
          <Image
            src="/aboutus.jpg"
            alt="Image description"
            width="540"
            height="346"
          />
        </div>
      </div>
      <div className="flex flex-col bg-white px-10 pt-14 pb-14">
        <div className="text-center font-normal text-5xl">
          <h1>We’ll be here every step of the way.</h1>
        </div>
        <div className="flex justify-between mt-20 gap-5">
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="400"
              height="222"
            />
            <h2 className="text-xl mt-6">Access to creative</h2>
            <p className="text-base mt-3">
              Never stress about assets again. We’ll share fresh creative
              regularly so your audience stays engaged.
            </p>
          </div>
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="400"
              height="222"
            />
            <h2 className="text-xl mt-6">Access to creative</h2>
            <p className="text-base mt-3">
              Never stress about assets again. We’ll share fresh creative
              regularly so your audience stays engaged.
            </p>
          </div>
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="400"
              height="222"
            />
            <h2 className="text-xl mt-6">Access to creative</h2>
            <p className="text-base mt-3">
              Never stress about assets again. We’ll share fresh creative
              regularly so your audience stays engaged.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-black-500 px-10 pt-14 pb-14"></div>
      <div></div> */}
    </div>
  );
};

export default AffiliateBody;
