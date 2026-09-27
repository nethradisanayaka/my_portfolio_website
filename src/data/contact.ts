import { profile } from "./profile";

export interface ContactInfo {
  location: string;
  email: string;
  linkedin: string;
  github: string;
}

export const contact: ContactInfo = {
  location: profile.location,
  email: profile.social.email,
  linkedin: profile.social.linkedin,
  github: profile.social.github,
};