import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-black">
      <main className="flex flex-col items-center">
        <div className="glossy-card relative w-96 h-60 rounded-2xl p-8 flex flex-col justify-between">
          {/* Card header */}
          <div className="relative z-10 flex justify-between items-start">
            <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-lg border border-yellow-300/20"></div>
            <div
              className="text-white font-bold text-lg tracking-wider drop-shadow-lg"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
              JOUGHT
            </div>
          </div>

          {/* Fox logo centered */}
          <div className="absolute inset-0 z-10 flex justify-center items-center">
            <Image
              className="red-filter drop-shadow-2xl"
              src="/phoenix.png"
              alt="phoenix logo"
              width={120}
              height={25}
              priority
            />
          </div>

          {/* Card footer */}
          <div className="relative z-10 flex justify-between items-end">
            <div
              className="text-white text-sm font-medium"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              Andrej Obradovic
            </div>
            <div className="text-gray-200 text-xs font-bold tracking-wider"></div>
          </div>
        </div>

        {/* Animated text */}
        <div className="mt-8">
          <div className="typewriter text-white text-lg font-medium">
            Follow the Paper Trail
          </div>
        </div>
      </main>
    </div>
  );
}
