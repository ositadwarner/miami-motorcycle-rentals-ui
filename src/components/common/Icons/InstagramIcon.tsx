
type Props = {
  className?: string;
};

function InstagramIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      viewBox="0 0 72 72"
      id="emoji"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="color">
        <path
          fill="#000"
          d="M46.7845,12.6136h-21.569c-6.9598,0-12.6019,5.6421-12.6019,12.6019v21.5689 c0,6.9598,5.6421,12.6019,12.6019,12.6019h21.5689c6.9598,0,12.6019-5.6421,12.6019-12.6019V25.2155 C59.3864,18.2557,53.7443,12.6136,46.7845,12.6136z"
        />
      </g>
      <g id="hair" />
      <g id="skin" />
      <g id="skin-shadow" />
      <g id="line">
        <path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M46.7845,12.6136h-21.569 c-6.9598,0-12.6019,5.6421-12.6019,12.6019v21.5689c0,6.9598,5.6421,12.6019,12.6019,12.6019h21.5689 c6.9598,0,12.6019-5.6421,12.6019-12.6019V25.2155C59.3864,18.2557,53.7443,12.6136,46.7845,12.6136z"
        />
        <circle
          cx="36"
          cy="36"
          r="11.29"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <circle cx="49.7092" cy="22.2908" r="2.4193" stroke="#fff" />
      </g>
    </svg>
  );
}

export default InstagramIcon;
