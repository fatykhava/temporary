import { useEffect, useRef, useState } from 'react';
import {
  Player,
  PosterImage,
  Bezel,
  Shortcut,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  DurationDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  FullscreenToggle,
  PlayToggle,
} from 'video-react';

import './style.scss';

export default function Video({ feature }) {
  const [currentTime, setCurrentTime] = useState(0);
  const player = useRef();
  useEffect(() => {
    player.current.subscribeToStateChange(handleStateChange);
  }, []);

  const handleStateChange = (val) => {
    const decimalCurrentTime = val.currentTime ^ 0;
    if (val.currentTime !== decimalCurrentTime) {
      setCurrentTime(decimalCurrentTime);
    }
  };

  return (
    <div id="video" className="Video">
      <div className="Video-CurrentTime">00:0{currentTime}</div>
      <div className="Video-RemainTime">00:0{6 - currentTime}</div>
      <Player muted playsInline autoPlay loop preload="auto" ref={player}>
        <source src={feature.videoMp4} type="video/mp4" />
        <source src={feature.videoOgv} type="video/ogg" />
        <source src={feature.videoWebm} type="video/webm" />
        <Bezel disabled />
        <Shortcut disabled />
        <PosterImage disabled />
        <BigPlayButton disabled />
        <ControlBar autoHide={false}>
          <PlayToggle disabled />
          <ReplayControl disabled />
          <ForwardControl disabled />
          <CurrentTimeDisplay disabled />
          <DurationDisplay disabled />
          <TimeDivider disabled />
          <PlaybackRateMenuButton disabled />
          <VolumeMenuButton disabled />
          <FullscreenToggle disabled />
        </ControlBar>
      </Player>
    </div>
  );
}
