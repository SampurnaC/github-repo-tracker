const GithubForm = ({ input, setInput, handleSubmit }) => {
  return (
    <form className="github-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type github username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit"></button>
    </form>
  );
};

export default GithubForm;
