import Layout from '@app/components/common/Layout';
import Search from '@app/components/Search';

const Index = () => {
  return (
    <Layout>
      <h1 className="animate text-2xl mt-36">Media Downloader</h1>
      <Search className="mt-24" />
    </Layout>
  );
};

export default Index;
