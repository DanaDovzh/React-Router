import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import { MainPage } from './components/PagesConstructor/MainPage';
import { Nav } from './components/PagesConstructor/Nav';
import { PostPage } from './components/PagesConstructor/PostPage';
import CreatePostPage, {contactsList} from "./components/Contacts/CreateContactsList";
import { ImagesPage } from './components/PagesConstructor/ImagesPage';
import ContactInfo from './components/Contacts/ContactInfo';
import './css/style.css';
import './css/fonts.css';
const Contact = (props) => {
  const currentContact = contactsList.find((idContact) => +idContact.id === +props.match.params.id);
  console.log(props.match.params.id)
  console.log(currentContact);
  return (
    <>
    <ContactInfo {...currentContact}/>
    <Link to='/contacts'><span className='back-link'>&#8592; Back</span></Link>
    </>
  )
}
function App() {
  return (
    <>
    <div className='wrapper'>
      <Router>
        <Nav />
        <div className='content'>
          <Route path='/posts' component={PostPage} />
          <Route path='/mainPage' component={MainPage} />
          <Route exact path='/contacts' component={CreatePostPage} />
          <Route path='/contacts/:id' component={Contact} />
          <Route path='/imagesPage' component={ImagesPage} />
        </div>
      </Router>
    </div>
    <footer></footer>
    </>
  );
}

export default App;
