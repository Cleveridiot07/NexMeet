import DailyVideoCall from "../../components/VideoCallComponent";

const VideoCallPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full bg-[#1F2D3D] px-4 sm:px-6 lg:px-8 z-10">
        <nav className="flex items-center justify-between h-20">
          <div className="text-2xl text-white font-bold">NexMeet</div>
        </nav>
      </div>
      <div className="flex-grow relative">
        <div className="absolute inset-0 -top-[32px]">
          <DailyVideoCall roomUrl="https://iview.daily.co/Dhinchak" />
        </div>
      </div>
    </div>
  );
};

export default VideoCallPage;

