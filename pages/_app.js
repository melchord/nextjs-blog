import PropTypes from 'prop-types';

import '../styles/global.css';

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
