export default function CardResume({ currentResume }) {
  console.log(currentResume);
  return (
    <div className="card">
      <p>{`full name: ${currentResume.fullName}`}</p>
      <p>{`Email: ${currentResume.email}`}</p>
      <p>{`Phone: ${currentResume.phone}`}</p>
      <h3>Education</h3>
      {currentResume.education?.map((educItem, index) => {
        return (
          <ul key={index}>
            <li>{`year: ${educItem.educationYear}`}</li>
            <li>{`Type Learning: ${educItem.educationType}`}</li>
            <li>{`School name: ${educItem.educationSchoolName}`}</li>
          </ul>
        );
      })}
      <h3>Work Experience</h3>
      {currentResume.workExperience?.map((workItem, index) => {
        return (
          <ul key={index}>
            <li>{`Company name: ${workItem.workExperienceComanyName}`}</li>
            <li>{`Role: ${workItem.workExperienceRole}`}</li>
            <li>{`Year: ${workItem.workExperienceTime}`}</li>
          </ul>
        );
      })}
    </div>
  );
}
