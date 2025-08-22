import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center gap-8">
        <Image src="/fox.png" alt="fox logo" width={180} height={38} priority />
        <div className="text-center">Hello Andrej Obradovic.</div>
        {/* <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Write anything that you want.
          </li>
          <li className="tracking-[-.01em]">
            No editing or revising your entries, ever.
          </li>
        </ol> */}
      </main>
    </div>
  );
}
