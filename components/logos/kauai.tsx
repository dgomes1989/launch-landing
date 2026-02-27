const KauaiLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="currentColor" fillOpacity={0.15} />
    <text
      x="16"
      y="21"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="currentColor"
      fontFamily="Inter, sans-serif"
    >
      K
    </text>
  </svg>
);
export default KauaiLogo;
