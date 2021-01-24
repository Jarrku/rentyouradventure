// import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// export const getStaticProps = async ({ preview = false }: GetStaticPropsContext) => {
//   const [homepage, navbar] = await getHomepageData(preview);
//   if (!homepage.data || !navbar.data) throw new Error('Failed to fetch data from contentful');

//   return {
//     props: {
//       preview,
//       t: homepage.data.home,
//       navbar: navbar.data.navbar,
//     },
//   };
// };

// type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
// type Props = Pick<PageProps, 't'>;

export default function Site() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Image priority src="/images/homepage.jpg" layout="fill" className="z-0" objectFit="cover" />
      <div className="absolute z-10 w-full h-full px-4">
        <div className="max-w-screen-md mx-auto text-center mt-16">
          <h1 className="tracking-tighter font-semibold text-blue-500">
            <span className="block text-2xl sm:text-3xl md:text-4xl">Welkom bij Rent Your Adventure</span>
            <span className="block text-xl sm:text-2xl ">Klik op jouw favoriet avontuur</span>
          </h1>
          <Transition show={show}>
            <div className="mt-20 justify-items-center grid grid-cols-2 gap-y-8 gap-x-4">
              <SiteLogo src="/images/archery.png" href="/archery" />
              <SiteLogo src="/images/bumper.png" href="/bumper" />
              <SiteLogo src="/images/paintball.png" href="/paintball" />
              <SiteLogo src="/images/laser.png" href="/lasershooting" />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}

interface SiteLogoProps {
  href: string;
  src: string;
}

function SiteLogo({ href, src }: SiteLogoProps) {
  return (
    <Transition.Child
      enter="transition ease-out transform duration-500"
      enterFrom="opacity-0 scale-75"
      enterTo="opacity-100 scale-100"
      leave="transition duration-100 ease-in transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Link href={href}>
        <a>
          <Image priority src={src} width={300} height={218} />
        </a>
      </Link>
    </Transition.Child>
  );
}
