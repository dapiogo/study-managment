import React, { useState, useContext, useReducer, useEffect, useCallback } from 'react';
import FormField from 'components/molecules/FormField/FormField';
// import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';
import { useWindowHeight } from 'hooks/useWindowSize';
import { useForm } from 'hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { formValues, handleClearForm, handleInputChange, handleThrowError, handleToggleConsent } = useForm(initialFormState);
  const context = useContext(UsersContext);
  const dimension = useWindowHeight();

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      context.handleAddUser(formValues);
      handleClearForm();
    } else {
      handleThrowError('test');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student </Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField label="Consent" id="consent" name="consent" type="checkbox" value={formValues.consent} onChange={() => handleToggleConsent()} />
      <Button type="submit">add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
