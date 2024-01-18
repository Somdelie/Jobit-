import { Label, TextInput } from "flowbite-react";

export default function TextInputForm({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  defaultValue,
  className,
}) {
  return (
    <div className="mt-2">
      <div className=" block">
        <Label htmlFor={name} value={label} />
      </div>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          placeholder={`Type ${label.toLowerCase()}`}
          className={`${className} p-2 border border-gray-300 dark:bg-input bg-transparent `}
        />

        {errors[`${name}`] && (
          <span className="text-sm text-red-500 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
