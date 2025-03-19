import { useNavigate, Link } from 'react-router-dom';
import Blurb from './Blurb'

export default function CatProfile({ pageAction, kitteh }) {
  const navigate = useNavigate();
  const handleButtonLink = () => {
    navigate('/profile', { state: { title: `Meet ${kitteh.name}!`, kitteh: kitteh } });
  };

  const imageSource = `../../data/images/cats/${kitteh.images[kitteh.primaryImageId].source}`;
  const imgId = kitteh.primaryImageId;

  // TODO(MPM): Map the image to id better. Do not assume it is the array index.

  if (pageAction == 'list') {
    return (
      <div className='cat-list-item'>
        {/* TODO(MPM): Try grid layout? */}
        <h4>{kitteh.name}</h4>
        <div className='cat-list-content-container'>
          {/* TODO(MPM): Validate the array size and that we even have an image */}
          <div>
            <Link to='/profile' state={{ title: `Meet ${kitteh.name}!`, kitteh: kitteh }}>
              <img className='cat-thumb' title={kitteh.images[imgId].title} src={imageSource} />
            </Link>
            <br />
            <button className='list-button' onClick={() => handleButtonLink()}>Profile</button>
          </div>
          <div className='cat-list-bio-container'>
            <p>{kitteh.summary}</p>
            <br />
            <span className='right-text'>
              <Blurb kitteh={kitteh}></Blurb>
            </span>
          </div>
          <br className='clear-both' />
        </div>
      </div>
    );
  } else { // Display the full profile.
    const organizations = [];
    if (kitteh.organizations) {
      for (const org of kitteh.organizations) {
        organizations.push(`${org.name}`);
      }
    }

    return (
      <div className='cat-profile-container'>
        <table>
        <thead>
          <tr>
            <th colSpan='3' className='profile-header'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan='2'>
              <img className='cat-profile-pic' title={kitteh.images[imgId].title} src={imageSource} />
            </td>
            <td className='bio-cell' colSpan='2'>
              <p>{kitteh.bio}</p>
            </td>
          </tr>
          <tr>
            <td>
              {/* TODO(MPM): Ternaries are not good enough here. We need to check for null, as well. */}
              <p><span style={{ fontWeight: 'bold' }}>Chip #:</span> {kitteh.microchipNumber}</p>
              <p><span style={{ fontWeight: 'bold' }}>Gender:</span> {kitteh.gender}</p>
              <p><span style={{ fontWeight: 'bold' }}>Color:</span> {kitteh.color}</p>
              <p><span style={{ fontWeight: 'bold' }}>Breed:</span> {kitteh.breed}</p>
              <p><span style={{ fontWeight: 'bold' }}>Age (yrs):</span> {kitteh.ageYears}</p>
              <p><span style={{ fontWeight: 'bold' }}>Weight (lbs):</span> {kitteh.weightPounds}</p>
            </td>
            <td>
              <p><span style={{ fontWeight: 'bold' }}>Is FiV+:</span> {kitteh.medical.isFivPositive ? 'Yes' : 'No'}</p>
              <p><span style={{ fontWeight: 'bold' }}>Ear Tip:</span> {kitteh.medical.isEarTipped ? 'Yes' : 'No'}</p>
              <p><span style={{ fontWeight: 'bold' }}>Bite History:</span> {kitteh.hasBiteHistory ? 'Yes' : 'No'}</p>
              <p><span style={{ fontWeight: 'bold' }}>Cat Friendly:</span> {kitteh.isCatFriendly ? 'Yes' : 'No'}</p>
              <p><span style={{ fontWeight: 'bold' }}>Dog Friendly:</span> {kitteh.isDogFriendly ? 'Yes' : 'No'}</p>
            </td>
          </tr>
        </tbody>
        <tfoot />
        </table>
      </div>
    );
  }
}