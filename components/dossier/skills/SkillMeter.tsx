interface SkillMeterProps {
  name: string;
  level: number;
}

export function SkillMeter({ name, level }: SkillMeterProps) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg width="96" height="96" viewBox="0 0 96 96" className="-rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="var(--doc-surface)"
            strokeWidth="6"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold font-sans tabular-nums text-doc-text">
          {level}
        </span>
      </div>
      <span className="text-xs font-sans font-medium text-doc-body text-center max-w-[90px]">
        {name}
      </span>
    </div>
  );
}
