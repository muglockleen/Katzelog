import { useLocation } from "react-router-dom";

export default function Tasks() {
  // Set up some default values.
  let pageTitle = 'Tasks Page';
  let pageText = 'This is the Tasks page.';

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
        <div className='main-content'>
          {pageText}
        </div>
      )}
      {data && data.pageAction == 'list' && (
        // <CatProfiles kittehs={kittehs} />
        <></>
      )}
      {data && data.pageAction == 'show' && (
        // <CatProfile id={data.catId} />
        <></>
      )}
    </div>
  );
}