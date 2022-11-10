import axios from 'axios';
import { useEffect, useState } from 'react';
import GithubForm from '../../components/GithubForm/GithubForm';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState('SampurnaC');

  useEffect(() => {
    const fetchGithubRepo = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(data);
      //   console.log(repos);
    };
    fetchGithubRepo();
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
  };
  console.log(input);
  return (
    <div className="App home">
      <h2 className="home-heading">GitHub Repo Tracker</h2>
      <GithubForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      ></GithubForm>
    </div>
  );
};

export default HomePage;
