import Layout from '../components/MyLayout';
import Link from 'next/link';

export default function Blog() {
  return (
    <Layout>
      <h1>Workout time</h1>
    <Link href="/youtube">
      <a>See the videos</a>
    </Link>
    </Layout>
  );
}