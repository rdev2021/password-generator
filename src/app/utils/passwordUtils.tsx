/**
 * Password generation utilities
 */

export const DEFAULT_SPECIAL_CHARS = '-';
export const MAX_SPECIAL_CHARS = 2;

export function generatePassword(
  isStrong: boolean,
  specialChars: string = DEFAULT_SPECIAL_CHARS,
  format: string = "6-6-5",
  normalLength: number = 16
): string {
  if (isStrong) {
    const limitedSpecialChars = specialChars.substring(0, MAX_SPECIAL_CHARS);
    return generateStrongPassword(format, limitedSpecialChars);
  } else {
    return generateNormalPassword(normalLength);
  }
}

function generateStrongPassword(format: string, specialChars: string): string {
  const segments = format.split('-').map(Number);
  
  if (specialChars.length === 0) {
    specialChars = DEFAULT_SPECIAL_CHARS;
  }
  
  const specialCharsArray = specialChars.split('');
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
  return generateRandomString(length, false);
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
