import React, { useState } from "react";

const EventSubscriptionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    formComment: "",
    areaCode: "+1",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }

    if (!formData.gender.trim()) {
      validationErrors.gender = "Gender selection is required";
    }

    if (!formData.age.trim()) {
      validationErrors.age = "Age is required";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.formComment.trim()) {
      validationErrors.formComment = "Comment is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowAlert(true);
    }
  };

  const [showAlert, setShowAlert] = useState(false);
  const CustomAlert = ({ message, onClose }) => {
    return (
      <div className="custom-alert-overlay">
        <div className="custom-alert">
          <p>{message}</p>
          <button aria-label="close button"className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div>
          <main id="application">
            <section className="bg-color" style={{ fontSize: "1em" }}>
              <div className="container">
                <h2>UW Community Event Sign-up</h2>
                <p className="lead">
                  Please leave your personal information so that we can send you
                  relevant updates on the UW Community Event of waste management
                  in the future.
                </p>

                <h3>Participant Information</h3>
                <form>
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    autoComplete="given-name"
                    placeholder=""
                    name="firstName"
                    aria-label="firstName"
                    value={formData.firstName}
                    required
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback d-block">
                      {errors.firstName}
                    </div>
                  )}

                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    placeholder=""
                    name="lastName"
                    aria-label="lastName"
                    value={formData.lastName}
                    required
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}

                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className={`form-select ${
                      errors.gender ? "is-invalid" : ""
                    }`}
                    id="gender"
                    name="gender"
                    aria-label="gender"
                    value={formData.gender}
                    required
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Genderqueer">Genderqueer/Genderfluid</option>
                    <option value="Prefer Not To Tell">
                      Prefer Not To Tell
                    </option>
                  </select>
                  {errors.gender && (
                    <div className="invalid-feedback">{errors.gender}</div>
                  )}

                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.age ? "is-invalid" : ""}`}
                    id="age"
                    name="age"
                    placeholder=""
                    aria-label="age"
                    value={formData.age}
                    required
                    onChange={handleChange}
                  />
                  {errors.age && (
                    <div className="invalid-feedback">{errors.age}</div>
                  )}

                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    autoComplete="given-email"
                    placeholder="@example.com"
                    name="email"
                    aria-label="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}

                  <label htmlFor="areaCode" className="form-label">
                    Area Code
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.areaCode ? "is-invalid" : ""
                    }`}
                    id="areaCode"
                    name="areaCode"
                    value={formData.areaCode}
                    aria-label="areaCode"
                    readOnly // Makes the input read-only
                  />
                  {errors.areaCode && (
                    <div className="invalid-feedback">{errors.areaCode}</div>
                  )}

                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    aria-label="enter phone number"
                    placeholder="xxx-xxx-xxxx"
                    value={formData.phone}
                    required
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}

                  <label htmlFor="formComment" className="form-label">
                    What part of waste management are you most interested in?
                  </label>
                  <textarea
                    className={`form-control ${
                      errors.formComment ? "is-invalid" : ""
                    }`}
                    name="formComment"
                    id="formComment"
                    aria-label="form comment"
                    value={formData.formComment}
                    required
                    onChange={handleChange}
                  ></textarea>
                  {errors.formComment && (
                    <div className="invalid-feedback">{errors.formComment}</div>
                  )}

                  <label htmlFor="addComment" className="form-label">
                    Tell us about your previous activity experience (optional)
                  </label>
                  <textarea
                    className="form-control"
                    name="addComment"
                    id="addComment"
                    aria-label="addditional comment"
                    value={formData.addComment}
                    onChange={handleChange}
                  ></textarea>

                  <div className="container">
                    <button
                      className="alert-button"
                      type="submit"
                      aria-label="submit button"
                      onClick={handleSubmit}
                    >
                      Submit Form
                    </button>
                  </div>

                  {showAlert && (
                    <CustomAlert
                      message="Form Submitted Successfully"
                      onClose={() => setShowAlert(false)}
                    />
                  )}
                </form>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EventSubscriptionForm;
