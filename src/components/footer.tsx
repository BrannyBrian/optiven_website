import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "react-feather";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="px-4 pt-16 bg-gray-200 sm:min-w-xl md:min-w-full lg:min-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-8 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src="/optiven-logo.png"
              alt="Optiven Logo"
              height={100}
              width={160}
            />
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Optiven Group is a leading brand in the African real estate
              sector. The Group’s main objective is to empower property
              investors and transform the Society.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              The Real Estate arm’s flagship product is transformed value added
              plots which are particularly enhanced to suit immediate
              residential settlement, commercial purposes and futuristic capital
              gain.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              We have prime plots on sale in Malindi, Thika (Gatanga Road) ,
              Machakos, Kithimani, Nyeri, Nanyuki, Vipingo,
              Naro Moru, Nakuru, Kangundo Road and Kajiado.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Call/SMS/WhatsApp:</p>
            <div className="text-center border-r">
              <Link
                href={"tel:+254790300300"}
                className="text-green-600 mr-1 un hover:cursor-pointer"
              >
                +254790300300
              </Link>
            </div>
            <div className="text-center">
              <Link
                href={"tel:+254723400500"}
                className="text-green-600 ml-1 un hover:cursor-pointer"
              >
                +254723400500
              </Link>
            </div>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Diaspora:</p>
            <Link
              href={"tel:+254796000333"}
              className="text-green-600 un hover:cursor-pointer"
            >
              +254796000333
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Official Email:</p>
            <Link
              href={"mailto:info@optiven.co.ke"}
              target="_blank"
              className="text-green-600 un hover:cursor-pointer"
            >
              info@optiven.co.ke
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Diaspora Email:</p>
            <Link
              href={"mailto:globalmarkets@optiven.co.ke"}
              target="_blank"
              className="text-green-600 un hover:cursor-pointer"
            >
              globalmarkets@optiven.co.ke
            </Link>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Socials
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <Link
                href={"https://www.facebook.com/Optivenlimited/"}
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-green-600"
              >
                <Facebook />
              </Link>
              <Link
                href={"https://twitter.com/OptivenLimited"}
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-green-600"
              >
                <Twitter />
              </Link>
              <Link
                href={"https://www.instagram.com/optivenlimited/"}
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-green-600"
              >
                <Instagram />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/optiven-limited?originalSubdomain=ke"
                }
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-green-600"
              >
                <Linkedin />
              </Link>
              <Link
                href={"https://www.youtube.com/user/OptivenEnterprises/videos"}
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-green-600"
              >
                <Youtube />
              </Link>
              <Link
                href="mailto:info@optiven.co.ke"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-green-600"
              >
                <Mail />
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              We use cookies to ensure that we give you the best experience on
              our website. View our{" "}
              <Link
                href="/cookie-policy"
                className="text-green-600 un hover:cursor-pointer"
              >
                cookie policy.
              </Link>
            </p>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Quick Links
          </span>
          <Link
            href={"https://www.georgewachiuri.com/"}
            target="_blank"
            aria-label="To George Wachiuri Profile"
            className="w-full"
          >
            <Image
              src="/george-wachiuri-logo.png"
              alt="George Wachiuri Logo"
              height={100}
              width={160}
            />
          </Link>
          <Link
            href={"https://www.optivenfoundation.org/"}
            target="_blank"
            aria-label="To Optiven Foundation"
            className="w-full"
          >
            <Image
              src="/optiven-foundation-logo.png"
              alt="Optiven Foundation Logo"
              height={100}
              width={160}
            />
          </Link>
          <Link
            href={"https://www.optivenhomes.co.ke/"}
            target="_blank"
            aria-label="To Optiven Homes"
            className="w-full"
          >
            <Image
              src="/optiven-homes-logo.png"
              alt="Optiven Homes Logo"
              height={100}
              width={160}
            />
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Offices
          </p>
          <div className="flex">
            <MapPin size={16} />
            <p className="mx-1 text-gray-800">Head Office:</p>
            <span className="text-green-600">
              Absa Towers Loita Street , 2nd Floor
            </span>
          </div>
          <div className="flex">
            <MapPin size={16} />
            <p className="mx-1 text-gray-800">Global Office:</p>
            <span className="text-green-600">Zamani Business Park , Karen</span>
          </div>
          <div className="flex">
            <MapPin size={16} />
            <p className="mx-1 text-gray-800">Kitengela:</p>
            <span className="text-green-600">
              Optiven Business Center - Acacia Junction
            </span>
          </div>
          <div className="flex">
            <MapPin size={16} />
            <p className="mx-1 text-gray-800">Nanyuki:</p>
            <span className="text-green-600">
              Ubii Plaza, along Kenyatta Highway, 2nd Floor
            </span>
          </div>
          <div className="flex">
            <MapPin size={16} />
            <p className="mx-1 text-gray-800">Nakuru:</p>
            <span className="text-green-600">Golden Life Mall, 7th Floor</span>
          </div>
          <div className="flex">
            <MapPin size={16} />
            <p className="mx-1 text-gray-800">Mtwapa:</p>
            <span className="text-green-600">
              Shifa Arcade, 2nd Floor, Office No. B5
            </span>
          </div>
          <div className="flex">
            <Clock size={16} />
            <p className="ml-1 text-gray-800">Monday - Friday</p>
            <span className="text-green-600">: 8:00 AM - 5:00 PM</span>
          </div>
          <div className="flex">
            <Clock size={16} />
            <p className="ml-1 text-gray-800">Saturday:</p>
            <span className="text-green-600">: 8:00 AM - 1:00 PM</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600 font-semibold">
          © Copyright {getCurrentYear()} Optiven Limited. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              href="/faqs"
              className="text-sm text-gray-600 transition-colors duration-300 un hover:text-green-600"
            >
              F.A.Q
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-600 transition-colors duration-300 un hover:text-green-600"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-gray-600 transition-colors duration-300 un hover:text-green-600"
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
