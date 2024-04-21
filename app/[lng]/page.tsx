import { Welcome } from './components/Welcome/Welcome';

export default function HomePage({ lng }) {
  return (
    <>
      <Welcome lng={lng} />
    </>
  );
}
