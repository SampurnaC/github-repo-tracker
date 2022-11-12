import { Link } from 'react-router-dom';

const SingleRepo = ({ repo }) => {
  return (
    <div className="repo">
      <h2>{repo.name}</h2>
      <Link to="#"></Link>
    </div>
  );
};

export default SingleRepo;
