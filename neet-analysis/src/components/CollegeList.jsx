import { apiResponse } from "../data";

const CollegeList = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold mb-3">College Predictions</h2>

      <h3 className="font-semibold">Government Colleges:</h3>
      <ul className="list-disc pl-5">
        {apiResponse.college_predictions.government_colleges.map((college, index) => (
          <li key={index}>{college.name} - {college.location} (Cutoff: {college.previous_year_cutoff})</li>
        ))}
      </ul>

      <h3 className="font-semibold mt-3">Private Colleges:</h3>
      <ul className="list-disc pl-5">
        {apiResponse.college_predictions.private_colleges.map((college, index) => (
          <li key={index}>{college.name} - {college.location} (Cutoff: {college.previous_year_cutoff})</li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeList;
