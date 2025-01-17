interface CustomInputProps {
  value: string;
  onClick?: () => void;
}

const CustomInput = ({ value, onClick }: CustomInputProps) => {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default CustomInput;
