import { Link } from 'react-router-dom';

const SingleRepo = ({ repo }) => {
  return (
    <article className="repo">
      <header>
        <h4 className="repo-name">
          {repo.name.substring(0, Math.min(repo.name.length, 15))}...
        </h4>
        <Link to={`/${repo.name}`} className="btn">
          See details
        </Link>
      </header>
    </article>
  );
};

export default SingleRepo;
