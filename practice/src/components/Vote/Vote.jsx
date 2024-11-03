import { useState } from "react";

const Vote = () => {
  const [voteData, setVoteData] = useState({
    macOS: 0,
    windows: 0,
    linux: 0,
  });

  const handleClickByOption = (value) => {
    console.log(value);
    // if (value === "windows") {
    //   setVoteData((prev) => ({ ...prev, windows: prev.windows + 1 }));
    // }
    setVoteData((prev) => ({
      ...prev,
      [value]: prev[value] + 1,
    }));
  };

  return (
    <div>
      <h2>Voting list</h2>
      <ul>
        <li>Windows: {voteData.windows}</li>
        <li>MacOS: {voteData.macOS}</li>
        <li>Linux: {voteData.linux}</li>
      </ul>
      <section>
        {Object.keys(voteData).map((option) => (
          <button
            key={option}
            onClick={() => {
              handleClickByOption(option);
            }}
          >
            {option}
          </button>
        ))}
        {/* <button
          onClick={() => {
            handleClickByOption("windows");
          }}
        >
          Windows
        </button>
        <button
          onClick={() => {
            handleClickByOption("macOS");
          }}
        >
          MacOS
        </button>
        <button
          onClick={() => {
            handleClickByOption("linux");
          }}
        >
          Linux
        </button> */}
      </section>
    </div>
  );
};

export default Vote;
