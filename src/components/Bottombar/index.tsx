import { BottomBarContainer } from "./index.element";
import bottomBarFloater from "@/assets/images/bottomBar.png";

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <img
        src={bottomBarFloater}
        alt="bottomBar"
      />
    </BottomBarContainer>
  );
};

export default BottomBar;
