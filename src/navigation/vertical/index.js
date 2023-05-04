import { Mail, Home, Circle, Settings, Shield } from "react-feather";

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "outbox",
    title: "Outbox",
    icon: <Mail size={20} />,
    navLink: "/outbox",
  },  
  {
    id: "preferences",
    title: "Settings",
    icon: <Settings size={20} />,
    navLink: "/settings",
  },
];
