import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Header } from "../components/shared/header";
import { Headline } from "../components/shared/headline";
import contactImage from "../assets/pavan-trikutam-71CjSSB83Wo-unsplash.webp";
import { FormContainer } from "../components/shared/form-container";
import { Input } from "../components/shared/input";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { NextSeo } from "next-seo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputContainer } from "../components/shared/input-container";
import { Select } from "../components/shared/select";
import { useUpdateEffect } from "usehooks-ts";
import { ContactMeData } from "../types/contactMeData";
import ContactMeService from "../services/contactMe.service";

export interface Props {}

/**
 * An ContactMe React Component.
 * @author Jane Will
 * @version 0.1
 */
const ContactMe: NextPage = () => {
  const [disableContactReasonStringVal, setdisableContactReasonStringVal] =
    useState(true);

  const schema = yup.object({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("email isn't valid"),
    contactReasonString: disableContactReasonStringVal
      ? yup.string()
      : yup.string().required("contact reason is required"),
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

  const onSubmit = async (data: ContactMeData) => {
    const contactMeService = new ContactMeService();

    await contactMeService.sendEmail(data);
  };

  useUpdateEffect(() => {
    if (selectedContactReason === "other") {
      methods.setValue("contactReasonString", "");
    }

    setdisableContactReasonStringVal((prev) => !prev);
  }, [selectedContactReason]);

  return (
    <>
      <NextSeo title="Contact Me" />
      <Header multipleChildren src={contactImage} className="bg-[#8f908b]">
        <FormProvider {...methods}>
          <FormContainer
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex-1 mx-auto"
            title="Contact Me"
          >
            <div className="flex flex-col">
              <div className="relative flex xl:flex-row flex-col xl:gap-x-4">
                <div className="xl:w-80">
                  <Input required label="Name" name="name" />
                  <Input required label="Email Address" name="email" />

                  <Select
                    label="Contact Reason"
                    name="contactReason"
                    values={[
                      { value: "job_offer", displayValue: "Job offer" },
                      { value: "other", displayValue: "Other" },
                    ]}
                  />
                  {selectedContactReason === "job_offer" ? (
                    <>
                      <Input
                        label="Job Advertisement"
                        name="jobAdvertisement"
                      />
                      <Input label="Job Location" name="jobLocation" />
                    </>
                  ) : (
                    <Input
                      label="Contact Reason (Value)"
                      name="contactReasonString"
                      required
                    />
                  )}
                </div>
                <div className="w-full xl:min-h-full">
                  <InputContainer
                    label="Message"
                    name="message"
                    className="xl:col-span-3 xl:row-span-4 w-full xl:min-h-full"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-light text-gray-400 xl:col-span-2 mb-4">
                  This form will be used to create an email to me. No additional
                  information is stored, except the email itself.
                </p>
              </div>
            </div>
          </FormContainer>
        </FormProvider>
      </Header>
    </>
  );
};

export default ContactMe;
