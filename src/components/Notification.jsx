import { Link } from 'react-router-dom'

export default function Notification(props) {
  let args = props;

  switch (props.type) {
    case 'adoption-ready':
      return <><Link to='/tasks' state={{args}}><div className='notifications'>1</div><span className='notify-text'>Ready for Adoption</span></Link></>;
    case 'calendar':
      return <><Link to='/tasks' state={{args}}><div className='notifications'>2</div><span className='notify-text'>Appointments</span></Link></>;
    case 'meds':
      return <><Link to='/tasks' state={{args}}><div className='notifications'>1</div><span className='notify-text'>Meds</span></Link></>;
    default:
      return null;
  }
}
