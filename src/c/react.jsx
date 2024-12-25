// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="px-5 py-2">
//       <div className="flex items-center justify-center">
//         {/* Logo */}
//         <a href="/" className="z-50">
//           <img src="/api/placeholder/120/40" alt="Logo" className="h-8 md:mx-20" />
//         </a>

//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden z-50 p-2"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:block">
//           <ul className="flex items-center justify-end font-semibold text-black md:ml-48 cursor-pointer">
//             {/* Home Link */}
//             <li className="relative group px-3 py-2">
//               <a href="/">Home</a>
//             </li>

//             {/* About Link with Dropdown */}
//             <li className="relative group px-3 py-2">
//               <button>About</button>
//               <div className="absolute top-1 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1000px] transform">
//                 <div className="relative top-7 p-6 bg-white rounded-xl shadow-xl w-full">
//                   <div className="bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
//                   <div className="relative z-10">
//                     <div className="grid grid-cols-4 gap-10">
//                       <div>
//                         <img src="/api/placeholder/200/150" alt="About" />
//                       </div>
//                       <div>
//                         <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                           Services
//                         </p>
//                         <ul className="mt-3 text-[15px]">
//                           <li>
//                             <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
//                               Digital Marketing
//                               <p className="text-gray-500 font-normal">All-in-one editor</p>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
//                               Maintenance and Support
//                               <p className="text-gray-500 font-normal">Pre-build payments page</p>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div>
//                         <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                           Others
//                         </p>
//                         <ul className="mt-3 text-[15px]">
//                           <li>
//                             <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
//                               Course Editor
//                               <p className="text-gray-500 font-normal">All-in-one editor</p>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div>
//                         <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                           Extensions
//                         </p>
//                         <ul className="mt-3 text-[15px]">
//                           <li>
//                             <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
//                               Plugins
//                               <p className="text-gray-500 font-normal">Tweak existing functionality</p>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-center bg-green-400">
//                   <h1 className="text-center">Book Free Demo</h1>
//                 </div>
//               </div>
//             </li>

//             {/* Products Link */}
//             <li className="relative group px-3 py-2">
//               <button>Products</button>
//             </li>

//             {/* Services Link */}
//             <li className="relative group px-3 py-2">
//               <button className="hover:opacity-50 cursor-pointer">
//                 Services
//               </button>
//             </li>

//             {/* Pricing Link */}
//             <li className="relative group px-3 py-2">
//               <a href="/pricing" className="hover:opacity-50 cursor-pointer">
//                 Pricing
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Navigation */}
//         <div className={`
//           fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//           md:hidden
//         `}>
//           <div className="flex flex-col p-8 mt-16">
//             <a href="/" className="py-2 text-lg">Home</a>
//             <a href="/about" className="py-2 text-lg">About</a>
//             <a href="/products" className="py-2 text-lg">Products</a>
//             <a href="/services" className="py-2 text-lg">Services</a>
//             <a href="/pricing" className="py-2 text-lg">Pricing</a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





// import React from "react";
// import { BookOpenText } from "lucide-react";
// import { IoFastFoodOutline } from "react-icons/io5";

// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="  px-5 py-2 flex items-center justify-between    ">
//       <Link to="/">
//         <img
//           src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/03/codebrew-black-logo.webp"
//           alt="Logo"
//           className="h-8 mx-20"
//         />
//       </Link>

//       <nav>
//         <ul className="flex items-center justify-end font-semibold text-black ml-48 cursor-pointer">
//           <li className="relative group px-3 py-2">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="relative group px-3 py-2">
//             <Link to="/about">
//             <button>About</button>
//             </Link>
//             {/* Dropdown for About */}
//             <div className="absolute top-1 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1000px] transform">
//               <div className="relative top-7 p-6 bg-white rounded-xl shadow-xl w-full">
//                 <div className=" bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
//                 <div className="relative z-10  ">
//                   <div className="grid grid-cols-4 gap-10">
//                     <div>
//                       <img
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0s_hxu0VkOvjEmCzF5Dhn0W3pksSErsYMQ&s"
//                         alt=""
//                       />
//                     </div>

//                     <div>
//                       <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                         Services
//                       </p>
//                       <ul className="mt-3 text-[15px]">
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Digital Marketing
//                             <p className="text-gray-500 font-normal">
//                               All-in-one editor
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Maintenence and Support
//                             <p className="text-gray-500 font-normal">
//                               Pre-build payments page
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Closed Captioning
//                             <p className="text-gray-500 font-normal">
//                               Use AI to generate captions
//                             </p>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <div>
//                         <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                           Others
//                         </p>
//                         <ul className="mt-3 text-[15px]">
//                           <li>
//                             <Link
//                               to="#"
//                               className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                             >
//                               Course Editor
//                               <p className="text-gray-500 font-normal">
//                                 All-in-one editor
//                               </p>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                             >
//                               Maintenence and Support
//                               <p className="text-gray-500 font-normal">
//                                 Pre-build payments page
//                               </p>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                             >
//                               Closed Captioning
//                               <p className="text-gray-500 font-normal">
//                                 Use AI to generate captions
//                               </p>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                         Extensions
//                       </p>
//                       <ul className="mt-3 text-[15px]">
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Plugins
//                             <p className="text-gray-500 font-normal">
//                               Tweak existing functionality
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Batch uploads
//                             <p className="text-gray-500 font-normal">
//                               Get your time back
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Social sharing
//                             <p className="text-gray-500 font-normal">
//                               Generate content for socials
//                             </p>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className=" text-center bg-green-400">
//                 <h1 className="text-center"> Book Free Demo</h1>
//               </div>
//             </div>
//           </li>
//           <li className="relative group px-3 ">
//             <Link to="/products">
//               <button>Products</button>
//             </Link>

