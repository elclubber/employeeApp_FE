import { useState } from 'react';

function EmployeeForm() {
  const [step, setStep] = useState(1);
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    alert('Employee added successfully!');
    console.log(employee);
  };

  return (
    <div className="p-4">
      {step === 1 && (
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border mb-2"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2">
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border mb-2"
            value={employee.email}
            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          />
          <button onClick={prevStep} className="mr-2 px-4 py-2 border">
            Back
          </button>
          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2">
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div>
          <input
            type="text"
            placeholder="Position"
            className="w-full p-2 border mb-2"
            value={employee.position}
            onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
          />
          <button onClick={prevStep} className="mr-2 px-4 py-2 border">
            Back
          </button>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default EmployeeForm;
