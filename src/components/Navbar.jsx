import { useContext } from "react";
import { MainContext } from "../context/MainContext";

function Navbar() {
  const malumot = useContext(MainContext);
  console.log(malumot);

  return <div>Navbar</div>;
}

export default Navbar;
