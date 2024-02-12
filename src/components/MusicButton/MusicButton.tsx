import React from 'react';
import IcoMoon from '../../common/Icon/IconMoon';
import { IconEnum } from '../../common/Icon/IconEnum';
import { Container } from './MusicButtonStyle';

const MusicButton = () => {
  return(
    <Container>
      <IcoMoon icon={IconEnum.PREVIOUS} />
      <IcoMoon icon={IconEnum.PLAY} />
      <IcoMoon icon={IconEnum.PAUSE} />
      <IcoMoon icon={IconEnum.STOP} />
      <IcoMoon icon={IconEnum.NEXT} />
    </Container>
  );
}

export default MusicButton;
