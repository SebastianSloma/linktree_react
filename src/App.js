import logo from './logo.svg';
import './App.css';
import profilePic from'./merida.png'
import { FaGithub, FaInstagram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'

function App() {

  const links =[

    {
      url: 'http://www.youtube.com/',
      title: 'YouTube',
      icon: <FaYoutube/>
    },
    {
      url: 'http://www.github.com/',
      title: 'Github',
      icon: <FaGithub/>
    },
    {
      url: 'http://www.instagram.com/',
      title: 'Instagram',
      icon: <FaInstagram/>
    },
    {
      url: 'http://www.Twitter.com/',
      title: 'Twitter',
      icon: <FaTwitter/>
    },
    {
      url: 'http://www.telegram.com/',
      title: 'Telegam',
      icon: <FaTelegram/>
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} className="App-logo" alt="profilepic" />
        
      </header>
    </div>
  );
}

export default App;
