import React from 'react';
import IcoMoon from '../../common/Icon/IcoMoon';
import { IconEnum } from '../../common/Icon/IconEnum';

const MusicButton = () => {
  return(
    <div>
      <IcoMoon icon={IconEnum.PREVIOUS} />
      <IcoMoon icon={IconEnum.PLAY} />
      <IcoMoon icon={IconEnum.PAUSE} />
      <IcoMoon icon={IconEnum.STOP} />
      <IcoMoon icon={IconEnum.NEXT} />
    </div>
  );
}

export default MusicButton;
