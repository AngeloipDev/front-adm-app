import { MdOutlineDashboard } from "react-icons/md";
import { BsBoxSeam, BsCartCheck } from "react-icons/bs";
import { AiOutlineBars, AiOutlineUser } from "react-icons/ai";

const size = 22;

export const optionsSidebar = [
  {
    icon: <MdOutlineDashboard size={size} />,
    text: "Dashboard"
  },
  {
    icon: <AiOutlineUser size={size} />,
    text: "Clientes"
  },
  {
    icon: <BsCartCheck size={size} />,
    text: "Pedidos"
  },
  {
    icon: <BsBoxSeam size={size} />,
    text: "Productos"
  },
  {
    icon: <AiOutlineBars size={size} />,
    text: "Categorías"
  }
];
