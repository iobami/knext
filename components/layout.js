import Head from 'next/head';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <script type="text/javascript" src="/js/modernizr.js">
        </script>
        <script type="text/javascript" src="/js/fontawesome/all.min.js">
        </script>
      </Head>
      <header className="s-header">

        <div className="row">
          <div className="s-header__content column">
            <div className="s-header__brand">
              <h1 className="s-header__logotext">
                <a href="index.html" title="">Keep It Simple.</a>
              </h1>
              <p className="s-header__tagline">Put your awesome tagline here.</p>
            </div>
          </div>
        </div>

        <nav className="s-header__nav-wrap">

          <div className="row">

            <ul className="s-header__nav">
              <li><a href="index.html">Home</a></li>
              <li className="has-children"><a href="#0">Dropdown</a>
                <ul>
                  <li><a href="#0">Submenu 01</a></li>
                  <li><a href="#0">Submenu 02</a></li>
                  <li><a href="#0">Submenu 03</a></li>
                </ul>
              </li>
              <li><a href="demo.html">Demo</a></li>
              <li><a href="archives.html">Archives</a></li>
              <li className="has-children current"><a href="#0">Blog</a>
                <ul>
                  <li><a href="blog.html">Blog Entries</a></li>
                  <li><a href="single.html">Single Blog</a></li>
                </ul>
              </li>
              <li><a href="page.html">Page</a></li>
            </ul>

          </div>

        </nav>

        <a className="header-menu-toggle" href="#0" title="Menu"><span>Menu</span></a>

      </header>

      {children}

      <footer className="s-footer">

        <div className="row s-footer__top">
          <div className="column">
            <ul className="s-footer__social">
              <li><a href="#0"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
              <li><a href="#0"><i className="fab fa-twitter" aria-hidden="true"/></a></li>
              <li><a href="#0"><i className="fab fa-youtube" aria-hidden="true"/></a></li>
              <li><a href="#0"><i className="fab fa-vimeo-v" aria-hidden="true"/></a></li>
              <li><a href="#0"><i className="fab fa-instagram" aria-hidden="true"/></a></li>
              <li><a href="#0"><i className="fab fa-linkedin" aria-hidden="true"/></a></li>
              <li><a href="#0"><i className="fab fa-skype" aria-hidden="true"/></a></li>
            </ul>
          </div>
        </div>

        <div className="row s-footer__bottom">

          <div className="large-6 tab-full column s-footer__info">
            <h3 className="h6">About Keep It Simple</h3>

            <p>
              Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor
              aute fugiat minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur
              sint cillum sint consectetur voluptate adipisicing Duis
            </p>

            <p>
              Lorem ipsum Sed nulla deserunt voluptate elit occaecat culpa cupidatat sit irure sint
              sint incididunt cupidatat esse in Ut sed commodo tempor consequat culpa fugiat incididunt.
            </p>
          </div>

          <div className="large-6 tab-full column">
            <div className="row">
              <div className="large-8 tab-full column">

                <h3 className="h6">Photostream</h3>

                <ul className="photostream group">
                  <li><a href="#0"><img alt="thumbnail" src="/images/thumb.jpg" /></a></li>
                  <li><a href="#0"><img alt="thumbnail" src="/images/thumb.jpg" /></a></li>
                  <li><a href="#0"><img alt="thumbnail" src="/images/thumb.jpg" /></a></li>
                  <li><a href="#0"><img alt="thumbnail" src="/images/thumb.jpg" /></a></li>
                  <li><a href="#0"><img alt="thumbnail" src="/images/thumb.jpg" /></a></li>
                  <li><a href="#0"><img alt="thumbnail" src="/images/thumb.jpg" /></a></li>
                  <li><a href="#0"><img alt="thumbnail" src="/images/thumb.jpg" /></a></li>
                  <li><a href="#0"><img alt="thumbnail" src="/images/thumb.jpg" /></a></li>
                </ul>

              </div>

              <div className="large-4 tab-full column">
                <h3 className="h6">Navigate</h3>

                <ul className="s-footer__list s-footer-list--nav group">
                  <li><a href="#0">Home</a></li>
                  <li><a href="#0">Blog</a></li>
                  <li><a href="#0">Demo</a></li>
                  <li><a href="#0">Archives</a></li>
                  <li><a href="#0">About</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ss-copyright">
            <span>© Copyright Keep It Simple 2019</span>
            <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
          </div>

        </div>


        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0l8 9h-6v15h-4v-15h-6z"/>
            </svg>
          </a>
        </div>

      </footer>

    </div>
  );
}

export default Layout;
