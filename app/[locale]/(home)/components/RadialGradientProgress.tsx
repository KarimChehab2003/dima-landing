type RadialGradientProgressProps = {
    size?: number;
    strokeWidth?: number;
    progress?: number;
    innerColor?: string; /* Inner gradient color */
    outerColor?: string; /* Outer gradient color */
    trackColor?: string;  /** Background track color */
    textColor?: string;
};

const RadialGradientProgress: React.FC<RadialGradientProgressProps> = ({
    size = 150,
    strokeWidth = 20,
    progress = 75,
    innerColor = "#000000",
    outerColor = "#11A8CF",
    trackColor = "#e5e7eb",
    textColor = "#1f2937",
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            <svg width={size} height={size} className="-rotate-90">
                <defs>
                    <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={innerColor} />
                        <stop offset="100%" stopColor={outerColor} />
                    </radialGradient>
                </defs>

                {/* Background Track */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Progress Arc */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="url(#radialGradient)"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.5s ease, stroke 0.5s ease",
                    }}
                />
            </svg>

            {/* Percentage Text */}
            <span
                className="absolute font-bold text-xl"
                style={{ color: textColor }}
            >
                {progress}%
            </span>
        </div>
    );
};

export default RadialGradientProgress;
