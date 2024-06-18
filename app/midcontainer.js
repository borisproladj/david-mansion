export default function MidContainer() {
  // URL from Google Cloud Storage
  const videoUrl = "https://storage.cloud.google.com/davidmansionvideos/video.mp4";

  return (
    <div className="bg-white rounded-lg shadow-3xl text-black overflow-hidden h-5/6">
      <video
        className="w-full h-full object-cover hidden xl:block"
        src={videoUrl}  // Use the video URL here
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
