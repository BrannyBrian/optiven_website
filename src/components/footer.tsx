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
            <p className="text-md text-gray-800">
              Optiven Group is a leading brand in the African real estate
              sector. The Group’s main objective is to empower property
              investors and transform the Society.
            </p>
            <p className="mt-4 text-md text-gray-800">
              The Real Estate arm’s flagship product is transformed value added
              plots which are particularly enhanced to suit immediate
              residential settlement, commercial purposes and futuristic capital
              gain.
            </p>
            <p className="mt-4 text-md text-gray-800">
              We have prime plots on sale in Malindi, Thika (Gatanga Road) ,
              Machakos, Kithimani, Nyeri, Nanyuki, Vipingo, Naro Moru, Nakuru,
              Kangundo Road and Kajiado.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-md">
          <p className="text-xl font-bold tracking-wide text-gray-900">
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
            <span className="text-xl font-bold tracking-wide text-gray-900">
              Socials
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <Link
                href="https://wa.me/+254790300300"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="main-grid-item-icon transition-all duration-300 hover:fill-current hover:text-green-600"
                  fill="currentColor"
                >
                  <path d="M6.579 8.121c.209-.663.778-1.457 1.19-1.66.183-.09.319-.11.763-.11.522 0 .548.005.684.14.088.095.328.606.673 1.432.292.71.533 1.315.533 1.347 0 .146-.293.61-.627 1.002-.23.267-.365.47-.365.543 0 .068.167.381.376.69.506.757 1.44 1.696 2.167 2.177.568.376 1.582.867 1.785.867.152 0 .429-.272.992-.982.23-.287.434-.495.512-.511.068-.021.235.005.37.057.392.152 2.371 1.117 2.476 1.211.203.188.037 1.264-.267 1.702-.464.68-1.79 1.259-2.663 1.17-.636-.068-2.14-.564-3.117-1.029-1.253-.6-2.574-1.697-3.644-3.038-.611-.763-1.227-1.692-1.493-2.246-.36-.751-.491-1.331-.455-2 .016-.287.068-.631.11-.762Z" />
                  <path
                    clip-rule="evenodd"
                    d="M.606 9.5C1.582 4.491 5.576.76 10.709.06c.705-.1 2.684-.068 3.368.046.715.126 1.66.371 2.24.59 3.832 1.426 6.663 4.72 7.466 8.683.35 1.729.272 3.755-.203 5.457-1.133 4.03-4.423 7.205-8.511 8.218-2.663.658-5.462.37-7.983-.81l-.617-.292-3.226 1.029C1.473 23.545.01 23.994 0 23.983c-.01-.01.45-1.415 1.029-3.112l1.05-3.096-.424-.84C.48 14.569.12 12.01.605 9.498Zm21.172-.408c-1.028-3.76-4.297-6.626-8.145-7.148-2.099-.282-4.078.037-5.9.956-4.417 2.234-6.522 7.341-4.93 11.957.204.59.752 1.702 1.092 2.213l.271.408-.605 1.775a69.688 69.688 0 0 0-.606 1.817c0 .026.84-.224 1.864-.548a99.767 99.767 0 0 1 1.9-.596c.022 0 .225.11.45.24 2.428 1.447 5.456 1.76 8.187.852a9.927 9.927 0 0 0 6.48-6.945 9.998 9.998 0 0 0-.058-4.98Z"
                    fill-rule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href={"https://twitter.com/OptivenLimited"}
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="transition-all duration-300 hover:fill-current hover:text-green-600"
                >
                  <path d="M 3.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z "></path>
                </svg>
              </Link>

              <Link
                href={"https://www.facebook.com/Optivenlimited/"}
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-green-600"
              >
                <Facebook />
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
            <p className="mt-4 text-md text-gray-500">
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
        <div className="ml-12">
          <span className="text-base font-bold tracking-wide text-gray-900 ">
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
              className="mt-2"
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
              className="mt-2"
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
              className="mt-2"
            />
          </Link>
        </div>
        <div className="space-y-2 text-md">
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
        <ul className="flex flex-col mb-3 mr-20 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row ">
          <li>
            <Link
              href="/faqs"
              className="text-base text-gray-600 transition-colors duration-300 un hover:text-green-600"
            >
              F.A.Q
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-base text-gray-600 transition-colors duration-300 un hover:text-green-600"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms-and-conditions"
              className="text-base text-gray-600 transition-colors duration-300 un hover:text-green-600"
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
