import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TypeWritterEffect from "./TypeWritterEffect"
import { HomeStyle, HomeHeader, HomeRole, SocialIcons } from "./StyledComponents";
import { selectSocials } from "../features/data/selectors"
import { useAppSelector } from '../app/hooks';




const HomeContent = () => {
  const social = useAppSelector(selectSocials);

  const displaySocialIcons = social.map((item, i) => {
    return (
      <a className={`${item.colorStyle} px-3 fs-3`}
        key={i} href={item.account}>
        <FontAwesomeIcon key={i} icon={item.icon} />
      </a>
    );
  });

  return (
    <>
      <HomeStyle>
        <HomeHeader>
          <p className="fs-1">Hey... Iam</p>
          Chukwuebuka Anyadiegwu
        </HomeHeader>
        <HomeRole>
          <TypeWritterEffect
            dataText={[" A Software Engineer", "A Full-Stack Developer", "An API Developer"]}
          />
        </HomeRole>
        <SocialIcons>
          {displaySocialIcons}
        </SocialIcons>
      </HomeStyle>
    </>
  );
}

export default HomeContent;