import React, { useState, useRef } from "react";
import { PanelMenu } from "primereact/panelmenu";
import Switch from "react-switch";
import { useOutsideClick } from "./useOutsideClick";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../index.css";

const Toolbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMenubar, setShowMenubar] = useState(false);
  const [showHomepageImage, setShowHomepageImage] = useState(false);
  const [showNewsAndInterests, setShowNewsAndInterests] = useState(false);
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  });

  const handleSwitchChange = (setter) => (value) => {
    setter(value);
    if (menuRef.current) {
      menuRef.current.classList.add("prevent-close");
    }
  };

  const createSwitch = (label, setter, marginLeft) => (
    <div className="flex w-full items-center">
      <span>{label}</span>
      <Switch
        onChange={handleSwitchChange(setter)}
        checked
        onColor="#0099CC"
        uncheckedIcon={false}
        checkedIcon={false}
        height={15}
        width={40}
        className={`ml-${marginLeft}`}
      />
    </div>
  );

  const items = [
    {
      label: "Settings",
      icon: "pi pi-cog",
      items: [
        { label: "Language" },
        { label: "Country/Region" },
        { label: "Location" },
        { label: "Voice Search" },
        { label: "More" },
      ],
    },
    { label: "Safe Search", icon: "pi pi-lock" },
    { label: "Search History", icon: "pi pi-clock" },
    { label: "My Bing", icon: "pi pi-map-marker" },
    { label: "Privacy", icon: "pi pi-lock" },
    { label: "Feedback", icon: "pi pi-comment" },
    {
      label: "Customize Homepage",
      icon: "pi pi-home",
      items: [
        { label: createSwitch("Show Menubar", setShowMenubar, 40) },
        { label: createSwitch("Show Homepage image", setShowHomepageImage, 28) },
        { label: createSwitch("Show news and interests", setShowNewsAndInterests, 28) },
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-around bg-transparent p-2 text-white">
        <div className="flex items-center space-x-2">
          <img src="binglogo.png" alt="Microsoft Bing Logo" className="h-8 w-auto sm:h-10" />
          <div className="hidden items-center space-x-5 text-sm sm:flex">
            <a href="#">Image</a>
            <a href="#">Video</a>
            <a href="#">Translate</a>
            <i className="pi pi-ellipsis-h cursor-pointer text-2xl"></i>
          </div>
          <button className="p-2 sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className="pi pi-ellipsis-h text-2xl"></i>
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <a href="#" className="cursor-pointer text-sm">
              Sign In
            </a>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <i className="pi pi-user cursor-pointer text-black"></i>
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <i className="pi pi-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 z-20 mr-14 mt-2 w-80 text-xs">
          <div className="rounded-md bg-white shadow-lg">
            <PanelMenu
              ref={menuRef}
              model={items}
              className="custom-panelmenu rounded-md text-xs text-black"
              multiple={true}
            />
            <div className="mt-2 border-t border-gray-300"></div>
            <div className="p-2 text-center text-xs text-gray-600">
              Privacy and Cookies • Legal • Advertise • About our ads • Help © 2024 Microsoft
            </div>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-16 z-10 w-full bg-white shadow-lg">
          <div className="flex flex-col p-2">
            <a href="#" className="p-2 text-black">
              Image
            </a>
            <a href="#" className="p-2 text-black">
              Video
            </a>
            <a href="#" className="p-2 text-black">
              Translate
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
