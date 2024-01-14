import { Label, TextInput } from "flowbite-react";

export default function TextInputForm({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue,
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
          className="p-2 border"
        />

        {errors[`${name}`] && (
          <span className="text-sm text-red-500 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
