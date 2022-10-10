import { useFormContext as ufc, FieldValues } from "react-hook-form";

export const useFormContext = <T extends FieldValues>(name: string) => {
  const res = ufc<T>();

  const isError = res.formState.errors?.[name]?.message ?? false;
  const errorMessage = (res?.formState?.errors?.[name]?.message ??
    "") as string;

  return {
    ...res,
    formState: { ...res.formState, errorMessage, isValid: !isError, isError },
  };
};
