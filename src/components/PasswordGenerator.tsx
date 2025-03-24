"use client";

import { useState, useRef } from "react";
import {
  generatePassword,
  DEFAULT_SPECIAL_CHARS,
  MAX_SPECIAL_CHARS,
  isSpecialChar,
} from "../app/utils/passwordUtils";

export default function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [isStrong, setIsStrong] = useState<boolean>(true);
  const [specialChars, setSpecialChars] = useState<string>(
    DEFAULT_SPECIAL_CHARS
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string>("");
  const passwordRef = useRef<HTMLParagraphElement>(null);

  const handleGeneratePassword = () => {
    setPassword(generatePassword(isStrong, specialChars));
    setCopied(false);
  };

  const togglePasswordStrength = () => {
    setIsStrong(!isStrong);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleSpecialCharsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const hasNonSpecialChar = value
      .split("")
      .some((char) => !isSpecialChar(char));

    if (hasNonSpecialChar) {
      setInputError("Only special characters are allowed");
      return;
    }

    setInputError("");

    if (value.length <= MAX_SPECIAL_CHARS) {
      setSpecialChars(value);
    } else {
      setSpecialChars(value.substring(0, MAX_SPECIAL_CHARS));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Password Generator
      </h2>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-gray-800">Password Type:</span>
          <button
            onClick={togglePasswordStrength}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            {isStrong ? "Strong" : "Normal"}
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-4">
          {isStrong
            ? "Strong passwords include special characters and follow Apple-like format."
            : "Normal passwords only include letters and numbers."}
        </p>

        {isStrong && (
          <div className="mb-4">
            <label
              htmlFor="specialChars"
              className="block mb-1 font-medium text-gray-800"
            >
              Custom Special Characters (max {MAX_SPECIAL_CHARS}):
            </label>
            <input
              type="text"
              id="specialChars"
              value={specialChars}
              onChange={handleSpecialCharsChange}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 ${
                inputError ? "border-red-500" : ""
              }`}
              placeholder="E.g. -_+="
              maxLength={MAX_SPECIAL_CHARS}
            />
            {inputError ? (
              <p className="text-xs text-red-600 mt-1">{inputError}</p>
            ) : (
              <p className="text-xs text-gray-700 mt-1">
                Enter up to {MAX_SPECIAL_CHARS} special characters to use as
                separators (e.g. &quot;-_+&quot;)
              </p>
            )}
            <p className="text-xs text-gray-700 mt-1">
              All your special characters will be used in the generated
              password.
            </p>
          </div>
        )}
      </div>

      <div className="mb-6">
        <button
          onClick={handleGeneratePassword}
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Generate Password
        </button>
      </div>

      {password && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-gray-800">Your Password:</h3>
            <button
              onClick={copyToClipboard}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p
            ref={passwordRef}
            className="text-xl font-mono break-all text-center p-2 bg-white rounded border border-gray-300 text-gray-800"
          >
            {password}
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Password type: {isStrong ? "Strong" : "Normal"}
          </p>
        </div>
      )}
    </div>
  );
}
