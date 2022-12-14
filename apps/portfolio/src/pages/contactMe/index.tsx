import { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { Header } from "../../components/shared/header";
import contactImage from "../../assets/pavan-trikutam-71CjSSB83Wo-unsplash.webp";
import { FormContainer } from "../../components/shared/form-container";
import { Input } from "../../components/shared/input";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { NextSeo } from "next-seo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputContainer } from "../../components/shared/input-container";
import { Select } from "../../components/shared/select";
import { useUpdateEffect } from "usehooks-ts";
import { ContactMeData } from "../../types/contactMeData";
import ContactMeService from "../../services/contactMe.service";
import { useAlert } from "../../hooks/useAlert.hook";
import { AlertType } from "../../components/enums/alerttype.enum";
import { Button } from "../../components/shared/button";
import { useButtonState } from "../../hooks/useButtonState.hook";
import { useRouter } from "next/router";
import { DataTestIds } from "@portfolio/shared-testing";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export interface Props {}

/**
 * An ContactMe React Component.
 * @author Jane Will
 * @version 0.1
 */
const ContactMe: NextPage = () => {
  const [disableContactReasonStringVal, setdisableContactReasonStringVal] =
    useState(true);

  const { t } = useTranslation(["contact"]);

  const { push } = useRouter();

  const schema = yup.object({
    name: yup.string().required("I need to know who contacted me"),
    email: yup
      .string()
      .required("I need your email to answer you")
      .email("I need an valid email to answer you"),
    contactReasonString: disableContactReasonStringVal
      ? yup.string()
      : yup.string().required("I need a contact reason"),
  });

  const methods = useForm<ContactMeData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      contactReason: "job_offer",
      contactReasonString: "",
    },
  });

  const selectedContactReason = useWatch({
    name: "contactReason",
    control: methods.control,
  });

  useUpdateEffect(() => {
    if (selectedContactReason === "other") {
      methods.setValue("contactReasonString", "");
    }

    setdisableContactReasonStringVal((prev) => !prev);
  }, [selectedContactReason]);

  const isError = useButtonState(methods.formState.errors);

  const { toggle } = useAlert();

  const onSubmit = async (data: ContactMeData) => {
    try {
      const contactMeService = new ContactMeService();

      await contactMeService.sendEmail(data);
      methods.reset();
      await push("/contactMe/done");
    } catch (err) {
      toggle("Error", "Something went wrong", AlertType.Error);

      window.setTimeout(() => {
        toggle();
      }, 500);
    }
  };

  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <Header
        multipleChildren
        src={contactImage}
        background="bg-[#8f908b]"
        source={{
          copyright: "Pavan Trikutam",
          href: "https://unsplash.com/@ptrikutam",
        }}
      >
        <FormProvider {...methods}>
          <FormContainer
            button={
              <Button
                data-testid={DataTestIds.CONTACT_ME_SUBMIT_BUTTON}
                isLoading={methods.formState.isSubmitting}
                disabled={isError}
              >
                {t("form.button")}
              </Button>
            }
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex-1 mx-auto"
            title={t("form.title")}
          >
            <div className="flex flex-col">
              <div className="relative flex xl:flex-row flex-col xl:gap-x-4">
                <div className="xl:w-80">
                  <Input
                    autoComplete="on"
                    required
                    label={t("form.nameInput")}
                    name="name"
                    data-testid={DataTestIds.CONTACT_ME_NAME_INPUT}
                  />
                  <Input
                    autoComplete="on"
                    required
                    label={t("form.emailInput")}
                    name="email"
                    type="email"
                    data-testid={DataTestIds.CONTACT_ME_EMAIL_INPUT}
                  />

                  <Select
                    label={t("form.contactReasonSelect")}
                    name="contactReason"
                    values={[
                      {
                        value: "job_offer",
                        displayValue: t("form.contactReasonValues.jobOffer"),
                      },
                      {
                        value: "other",
                        displayValue: t("form.contactReasonValues.other"),
                      },
                    ]}
                    data-testid={DataTestIds.CONTACT_ME_CONTACT_REASON_SELECT}
                  />
                  {selectedContactReason === "job_offer" ? (
                    <>
                      <Input
                        autoComplete="on"
                        label={t("form.jobAdvertisementInput")}
                        name="jobAdvertisement"
                        data-testid={
                          DataTestIds.CONTACT_ME_JOB_ADVERTISEMENT_INPUT
                        }
                      />
                      <Input
                        label={t("form.jobLocationInput")}
                        name="jobLocation"
                      />
                    </>
                  ) : (
                    <Input
                      autoComplete="on"
                      label={t("form.contactReasonInput")}
                      name="contactReasonString"
                      required
                      data-testid={DataTestIds.CONTACT_ME_CONTACT_REASON_INPUT}
                    />
                  )}
                </div>
                <div className="w-full xl:min-h-full">
                  <InputContainer
                    data-testid={DataTestIds.CONTACT_ME_MESSAGE_TEXTAREA}
                    autoComplete="on"
                    label={t("form.messageArea")}
                    name="message"
                    className="xl:col-span-3 xl:row-span-4 w-full xl:min-h-full"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-light text-gray-400 xl:col-span-2 mb-4">
                  {t("form.hintText")}
                </p>
              </div>
            </div>
          </FormContainer>
        </FormProvider>
      </Header>
      <main></main>
    </>
  );
};

export default ContactMe;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contact"])),
      // Will be passed to the page component as props
    },
  };
};
