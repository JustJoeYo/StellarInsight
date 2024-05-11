function Footer() {
  return (
    <>
      <footer className="relative px-4 pt-20 bg-transparent">
        <nav
          aria-label="Footer Navigation"
          className="w-full mb-10 flex flex-col gap-10 sm:flex-row justify-center items-center"
        >
          <a href="support" className="font-medium text-white">
            Support
          </a>
          <a href="privacy-policy" className="font-medium text-white">
            Privacy Policy
          </a>
          <a href="tos" className="font-medium text-white">
            Terms & Conditions
          </a>
        </nav>
        <p className="py-10 text-center text-gray-300">
          © 2024 StellarInsight | All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
