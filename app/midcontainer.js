export default function MidContainer() {
  return (
    <div className="bg-white rounded-lg  shadow-3xl text-black overflow-hidden h-5/6">
      <video
        className="w-full h-full object-cover hidden xl:block"
        src="/video.mp4"
        controls
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
