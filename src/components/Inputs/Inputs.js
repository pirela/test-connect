import { useCallback } from "react";

export const Input = ({ title, placeholder, type = "text" }) => {
  return (
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
        {title}
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={title}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export const Select = ({ title, options = [], id, onChange, field = "" }) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div>
      <label
        for={id}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        id={id}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option[field]}>{option[field]}</option>
        ))}
      </select>
    </div>
  );
};
