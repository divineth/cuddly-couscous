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
        width="1290"
        height="60"
        viewBox="0 0 1290 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="6"
          width="1290"
          height="4"
          rx="2"
          fill="#B03227"
          fill-opacity="0.25"
        />
        <g>
          <circle
            cx="70"
            cy="8"
            r="6"
            fill="#E9B500"
            stroke="#141414"
            stroke-width="4"
          />
          <text
            x={35}
            y={45.597}
            fontSize={18.667}
            className={styles.roadmap__svg_text}
            transform="translate(-21.008 1.938)"
          >
            <tspan>{"Token Launch"}</tspan>
          </text>
        </g>


        <g transform="translate(50)">
          <circle
            cx="300"
            cy="8"
            r="6"
            fill="#E9B500"
            stroke="#141414"
            stroke-width="4"
          />
          <text
            x={263}
            y={45.597}
            fontSize={18.667}
            className={styles.roadmap__svg_text}
            transform="translate(-35.008 1.938)"
          >
            <tspan>{"Building Product"}</tspan>
          </text>
        </g>

        <g transform="translate(100)">
          <text
            x={492}
            y={45.597}
            fontSize={18.667}
            className={styles.roadmap__svg_text}
            transform="translate(-45.008 1.938)"
          >
            <tspan>{"Securing Partnerships"}</tspan>
          </text>
          <circle
            cx="530"
            cy="8"
            r="6"
            fill="#E9B500"
            stroke="#141414"
            stroke-width="4"
          />
        </g>

        <g transform="translate(150)">
          <circle
            cx="760"
            cy="8"
            r="6"
            fill="#E9B500"
            stroke="#141414"
            stroke-width="4"
          />
          <text
            x={720}
            y={45.597}
            fontSize={18.667}
            className={styles.roadmap__svg_text}
            transform="translate(-40.008 1.938)"
          >
            <tspan>{"Exchange Listings"}</tspan>
          </text>
        </g>
        
        <g transform="translate(200)">
          <text
            x={950}
            y={45.597}
            fontSize={18.667}
            className={styles.roadmap__svg_text}
            transform="translate(-35.008 1.938)"
          >
            <tspan>{"Push for adoption"}</tspan>
          </text>
          <circle
            cx="990"
            cy="8"
            r="6"
            fill="#E9B500"
            stroke="#141414"
            stroke-width="4"
          />
        </g>
      </svg>
    </div>
  );
};
