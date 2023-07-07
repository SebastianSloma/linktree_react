import './App.css';

import profilePic from './merida.png';
import {
	FaGithub,
	FaInstagram,
	FaTelegram,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';


function App() {
	const links = [
		{
			url: 'http://www.youtube.com/',
			title: 'YouTube',
			icon: <FaYoutube />,
		},
		{
			url: 'http://www.github.com/',
			title: 'Github',
			icon: <FaGithub />,
		},
		{
			url: 'http://www.instagram.com/',
			title: 'Instagram',
			icon: <FaInstagram />,
		},
		{
			url: 'http://www.Twitter.com/',
			title: 'Twitter',
			icon: <FaTwitter />,
		},
		{
			url: 'http://www.telegram.com/',
			title: 'Telegam',
			icon: <FaTelegram />,
		},
	];
	return (
		<div className='App'>
			<header className='App-header container mx-auto'>
				<img
					src={profilePic}
					className='profile-pic w-20 h-20 mb-4 rounded-full'
					alt='logo'
				/>
				<ul className='flex flex-col w-full'>
					{links.map((link, index) => (
						<li
							key={index}
							className='cursor-pointer m-2 py-3 px-10 border-black border-2 text-sm md:text-md text-slate-900'
						>
							<a href={link.url} className='flex items-center' title={link.title} target='_blank' rel="noreferrer">
								{link.icon}
								<p className='ml-3'>{link.title}</p>
							</a>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
