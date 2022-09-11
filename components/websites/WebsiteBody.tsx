import Image from 'next/image';

const WebsiteBody = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col bg-[#F8F8F8] pt-16 pb-16">
        <span className="text-center font-normal text-4xl">TOP WEB DESIGN</span>
        <span className="text-center font-normal pt-4 w-2/4 mx-auto">
          Choose from an unrivaled set of best-in-class website templates.
          Customize the design to fit your personal style and professional
          needs.
        </span>
        <button type="button" className="btn-primary mt-5">
          Browse Templates
        </button>
      </div>
      <div className="flex flex-col bg-[#69A5A4] pt-16 pb-16">
        <span className="text-center font-normal text-4xl text-white">
          Flexible portfolios
        </span>
        <span className="text-center font-normal pt-4 text-white w-2/4 mx-auto">
          Present your work using Sscrollit’s professional portfolio designs.
          Display projects in customizable galleries and add password-protected
          pages to share private work with clients.
        </span>
        <div className="mx-auto">
          <button type="button" className="text-white mt-5">
            Create a Portfolio
          </button>
        </div>
        <div className="mx-auto mt-16">
          <Image
            src="/aboutus.jpg"
            alt="Image description"
            width="1120"
            height="655"
          />
        </div>
        <div className="mt-32 flex flex-wrap pl-10 pr-10 justify-between">
          <div className="flex flex-col">
            <span className="w-5/6 text-white">
              “You get a premium look on your website without struggling to
              create it.”
            </span>
            <span className="mt-auto text-white">SCROLLIT.COM</span>
          </div>
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="540"
              height="355"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div>
          <Image
            src="/aboutus.jpg"
            alt="Image description"
            width="600"
            height="452"
          />
        </div>
        <div className="flex flex-col pt-10 pl-10 pb-10 mt-auto mb-auto">
          <span className="font-normal text-4xl">Built-in SEO tools</span>
          <span className="w-5/6  mt-4">
            Every Scrollit website or online store comes <br /> with a suite of
            integrated features and useful <br /> guides that help maximize
            prominence among search results.
          </span>
        </div>
      </div>
      <div className=" flex flex-wrap pl-10 justify-between bg-[#1E1E1E]">
        <div className="flex flex-col content-center pt-8">
          <div className="text-white">
            <div className="font-normal text-4xl">Analytics</div>
            <div className="pt-3">
              Learn where your website traffic is coming from,
              <br /> what your visitors are looking for, and how they’re
              interacting <br /> with your content or products through our
              in-depth Analytics tools.
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/aboutus.jpg"
            alt="Image description"
            width="600"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteBody;
