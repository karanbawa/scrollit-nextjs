import Image from 'next/image';

const DomainBody = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row content-between">
        <div className="w-2/4 overflow-hidden bg-[#4D5357]">
          <div className="p-10 h-full">
            <div className="flex flex-col h-full">
              <div className="w-4/5 text-5xl text-white h-full">
                Simple domain management
              </div>
              <p className="mt-auto w-4/5 text-white text-lg">
                At Scrollit, we believe in form as well as function. That’s why
                our domain management tool allows you to do everything from
                editing your DNS records to forwarding your URL in a way that’s
                both simple and beautiful.
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/4 overflow-hidden h-full relative">
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="1120"
              height="655"
            />
          </div>
          <div className="absolute top-2/4 w-full left-0 align-middle"></div>
        </div>
      </div>
      <div className="flex flex-row content-between">
        <div className="w-2/4">
          <div className="p-10">
            <div className="flex flex-col">
              <div className="w-4/5 text-5xl font-medium0">
                Free SSL & WHOIS privacy
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <div className="p-10">
            <div className="flex flex-col">
              <div className="w-4/5 text-xl font-normal">Free SSL security</div>
              <p className="w-4/5 mt-3 font-normal">
                Every domain that points to a Scrollit site comes with a free
                SSL certificate so your visitors can see that your website is
                secure.
              </p>
            </div>
            <div className="flex flex-col mt-12">
              <div className="w-4/5 text-xl font-normal">
                Free WHOIS privacy
              </div>
              <p className="w-4/5 mt-3 font-normal">
                Scrollit takes privacy seriously. We automatically provide WHOIS
                privacy for all eligible domains, free of charge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row content-between">
        <div className="w-2/4 overflow-hidden h-full relative">
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Image description"
              width="1120"
              height="655"
            />
          </div>
          <div className="absolute top-2/4 w-full left-0 align-middle"></div>
        </div>
        <div className="w-2/4 overflow-hidden bg-[#5E605A]">
          <div className="p-10 h-full">
            <div className="flex flex-col h-full">
              <div className="w-4/5 text-5xl text-white h-full">
                Already have a domain?
              </div>
              <p className="mt-auto w-4/5 text-white text-lg">
                If you’ve already registered a domain name from a third-party
                provider, you can simply transfer it to Scrollit.
              </p>
              <button className="text-white mt-10 text-base underline">
                Start Domain Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row content-between">
        <div className="w-2/4">
          <div className="p-10">
            <div className="flex flex-col">
              <div className="w-4/5 text-5xl font-medium0">
                How to buy a domain name
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <div className="p-10">
            <div className="flex flex-col">
              <p className="w-4/5 mt-3 font-normal">
                Search for your name, business, or brand name.
              </p>
              <p className="w-4/5 mt-3 font-normal">
                Check the availability of domain names on a wide range of domain
                extensions.
              </p>
              <p className="w-4/5 mt-3 font-normal">
                Select one or more domain names and domain extensions.
              </p>
              <p className="w-4/5 mt-3 font-normal">
                Register your selected domains with Scrollit so you can manage
                them in one place.
              </p>
              <p className="w-4/5 mt-3 font-normal">Check out and pay.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainBody;
