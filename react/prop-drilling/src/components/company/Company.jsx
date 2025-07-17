import Department from "../department/Department";

function Company(props) {
  const {
    companyName = "Unknown Company",
    details = "No details available",
    departments,
    onCompanySelect,
  } = props;

  const buttonHandler = (companyName) => {
    console.log("Button Clicked: " + companyName);
  };

  return (
    <div>
      <h1>Company Name: {companyName}</h1>
      <p>{details}</p>
      <button
        className="primary-btn-md"
        onClick={() => {
          onCompanySelect(companyName);
        }}
      >
        Select {companyName}
      </button>
      <Department
        departments={departments}
        onDepartmentSelect={(department) => {
          onCompanySelect(`${companyName} - ${department}`);
        }}
      >
        <p>Departments: </p>
      </Department>
    </div>
  );
}

export default Company;
