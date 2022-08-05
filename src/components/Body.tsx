export function Body() {
  return (
    <div>
      <div className="">
        <p className="text-7xl mt-20 sm:px-40">Detalhes do Projeto!</p>
      </div>
      <div className="sm:px-40 mt-5 text-lg  text-gray-400">
        Toda a estilização da página foi feita utilizando{" "}
        <span className="font-bold ">tailwind</span>, o menu e o skeleton foram
        adicionados para
        <p /> simular uma pagina web. A funcionalidade no canto inferior
        direito, foi desenvolvida durante o NLW Return da{" "}
        <a className="text-brand-500" href="https://www.rocketseat.com.br/">
          Rocketseat
        </a>
        .<p />
        Ela envia feedbacks para uma conta de e-mail teste.
        <p className="mt-5 text-3xl">Tecnologias:</p>
        <ol className="ml-5">
          <li>Next.js</li>
          <li>Tailwind</li>
          <li>Typescript</li>
          <li>Axios</li>
        </ol>
      </div>
      <div className="flex">
        <div className="w-4/6">
          <div role="status" className="sm:mx-auto animate-pulse ml-40  mt-10">
            <div className="flex justify-center items-center w-full h-96 bg-gray-300 rounded sm:w-11/12">
              <svg
                className="w-20 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>

          <div
            role="status"
            className="sm:mx-auto  space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center px-2 sm:px-40 py-2.5"
          >
            <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center px-2 sm:px-40 py-2.5"
          >
            <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center px-2 sm:px-40 py-2.5"
          >
            <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="w-2/6 mt-10">
          <a
            href="#"
            className=" animate-pulse flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <svg
              className="w-70 h-40 text-gray-200 m-5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="h-3.5 bg-gray-200 rounded-full w-48 mb-4"></div>

              <p className="font-normal text-gray-700 w-80">
                <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
              </p>
            </div>
          </a>

          <a
            href="#"
            className="mt-3 animate-pulse flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <svg
              className="w-70 h-40 text-gray-200 m-5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>

            <div className="flex flex-col justify-between p-4 leading-normal ">
              <div className="h-3.5 bg-gray-200 rounded-full w-48 mb-4"></div>

              <p className="font-normal text-gray-700 w-80">
                <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
              </p>
            </div>
          </a>
          <a
            href="#"
            className="mt-3 animate-pulse flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <svg
              className="w-70 h-40 text-gray-200 m-5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>

            <div className="flex flex-col justify-between p-4 leading-normal ">
              <div className="h-3.5 bg-gray-200 rounded-full w-48 mb-4"></div>

              <p className="font-normal text-gray-700 w-80">
                <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
