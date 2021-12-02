import './App.css';
import DropZone from './components/DropZone';
import info from './info.svg';
import icon from './twitch-emote-resizer.svg';
import github from './github.svg';

function App() {
  const handleViewOnGithub = () => {
    window.location.href = "https://github.com/idssystem/twitch-emote-resizer";
  };
  return (
    <div className="App">
      <div className="TitleRow">
        <img className="Icon" src={icon}/>
        <div className="Title">Twitch Emote Resizer</div>
      </div>
      <DropZone />
      <div className="Info">
        <img src={info} className="InfoIcon" alt="info icon" />
        <p>
          This site will resize one or more images into the sizes Twitch requires for emotes and badges.
          <br/>
          If the resized images exceeds Twitch's size limit of 25KB, this site will attempt to compress it.
          <br/>
          Image processing is done in your browser. Your images never leave your device.
        </p>
      </div>
      <div className="GitHub" onClick={handleViewOnGithub}>
        <img src={github} className="GitHubIcon" alt="GitHub icon"/>
        View on GitHub
      </div>
      <div className="Spacer"/>
    </div>
  );
}

export default App;
