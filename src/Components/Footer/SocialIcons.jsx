import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <a
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
        href={icon.link}
        >
          <ion-icon name={icon.name}></ion-icon>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;