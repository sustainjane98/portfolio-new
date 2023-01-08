import { Props as NavigationItem } from "../components/shared/navigation-item";
import {
  UserIcon,
  PhoneIcon,
  UserGroupIcon,
  BriefcaseIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";

export const main: NavigationItem[] = [
  {
    href: "/",
    children: "whoAmI",
    icon: <UserIcon className="w-6 h-6" />,
  },
  {
    href: "/values",
    children: "values",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    href: "/work-experience",
    children: "work-experience",
    icon: <BriefcaseIcon className="w-6 h-6" />,
  },
  {
    href: "/education",
    children: "education",
    icon: <HomeModernIcon className="w-6 h-6" />,
  },

  {
    children: "contactMe",
    href: "/contactMe",
    icon: <PhoneIcon className="w-6 h-6" />,
  },
];
