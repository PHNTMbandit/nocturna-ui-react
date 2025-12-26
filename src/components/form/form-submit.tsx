import { cn } from "@/utils/cn";
import { Button } from "../button";
import { useFormContext, type FieldSubmitButtonProps } from "./form.types";

export const FormSubmit = ({
  submittingText = "Submitting...",
  className,
  children,
  ref,
  ...props
}: FieldSubmitButtonProps) => {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting]}
      children={([canSubmit, isSubmitting]) => (
        <Button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className={cn("w-full", className)}
          ref={ref}
          {...props}>
          {isSubmitting ? submittingText : children}
        </Button>
      )}
    />
  );
};
