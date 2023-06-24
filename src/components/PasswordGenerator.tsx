import { useState } from "react";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [includeLowerCase, setIncludeLowerCase] = useState<boolean>(true);
  const [includeUpperCase, setIncludeUpperCase] = useState<boolean>(true);
  const [includeDigits, setIncludeDigits] = useState<boolean>(true);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState<boolean>(true);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let characters = "";
    let password = "";

    if (includeLowerCase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUpperCase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeDigits) {
      characters += "0123456789";
    }
    if (includeSpecialCharacters) {
      characters += "!@#$%^&*()_-+={}[]\\|:;\"'<>,.?/~`";
    }

    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setGeneratedPassword(password);
  };

  const handlePasswordLengthChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPasswordLength(parseInt(event.target.value));
  };

  const handleIncludeLowerCaseChange = () => {
    setIncludeLowerCase(!includeLowerCase);
  };

  const handleIncludeUpperCaseChange = () => {
    setIncludeUpperCase(!includeUpperCase);
  };

  const handleIncludeDigitsChange = () => {
    setIncludeDigits(!includeDigits);
  };

  const handleIncludeSpecialCharactersChange = () => {
    setIncludeSpecialCharacters(!includeSpecialCharacters);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">Password Generator</h1>
        <p className="mt-3 text-lg">
          Simple. Secure. Free. Generate a strong password with just a click.
        </p>
        <div className="mt-8">
          <label className="mr-4">
            Password Length:
            <select
              className="ml-2"
              value={passwordLength}
              onChange={handlePasswordLengthChange}
            >
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
              <option value={20}>20</option>
              <option value={24}>24</option>
              <option value={28}>28</option>
              <option value={32}>32</option>
            </select>
          </label>
          <label className="mr-4">
            <input
              type="checkbox"
              checked={includeLowerCase}
              onChange={handleIncludeLowerCaseChange}
            />
            <span className="ml-2">String letters</span>
          </label>
          <label className="mr-4">
            <input
              type="checkbox"
              checked={includeUpperCase}
              onChange={handleIncludeUpperCaseChange}
            />
            <span className="ml-2">Capital letters</span>
          </label>
          <label className="mr-4">
            <input
              type="checkbox"
              checked={includeDigits}
              onChange={handleIncludeDigitsChange}
            />
            <span className="ml-2">Digits</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSpecialCharacters}
              onChange={handleIncludeSpecialCharactersChange}
            />
            <span className="ml-2">Special characters</span>
          </label>
        </div>
        <button
          className="px-4 py-2 mt-8 text-lg font-bold text-white  bg-black rounded hover:bg-green-700"
          onClick={generatePassword}
        >
          Generate Password
        </button>
        {generatedPassword && (
          <div className="mt-8">
            <p className="text-lg font-bold">Generated Password:</p>
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={generatedPassword}
                readOnly
                className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
              />
              <button
                className="ml-4 px-4 py-2 text-lg font-bold text-white bg-black rounded hover:bg-green-700"
                onClick={handleCopyPassword}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PasswordGenerator;
