export const VALIDATION_MESSAGES = {
    required: 'This field is required. Please enter a value.',
    email: 'Invalid email format. Please check your email and try again',
    minlength: (value) => {
      return `This field hould be atleast minimun ${value} characters long.`
    },
    maxlength: (value) => {
      return `This field hould be atleast maximum ${value} characters long.`
    },
    pattern: 'Sorry, the input provided is not valid. Please revise your input to match the required format.'    
  };