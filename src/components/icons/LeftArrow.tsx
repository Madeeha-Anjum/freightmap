import React from "react";

type Props = {
  className: string;
};

const LeftArrow: React.FC<Props> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="-3 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g id="SVGRepo_bgCarrier"></g>
        <g id="SVGRepo_tracerCarrier"></g>
        <g id="SVGRepo_iconCarrier">
          <g id="icomoon-ignore"> </g>
          <path d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"></path>
          <path d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"></path>
        </g>
      </svg>
    </>
  );
};

export default LeftArrow;
