const ButtonMain = ({ color, hover }: { color: string; hover?: boolean }) => {
  return (
    <div style={{ position: "absolute", zIndex: "-1", marginTop:'8px' }}>
      <svg
        width="245"
        height="42"
        viewBox="0 0 245 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.90395 0.564516H239.356C242.162 0.564516 244.436 2.8392 244.436 5.64516V36.129C244.436 38.935 242.162 41.2097 239.356 41.2097H7.90395C5.09799 41.2097 2.82331 38.935 2.82331 36.129V5.64516C2.82331 2.8392 5.09799 0.564516 7.90395 0.564516Z"
          fill={hover ? "white" : "#1F1F24"}
          fillOpacity={hover ? '1' : "0.8"}
          stroke="white"
          stroke-width="1.12903"
        />
        <path
          d="M0 5.64516C0 2.52743 2.52743 0 5.64516 0H10.1613V41.7742H5.64516C2.52743 41.7742 0 39.2468 0 36.129V5.64516Z"
          fill="white"
        />
        <path
          d="M245 36.1293C245 39.247 242.473 41.7744 239.355 41.7744L234.839 41.7744L234.839 0.000220364L239.355 0.000220759C242.473 0.000221031 245 2.52765 245 5.64538L245 36.1293Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
export default ButtonMain;
