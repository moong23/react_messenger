import {
  EndContentContainer,
  MidContentContainer,
  TopbarInnerContainer,
} from "./content.element";

interface IMidContent {
  name: string;
  iconSrc: string;
}

interface ITCProps {
  leftIcon: string;
  leftSize: number;
  midContent?: IMidContent;
  rightIcon: string[];
}
const TopbarContent = ({
  leftIcon,
  leftSize,
  midContent,
  rightIcon,
}: ITCProps) => {
  return (
    <TopbarInnerContainer>
      <img
        src={leftIcon}
        alt="back"
        width={leftSize}
        height={leftSize}
      />
      {midContent ? (
        <MidContentContainer>
          <img
            src={midContent.iconSrc}
            alt="profile"
            width={36}
            height={36}
          />
          <div className="textDiv">
            <span className="subText">{midContent.name}</span>
            <span className="caption">현재 활동 중</span>
          </div>
        </MidContentContainer>
      ) : (
        <>Chat</>
      )}
      <EndContentContainer>
        {rightIcon.map((iconSrc, idx) => (
          <div>
            <img
              key={iconSrc + idx}
              alt="right top icon"
              src={iconSrc}
            />
            {iconSrc.includes("video") && <span className={"video"} />}
          </div>
        ))}
      </EndContentContainer>
    </TopbarInnerContainer>
  );
};

export default TopbarContent;
