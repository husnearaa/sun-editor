import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="lg:col-span-2">
          <div className="text-2xl font-bold mb-4 text-[#d9d9d9] -ml-23">
            {/* <Image
              src={logo}
              alt="krspeech Logo"
              width={1000}
              height={1000}
              className="rounded-full w-96 h-36 object-cover"
            /> */}
            <h1>Custom Code</h1>
          </div>
          <p className="text-[#d9d9d9] text-sm leading-relaxed text-justify">
            A place when all types of custom code is available for you. We
            provide you the best and quality code for your projects. Our main
            goal is to help developers by providing custom code snippets that
            can be easily integrated into their projects.
          </p>
        </div>

        {/* Quick Link 1 */}
        <div>
          <h3 className="text-lg font-medium  mb-4 text-[#d9d9d9]">
            Quick Link 1
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-[#d9d9d9] hover:text-[#00adbb] text-sm"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#d9d9d9] hover:text-[#00adbb] text-sm"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#d9d9d9] hover:text-[#00adbb] text-sm"
              >
                Connect Library
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#d9d9d9] hover:text-[#00adbb] text-sm"
              >
                Process
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Link 2 */}
        <div>
          <h3 className="text-lg font-medium text-[#d9d9d9] mb-4">
            Quick Link 2
          </h3>
          <ul className="space-y-3 ">
            <li>
              <a
                href="#"
                className="text-[#d9d9d9] hover:text-[#00adbb] text-sm"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#d9d9d9] hover:text-[#00adbb] text-sm"
              >
                Printing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#d9d9d9] hover:text-[#00adbb] text-sm"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#d9d9d9] hover:text-[#00adbb] text-sm"
              >
                Districts
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us and Contact Us */}
        <div className="space-y-8">
          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-medium text-[#d9d9d9] mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[#0866ff] hover:bg-gray-300 transition"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[#0866ff] hover:bg-gray-300 transition"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-pink-700 hover:bg-gray-300 transition"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-black hover:bg-gray-300 transition"
              >
                <FaXTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-gray-200 border p-4 rounded-lg mt-12">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-medium text-[#d9d9d9] mb-4">
            Contact Us
          </h3>
        </div>

        <div>
          <p className="text-base font-medium text-[#d9d9d9]">Email Now</p>
          <Link
            href="mailto:infoopen1334@gmail.com"
            className="text-sm text-[#d9d9d9] hover:underline"
          >
            contactrootwords@gmail.com
          </Link>
        </div>
        <div>
          <p className="text-base font-medium text-[#d9d9d9]">Phone</p>
          <p className="text-sm text-[#d9d9d9]">(971) 266-3025</p>
        </div>
        <div>
          <p className="text-base font-medium text-[#d9d9d9]">Location</p>
          <p className="text-sm text-[#d9d9d9]">PO Box Portland, OR</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;