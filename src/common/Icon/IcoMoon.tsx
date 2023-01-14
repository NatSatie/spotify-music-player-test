import React from 'react';
import { ReactComponent as PlayIcon } from './icomoon-music-icons/SVG/play3.svg';
import { ReactComponent as PauseIcon } from './icomoon-music-icons/SVG/pause2.svg';
import { ReactComponent as ForwardIcon } from './icomoon-music-icons/SVG/forward3.svg';
import { ReactComponent as BackwardIcon } from './icomoon-music-icons/SVG/backward2.svg';
import { ReactComponent as StopIcon } from './icomoon-music-icons/SVG/stop2.svg';
import { IconEnum } from './IconEnum';
import { BevelText, Button, Container } from './IconMoonStyle';

interface IcoMoonProps {
  icon: IconEnum,
}

const IcoMoon: React.FC<IcoMoonProps>  = (props: IcoMoonProps) => {
  const getIcon = (icon: IconEnum) => {
    switch(icon){
      case IconEnum.PLAY:
        return <PlayIcon />;
      case IconEnum.PAUSE:
        return <PauseIcon />;
      case IconEnum.NEXT:
        return <ForwardIcon />;
      case IconEnum.PREVIOUS:
        return <BackwardIcon />;
      case IconEnum.STOP:
        return <StopIcon />;
      default:
        break;
    }
  }

  const onClick = () => {
    console.log("Empty action");
  }

  return(
    <Container onClick={onClick}>
      {getIcon(props.icon)}
    </Container>
  );
}

export default IcoMoon;