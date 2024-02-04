// SharedSignup.jsx
import React, { useState } from "react";
import './css/SharedSignup.css'

const SharedSignup = ({ userType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    gender: "Prefer not to say",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center shared-signup">
      <h1 className="mb-3 mt-3">CareBridge</h1>
      <h3 className="mb-3">Create an account to continue as {userType}</h3>
      <form className="row g-3 form" onSubmit={handleSubmit}>
        {/* Common signup fields */}
        <div className="mb-3 col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            minLength={5}
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            required
            minLength={5}
            value={formData.cpassword}
            onChange={handleChange}
          />
        </div>
         {/* Doctor-specific fields */}
         {userType === "Doctor" && (
          <>
            <div className="mb-3 col-md-12">
              <label htmlFor="specialization" className="form-label">
                Specialization
              </label>
              <input
                type="text"
                className="form-control"
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="yearsOfExperience" className="form-label">
                Years of Experience
              </label>
              <input
                type="number"
                className="form-control"
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                min={1}
              />
            </div>

            <div className="mb-3 col-md-12">
          <label htmlFor="qualifications" className="form-label">
            Qualifications
          </label>
          <input
            type="text"
            className="form-control"
            id="qualifications"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
          />
        </div>
            {/* Add other Doctor-specific fields here */}
          </>
        )}

         {/* Patient-specific fields */}
         {userType === "Patient" && (
          <>
            <div className="mb-3 col-md-6">
              <label htmlFor="DOB" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 col-md-4">
            <label htmlFor="street" className="form-label">
              Street
            </label>
            <input
              type="text"
              className="form-control"
              id="street"
              name="street"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-md-4">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-md-4">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-md-4">
            <label htmlFor="pinCode" className="form-label">
              Pin Code
            </label>
            <input
              type="text"
              className="form-control"
              id="pinCode"
              name="pinCode"
              onChange={handleChange}
            />
          </div>
            </>
        )}
        
        <div className="col-md-2">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        {/* End of common signup fields */}
        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className="btn btn-dark btn-dark">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SharedSignup;
