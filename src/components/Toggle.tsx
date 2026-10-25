import type { InputHTMLAttributes } from "react";

interface ToggleProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
}

function Toggle({ label, ...rest }: ToggleProps) {
  return (
    <label className="toggle">
      <input type="checkbox" role="switch" {...rest} />
      <span className="toggle-track">
        <span className="toggle-thumb" />
      </span>
      <span className="toggle-label">{label}</span>
    </label>
  );
}

export default Toggle;
