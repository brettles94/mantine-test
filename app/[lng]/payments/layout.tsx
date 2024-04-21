import { languages } from '../../i18n/settings';

export const metadata = {
  title: 'OnlyCats | Payments',
  description: 'The most perfect kitties on the internet!',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Layout({ children, params: { lng } }) {
  return children;
}
