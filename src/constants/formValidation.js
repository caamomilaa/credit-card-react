const messages = {
  name: {
    required: 'This field is required',
    wrong: 'Wrong format, letters only'
  },
  number: {
    required: 'Can’t be blank',
    wrong: 'Wrong format, numbers only'
  }
};
const patterns = {
  onlyLetters: /^[A-Za-z]+$/,
  onlyNumbers: /^\d+$/
};

const nameValidations = {
  required: messages.name.required,
  pattern: {
    value: patterns.onlyLetters,
    message: messages.name.wrong
  }
};

const numberValidations = {
  required: messages.number.required,
  pattern: {
    value: patterns.onlyNumbers,
    message: messages.number.wrong
  }
};

export const FORM_VALIDATIONS = {
  NAME: nameValidations,
  NUMBER: numberValidations
};
