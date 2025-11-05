type LayeredCardProps = {
    bgColor: string;
    suffix: string;
    suffixColor: string;
    value: number;
    text: string;
    rotation: string;
}

function LayeredCard({ bgColor, suffix, suffixColor, value, text, rotation }: LayeredCardProps) {
    return (
        <article className="relative w-52 h-52">
            {/* Background card */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl ${bgColor} z-10 ${rotation} blur-xs`}></div>

            {/* Foreground card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl z-20 bg-white p-4 flex flex-col justify-between text-black shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                <p className="font-bold text-[44px]">{value}<span className={suffixColor}>{suffix}</span></p>
                <p className="font-light text-2xl">{text}</p>
            </div>
        </article>
    );
}


export default LayeredCard;