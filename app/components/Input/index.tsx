export default function Input(props: any) {
  return (
    <label className="block" htmlFor={props.name}>
      {props.label}
      <input
        {...props}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      {props.helpText && (
        <p className="block text-slate-700 text-sm mt-5" id="email-description">
          {props.helpText}
        </p>
      )}
    </label>
  );
}
