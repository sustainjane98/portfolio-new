import { useTranslation } from "next-i18next";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";

export interface Props {
  onUpdate: SubmitHandler<{
    search: string;
  }>;
}

/**
 * An SearchInput React Component.
 * @author Jane Will
 * @version 0.1
 */
export const SearchInput: React.FC<Props> = ({ onUpdate }) => {
  const form = useForm<{ search: string }>();

  const { t } = useTranslation(["common"]);

  return (
    <FormProvider {...form}>
      <form
        className="flex w-full mt-4 gap-4 max-w-lg lg:items-start flex-col lg:flex-row items-center"
        onSubmit={form.handleSubmit(onUpdate)}
      >
        <Input
          className="flex-1 w-full"
          name="search"
          placeholder={t("searchPlaceholder")}
        />
        <div className="flex gap-x-1">
          <Button>{t("search")}</Button>
          <Button
            variant="red"
            type="button"
            onClick={() => {
              form.setValue("search", "", {
                shouldDirty: true,
                shouldTouch: true,
              });
              onUpdate({ search: "" });
            }}
          >
            {t("clear")}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
