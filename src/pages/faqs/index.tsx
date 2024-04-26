import FaqItem from "@/components/faqItem";
import Head from "next/head";
import Stairs from "@/components/stairs";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { ChevronsRight } from "react-feather";

const Faq = () => {
  return (
    <>
      <Head>
        <title>Optiven Limited</title>
        <meta name="description" content="Inspiring Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>

<div className="container mx-auto">
  <ol className="flex justify-start space-x-2 rtl:space-x-reverse">
    <Popover.Group className="hidden lg:flex lg:gap-x-4">
      <li>
        <Link href="/" className="block text-gray-700 font-semibold hover:text-green-500">
          <span className="ml-1"> Home</span>
        </Link>
      </li>
      <ChevronsRight
      size={20}
      className="text-gray-700"
      aria-hidden="true"
       />
      <li>
        FAQs
      </li>
    </Popover.Group>
  </ol>
</div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div>
            <div className="space-y-4">
              <FaqItem title="How do I access Kitengela?">
                You get on Nairobi Expressway from Moi Ave and Haile Selassie
                Ave, Follow Mombasa Road/A104 and Nairobi-Namanga to your
                destination in Kitengela. Alternatively, take a Shuttle number,
                110” Kitengela Direct “or Drive along Mombasa road or the
                Express-Way and exit from the Mlolongo toll station, branch to
                the right, 2.9 km past Mlolongo, use the under tunnel and drive
                2.9km from the tunnel and you are at Kitengela Transport City.
              </FaqItem>
              <FaqItem title="When do you take clients for Viewing?">
                We take customers to view from Monday to Saturday. We’ll pick
                you up from our offices at Absa Towers, Loita Street
              </FaqItem>
              <FaqItem title="Do you Charge for Site Visits?">
                Site Visits to Optiven projects around Nairobi (Kiambu,
                Kitengela, Thika, Konza, Kangundo Rd etc) are FREE. For projects
                further out (Malindi, Nanyuki, Kisumu etc) we charge a Fee that
                will make up part of your investment should you choose to place
                a booking on a plot. Once you schedule a visit, you’re required
                to show up at the designated office and a driver & our property
                advisor will be ready for you, eager to make sure that you are
                comfortable as you view. We also provide a bottle of water to
                ensure that you’re refreshed during the viewing tour.
              </FaqItem>
              <FaqItem title="What do I do after viewing and selecting a valued added plot?">
                Give a copy of the ID, and a copy of the KRA PIN. Also, fill in
                the plot booking form indicating all your details, including the
                plot number that you booked. Thereafter we will get in touch and
                send you an offer letter. We give you another 14 days to allow
                you to do a land search and give you ample time to meditate on
                your investment decision.
              </FaqItem>
              <FaqItem title="Where are your offices?">
                We are situated at Absa Towers, Loita Street 2nd Floor. Optiven
                Global Office: Zamani Business Park , Karen Kitengela: Optiven
                Business Center - Acacia Junction Nanyuki: Ubii Plaza, along
                Kenyatta Highway, 2nd Floor Nakuru: Golden Life Mall, 7th Floor
                Mtwapa: Shifa Arcade, 2nd Floor, Office No. B5.
              </FaqItem>
              <FaqItem title="Do you sell to Kenyans in Diaspora?">
                Yes, we have over 500 diaspora clients in our profile that we
                have sold premium value-added plots. We have a dedicated Global
                team to help do it at ease and we can email you the Diaspora
                procedures if you provide us with your email address.
              </FaqItem>
              <FaqItem title="How long have you been in this business?">
                We have been in business for over 24 years. We are here to give
                you tried and tested real estate solutions.
              </FaqItem>
              <FaqItem title="Do you have Title deeds and are they freehold or Leasehold?">
                Yes, we do. Depending on the nature of the project, some are
                freehold while others will be leasehold.
              </FaqItem>
              <FaqItem title="Do you accept payments in Installments?">
                Yes, we do. Depending on the project of interest, You can choose
                to pay in 6 months upto 24 months.
              </FaqItem>
            </div>
          </div>
        </div>
      </Stairs>
    </>
  );
};

export default Faq;
