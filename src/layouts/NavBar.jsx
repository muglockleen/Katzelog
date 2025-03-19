import { useNavigate, Link } from 'react-router-dom';
import OrgSelector from "../components/OrgSelector";

export default function NavBar() {
  const args = {
    about:
    {
      title: 'About Katzelog',
      text: 'Katzelog itself is an idea for a suite of apps used in all aspects of cat rescue, from trapping to the adoption process. From trapping to intake to foster care to the adoption process and points between.\nKatzelog is the brain child of Mike McLaughlin. He has several cats of his own, as well as fosters numerous cats for Community Cat Club. He also helps out with Pennsauken Community Cats.'
    },
    profiles:
    {
      title: 'Meetz teh Kittehs under Care!'
    },
    tasks:
    {
      title: 'Current TODOs for teh Kittehs'
    }
  };

  const navigate = useNavigate();

  const handleButtonLink = (path, pageAction, page) => {
    switch (page) {
      case 'kitties':
      default:
        navigate(path, { state: { title: args.profiles.title, text: args.profiles.text, pageAction: pageAction } });
        break;
      case 'tasks':
        navigate(path, { state: { title: args.tasks.title, text: args.tasks.text, pageAction: pageAction } });
        break;
    }
  };

  return (
    <nav className='left'>
      <fieldset className='kitty-controls'>
        <legend>See Sum Kittehs?</legend>
        <div className='controls'>
          <OrgSelector />
        </div>
        <div className='controls'><button onClick={() => handleButtonLink('/profiles', 'list', 'kitties')}>Kitties</button></div>
      </fieldset>
      <fieldset className='kitty-controls'>
        <legend>Get Bizzy?</legend>
        <div className='controls'><button onClick={() => handleButtonLink('/tasks', 'list', 'tasks')}>Tasks</button></div>
      </fieldset>
      <br />
      <p className='nav-links'>
        <Link to='/about' state={args}>About</Link>
      </p>
    </nav>
  );
}
