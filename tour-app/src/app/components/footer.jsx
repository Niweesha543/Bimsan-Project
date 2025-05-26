
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-6 sm:py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
         
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <img 
                src="/image_logo.png" 
                alt="BIMSAN TOURS Logo" 
                className="h-10 sm:h-12"
              />
            </Link>
            
           
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="#" aria-label="Facebook" className="bg-gray-200 rounded-full p-2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transition-colors hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 fill-current">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="bg-gray-200 rounded-full p-2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transition-colors hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="bg-gray-200 rounded-full p-2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transition-colors hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 fill-current">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="YouTube" className="bg-gray-200 rounded-full p-2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transition-colors hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 fill-current">
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="bg-gray-200 rounded-full p-2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transition-colors hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 fill-current">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                </svg>
              </Link>
            </div>
            
          
            <div className="flex flex-wrap gap-3 mb-6 sm:mb-0">
              <Link href="#" className="border border-white rounded-md py-1 px-3 sm:px-4 flex items-center transition-colors hover:bg-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <Link href="#" className="border border-white rounded-md py-1 px-3 sm:px-4 flex items-center transition-colors hover:bg-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>

         
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact" className="hover:text-gray-300 inline-block font-medium">CONTACT US</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300 inline-block">FAQS</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">PARTNERSHIPS</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-gray-300 inline-block">CORPORATE</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300 inline-block">ASW FOUNDATION</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300 inline-block">CAREERS</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">MANAGE COOKIES</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-gray-300 inline-block">PRIVACY POLICY</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300 inline-block">TERMS OF SERVICE</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">SIGN UP TO OUR NEWSLETTER</h3>
                <div className="flex flex-col">
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="px-3 py-2 bg-white text-blue-950 w-full mb-2 sm:mb-0 sm:mr-0 sm:rounded-l sm:rounded-r-none"
                    />
                    <button className="bg-orange-500 text-white px-4 py-2 uppercase font-medium hover:bg-orange-600 transition-colors sm:rounded-r">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-gray-400 text-xs mt-3">
                    * Subscribe to receive daily travel inspiration from around the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="pt-6 mt-8 border-t border-gray-700 text-center text-sm">
          <p>Copyright © 2023 - 2025 Bimson Tours</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;