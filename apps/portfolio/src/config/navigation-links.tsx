import { Props as NavigationItem } from "../components/shared/navigation-item";
import {
  HomeIcon,
  UserIcon,
  ComputerDesktopIcon,
  ServerIcon,
  PencilIcon,
  ArrowTrendingUpIcon,
  PhoneIcon,
  ArchiveBoxIcon,
  UserGroupIcon,
  BriefcaseIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";

export const main: NavigationItem[] = [
  { href: "/", children: "home", icon: <HomeIcon className="w-6 h-6" /> },
  {
    href: "/bio",
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
    href: "/bio#skills",
    children: "skills",
    subItems: [
      {
        href: "/bio/skills/frontend",
        children: "frontend",
        icon: <ComputerDesktopIcon className="w-6 h-6" />,
      },
      {
        href: "/bio/skills/backend",
        children: "backend",
        icon: <ServerIcon className="w-6 h-6" />,
      },
      {
        href: "/bio/skills/design",
        children: "design",
        icon: <PencilIcon className="w-6 h-6" />,
      },
      {
        href: "/bio/skills/process_model",
        children: "projectManagement",
        icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    children: "myProjects",
    href: "/projects",
    icon: <ArchiveBoxIcon className="w-6 h-6" />,
  },
  {
    children: "contactMe",
    href: "/contactMe",
    icon: <PhoneIcon className="w-6 h-6" />,
  },
];
