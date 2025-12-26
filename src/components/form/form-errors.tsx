import { useStore } from "@tanstack/react-form";
import { useFormContext, type FormErrorsProps } from "./form.types";
import { cn } from "@/utils/cn";

export const FormErrors = ({
  className,
  children,
  ref,
  ...props
}: FormErrorsProps) => {
  const form = useFormContext();
  const formErrors = useStore(form.store, (formState) => formState.errors);

  return (
    <div
      className={cn("", className)}
      ref={ref}
      {...props}>
      {children}
      <div className="mt-2">
        {formErrors.map((error, index) => (
          <p
            key={index}
            className="text-error text-sm">
            {error.message}
          </p>
        ))}
      </div>
    </div>
  );
};
