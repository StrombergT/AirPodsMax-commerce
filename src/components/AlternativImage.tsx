"use client";

interface AlternativImageProps {
  originalImage: string;
  setCurrentImage: (image: string) => void;
}

const altImages: string[] = [
  "https://img-new.cgtrader.com/items/2748987/ca71120fe6/apple-airpods-max-in-all-official-colors-3d-model-ca71120fe6.jpg",
  "https://img-new.cgtrader.com/items/2748987/3f1b8ab880/apple-airpods-max-in-all-official-colors-3d-model-3f1b8ab880.jpg",
  "https://img-new.cgtrader.com/items/2748987/41103d308e/apple-airpods-max-in-all-official-colors-3d-model-41103d308e.jpg",
];

export default function AlternativImage({
  originalImage,
  setCurrentImage,
}: AlternativImageProps) {
  return (
    <div className="flex flex-row justify-between h-32 w-full overflow-x-scroll ">
      <div className="flex flex-row space-x-2 ">
        {[originalImage, ...altImages].map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Alt ${index + 1}`}
            className="w-42 h-32 rounded-md cursor-pointer "
            onClick={() => setCurrentImage(url)}
          />
        ))}
      </div>
    </div>
  );
}
