import React, { useEffect, useRef } from 'react';
import DailyIframe, { DailyCall } from '@daily-co/daily-js';

interface DailyVideoCallProps {
  roomUrl: string;
}

const DailyVideoCall: React.FC<DailyVideoCallProps> = ({ roomUrl }) => {
  const callFrameRef = useRef<DailyCall | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (callFrameRef.current || !containerRef.current) {
      return;
    }

    const callFrame = DailyIframe.createFrame(containerRef.current, {
      iframeStyle: {
        position: 'relative',
        width: '100%',
        height: '100%',
        border: '0',
      },
    });

    callFrame.join({ url: roomUrl });
    callFrameRef.current = callFrame;

    return () => {
      callFrame.leave();
      callFrame.destroy();
    };
  }, [roomUrl]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default DailyVideoCall;
