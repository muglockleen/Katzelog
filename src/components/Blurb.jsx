export default function Blurb({ kitteh }) {
    const summaryText = [];
    if (kitteh.ageYears) {
      summaryText.push(`${kitteh.ageYears} yrs`);
    }
    if (kitteh.gender) {
      summaryText.push(`${kitteh.gender}`);
    }
    if (kitteh.color) {
      summaryText.push(`${kitteh.color}`);
    }
    if (kitteh.breed) {
      summaryText.push(`${kitteh.breed}`);
    }
    if (kitteh.weightPounds) {
      summaryText.push(`${kitteh.weightPounds} lbs`);
    }
    if (kitteh.microchipNumber) {
      summaryText.push(`Chip: ${kitteh.microchipNumber}`);
    }

    return (
      <p>{summaryText.join(' | ')}</p>
    );
}