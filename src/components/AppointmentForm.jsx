import React, { useState } from "react";
import toast from "react-hot-toast";
import c2 from "../assets/abg2.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";
import { useTranslation } from "react-i18next"; 
const AppointmentForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    dueDate: null,
    time: "",
    email: "",
    mobile: "",
    petName: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const today = new Date();
  const maxDate = addMonths(new Date(), 2);

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, dueDate: date }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = t("appointmentForm.name") + " is required";
    if (!formData.dueDate) newErrors.dueDate = t("appointmentForm.date") + " is required";
    if (!formData.time) newErrors.time = t("appointmentForm.timeSlot") + " is required";
    if (!formData.email) newErrors.email = t("appointmentForm.email") + " is required";
    if (!formData.mobile) newErrors.mobile = t("appointmentForm.mobile") + " Number is required";
    if (!formData.petName) newErrors.petName = t("appointmentForm.petName") + " is required";
    if (!formData.description) newErrors.description = t("appointmentForm.description") + " is required";
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
    setFormData({
      name: "",
      dueDate: null,
      time: "",
      email: "",
      mobile: "",
      petName: "",
      description: "",
    });
    toast.success("Appointment booked successfully!");
    setErrors({});
  };

  return (
    <>
      <h6 className="text-2xl md:text-3xl text-green-400 text-center font-semibold mb-8">
        {t("appointmentForm.title")}
      </h6>

      <div className="relative flex items-center justify-center max-w-[100%] md:max-w-[90%] mx-auto my-12">
        <img
          src={c2}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-30"
        />

        <div className="relative flex flex-col items-center justify-center m-3 p-8 bg-gray-950 opacity-90 min-w-[95%] lg:min-w-[50%] rounded-lg shadow-lg z-10">
          <form
            className="w-full max-w-xl py-2 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-2">
              {["name", "email", "mobile", "petName"].map((field) => (
                <div key={field} className="mb-4">
                  <label
                    className="block text-gray-300 text-sm font-bold mb-2"
                    htmlFor={field}
                  >
                    {t(`appointmentForm.${field}`)}
                  </label>
                  <input
                    className={`shadow border border-gray-600 rounded w-full py-2 px-3 bg-gray-800 text-gray-200 ${
                      errors[field] ? "border-red-500" : ""
                    }`}
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={t(`appointmentForm.${field}`)}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

              {/* Date Picker */}
              <div className="mb-4">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="dueDate"
                >
                  {t("appointmentForm.date")}
                </label>
                <DatePicker
                  className={`shadow border border-gray-600 rounded w-full py-2 px-3 bg-gray-800 text-gray-200 ${
                    errors.dueDate ? "border-red-500" : ""
                  }`}
                  selected={formData.dueDate}
                  onChange={handleDateChange}
                  placeholderText={t("appointmentForm.date")}
                  dateFormat="MMMM d, yyyy"
                  minDate={today}
                  maxDate={maxDate}
                  popperClassName="dark-datepicker" // Add a class for styling
                />
                {errors.dueDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>
                )}
              </div>

              {/* Time Slot Selection */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  {t("appointmentForm.timeSlot")}
                </label>
                <div className="flex mt-2 w-full flex-wrap justify-center items-center">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() =>
                        setFormData((prevData) => ({ ...prevData, time: slot }))
                      }
                      className={`border p-2 rounded ${
                        formData.time === slot
                          ? "bg-green-300 text-white font-semibold"
                          : "bg-[#0b102b] text-gray-300"
                      } transition-all duration-300 ease-in-out hover:bg-[#25c15a] hover:text-gray-100 hover:font-bold w-[100px] border-2 border-gray-950 hover:border-green-800 m-2`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                )}
              </div>

              {/* Description */}
              <div className="mb-4">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  {t("appointmentForm.description")}
                </label>
                <textarea
                  className={`shadow border border-gray-600 rounded w-full py-2 px-3 bg-gray-800 text-gray-200 ${
                    errors.description ? "border-red-500" : ""
                  }`}
                  id="description"
                  placeholder={t("appointmentForm.description")}
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-3xl w-[200px] focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {t("appointmentForm.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
