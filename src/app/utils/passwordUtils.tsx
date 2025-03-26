/**
 * Password generation utilities
 */

export const DEFAULT_SPECIAL_CHARS = '-';
export const MAX_SPECIAL_CHARS = 10;
export const DEFAULT_PASSWORD_LENGTH = 16;
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 32;

export type PasswordType = 'Strong' | 'Normal' | 'Custom';

export function generatePassword(
  passwordType: PasswordType,
  specialChars: string = DEFAULT_SPECIAL_CHARS,
  format: string = "6-4-6-4",
  passwordLength: number = DEFAULT_PASSWORD_LENGTH
): string {
  switch (passwordType) {
    case 'Strong':
      return generateStrongPassword(format, "-");
    case 'Normal':
      return generateNormalPassword(12);
    case 'Custom':
      return generateCustomPassword(passwordLength, specialChars);
    default:
      return generateNormalPassword(12);
  }
}

function generateStrongPassword(format: string, specialChars: string): string {
  const segments = format.split('-').map(Number);
  
  if (specialChars.length === 0) {
    specialChars = DEFAULT_SPECIAL_CHARS;
  }
  
  const specialCharsArray = specialChars.split('');
  console.log(segments)
  const separatorCount = segments.length - 1;

  let password = '';

  const separatorPattern = [];

  for (let i = 0; i < separatorCount; i++) {
    separatorPattern.push(specialCharsArray[i % specialCharsArray.length]);
  }

  for (let i = 0; i < segments.length; i++) {
    password += generateRandomString(segments[i], true);

    if (i < segments.length - 1) {
      password += separatorPattern[i];
    }
  }
  
  return password;
}

function generateNormalPassword(length: number): string {
  return generateRandomString(length, true);
}

function generateCustomPassword(length: number, specialChars: string): string {
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  
  let result = '';
  const specialCharsArray = specialChars.split('');
  
  result += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
  result += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
  result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  result += specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)];
  
  const allChars = lowerChars + upperChars + numbers + specialChars;
  
  for (let i = result.length; i < length; i++) {
    result += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  
  // Shuffle the password
  return result.split('').sort(() => 0.5 - Math.random()).join('');
}

function generateRandomString(length: number, includeUppercase: boolean): string {
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  
  let chars = lowerChars + numbers;
  if (includeUppercase) {
    chars += upperChars;
  }
  
  let result = '';
  const charsLength = chars.length;
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  
  if (includeUppercase && length >= 3) {
    if (!/\d/.test(result)) {
      const randomPos = Math.floor(Math.random() * length);
      const randomDigit = numbers.charAt(Math.floor(Math.random() * numbers.length));
      result = result.substring(0, randomPos) + randomDigit + result.substring(randomPos + 1);
    }
    
    if (!/[A-Z]/.test(result)) {
      const randomPos = Math.floor(Math.random() * length);
      const randomUpper = upperChars.charAt(Math.floor(Math.random() * upperChars.length));
      result = result.substring(0, randomPos) + randomUpper + result.substring(randomPos + 1);
    }
  }
  
  return result;
}

export function isSpecialChar(char: string): boolean {
  return /[^a-zA-Z0-9]/.test(char);
}
