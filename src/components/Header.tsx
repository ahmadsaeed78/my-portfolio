import Link from "next/link";
import { Button } from "./ui/button";

// COMPONENTS
import Nav from "./Nav";
import MobileNave from "./MobileNave";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Ahmad <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="https://wa.me/923370628035" target="_blank">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNave />
        </div>
      </div>
    </header>
  );
};

export default Header;
