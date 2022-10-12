import { ContactMeData } from "../types/contactMeData";
import axios from "axios";

export default class ContactMeService {
  public async sendEmail(data: ContactMeData) {
    await axios.post("/api/contactMe", data);
  }
}
