import React from "react";

interface ShipInterface {
  className?: string;
}

const Ship: React.FC<ShipInterface> = ({ className }) => {
  return (
    <svg
      fill="currentColor"
      version="1.1"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
    >
      <g>
        <path
          d="M148.8,221.024H32.723c-3.904,0-7.07,3.165-7.07,7.07v52.785c0,3.905,3.166,7.072,7.07,7.072H148.8
		c3.905,0,7.071-3.167,7.071-7.072v-52.785C155.871,224.189,152.705,221.024,148.8,221.024z"
        />
        <g>
          <path
            d="M376.883,240.743H335.02c-1.672,0-3.029,1.357-3.029,3.031v41.862c0,1.673,1.357,3.03,3.029,3.03h41.863
			c1.672,0,3.028-1.357,3.028-3.03v-41.862C379.911,242.1,378.555,240.743,376.883,240.743z"
          />
          <path
            d="M309.728,240.743h-41.86c-1.677,0-3.031,1.357-3.031,3.031v41.862c0,1.673,1.354,3.03,3.031,3.03h41.86
			c1.677,0,3.033-1.357,3.033-3.03v-41.862C312.761,242.1,311.404,240.743,309.728,240.743z"
          />
          <path
            d="M242.575,240.743h-41.86c-1.675,0-3.031,1.357-3.031,3.031v41.862c0,1.673,1.356,3.03,3.031,3.03h41.86
			c1.673,0,3.029-1.357,3.029-3.03v-41.862C245.605,242.1,244.248,240.743,242.575,240.743z"
          />
          <path
            d="M309.728,177.951h-41.86c-1.677,0-3.031,1.357-3.031,3.03v41.862c0,1.673,1.354,3.03,3.031,3.03h41.86
			c1.677,0,3.033-1.357,3.033-3.03v-41.862C312.761,179.308,311.404,177.951,309.728,177.951z"
          />
          <path
            d="M242.575,177.951h-41.86c-1.675,0-3.031,1.357-3.031,3.03v41.862c0,1.673,1.356,3.03,3.031,3.03h41.86
			c1.673,0,3.029-1.357,3.029-3.03v-41.862C245.605,179.308,244.248,177.951,242.575,177.951z"
          />
        </g>
        <path
          d="M109.627,150.818h-37.73c-2.231,0-4.04,1.81-4.04,4.041v47.854c0,2.231,1.809,4.041,4.04,4.041h37.73
		c2.232,0,4.04-1.809,4.04-4.041v-47.854C113.667,152.628,111.858,150.818,109.627,150.818z"
        />
        <path
          d="M109.627,117.868H96.822V73.976c0-3.347-2.714-6.06-6.061-6.06c-3.348,0-6.061,2.713-6.061,6.06v43.892H71.897
		c-2.231,0-4.04,1.809-4.04,4.041v10.6c0,2.23,1.809,4.04,4.04,4.04h37.73c2.232,0,4.04-1.81,4.04-4.04v-10.6
		C113.667,119.677,111.858,117.868,109.627,117.868z"
        />
        <path
          d="M489.682,291.031c-0.444-0.8-1.288-1.296-2.205-1.296h-80.53c-0.776,0-1.511,0.358-1.989,0.97l-10.678,13.662H2.525
		c-0.84,0-1.623,0.418-2.094,1.115c-0.469,0.696-0.563,1.581-0.248,2.359c0,0,34.207,84.507,45.63,112.668
		c0.387,0.953,1.313,1.576,2.341,1.576H408.49c0.876,0,1.766-0.303,2.315-1.195c19.639-31.866,78.817-127.3,78.817-127.3
		C490.104,292.811,490.127,291.832,489.682,291.031z M328.821,354.246c-5.474,0-9.915-4.439-9.915-9.915
		c0-5.477,4.441-9.915,9.915-9.915c5.477,0,9.916,4.439,9.916,9.915C338.737,349.806,334.299,354.246,328.821,354.246z
		 M376.883,354.246c-5.478,0-9.916-4.439-9.916-9.915c0-5.477,4.438-9.915,9.916-9.915c5.474,0,9.912,4.439,9.912,9.915
		C386.795,349.806,382.356,354.246,376.883,354.246z"
        />
      </g>
    </svg>
  );
};

export { Ship };