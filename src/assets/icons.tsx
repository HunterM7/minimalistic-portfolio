export const arrowBig = (
  <svg
    width="39"
    height="38"
    viewBox="0 0 39 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37.5 37H2V30.5H26L2 6.5L7 1.5L31 25.5V1.5H37.5V37Z"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
)

export const noiseBG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 700 700"
    width="700"
    height="700"
    opacity="0.3"
  >
    <defs>
      <filter
        id="nnnoise-filter"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        <feTurbulence
          type="turbulence"
          baseFrequency="0.051"
          numOctaves="4"
          seed="15"
          stitchTiles="stitch"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          result="turbulence"
        ></feTurbulence>
        <feSpecularLighting
          surfaceScale="28"
          specularConstant="0.7"
          specularExponent="20"
          lightingColor="#ffffff"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="turbulence"
          result="specularLighting"
        >
          <feDistantLight azimuth="3" elevation="83"></feDistantLight>
        </feSpecularLighting>
      </filter>
    </defs>
    <rect width="700" height="700" fill="transparent"></rect>
    <rect
      width="700"
      height="700"
      fill="#ffffff"
      filter="url(#nnnoise-filter)"
    ></rect>
  </svg>
)
