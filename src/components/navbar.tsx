import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDown, Info, Menu, Users, X } from "react-feather";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Who We Are",
    description: "Get a better understanding of what we're about",
    href: "/about",
    icon: Info,
  },
  {
    name: "Our Team",
    description: "Meet our core leadership team",
    href: "/team",
    icon: Users,
  },
  {
    name: "Why Us",
    description: "Get to know why we're trusted by thousands of Kenyans",
    href: "/why-us",
    icon: ChevronDown,
  },
  {
    name: "Awards and Milestones",
    description: "Connect with third-party tools",
    href: "/awards-and-milestones",
    icon: ChevronDown,
  },
  {
    name: "Our Partners",
    description: "Build strategic funnels that will convert",
    href: "/partners",
    icon: ChevronDown,
  },
  {
    name: "Corporate and Social Responsibility",
    description: "Build strategic funnels that will convert",
    href: "/corporate-and-social-responsibility",
    icon: ChevronDown,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex items-center justify-between p-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="/optiven-logo.png"
              alt="Optiven Logo"
              height={100}
              width={160}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open Main Menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Popover className="relative">
            <Popover.Button className="font-bold flex items-center gap-x-1 leading-6 text-gray-900">
              About
              <ChevronDown
                className="h-5 w-5 flex-none text-gray-700"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block text-gray-700 font-semibold"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="/testimonials"
            className="font-semibold leading-6 text-gray-900"
          >
            Testimonials
          </Link>
          <Link
            href="/careers"
            className="font-semibold leading-6 text-gray-900"
          >
            Careers
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="btn flex items-center justify-center px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-500"
          >
            Contact
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/optiven-logo.png"
                alt="Optiven Logo"
                height={100}
                width={160}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close Menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 font-semibold block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50">
                        About
                        <ChevronDown
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-gray-900 hover:bg-gray-50"
                          >
                            - {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Link
                  href="/testimonials"
                  className="-mx-3 font-semibold block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-gray-50"
                >
                  Testimonials
                </Link>
                <Link
                  href="/careers"
                  className="-mx-3 font-semibold block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-gray-50"
                >
                  Careers
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="btn flex items-center justify-center px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-500"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
