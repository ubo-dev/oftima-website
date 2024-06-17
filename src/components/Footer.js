"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/oftima-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-14 px-16 md:px-16 py-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="text-3xl">
            <Image src={logo} alt="logo" width={150} height={150} />
          </Link>
          <p className="text-sm max-w-xs">
            İnşaat projeleriniz için güvenilir ve kaliteli hizmet sunuyoruz. Oftima İnşaat ile hayallerinizi gerçeğe dönüştürün.
          </p>
        </div>
        <p className="mt-4 lg:mt-0 text-xs text-center lg:text-right">© 2024 Oftima İnşaat - Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
