import Image from "next/image";
import logo from "../images/Logo.png";

export default function Footer() {
  const footerLinks = [
    {
      title: "About",
      links: [
        { text: "How it works", href: "#" },
        { text: "Featured", href: "#" },
        { text: "Partnership", href: "#" },
        { text: "Business Relation", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { text: "Events", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Podcast", href: "#" },
        { text: "Invite a friend", href: "#" },
      ],
    },
    {
      title: "Socials",
      links: [
        { text: "Discord", href: "#" },
        { text: "Instagram", href: "#" },
        { text: "Twitter", href: "#" },
        { text: "Facebook", href: "#" },
      ],
    },
  ];

  return (
    <footer className="font-sans tracking-wide bg-gray-50 px-10 pt-12 pb-6">
      {/* Logo and description section */}
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-sm">
          <a href="javascript:void(0)">
            <Image src={logo} alt="logo" className="w-36" />
          </a>
          <div className="mt-4">
            <p className="text-gray-600 leading-relaxed text-sm">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
        </div>

        {/* Footer Link Sections */}
        <div className="flex flex-wrap gap-16">
          {footerLinks.map((section, index) => (
            <div key={index} className="min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base">{section.title}</h4>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-gray-800 text-gray-600 text-sm"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-10 mb-6 border-gray-300" />

      {/* Footer bottom section */}
      <div className="flex flex-wrap justify-between max-md:flex-col gap-4">
        <p className="text-gray-600 text-sm">©2022 MORENT. All rights reserved</p>
        <div className="flex space-x-6">
          <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
            Privacy & Policy
          </a>
          <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
}
