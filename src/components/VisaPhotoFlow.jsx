"use client";

import { CheckCircle2 } from "lucide-react";

const PHOTO_BASE = "/Visa%20Grant%20Photos/";

const photos = [
  "800924837_1066106816178531_5531609526184830405_n.jpg",
  "840664460_1088909287231617_8827010792594524015_n.jpg",
  "808374837_1066109782844901_6129215322972581671_n.jpg",
  "801963411_1066108389511707_6563236543113702056_n.jpg",
  "907666124_1125799230209289_7153602838850861989_n.jpg",
  "838716744_1088577347264811_5344785369459464387_n.jpg",
  "839266715_1088817377240808_2603483223818347229_n.jpg",
  "851567757_1095720559883823_361236559667947843_n.jpg",
  "807285046_1066118569510689_8929228558942376718_n.jpg",
  "793161559_1057880083667871_7282578775115480974_n.jpg",
];

function MarqueeRow({ reverse = false }) {
  return (
    <div
      className={`flex w-max ${
        reverse ? "animate-visa-marquee-reverse" : "animate-visa-marquee"
      }`}
    >
      {[0, 1].map((set) => (
        <div
          key={set}
          className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6"
        >
          {photos.map((photo, index) => (
            <div
              key={`${set}-${photo}`}
              className="relative h-36 w-36 shrink-0 overflow-hidden rounded-3xl border-[3px] border-white/85 shadow-xl sm:h-52 sm:w-52 lg:h-72 lg:w-72"
            >
              <img
                src={`${PHOTO_BASE}${photo}`}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/25 to-transparent" />
              {index % 3 === 0 && (
                <span className="absolute bottom-1 left-1 flex items-center gap-0.5 rounded-full bg-white/90 px-1.5 py-0.5 text-[8px] font-bold text-emerald-700">
                  <CheckCircle2 size={9} />
                  GRANTED
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function VisaPhotoFlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
    >
      <div className="absolute inset-x-0 top-[5%] -rotate-3 opacity-45 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:top-[7%] sm:opacity-55">
        <MarqueeRow />
      </div>
      <div className="absolute inset-x-0 bottom-[2%] rotate-3 opacity-40 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:bottom-[4%] sm:opacity-50">
        <MarqueeRow reverse />
      </div>

      {/* Soft centre glow keeps the headline readable over the moving photos */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.64)_42%,rgba(239,246,255,0.08)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-blue-100/60" />
    </div>
  );
}