//             {/* Dropdown for Developers */}
//             <div className="absolute top-1 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1000px] transform">
//               <div className="relative top-5 p-6 bg-white rounded-xl shadow-xl w-full">
//                 <div className=" bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
//                 <div className="relative z-10  ">
//                   <div className="grid grid-cols-4 gap-10">
//                     <div>
//                       <img
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPZPI7CxFqrkJatzJy95_bzYMHK0Yb8ULvw&s"
//                         alt=""
//                       />
//                     </div>

//                     <div>
//                       <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                         Services
//                       </p>
//                       <ul className="mt-3 text-[15px]">
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Digital Marketing
//                             <p className="text-gray-500 font-normal">
//                               All-in-one editor
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Maintenence and Support
//                             <p className="text-gray-500 font-normal">
//                               Pre-build payments page
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Closed Captioning
//                             <p className="text-gray-500 font-normal">
//                               Use AI to generate captions
//                             </p>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <div>
//                         <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                           Others
//                         </p>
//                         <ul className="mt-3 text-[15px]">
//                           <li>
//                             <Link
//                               to="#"
//                               className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                             >
//                               Course Editor
//                               <p className="text-gray-500 font-normal">
//                                 All-in-one editor
//                               </p>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                             >
//                               Maintenence and Support
//                               <p className="text-gray-500 font-normal">
//                                 Pre-build payments page
//                               </p>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                             >
//                               Closed Captioning
//                               <p className="text-gray-500 font-normal">
//                                 Use AI to generate captions
//                               </p>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                         Extensions
//                       </p>
//                       <ul className="mt-3 text-[15px]">
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Plugins
//                             <p className="text-gray-500 font-normal">
//                               Tweak existing functionality
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Batch uploads
//                             <p className="text-gray-500 font-normal">
//                               Get your time back
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Social sharing
//                             <p className="text-gray-500 font-normal">
//                               Generate content for socials
//                             </p>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </li>
//           <li className="relative group px-3 py-2">
//             <Link to="/services">
//               <button className="hover:opacity-50 cursor-pointer">
//                 Services
//               </button>
//             </Link>

//             {/* Dropdown for Services */}
//             <div className="absolute top-1 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform">
//               <div className="relative top-7 p-6 bg-white rounded-xl shadow-xl w-full">
//                 <div className=" bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
//                 <div className="relative z-10  ">
//                   <div className="grid grid-cols-4 gap-10">
//                     <div>
//                       <img
//                         src="https://t4.ftcdn.net/jpg/04/64/09/25/360_F_464092536_r33Df4sklUHsAxJHeCgObZumeHgKM0fV.jpg"
//                         alt=""
//                         className="mt-7"
//                       />
//                     </div>

//                     <div>
//                       <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                         Services
//                       </p>
//                       <ul className="mt-3 text-[15px]">
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Digital Marketing
//                             <p className="text-gray-500 font-normal">
//                               All-in-one editor
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Maintenence and Support
//                             <p className="text-gray-500 font-normal">
//                               Pre-build payments page
//                             </p>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to="#"
//                             className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                           >
//                             Closed Captioning
//                             <p className="text-gray-500 font-normal">
//                               Use AI to generate captions
//                             </p>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <div>
//                         <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
//                           Others
//                         </p>
//                         <ul className="mt-3 text-[15px]">
//                           <li>
//                             <Link
//                               to="#"
//                               className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                             >
//                               Course Editor
//                               <p className="text-gray-500 font-normal">
//                                 All-in-one editor
//                               </p>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                             >
//                               Maintenence and Support
//                               <p className="text-gray-500 font-normal">
//                                 Pre-build payments page
//                               </p>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
//                             >
//                               Closed Captioning
//                               <p className="text-gray-500 font-normal">
//                                 Use AI to generate captions
//                               </p>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
                  
//                   </div>
//                 </div>
//               </div>

//               <div className=" text-center bg-green-400">
//                 <h1 className="text-center"> Book Free Demo</h1>
//               </div>
//             </div>
//           </li>
//           <li className="relative group px-3 py-2">
//             <Link to="/pricing" className="hover:opacity-50 cursor-pointer">
//               <button> Pricing</button>
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Sign In Button */}
//       <nav>
//         <ul>
//           <li>
//             <Link
//               to="#"
//               className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group"
//             ></Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
