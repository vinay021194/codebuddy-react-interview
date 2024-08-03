import React, { useState } from "react";

const SearchBarComponent = React.memo(() => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="relative mt-24 flex justify-center">
      {isInputFocused && <div className="fixed inset-0 z-10 bg-black bg-opacity-50"></div>}
      <div className="relative z-20 w-11/12 sm:w-3/4 md:w-1/2">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="w-full rounded-full border-2 border-gray-300 p-4 pl-4 pr-32 focus:bg-gray-100 focus:shadow-md focus:outline-none"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-3">
          <i className="pi pi-microphone cursor-pointer text-xl text-blue-500"></i>
          <img
            src="https://r.bing.com/rp/f21jlSMmEDN43OaavcdaB-7Phq0.svg"
            alt="AI Icon"
            className="h-6 w-6 cursor-pointer text-blue-300"
          />
          <i className="pi pi-search cursor-pointer text-xl text-blue-500"></i>
        </div>
      </div>
    </div>
  );
});

export default SearchBarComponent;
