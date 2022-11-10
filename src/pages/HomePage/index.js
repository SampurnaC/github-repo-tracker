import axios from 'axios';
import { useEffect, useState } from 'react';
import GithubForm from '../../components/GithubForm/GithubForm';
import Slider from '../../components/Slider/Slider';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('SampurnaC');
  const [repos, setRepos] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('username', JSON.stringify(username));
  // }, [username]);

  useEffect(() => {
    const fetchGithubRepo = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(data);
    };
    fetchGithubRepo();
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
    setInput('');
  };

  return (
    <div className="App home">
      <h2 className="home-heading">GitHub Repo Tracker</h2>
      <GithubForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      ></GithubForm>
      <Slider repos={repos} />
    </div>
  );
};

export default HomePage;
