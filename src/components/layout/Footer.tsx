import { footerLinks } from "@/src/constants";

export default function Footer() {
  return (
    <footer className="p-5 sm:px-10 text-gray-600 ">
      <div className="max-w-screen-md mx-auto">
        <div className="my-5 h-px w-full bg-neutral-700" aria-hidden />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-semibold mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AirPodsMax Inc. All rights
            reserved.
          </p>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-xs font-semibold flex">
                <span className="mx-2 cursor-pointer hover:underline">
                  {link}
                </span>
                {i !== footerLinks.length - 1 && (
                  <span className="hidden md:inline">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
