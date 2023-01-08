import { useTranslation } from "next-i18next";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";

export interface Props {
  onUpdate: SubmitHandler<{
    searchTerm: string;
  }>;
}

/**
 * An SearchInput React Component.
 * @author Jane Will
 * @version 0.1
 */
export const SearchInput: React.FC<Props> = ({ onUpdate }) => {
  const form = useForm<{ searchTerm: string }>();

  const { t } = useTranslation(["common"]);

  return (
    <FormProvider {...form}>
      <form
        className="flex w-full mt-4 gap-x-2 max-w-md"
        onSubmit={form.handleSubmit(onUpdate)}
      >
        <Input
          className="flex-1"
          name="search"
          placeholder={t("searchPlaceholder")}
        />
        <Button>{t("search")}</Button>
      </form>
    </FormProvider>
  );
};
