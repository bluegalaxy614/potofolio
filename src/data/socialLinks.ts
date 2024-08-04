import {
  faGithub,
  faLinkedin,
  faTelegram,
  faWhatsapp,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: faGithub,
    text: Strings.githubUsername,
  },
  {
    name: Strings.linkedIn,
    url: Strings.linkedInLink,
    icon: faLinkedin,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.telegram,
    url: Strings.telegramLink,
    icon: faTelegram,
    text: Strings.telegramUsername,
  },
  {
    name: Strings.whatsapp,
    url: Strings.whatsappLink,
    icon: faWhatsapp,
    text: Strings.whatsappUsername,
  },
  {
    name: Strings.skype,
    url: Strings.skypeLink,
    icon: faSkype,
    text: Strings.skypeUsername,
  },
  {
    name: Strings.email,
    url: Strings.primaryEmailLink,
    icon: faEnvelope,
    text: Strings.primaryEmail,
  },
];

export default socialLinks;
