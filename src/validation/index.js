export const requiredInput = (input) =>
  input ? undefined : `Input is required`;

export const correctInput = input =>
  input !== 'ionut' ? 'Incorrect Username' : undefined;