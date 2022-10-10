import { NextPage } from "next";
import React from "react";
import { Header } from "../components/shared/header";
import { Headline } from "../components/shared/headline";
import contactImage from "../assets/pavan-trikutam-71CjSSB83Wo-unsplash.webp";
import { FormContainer } from "../components/shared/form-container";
import { Input } from "../components/shared/input";
import { useForm, FormProvider } from "react-hook-form";
import { NextSeo } from "next-seo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface Props {}

const schema = yup.object({
  name: yup.string().required("name is required"),
  email: yup.string().required("email is required").email("email isn't valid"),
  message: yup.string().required("message is required"),
});

/**
 * An ContactMe React Component.
 * @author Jane Will
 * @version 0.1
 */
const ContactMe: NextPage = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <NextSeo title="Contact Me" />
      <Header multipleChildren src={contactImage} className="bg-[#8f908b]">
        <div className="flex-1 flex justify-center max-w-3xl">
          <div className=" max-w-xl">
            <Headline subheadline="Send me an offer and I will reply as shortly as I can" />
          </div>
        </div>
        <FormProvider {...methods}>
          <FormContainer
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex-1 mx-auto"
            title="Contact Me"
          >
            <Input required label="Name" name="name" />
            <Input required label="Email Address" name="email" />
            <Input
              required
              label="Message"
              name="message"
              className="col-span-2"
            />
          </FormContainer>
        </FormProvider>
      </Header>
    </>
  );
};

export default ContactMe;
