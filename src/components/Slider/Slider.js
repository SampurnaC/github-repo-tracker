import SingleRepo from '../SingleRepo/SingleRepo';

const Slider = ({ repos }) => {
  return (
    <div className="box">
      {repos.map((repo) => (
        <SingleRepo key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Slider;
