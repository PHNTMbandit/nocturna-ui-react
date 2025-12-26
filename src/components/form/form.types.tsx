import { createFormHookContexts } from "@tanstack/react-form";
import type { InputProps } from "../input";
import type { ButtonExtendedProps } from "../button";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export type FieldInputProps = InputProps;
export type FieldErrorsProps = React.ComponentProps<"div">;
export type FormErrorsProps = React.ComponentProps<"div">;
export type FieldSubmitButtonProps = ButtonExtendedProps & {
  submittingText?: string;
};
