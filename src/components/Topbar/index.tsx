import { useLocation } from "react-router-dom";
import { TopbarContainer, TopbarFloatingWrapper } from "./index.element";
import statusBar from "@/assets/images/statusBar.png";
import { useEffect, useState } from "react";

/**
 *
 * @param type
 * 1 : 채팅방
 * 2 : 채팅방 목록
 * 3 : setting
 * @returns
 */

const Topbar = () => {
  const [renderType, setRenderType] = useState(0);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setRenderType(1);
        break;
      case "/chatlist":
        setRenderType(2);
        break;
      case "/setting":
        setRenderType(3);
        break;
      default:
        setRenderType(0);
        break;
    }
  }, [pathname]);

  return (
    <TopbarContainer>
      <TopbarFloatingWrapper>
        <img
          src={statusBar}
          alt="statusBar"
        />
      </TopbarFloatingWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
