import { CareerType } from "@/types/CareerType";
import vtrinaLogo from "@/assets/images/vtrina_logo.jpg";

export const careerList: CareerType[] = [
  {
    id: "1",
    title: "Vtrina",
    description: "Software Development Intern",
    placeholder: "vtrina.com ->",
    companyDescription:
      "Vtrina is a system that allows online stores to control their merchandise, inventory, and data from various sales channels.",
    icon: vtrinaLogo.src,
    link: "https://vtrina.com/",
    startDate: "Oct 2025",
    endDate: "Current",
  },
  {
    id: "2",
    title: "VIFE Solutions",
    description: "Frontend Development Intern",
    placeholder: "vifesolutions.com ->",
    companyDescription:
      "A software development company that provides services to companies and individuals.",
    icon: "https://github.com/vifesolutions.png",
    link: "https://vifesolutions.com/",
    startDate: "Dec 2024",
    endDate: "Oct 2025",
  },
];
