import Company from "./components/company/Company";
import companies from "./data/Dataset.jsx";
import { useState } from "react";

function App() {
  const [selectedCompany, setSelectedCompany] = useState("Select Company");

  const handleCompanySelection = (selectedCompany) => {
    setSelectedCompany(selectedCompany);
  };

  return (
    <>
      <h1>{selectedCompany}</h1>
      {companies.map((company, index) => {
        return (
          <Company
            key={index}
            companyName={company.companyName}
            details={company.details}
            departments={company.departments}
            onCompanySelect={handleCompanySelection}
          />
        );
      })}
    </>
  );
}

export default App;
