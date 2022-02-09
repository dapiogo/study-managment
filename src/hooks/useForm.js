import React, { useReducer } from 'react';

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
      return {
        ...action.initalValues,
      };
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

export const useForm = (initalValues) => {
  const [formValues, dispatch] = useReducer(reducer, initalValues);

  const handleInputChange = (e) => {
    dispatch({
      type: actionValues.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: actionValues.reset, initalValues });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionValues.throwError, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionValues.consent });
  };

  return {
    formValues,
    handleClearForm,
    handleInputChange,
    handleThrowError,
    handleToggleConsent,
  };
};
