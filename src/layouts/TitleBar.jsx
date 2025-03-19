
import { Link } from 'react-router-dom';
import Notification from "../components/Notification";

export default function TitleBar({ kittehs }) {
  const theNotifications = [
    { type: 'adoption-ready', title: 'Adoption Ready Kittehs', text: 'Here are all of the kittehs currenyl ready for adoption!' },
    { type: 'calendar', title: 'Upcoming Appointments', text: 'It\'s vet time for the following kittehs!' },
    { type: 'meds', title: 'Medications', text: 'Who is next for their medication?' },
  ];

  return (
    <div className='main'>
      <Link to='/' state={{ kittehs: kittehs }}>
        <h1>Katzelog</h1>
      </Link>
      <br />
      <table className='title-icons' align='right'>
        <tbody>
          <tr>
            {theNotifications.map(notification => (
              <td className='title-icons' key={notification.type}>
                <Notification style={{ float: 'left' }} {...notification}></Notification>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <br className='clear-both' />
    </div>
  );
}
