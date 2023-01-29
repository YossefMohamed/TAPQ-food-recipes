import { FaStar } from "react-icons/fa";
function Star({ filled, onClick }: any) {
  return <FaStar color={filled ? "orange" : "lightgray"} onClick={onClick} />;
}
export default Star;
