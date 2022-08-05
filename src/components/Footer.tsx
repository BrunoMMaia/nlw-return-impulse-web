export function Footer() {
  return (
    <footer className="p-4 bg-black-200  rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-white  sm:text-center px-40">
        © 2022 rodape do projeto.
      </span>
      <ul className="flex px-40 flex-wrap items-center mt-3 ml-20  text-sm text-white sm:mt-0">
        <li>
          <a
            href="https://github.com/BrunoMMaia"
            className="mr-4 hover:underline md:mr-6 "
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/bruno-matheus-maia-b7b152146"
            className="mr-4 hover:underline md:mr-6"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://brunommaia.com.br/"
            className="mr-4 hover:underline md:mr-6"
          >
            Site
          </a>
        </li>
      </ul>
    </footer>
  );
}
