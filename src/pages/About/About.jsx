import { useLocation } from "react-router-dom";

export default function About() {
  let pageTitle = 'Katzelog';
  let pageText = '';

  const location = useLocation();
  const data = location.state;
  if (data && data.about) {
    if (data.about.title) { pageTitle = data.about.title; }
    if (data.about.text) { pageText = data.about.text; }
  }

  return (
    <div className='main-container'>
      {data && (
        <div className='main-header'>
          {pageTitle}
        </div>
      )}
      {data && (
        <div className='main-content'>
          {pageText}
        </div>
      )}
    </div>
  );
}
