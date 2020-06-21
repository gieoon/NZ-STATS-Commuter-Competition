import React, {lazy, Suspense} from 'react';
import './App.scss';
// import './App.css';
import Navbar from './components/navbar.js';
import {Helmet} from 'react-helmet';
import ScrollToTop from './utils/scrollToTop';
import useDarkMode from 'use-dark-mode';
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from 'react-router-dom';

const schemaMarkup = {
  '@context': 'http://schema.org/',
  '@type': 'GO',
  name: 'Visualizing Commuter Data | NZ Statistics',
  alternateName: 'NZ Commuter Visualization',
  url: 'http://nz-commuter.com',
  image: '',
};

const Home = lazy(() => 
  import('./components/home' /* webpackChunkName: "Home" */)
)

const FAQ = lazy(() => 
  import('./components/faq' /* webpackChunkName: "About" */)
)

const District = lazy(() =>
  import('./components/district' /* webpackChunkName: "District" */)
);

function App() {
  const darkMode = useDarkMode(false);
  // const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/about',
      view: FAQ,
      displayName: 'About',
      showInNavbar: true,
    },
    {
      pageLink: '/district/:districtCode',
      view: District,
      displayName: 'Regional District',
      showInNavbar: false,
    },
  ];

  return (
    <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* <Suspense fallback={<div />}>
        <LanguageSwitcher
          {...{showLanguageSwitcher, setShowLanguageSwitcher}}
        />
      </Suspense> */}

      <Suspense fallback={<div />}>
        <Router>
          <ScrollToTop />
          <Navbar 
            pages={pages}
            {...{darkMode}}
            // {...{showLanguageSwitcher, setShowLanguageSwitcher}}
          />
          <Route 
            render={({location}) => (
              <React.Fragment>
                <Switch location={location}>
                  {pages.map((page, index) => {
                    return(
                      <Route 
                        exact
                        path={page.pageLink}
                        render={({match}) => <page.view />}
                        key={index}
                      />
                    );
                  })}
                  <Redirect to='/' />
                </Switch>
              </React.Fragment>
            )}
          />
        </Router>
      </Suspense>

    </div>
  );
}

export default App;
