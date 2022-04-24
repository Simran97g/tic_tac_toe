import React from "react"
import { FaTimes, FaPen, FaRegCircle} from "react-icons/fa";

const Icon = ({ name }) => {
   switch(name) {
       case ("Circle"):
           return (<FaRegCircle />);
        case ("Cross"):
            return (<FaTimes />);
        default:
            return (<FaPen />);
   }
}
export default Icon;