import Head from 'next/head';
import Layout from '../components/layout';
import { BlogItem } from '../partials';
import { blogPost } from '../database/blogPostMockData';

export async function getStaticProps() {

  const posts = await [...blogPost];

  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }) {
  
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <div className="s-content">

        <div className="row">

          <div id="main" className="s-content__main large-8 column">

            {posts.map((post, index) => (
              <BlogItem
                key={index}
                author="John Doe"
                title={post.title}
                tags={post.tags[index]}
                date={post.date}
                teaser={post.teaser}
                id={post.id}
              />
            ))}

            <div className="post-list-nav">
              <a rel="prev" href="#0">Prev</a>
              <a rel="next" href="#0">Next</a>
            </div>

          </div>


          <div id="sidebar" className="s-content__sidebar large-4 column">

            <div className="widget widget--search">
              <h3 className="h6">Search</h3>
              <form action="#0">
                <input
                  type="text"
                  value="Search here..."
                  className="text-search"
                />
                  <input type="submit" value="" className="submit-search" />
              </form>
            </div>

            <div className="widget widget--categories">
              <h3 className="h6">Categories.</h3>
              <ul>
                <li><a href="#0" title="">Wordpress</a> (2)</li>
                <li><a href="#0" title="">Ghost</a> (14)</li>
                <li><a href="#0" title="">Joomla</a> (5)</li>
                <li><a href="#0" title="">Drupal</a> (3)</li>
                <li><a href="#0" title="">Magento</a> (2)</li>
                <li><a href="#0" title="">Uncategorized</a> (9)</li>
              </ul>
            </div>

            <div className="widget widget_text group">
              <h3 className="h6">Widget Text.</h3>

              <p>
                Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor
                aute fugiat minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur
                sint cillum sint consectetur voluptate adipisicing Duis irure magna ut sit amet reprehenderit.
              </p>
            </div>

            <div className="widget widget_tags">
              <h3 className="h6">Post Tags.</h3>

              <div className="tagcloud group">
                <a href="#0">Corporate</a>
                <a href="#0">Onepage</a>
                <a href="#0">Agency</a>
                <a href="#0">Multipurpose</a>
                <a href="#0">Blog</a>
                <a href="#0">Landing Page</a>
                <a href="#0">Resume</a>
              </div>
            </div>

            <div className="widget widget_popular">
              <h3 className="h6">Popular Post.</h3>

              <ul className="link-list">
                <li><a href="#0">Sint cillum consectetur voluptate.</a></li>
                <li><a href="#0">Lorem ipsum Ullamco commodo.</a></li>
                <li><a href="#0">Fugiat minim eiusmod do.</a></li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}
