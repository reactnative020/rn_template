export const validateMaxLength = (value: string, length: number) => {
    return !(value.length > length);
  };
  
  export const validateMinLength = (value: string, length: number) => {
    return !(value.length < length);
  };
  
  export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const matchPassword = (password: string, confirmPassword: any) => {
    return password === confirmPassword;
  };
  
  export const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  export const validateMobileNumber = (number: string) => {
    const numberRegex = /^\d{7,15}$/;
    return numberRegex.test(number);
  };
  
  export const checkInputIsNumbers = (input: string) => {
    const numberRegex = /^\d+$/;
    return numberRegex.test(input);
  };
  
  export const checkFloatNumber = (input: string) => {
    return !isNaN(parseFloat(input)) && Number.isFinite(parseFloat(input));
  };
  
  export const isPositiveNumber = (input: number) => {
    return typeof input === 'number' && input > 0;
  };
  
  export const isNegativeNumber = (input: number) => {
    return typeof input === 'number' && input < 0;
  };
  
  export const isInRange = (input: number, min: number, max: number) => {
    return typeof input === 'number' && input >= min && input <= max;
  };
  
  export const isValidDate = (input: Date) => {
    const date = new Date(input);
    return !isNaN(date.getTime());
  };
  
  export const isFileFormatSupported = (
    input: string,
    allowedFormats: string[],
  ) => {
    const fileExtension: string | undefined = input.split('.').pop();
    if (fileExtension) {
      return allowedFormats.includes(fileExtension);
    }
    return false;
  };
  
  export const isValidURL = (url: string) => {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // Protocol (optional)
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    );
    return pattern.test(url);
  };
  
  export const isAlphaNumeric = (input: string) => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(input);
  };
  
  export const isValidCreditCard = (input: string) => {
    const creditCardRegex = /^[0-9]{13,16}$/;
    return creditCardRegex.test(input);
  };
  
  export const isValidExpirationDate = (expirationDate: Date) => {
    const currentDate = new Date();
    const inputDate = new Date(expirationDate);
    return inputDate > currentDate;
  };
  
  export const isValidUsername = (input: string) => {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    return usernameRegex.test(input);
  };
  
  export const isNonEmptyArray = (input: any[]) => {
    return Array.isArray(input) && input.length > 0;
  };
  
  export const isValidCreditCardCVV = (input: any) => {
    const cvvRegex = /^[0-9]{3,4}$/;
    return cvvRegex.test(input);
  };
  