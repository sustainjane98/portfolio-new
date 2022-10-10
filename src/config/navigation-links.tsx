import { Props as NavigationItem } from "../components/shared/navigation-item";
import {
  HomeIcon,
  UserIcon,
  ComputerDesktopIcon,
  ServerIcon,
  PencilIcon,
  ArrowTrendingUpIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export const main: NavigationItem[] = [
  { href: "/", children: "Home", icon: <HomeIcon className="w-6 h-6" /> },
  {
    href: "/bio",
    children: "Who am I",
    icon: <UserIcon className="w-6 h-6" />,
  },
  {
    href: "/bio#skills",
    children: "Skills",
    subItems: [
      {
        href: "/bio/skills/frontend",
        children: "Frontend",
        icon: <ComputerDesktopIcon className="w-6 h-6" />,
      },
      {
        href: "/bio/skills/backend",
        children: "Backend",
        icon: <ServerIcon className="w-6 h-6" />,
      },
      {
        href: "/bio/skills/design",
        children: "Design",
        icon: <PencilIcon className="w-6 h-6" />,
      },
      {
        href: "/bio/skills/process_model",
        children: "Project Management",
        icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    children: "Contact Me",
    href: "/contact_me",
    icon: <PhoneIcon className="w-6 h-6" />,
  },
];
