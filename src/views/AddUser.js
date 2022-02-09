import React, { useState, useContext, useReducer, useEffect, useCallback } from 'react';
import FormField from 'components/molecules/FormField/FormField';
// import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const actionValues = {
  inputChange: 'INPUT_CHANGE',
  reset: 'RESET',
  consent: 'CONSENT',
  throwError: 'THROW_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionValues.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionValues.reset:
      return initialFormState;
    case actionValues.consent:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionValues.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

const ChildComponent = ({ somefunc }) => {
  useEffect(() => {
    console.log(somefunc());
  }, [somefunc]);

  return 'grazyna';
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  //   const [formValues, setFormValues] = useState(initialFormState);
  const context = useContext(UsersContext);

  const handleInputChange = (e) => {
    dispatch({
      type: actionValues.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
    // setFormValues({
    //   ...formValues,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      context.handleAddUser(formValues);
      dispatch({ type: actionValues.reset });
    } else {
      dispatch({ type: actionValues.throwError, errorValue: 'You need to check consent' });
    }
  };

  //   const someFunction = () => 'grazyna'; //wykonuje sie x razy
  const someFunction = useCallback(() => 'grazyna', []); //nie wykonuje sie juz

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <ChildComponent somefunc={someFunction} />
      <Title>Add new student </Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={formValues.consent}
        onChange={() => dispatch({ type: actionValues.consent })}
      />
      <Button type="submit">add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
