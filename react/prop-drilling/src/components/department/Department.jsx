function Department(props) {
  const { departments, onDepartmentSelect, children } = props;

  return (
    <div>
      {children}
      <ul>
        {departments.map((department, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  onDepartmentSelect(department);
                }}
              >
                {department}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Department;
