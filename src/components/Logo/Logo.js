import React from "react";
import mainLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
// import "./Logo.scss";

const Logo = () => {
  // const img =

  return (
    <Link to="/">
      <div className="searchbar__logo">
        <img className="logo" src={mainLogo} alt="Logo" />
        {/* <svg width="200" height="80">
          <linearGradient
            id="logo__item--logo_0__3"
            gradientUnits="objectBoundingBox"
            x1="1"
            y1="1"
            x2="1"
            y2="1"
          >
            <stop offset="0" style={{ stopColor: "#23a052" }} />
            <stop offset="1" style={{ stopColor: "#11c454" }} />
          </linearGradient>
          <filter
            id="logo__item--logo_0__3_Effect"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path
            fill="url(#logo__item--logo_0__3)"
            d="M128.7,70h-26c9,5,15.7,14,18.6,24.1c-5.3,5.7-11,10.8-17.1,15.6c0.6-13.3-1.4-25.7-4.8-39.7h-5.9    c1.7,7,3.1,12.7,4,19c-11.8-7.5-25-12.8-38.5-16.3c1.3-0.9,2.6-0.8,4-2.8H39.4l3-1.7C64.5,55.5,113.5,25,113.5,25    c2-1.2,2.7-3.7,1.6-5.7l-4.2-10.4c-1.2-2-3.8-2.7-5.9-1.5l-80.6,49c-2,1.2-2.7,3.8-1.6,5.8l7.7,8.4l0.1,64.2    c0,2.4,1.9,4.2,4.2,4.2h25.6c-7.7-5-13.5-13-16.2-22.1c5.3-5.7,11-11,17.1-15.8c-0.6,12.8,1.2,25.9,4.4,37.9h5.8    c-1.5-6-2.7-11.3-3.5-17c11.8,7.5,25,12.6,38.5,16c-0.5,0.4-1,0-1.5,1h23.6c2.3,0,4.3-1.8,4.3-4.2V75.1C133,72.8,131,70,128.7,70z     M92.2,19l15.2-9.7l-2.2,14.3l-15.5,9.9L92.2,19z M65.2,35.6L80.6,26l-2.8,14.4L62.4,50L65.2,35.6z M34.5,67.5L37.1,53l15.3-9.8    l-2.6,14.5L34.5,67.5z M42.9,110.2c-0.2-1.5-0.2-3-0.2-4.4c0-10.4,4-20.3,11.1-27.7c7.6,1.7,15,4,22.2,6.9    C63.7,91.3,52.7,100.2,42.9,110.2z M111.8,133.5c-7.6-1.7-15-4-22.2-6.9c12.4-6.4,23.4-15.3,33.1-25.3c0.2,1.5,0.2,3,0.2,4.4    C122.9,116.1,118.9,126,111.8,133.5z"
            data-part-id="logo__item--logo_0__3"
            data-filter-glow=""
            data-filter-glow-thickness="0"
            filter="url(#logo__item--logo_0__3_Effect)"
          />
        </svg> */}
        {/* <svg width="100" height="80">
          <defs id="SvgjsDefs1143">
            <linearGradient id="SvgjsLinearGradient1150">
              <stop id="SvgjsStop1151" stopColor="#006838" offset="0" />
              <stop id="SvgjsStop1152" stopColor="#96cf24" offset="1" />
            </linearGradient>
          </defs>
          <g id="SvgjsG1144" featurekey="root" fill="#181818" />
          <g
            id="SvgjsG1145"
            featurekey="symbol1"
            fill="url(#SvgjsLinearGradient1150)"
            transform="matrix(4.375,0,0,4.375,-4.375,-4.375)"
          >
            <g xmlns="http://www.w3.org/2000/svg">
              <path d="M16,1H2C1.44,1,1,1.45,1,2c0,15.588,0-1.169,0,10.025c0,0.55,0.45,1,1,1h14c0.56,0,1-0.45,1-1C17,5.337,17,12.886,17,2   C17,1.45,16.55,1,16,1z M16,12.025H2C2,5.337,2,12.886,2,2h14C16,17.588,16,0.831,16,12.025z" />
              <path d="M9,11.042c2.198,0,3.997-1.798,3.997-4.01c0-2.225-1.799-4.023-3.997-4.023c-2.212,0-3.997,1.798-3.997,4.023   C5.003,9.243,6.788,11.042,9,11.042z M8,5l3,2L8,9V5z" />
              <path d="M4,14H2c-0.56,0-1,0.45-1,1v2h4v-2C5,14.45,4.55,14,4,14z" />
              <path d="M10,14H8c-0.55,0-1,0.45-1,1v2h4v-2C11,14.45,10.55,14,10,14z" />
              <path d="M16,14h-2c-0.55,0-1,0.45-1,1v2h4v-2C17,14.45,16.56,14,16,14z" />
            </g>
          </g>
          <g
            id="SvgjsG1146"
            featurekey="text1"
            fill="url(#SvgjsLinearGradient1147)"
            transform="matrix(3.3750001739811344,0,0,3.3750001739811344,85.27500023922406,-22.66684789164507)"
          >
            <path d="M3.68 21.72 l2.86 0 c0.6 0 0.6 2.28 0 2.28 l-3.86 0 c-1.28 0 -1.28 0 -1.28 -1.08 l0 -11.84 c0 -1.08 0 -1.08 1.22 -1.1 l3.9 0.02 c0.6 0 0.6 2.28 0 2.28 l-2.84 0 l0 3.64 l2 0 c0.6 0 0.6 2.3 0 2.3 l-2 0 l0 3.5 z M17.3 22.86 c0.42 1 -1.82 1.48 -2.08 0.88 l-0.12 -0.28 c-0.66 -1.58 -1.38 -3.38 -2.04 -4.98 l-0.98 0 l0 5.08 c0 0.6 -2.28 0.6 -2.28 0 l0 -12.3 c0 -0.94 0.02 -1.24 1.42 -1.26 l2.06 0 c0.72 0 1.52 0.02 2.14 0.42 c1.36 0.86 1.78 2.38 1.76 3.92 c-0.02 1.28 -0.2 2.56 -1.46 3.5 c-0.14 0.08 -0.26 0.16 -0.38 0.24 c0.64 1.52 1.34 3.26 1.96 4.78 z M12.08 16.2 l1.72 0 c0.92 0 1.06 -1.12 1.1 -1.44 c0.02 -0.22 0.02 -1.02 -0.02 -1.4 c-0.08 -0.74 -0.36 -1.12 -1.28 -1.12 l-1.52 0 l0 3.96 z M25.019999999999996 10.36 c0.22 -0.6 2.52 -0.42 2.1 0.58 c-0.92 2.2 -2.56 6.22 -2.5 6.12 l0 6.5 c0 0.6 -2.28 0.6 -2.28 0 l0 -6.5 l-2.52 -6.04 c-0.46 -1.1 1.82 -1.32 2.12 -0.58 l1.54 3.94 c0.42 -1.12 1.1 -2.82 1.54 -4.02 z M33.32 17.02 l3.14 5.78 c0.44 0.8 -1.78 1.54 -2.04 1.04 l-2.56 -4.66 l0 4.38 c0 0.6 -2.28 0.6 -2.28 0 l0 -13.1 c0 -0.6 2.28 -0.6 2.28 0 l0 4.38 l2.56 -4.68 c0.26 -0.46 2.48 0.22 2.04 1.04 z M39.379999999999995 15.98 l6.56 0 c0.6 0 0.6 2.24 0 2.24 l-2.84 0.04 l-0.88 0 l-2.84 -0.04 c-0.6 0 -0.6 -2.24 0 -2.24 z M60.599999999999994 10.76 l0 12.8 c0 0.6 -2.26 0.6 -2.26 0 l0 -6.64 c-2.32 6.46 -2.36 6.54 -2.4 6.62 c-0.26 0.6 -1.78 0.6 -2.04 0 c-0.04 -0.08 -0.08 -0.16 -2.42 -6.7 l0 6.72 c0 0.6 -2.28 0.6 -2.28 0 l0 -12.8 c0 -0.98 2.02 -0.94 2.22 -0.4 l3.5 9.2 l3.44 -9.2 c0.2 -0.54 2.24 -0.6 2.24 0.4 z" />
          </g>
  </svg>*/}
      </div>
    </Link>
  );
};

export default Logo;
