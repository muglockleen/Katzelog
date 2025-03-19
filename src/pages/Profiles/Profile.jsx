import { useLocation } from "react-router-dom";
import CatProfile from '../../components/CatProfile'

export default function Profile({ kitteh }) {
  // Set up some default values.
  let pageTitle = 'Kitteh Meet and Greet!';

  // Now set what we can from the props.
  const location = useLocation();
  const data = location.state;

  if (data) {
    if (data.title) { pageTitle = data.title; }
    if (data.kitteh) {
      kitteh = data.kitteh;
    }
  }

  if (kitteh) {
    return (
      <div className='main-container'>
        {/* {data && (
          <div className='main-header'>
            {pageTitle}
          </div>
        )} */}
        {data && (
          <CatProfile pageAction='show' kitteh={kitteh} />
        )}
      </div>
    );
  } else {
    return (
      <p>No Kitteh to Show</p>
    );
  }
}