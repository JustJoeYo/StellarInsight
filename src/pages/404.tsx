type Props = {};

export default function PageNotFound({}: Props) {
  return (
    <>
      <main className="grid relative min-h-full h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-black">
        <div className="text-center bg-white p-5 outline outline-blue-400 rounded-3xl">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-text-color text-indigo-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="./dashboard"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}