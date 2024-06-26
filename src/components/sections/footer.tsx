import React from "react";
import { Button } from "../ui/button";

interface NavItem {
  name: string;
  href: string;
}

interface SocialItem extends NavItem {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface NavigationSection {
  title: string;
  items: NavItem[];
}

interface FooterData {
  navigation: {
    [key: string]: NavigationSection;
  };
  social: SocialItem[];
}

const footerData: FooterData = {
  navigation: {
    solutions: {
      title: "Solutions",
      items: [
        { name: "Marketing", href: "#" },
        { name: "Analytics", href: "#" },
        { name: "Commerce", href: "#" },
        { name: "Insights", href: "#" },
      ],
    },
    support: {
      title: "Support",
      items: [
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Status", href: "#" },
      ],
    },
    company: {
      title: "Company",
      items: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
      ],
    },
    legal: {
      title: "Legal",
      items: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
      ],
    },
  },
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // ... (other social items)
  ],
};

const NavigationColumn: React.FC<{ section: NavigationSection }> = ({
  section,
}) => (
  <div>
    <h3 className="text-sm font-semibold leading-6 text-white">
      {section.title}
    </h3>
    <ul role="list" className="mt-6 space-y-4">
      {section.items.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="text-sm leading-6 text-gray-300 hover:text-white"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const NewsletterSignup: React.FC = () => (
  <div className="mt-10 xl:mt-0">
    <h3 className="text-sm font-semibold leading-6 text-white">
      Subscribe to our newsletter
    </h3>
    <p className="mt-2 text-sm leading-6 text-gray-300">
      The latest news, articles, and resources, sent to your inbox weekly.
    </p>
    <form className="mt-6 sm:flex sm:max-w-md">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        name="email-address"
        id="email-address"
        autoComplete="email"
        required
        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/80 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-white/80 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
        placeholder="Enter your email"
      />
      <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
        <Button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-normal text-black shadow-sm hover:bg-white/95"
        >
          Subscribe
        </Button>
      </div>
    </form>
  </div>
);

const SocialLinks: React.FC<{ socialItems: SocialItem[] }> = ({
  socialItems,
}) => (
  <div className="flex space-x-6 md:order-2">
    {socialItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="text-gray-500 hover:text-gray-400"
      >
        <span className="sr-only">{item.name}</span>
        <item.icon className="h-6 w-6" aria-hidden="true" />
      </a>
    ))}
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-backgroundClr border-t border-t-borderClr"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <NavigationColumn section={footerData.navigation.solutions} />
              <div className="mt-10 md:mt-0">
                <NavigationColumn section={footerData.navigation.support} />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <NavigationColumn section={footerData.navigation.company} />
              <div className="mt-10 md:mt-0">
                <NavigationColumn section={footerData.navigation.legal} />
              </div>
            </div>
          </div>
          <NewsletterSignup />
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <SocialLinks socialItems={footerData.social} />
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Your Company, Inc. All rights
            reserved.
          </p>
        </div>
      </div>

      <h1 className="lg:text-9xl text-7xl lg:my-32 my-10 text-transparent stroke-2 stroke-white opacity-15 tracking-wider pointer-events-none select-none font-bold text-center">
        Waitlisto
      </h1>
    </footer>
  );
};

export default Footer;
