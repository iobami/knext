import Link from 'next/link';

export default function BlogItem({ title, tags, date, author, teaser, id }) {
  return (
    <article className="entry">

      <header className="entry__header">

        <h2 className="entry__title h1">
        <Link href={`/posts/${id}`}><a>{title}</a></Link>
        </h2>

        <div className="entry__meta">
          <ul>
            <li>{date}, 2020</li>
            <li><a href="#0" title="" rel="category tag">{tags}</a></li>
            <li>{author}</li>
          </ul>
        </div>

      </header>

      <div className="entry__content">
        <p>{teaser}</p>
      </div>

    </article>
  );
}
