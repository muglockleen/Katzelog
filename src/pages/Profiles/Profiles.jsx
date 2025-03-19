import { useLocation } from "react-router-dom";
import CatProfiles from "../../components/CatProfiles";

export default function Profiles({ kittehs }) {
  // Set up some default values.
  let pageTitle = 'Meet teh Kittehs!';
  let pageText = 'This is the Cat Profiles page.';

  // Now set what we can from the props.
  const location = useLocation();
  const data = location.state;

  if (data) {
    if (data.title) { pageTitle = data.title; }
    if (data.text) { pageText = data.text; }
  }

  return (
    <div className='main-container'>
      {data && (
        <div className='main-header'>
          {pageTitle}
        </div>
      )}
      {data && (
        <CatProfiles kittehs={kittehs} />
      )}
    </div>
  );
}