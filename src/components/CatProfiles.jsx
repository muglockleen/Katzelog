import CatProfile from "./CatProfile";

export default function CatProfiles({ pageAction, kittehs }) {
  return (
    <table>
      <tbody>
      {kittehs.map((value, index) => (
        <tr key={index}>
          <td>
            <CatProfile pageAction='list' kitteh={value}></CatProfile>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}