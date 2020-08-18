import Layout from '../../components/layout';
import { blogPost } from '../../database/blogPostMockData';
import { FilterPosts } from '../../services';

function Post({ post }) {

  return (
    <Layout>
        <div className="s-content">

            <div className="row">

                <div id="main" className="s-content__main large-8 column">

                    <article className="entry">

                        <header className="entry__header">

                            <h2 className="entry__title h1">
                                <a href="single.html" title="">{post.title}</a>
                            </h2>

                            <div className="entry__meta">
                                <ul>
                                    <li>{post.date}, 2020</li>
                                    <li><a href="#" title="" rel="category tag">{post.tags[3]}</a></li>
                                    <li>John Doe</li>
                                </ul>
                            </div>
                        
                        </header>

                        <div className="entry__content-media">
                            <img src={post.image} alt="" />
                        </div>

                        <div className="entry__content">
                            <p className="lead">{post.teaser}</p>

                            <p>{post.teaser}</p>
                        </div>

                        <p className="entry__tags">
                            <span>Tagged in </span>:
                            {post.tags.map((tag, index) => {
                            if (index < (post.tags.length - 1)) {
                                return (
                                <a key={index} href="#0">&nbsp; {tag}, </a>
                                )
                            } else {
                                return (
                                <a key={index} href="#0">&nbsp; {tag} </a>
                                )
                            }
                            })}
                            {/* <a href="#0">orci</a>, <a href="#0">lectus</a>, <a href="#0">varius</a>, <a href="#0">turpis</a> */}
                        </p>

                        <ul className="entry__post-nav h-group">
                            <li className="prev"><a rel="prev" href="#0"><strong className="h6">Previous Article</strong> Duis Sed Odio Sit Amet Nibh Vulputate</a></li>
                            <li className="next"><a rel="next" href="#0"><strong className="h6">Next Article</strong> Morbi Elit Consequat Ipsum</a></li>
                        </ul>

                    </article>
                    <div className="comments-wrap">

                        <div id="comments">

                            <h3>5 Comments</h3>
            
                            <ol className="commentlist">
            
                                <li className="depth-1 comment">
            
                                    <div className="comment__avatar">
                                        <img className="avatar" src="images/avatars/user-01.jpg" alt="" width="50" height="50" />
                                    </div>
            
                                    <div className="comment__content">
            
                                        <div className="comment__info">
                                            <div className="comment__author">Itachi Uchiha</div>
            
                                            <div className="comment__meta">
                                                <div className="comment__time">July 12, 2019</div>
                                                <div className="comment__reply">
                                                    <a className="comment-reply-link" href="#0">Reply</a>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div className="comment__text">
                                        <p>Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
                                        facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.</p>
                                        </div>
            
                                    </div>
            
                                </li>
            
                                <li className="thread-alt depth-1 comment">
            
                                    <div className="comment__avatar">
                                        <img className="avatar" src="images/avatars/user-04.jpg" alt="" width="50" height="50" />
                                    </div>
            
                                    <div className="comment__content">
            
                                        <div className="comment__info">
                                            <div className="comment__author">John Doe</div>
            
                                            <div className="comment__meta">
                                                <div className="comment__time">July 12, 2019</div>
                                                <div className="comment__reply">
                                                    <a className="comment-reply-link" href="#0">Reply</a>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div className="comment__text">
                                        <p>Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod
                                        urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et
                                        tantas semper delicatissimi.</p>
                                        </div>
            
                                    </div>
            
                                    <ul className="children">
            
                                        <li className="depth-2 comment">
            
                                            <div className="comment__avatar">
                                                <img className="avatar" src="images/avatars/user-03.jpg" alt="" width="50" height="50" />
                                            </div>
            
                                            <div className="comment__content">
            
                                                <div className="comment__info">
                                                    <div className="comment__author">Kakashi Hatake</div>
            
                                                    <div className="comment__meta">
                                                        <div className="comment__time">July 12, 2019</div>
                                                        <div className="comment__reply">
                                                            <a className="comment-reply-link" href="#0">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
            
                                                <div className="comment__text">
                                                    <p>Duis sed odio sit amet nibh vulputate
                                                    cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                                                    cursus a sit amet mauris</p>
                                                </div>
            
                                            </div>
            
                                            <ul className="children">
            
                                                <li className="depth-3 comment">
            
                                                    <div className="comment__avatar">
                                                        <img className="avatar" src="images/avatars/user-04.jpg" alt="" width="50" height="50" />
                                                    </div>
            
                                                    <div className="comment__content">
            
                                                        <div className="comment__info">
                                                            <div className="comment__author">John Doe</div>
            
                                                            <div className="comment__meta">
                                                                <div className="comment__time">july 11, 2019</div>
                                                                <div className="comment__reply">
                                                                    <a className="comment-reply-link" href="#0">Reply</a>
                                                                </div>
                                                            </div>
                                                        </div>
            
                                                        <div className="comment__text">
                                                        <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                                                        etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                                                        </div>
            
                                                    </div>
            
                                                </li>
            
                                            </ul>
            
                                        </li>
            
                                    </ul>
            
                                </li>

                                <li className="depth-1 comment">
            
                                    <div className="comment__avatar">
                                        <img className="avatar" src="images/avatars/user-02.jpg" alt="" width="50" height="50" />
                                    </div>
            
                                    <div className="comment__content">
            
                                        <div className="comment__info">
                                            <div className="comment__author">Shikamaru Nara</div>
            
                                            <div className="comment__meta">
                                                <div className="comment__time">July 11, 2019</div>
                                                <div className="comment__reply">
                                                    <a className="comment-reply-link" href="#0">Reply</a>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div className="comment__text">
                                        <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                                        </div>
            
                                    </div>
            
                                </li>
            
                            </ol>
                            

                        </div>

                        <div className="comment-respond">

                        
                            <div id="respond">
                
                                <h3>Add Comment <span>Your email address will not be published</span></h3>
                
                                <form name="contactForm" id="contactForm" method="post" action="" autocomplete="off">
                                    <fieldset>
                
                                        <div className="form-field">
                                            <input name="cName" id="cName" className="h-full-width" placeholder="Your Name" value="" type="text" />
                                        </div>
                
                                        <div className="form-field">
                                            <input name="cEmail" id="cEmail" className="h-full-width" placeholder="Your Email" value="" type="text" />
                                        </div>
                
                                        <div className="form-field">
                                            <input name="cWebsite" id="cWebsite" className="h-full-width" placeholder="Website" value="" type="text" />
                                        </div>
                
                                        <div className="message form-field">
                                            <textarea name="cMessage" id="cMessage" className="h-full-width" placeholder="Your Message"></textarea>
                                        </div>
                
                                        <input name="submit" id="submit" className="btn btn--primary btn-wide btn--large h-full-width" value="Add Comment" type="submit" />
                
                                    </fieldset>
                                </form>
                
                            </div>
                        
                
                        </div>
                
                    </div>

                </div>


                <div id="sidebar" className="s-content__sidebar large-4 column">

                <div className="widget widget--search">
                    <h3 className="h6">Search</h3> 
                    <form action="#0">
                        <input type="text"
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

export async function getStaticPaths() {

  const posts = await [...blogPost];

  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {

  const filter = new FilterPosts(blogPost);
  const post = await filter.getPostById(params.id);

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post;