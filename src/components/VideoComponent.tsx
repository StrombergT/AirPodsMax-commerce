export default function VideoComponent() {
  return (
    <div>
      <div className="flex items-center justify-center mb-20 mt-10">
        <div
          className="relative overflow-hidden w-full max-w-[1500px]"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            width="1200"
            height="450"
            src="https://www.youtube.com/embed/WDjE6nPLOUo?autoplay=1&controls=0&mute=1&modestbranding=1&rel=0&showinfo=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
          <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>
        </div>
      </div>
    </div>
  );
}
