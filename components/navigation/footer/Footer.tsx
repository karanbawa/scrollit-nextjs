export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full px-10 pt-5 bg-black-500 ${className}`}
    >
      <div className="h-96 flex justify-between text-white font-normal pr-44">
        <div>
          <div>PRODUCTS</div>
          <div className="pt-7">
            <div>WEBSITE TEMPLATES</div>
            <div>WEBSITES</div>
            <div>DOMAINS</div>
            <div>ONLINE STORES</div>
            <div>PROFSSIONAL EMAIL</div>
            <div>PRICING</div>
            <div>FEATURE LIST</div>
          </div>
        </div>
        <div>
          <div>CUSTOMERS</div>
          <div className="pt-7">
            <div>WEBSITE EXAMPLES</div>
            <div>FEATURED CUSTOMERS</div>
            <div>CREATORS</div>
            <div>BUSINESSES</div>
            <div>ONLINE STORES</div>
            <div>ETSY SELLERS</div>
            <div>RESTAURANTS</div>
            <div>ARTISTS</div>
            <div>BLOGGERS</div>
            <div>PHOTOGRAPHERS</div>
            <div>WEDDINGS</div>
            <div>ENTERPRISE</div>
            <div>STUDENTS</div>
          </div>
        </div>
        <div>
          <div>COMPANY</div>
          <div className="pt-7">
            <div>ABOUT</div>
            <div>CAREERS</div>
            <div>AFFILIATES</div>
            <div>TERMS OF SERVICE</div>
            <div>PRIVACY POLICY</div>
            <div>CONTACT US</div>
          </div>
        </div>
        <div>
          <div>COMMUNITY</div>
          <div className="pt-7">
            <div>HELP CENTER</div>
            <div>HIRE AN EXPERT</div>
          </div>
        </div>
        <div>
          <div>FOLLOW</div>
          <div className="pt-7">
            <div>INSTAGRAM</div>
            <div>YOUTUBE</div>
            <div>LINKEDIN</div>
            <div>FACEBOOK</div>
            <div>TWITTER</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
