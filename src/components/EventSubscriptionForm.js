import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const EventSubscriptionForm = () => {
  const { t } = useTranslation();
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
      validationErrors.firstName = t('submit.firstname');
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = t('submit.lastname');
    }

    if (!formData.gender.trim()) {
      validationErrors.gender = t('submit.gender');
    }

    if (!formData.age.trim()) {
      validationErrors.age = t('submit.age');
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = t('submit.phone');
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = t('submit.phone-sub');
    }

    if (!formData.formComment.trim()) {
      validationErrors.formComment = t('submit.comment');
    }

    if (!formData.email.trim()) {
      validationErrors.email = t('submit.email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = t('submit.email-sub');
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
          <button aria-label={t('submit.custom.aria-label')} className="close-btn" onClick={onClose}>
            {t('submit.custom.close')}
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
                <h2>{t('submit.container.title')}</h2>
                <p className="lead">
                  {t('submit.container.lead')}
                </p>

                <h3>{t('submit.container.part-info')}</h3>
                <form>
                  <label htmlFor="firstName" className="form-label">
                    {t('submit.container.firstname')}
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
                    aria-label={t('submit.container.firstname')}
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
                  {t('submit.container.lastname')}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    placeholder=""
                    name="lastName"
                    aria-label={t('submit.container.lastname')}
                    value={formData.lastName}
                    required
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}

                  <label htmlFor="gender" className="form-label">
                    {t('submit.container.gender.title')}
                  </label>
                  <select
                    className={`form-select ${
                      errors.gender ? "is-invalid" : ""
                    }`}
                    id="gender"
                    name="gender"
                    aria-label={t('submit.container.gender.title')}
                    value={formData.gender}
                    required
                    onChange={handleChange}
                  >
                    <option value="">{t('submit.container.gender.option')}</option>
                    <option value="Male">{t('submit.container.gender.item1')}</option>
                    <option value="Female">{t('submit.container.gender.item2')}</option>
                    <option value="Non-binary">{t('submit.container.gender.item3')}</option>
                    <option value="Genderqueer">{t('submit.container.gender.item4')}</option>
                    <option value="Prefer Not To Tell">
                      {t('submit.container.gender.item5')}
                    </option>
                  </select>
                  {errors.gender && (
                    <div className="invalid-feedback">{errors.gender}</div>
                  )}

                  <label htmlFor="age" className="form-label">
                    {t('submit.container.age')}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.age ? "is-invalid" : ""}`}
                    id="age"
                    name="age"
                    placeholder=""
                    aria-label={t('submit.container.age')}
                    value={formData.age}
                    required
                    onChange={handleChange}
                  />
                  {errors.age && (
                    <div className="invalid-feedback">{errors.age}</div>
                  )}

                  <label htmlFor="email" className="form-label">
                    {t('submit.container.email')}
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
                    aria-label={t('submit.container.email')}
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}

                  <label htmlFor="areaCode" className="form-label">
                  {t('submit.container.area-code')}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.areaCode ? "is-invalid" : ""
                    }`}
                    id="areaCode"
                    name="areaCode"
                    value={formData.areaCode}
                    aria-label={t('submit.container.area-code')}
                    readOnly // Makes the input read-only
                  />
                  {errors.areaCode && (
                    <div className="invalid-feedback">{errors.areaCode}</div>
                  )}

                  <label htmlFor="phone" className="form-label">
                    {t('submit.container.phone')}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    aria-label={t('submit.container.phone')}
                    placeholder="xxx-xxx-xxxx"
                    value={formData.phone}
                    required
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}

                  <label htmlFor="formComment" className="form-label">
                    {t('submit.container.form-comment.label')}
                  </label>
                  <textarea
                    className={`form-control ${
                      errors.formComment ? "is-invalid" : ""
                    }`}
                    name="formComment"
                    id="formComment"
                    aria-label={t('submit.container.form-comment.aria-label')}
                    value={formData.formComment}
                    required
                    onChange={handleChange}
                  ></textarea>
                  {errors.formComment && (
                    <div className="invalid-feedback">{errors.formComment}</div>
                  )}

                  <label htmlFor="addComment" className="form-label">
                    {t('submit.container.add-comment.label')}
                  </label>
                  <textarea
                    className="form-control"
                    name="addComment"
                    id="addComment"
                    aria-label={t('submit.container.add-comment.aria-label')}
                    value={formData.addComment}
                    onChange={handleChange}
                  ></textarea>

                  <div className="container">
                    <button
                      className="alert-button"
                      type="submit"
                      aria-label={t('submit.container.submit-btn.aria-label')}
                      onClick={handleSubmit}
                    >
                      {t('submit.container.submit-btn.content')}
                    </button>
                  </div>

                  {showAlert && (
                    <CustomAlert
                      message={t('submit.container.submit-btn.msg')}
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
