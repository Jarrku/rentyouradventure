// import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

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
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">Tailwind starter</div>
    </div>
  );
}
