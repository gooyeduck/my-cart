import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";

import FabCart from "./components/FabCart/FabCart";

const actions = [
  { label: "About", icon: <FcAbout />, onClick: console.log }
];

const App = () => {
  return (
    <main>
      <FabCart actions={actions} />
    </main>
  );
};

export default App;