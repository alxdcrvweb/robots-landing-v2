const ButtonBiome = ({ color }: { color: string }) => {
  return (
    <div style={{ position: "absolute" }}>
      <svg
        width="249"
        height="41"
        viewBox="0 0 249 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.358 4.93814L3.12356 21.9381C-2.87151 29.098 2.2191 40 11.5574 40H223.208C226.464 40 229.552 38.5579 231.642 36.0619L245.876 19.0619C251.871 11.902 246.781 1 237.443 1H25.7919C22.5363 1 19.448 2.44207 17.358 4.93814Z"
          fill={color}
          fill-opacity="0.15"
          stroke={color}
        />
      </svg>
    </div>
  );
};
export default ButtonBiome;
