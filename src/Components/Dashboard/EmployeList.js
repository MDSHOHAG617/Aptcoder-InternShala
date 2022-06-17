import React, { useEffect, useState } from "react";

const EmployeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("employee.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Age</th>
              <th>Salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div>
                      <div class="">{employee.name}</div>
                    </div>
                  </div>
                </td>
                <td>{employee.designation}</td>
                <td>{employee.age}</td>
                <th>
                  <button className="font-mono  btn btn-ghost btn-xs">
                    {employee.salary}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeList;
