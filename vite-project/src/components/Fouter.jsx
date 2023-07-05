import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer>
      <div className="flex  relative pt-0 flex-col align-middle">
        <img className="absolute wave z-O  w-full drop-shadow-sm" src="/footerwave.svg" alt="" />
        <div className="z-10 pt-14 pl-40"><h1 className='text-1xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold'>Frech Food <br/><span className='absolute -rotate-45 with text-base sm:text-2xl md:text-3xl lg:text-5xl -pl-5 text-[#219EBC]'>With</span>&nbsp;&nbsp; TimeCook</h1></div>
        <div className="h-[2px] mx-[10%]  z-10 mt-16 w-[80vw] bg-white"></div>
        <footer className="site-footer z-30 mx-20">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Recipe Website. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </footer>
  );
}