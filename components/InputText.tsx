type Props = {
    label: string
    type: "number" | "text" 
    value: string | number
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const InputText = ({ label, type, value, setValue }: Props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        value={value}
        onChange={setValue}
        type={type}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default InputText;
