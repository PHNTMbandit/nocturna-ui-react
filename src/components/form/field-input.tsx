import { cn } from "@/utils/cn";
import { useFieldContext, type FieldInputProps } from "./form.types";
import { Input } from "../input";

export const FieldInput = ({
  className,
  children,
  ref,
  ...props
}: FieldInputProps) => {
  const field = useFieldContext<string>();

  return (
    <Input
      required
      type="text"
      id={field.name}
      name={field.name}
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
      className={cn(
        field.state.value &&
          field.getMeta().errors.length > 0 &&
          "outline-error",
        field.state.value && field.getMeta().isValid && "outline-success",
        className
      )}
      ref={ref}
      {...props}>
      {children}
    </Input>
  );
};
