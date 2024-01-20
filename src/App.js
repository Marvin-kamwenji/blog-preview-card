import './App.css';
import image from './assets/images/illustration-article.svg';
import profile from './assets/images/image-avatar.webp';

function App() {
  return (
    <div className="App">
      <img src={image} alt="Top pic" className="app__image"/>
      <button className='app__title'>Learning</button>
      <p className="app__desc">Published 21 Dec 2023</p>
      <h1 className="title">HTML & CSS foundations</h1>
      <p className="description">These languages are the backbone of every website, defining structure, content, and presentation</p>
      <div className="profile">
        <img src={profile} alt="profile image" className="profile__image" />
        <h1 className='profile__title'>Greg Hooper</h1>
      </div>
    </div>
  );
}

export default App;
