import { Mode } from "../types/mode";

type ButtonProps = {
  change: () => void;
  mode: Mode;
};

export default function Button({ change, mode }: ButtonProps) {
  return (
    <>
      <button
        className={
          mode === Mode.light
            ? "btn btn-primary m-3 "
            : "btn btn-danger text-with m-3 "
        }
        onClick={change}
      >
        Change
      </button>
    </>
  );
}
