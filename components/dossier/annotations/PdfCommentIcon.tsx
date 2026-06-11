interface PdfCommentIconProps {
  className?: string;
}

export function PdfCommentIcon({ className }: PdfCommentIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M2 1.5h9.5L14 4v10.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5Z"
        fill="#FFD54F"
        stroke="#E6B800"
        strokeWidth="0.75"
      />
      <path d="M11.5 1.5V4H14" fill="#FFEC80" stroke="#E6B800" strokeWidth="0.75" />
      <path
        d="M4.5 7h7M4.5 9.5h5"
        stroke="#8B6914"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
