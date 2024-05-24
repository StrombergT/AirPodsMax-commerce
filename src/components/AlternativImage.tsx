"use client";

interface AlternativImageProps {
  originalImage: string;
  setCurrentImage: (image: string) => void;
}

const altImages: string[] = ["/blue.png", "/test.png", "/green2.png"];

export default function AlternativImage({
  originalImage,
  setCurrentImage,
}: AlternativImageProps) {
  return (
    <div className="flex flex-row justify-between h-32 max-w-[400px] overflow-x-scroll ">
      <div className="flex flex-row space-x-2 ">
        {[originalImage, ...altImages].map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Alt ${index + 1}`}
            className="w-32 h-32 rounded-md cursor-pointer "
            onClick={() => setCurrentImage(url)}
          />
        ))}
      </div>
    </div>
  );
}
