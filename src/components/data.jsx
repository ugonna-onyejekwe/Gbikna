import { MdOutlinePayment, MdSecurity } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { TbArrowsExchange } from "react-icons/tb";

export const service = [
  {
    icon: <MdOutlinePayment />,
    header: "Payment Application",
    brief:
      "EMV Application for Point of Sale and Mobile Point of Sale (Windows and Linux based)",
  },
  {
    icon: <RiGlobalLine />,
    header: "Global Security Standards",
    brief:
      "Global Card Scheme Certification (MTIP and ADVT) for all our terminals.",
  },
  {
    icon: <TbArrowsExchange />,
    header: "Supported Transactions",
    brief: "ICC, NFC, MAG SWIPE, QR CODE, USSD and WALLET ENGINES.",
  },
  {
    icon: <MdSecurity />,
    header: "Third Party Integrations",
    brief:
      "Custom Implementation with Global Card Switches (Postillion and Transware Online).",
  },
];
