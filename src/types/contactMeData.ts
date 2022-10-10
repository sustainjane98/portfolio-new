export interface ContactMeData {
  name: string;
  email: string;
  message?: string;
  contactReason: "job_offer" | "other";
  contactReasonString?: string;
  jobAdvertisement?: string;
  jobLocation?: string;
}
