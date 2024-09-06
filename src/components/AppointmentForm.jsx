import React from "react";
import toast from "react-hot-toast";
import c2 from "../assets/abg2.png";

const AppointmentForm = ({ onClose }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    dueDate: "",
    time: "",
    email: "",
    mobile: "",
    petName: "",
    description: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.dueDate) newErrors.dueDate = "Appointment Date is required";
    if (!formData.time) newErrors.time = "Time Slot is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile Number is required";
    if (!formData.petName) newErrors.petName = "Pet's Name is required";
    if (!formData.description) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((error) => toast.error(error));
      return;
    }
    console.log(formData);
    toast.success("Form submitted successfully!");
    // Optional: Clear the form data or handle post-submit logic
  };

  return (
    <div className="relative flex items-center justify-center max-w-[90%] mx-auto my-12">
      <img src={c2} alt="Animal" className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0 opacity-30" />
      <div className="relative flex flex-col items-center justify-center m-3 p-8 bg-gray-950 min-w-[95%] lg:min-w-[50%] rounded-lg shadow-lg z-10">
        <h1 className="text-2xl font-bold text-white mb-6">Appointment Form</h1>
        <form className="w-full max-w-xl  py-2 rounded-lg" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2">
            {['name', 'dueDate', 'time', 'email', 'mobile', 'petName', 'description'].map((field) => (
              <div key={field} className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                {field !== 'description' ? (
                  <input
                    className={`shadow border rounded w-full py-2 px-3 bg-gray-700 text-gray-200 ${errors[field] ? 'border-red-500' : ''}`}
                    id={field}
                    type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                ) : (
                  <textarea
                    className={`shadow border rounded w-full py-2 px-3 bg-gray-700 text-gray-200 ${errors[field] ? 'border-red-500' : ''}`}
                    id={field}
                    placeholder="Describe the issue"
                    value={formData[field]}
                    onChange={handleChange}
                    rows={3}
                  />
                )}
                {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-3xl w-[200px] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
