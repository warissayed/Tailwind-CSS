export default function Home() {
  return (
    <>
      <div className="flex h-12 w-full">
        <div className="bg-blue-400 w-1/5">side bar</div>
        <div className="bg-red-400 w-3/5">main content</div>
        <div className="bg-green-400 w-1/5"> side bar</div>
      </div>

      <div className="grid place-content-center">
        <div className=" w-32 bg-red-300">01</div>
        <div className="w-32 bg-blue-300 ">02</div>
        <div className="w-32  bg-green-400">03</div>
        <div className="w-32  bg-green-400">04</div>
        <div className="w-32  bg-green-400">05</div>
        <div className="w-32  bg-green-400">06</div>
        <div className="w-32  bg-green-400">07</div>
        <div className="w-32  bg-green-400">08</div>
        <div className="w-32  bg-green-400">09</div>
        <div className="w-32  bg-green-400">010</div>
      </div>
      <main className="min-h-screen grid place-content-center">
        <div className="bg-teal-600 h-64 w-64 rounded-full grid place-content-center ">
          <div className="bg-teal-50 h-32 w-32 rounded-full grid place-content-center">
            <div className="bg-red-500 h-16 w-16 rounded-full"></div>
          </div>
        </div>
      </main>
    </>
  );
}
