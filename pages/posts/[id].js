import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts';

export default function Post({postData}) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

Post.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
