import { createFormHook } from "@tanstack/react-form";
import { FieldErrors } from "./field-errors";
import { FieldInput } from "./field-input";
import { FormSubmit } from "./form-submit";
import { FormErrors } from "./form-errors";
import { fieldContext, formContext } from "./form.types";

export const Form = createFormHook({
  fieldComponents: {
    FieldErrors,
    FieldInput,
  },
  formComponents: {
    FormErrors,
    FormSubmit,
  },
  fieldContext,
  formContext,
});
