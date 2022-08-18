import React, { useState, FC } from "react";
import styles from "./roadmap.module.css";

function RoadMaps() {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className={styles.roadmap__graphics}>
      <RoadMapGraphic handleClick={setSelected} visible={selected === 0} />
    </div>
  );
}

export default RoadMaps;

interface RoadMap {
  handleClick?: (id: number) => void;

  visible: boolean;
}

const RoadMapGraphic: FC<RoadMap> = ({ handleClick, visible = false }) => {
  return (
    <div
      className={`${visible ? "block" : "hidden"} ${
        styles.roadmap__svg__container
      }`}
    >
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        viewBox="0 0 1382 257"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(447.86 -.496)">
          <path
            d="M382 0v95.677L369.611 108H156V12.311L168.376 0H382Z"
            fill="#ed1c24"
            fillRule="nonzero"
          />
          <clipPath id="a">
            <path
              d="M382 0v95.677L369.611 108H156V12.311L168.376 0H382Z"
              clipRule="nonzero"
            />
          </clipPath>
          <g transform="translate(-22.79 -2.122)" clipPath="url(#a)">
            <text
              x={226.182}
              y={48.936}
              fontSize={18.667}
              className={styles.roadmap__svg_text}
              transform="translate(-21.008 1.938)"
            >
              <tspan x={247.182} y={60.719}>
                {"CEX Listings"}
              </tspan>
            </text>
          </g>
        </g>
        <path
          d="M382 0v95.677L369.611 108H156V12.311L168.376 0H382Z"
          fill="#ed1c24"
          fillRule="nonzero"
        />
        <text
          x={225.049}
          y={45.597}
          fontSize={18.667}
          className={styles.roadmap__svg_text}
          transform="translate(-21.008 1.938)"
        >
          <tspan>{"TOKEN LAUNCH"}</tspan>
        </text>
        <text
          x={225.049}
          y={70.597}
          fontSize={18.667}
          className={styles.roadmap__svg_text}
          transform="translate(-50.008 1.938)"
        >
          <tspan>{"WHITEPAPER RELEASE"}</tspan>
        </text>
        <path
          d="M582 148v96.108l-12.377 12.365h-213.62v-96.096L368.38 148H582z"
          fill="#ed1c24"
          fillRule="nonzero"
        />
        <clipPath id="b">
          <path
            d="M582 148v96.108l-12.377 12.365h-213.62v-96.096L368.38 148H582z"
            clipRule="nonzero"
          />
        </clipPath>
        <g transform="translate(-34.151 2.238)" clipPath="url(#b)">
          <text
            transform="matrix(1.0058 0 0 .99424 162.6 150.18)"
            x={285.52}
            y={44.396}
            fontSize={20.335}
            className={styles.roadmap__svg_text}
            strokeWidth={1.089}
          >
            <tspan x={290.52} y={44.396}>
              <tspan>{"STAKING"}</tspan>
            </tspan>
            <tspan x={285.52} y={70.068}>
              <tspan>{"LAUNCHED"}</tspan>
            </tspan>
          </text>
        </g>
        <g transform="translate(446.47)">
          <path
            d="M582 148v96.108l-12.377 12.365h-213.62v-96.096L368.38 148H582z"
            fill="#ed1c24"
            fillRule="nonzero"
          />
          <clipPath id="c">
            <path
              d="M582 148v96.108l-12.377 12.365h-213.62v-96.096L368.38 148H582z"
              clipRule="nonzero"
            />
          </clipPath>
          <g transform="translate(-17.546 -2.11)" clipPath="url(#c)">
            <text
              x={220.938}
              y={37.141}
              fontSize={18.667}
              className={styles.roadmap__svg_text}
              transform="translate(178.99 150.18)"
            >
              <tspan x={220.938} y={48.924}>
                {"MOBILE APP"}
              </tspan>
              <tspan x={220.938} y={75.707}>
                {"UNVEILED"}
              </tspan>
            </text>
          </g>
        </g>
        <path
          d="M239.93 128.53H33.3v-1h206.22L260.05 107l.71.71-20.83 20.82z"
          fill="#ed1c24"
          fillRule="nonzero"
        />
        <g transform="translate(875.48 -.496)">
          <path
            d="M382 0v95.677L369.611 108H156V12.311L168.376 0H382Z"
            fill="#ed1c24"
            fillRule="nonzero"
          />
          <clipPath id="d">
            <path
              d="M382 0v95.677L369.611 108H156V12.311L168.376 0H382Z"
              clipRule="nonzero"
            />
          </clipPath>
          <g transform="translate(-11.979 -15.14)" clipPath="url(#d)">
            <text
              x={209.324}
              y={42.504}
              fontSize={18.667}
              className={styles.roadmap__svg_text}
              transform="translate(-16.509 1.938)"
            >
              <tspan x={209.324} y={62.703}>
                {"MARKETING"}
              </tspan>
              <tspan x={209.324} y={82.903}>
                {"PARTNERSHIPS"}
              </tspan>
            </text>
          </g>
        </g>
        <path
          d="M687.79 128.034H481.16v-1h206.22l20.53-20.53.71.71-20.83 20.82zM1115.41 128.034H908.78v-1H1115l20.53-20.53.71.71-20.83 20.82z"
          fill="#ed1c24"
          fillRule="nonzero"
        />
        <path
          fill="#ed1c24"
          fillRule="nonzero"
          d="M242.4 127.53h1104.9v1H242.4z"
        />
        <path
          d="M452.24 137.41a9.38 9.38 0 1 0-.001-18.761 9.38 9.38 0 0 0 .001 18.761z"
          fill="#ed1c24"
          fillRule="nonzero"
        />
        <g fill="#ed1c24" fillRule="nonzero">
          <path d="M29.51 132.56a4.514 4.514 0 0 1-4.171-2.801 4.521 4.521 0 0 1 5.927-5.888 4.524 4.524 0 0 1 2.774 4.189 4.532 4.532 0 0 1-4.53 4.5zm0-8a3.519 3.519 0 0 0-2.468 6.02 3.513 3.513 0 0 0 3.841.746 3.518 3.518 0 0 0 2.157-3.266 3.528 3.528 0 0 0-2.177-3.27 3.532 3.532 0 0 0-1.353-.27v.04zM1351.3 132.56c-.89 0-1.77-.266-2.51-.762a4.607 4.607 0 0 1-1.67-2.029 4.487 4.487 0 0 1-.25-2.611c.17-.877.6-1.682 1.23-2.315a4.528 4.528 0 0 1 6.96.685 4.51 4.51 0 0 1-.57 5.705 4.509 4.509 0 0 1-3.19 1.327zm0-8c-.7 0-1.38.206-1.96.593-.57.387-1.03.936-1.29 1.579a3.458 3.458 0 0 0-.2 2.034c.13.683.47 1.31.96 1.803a3.518 3.518 0 0 0 3.84.763 3.56 3.56 0 0 0 1.58-1.297 3.57 3.57 0 0 0 .59-1.955c0-.466-.08-.927-.26-1.358a3.4 3.4 0 0 0-.76-1.154 3.57 3.57 0 0 0-1.15-.774c-.42-.18-.88-.273-1.35-.274v.04zM241.4 132.05a4.02 4.02 0 1 0 0-8.04 4.02 4.02 0 0 0 0 8.04zM687.68 132.05a4.02 4.02 0 1 0 0-8.04 4.02 4.02 0 0 0 0 8.04zM901.13 132.05a4.02 4.02 0 1 0 0-8.04 4.02 4.02 0 0 0 0 8.04zM1114.6 132.05a4.02 4.02 0 1 0 0-8.04 4.02 4.02 0 0 0 0 8.04z" />
          <path d="m473.38 149.07-20.53-20.54H183.28v-1h269.98l20.83 20.83-.71.71z" />
        </g>
        <path
          d="m919.85 149.07-20.53-20.54H629.75v-1h269.98l20.83 20.83-.71.71z"
          fill="#ed1c24"
          fillRule="nonzero"
        />
      </svg>
    </div>
  );
};
