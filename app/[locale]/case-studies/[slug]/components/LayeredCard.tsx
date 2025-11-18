import { LayeredCardProps } from "@/types/info";

const getCardConfig = (index: number) => {
    switch (index) {
        case 0:
            return {
                bg: "bg-primary",
                text: "text-primary",
                rotation: "-rotate-10",
                suffixColor: "text-primary"
            };
        case 1:
            return {
                bg: "bg-blue-700",
                text: "text-blue-700",
                rotation: "rotate-10",
                suffixColor: "text-blue-700"
            };
        case 2:
            return {
                bg: "bg-purple-700",
                text: "text-purple-700",
                rotation: "-rotate-12",
                suffixColor: "text-purple-700"
            };
        default:
            return {
                bg: "",
                text: "",
                rotation: "",
                suffixColor: ""
            };
    }
};


function LayeredCard({ index, value, title, suffix }: LayeredCardProps) {
    const { bg, text: txt, rotation, suffixColor } = getCardConfig(index);
    return (
        <article className="relative w-64 h-64">

            {/* Background card */}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-full h-full rounded-2xl z-10 blur-xs
                ${bg} ${txt} ${rotation}`}
            ></div>

            {/* Foreground card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl 
                z-20 bg-white p-4 flex flex-col justify-between text-black shadow-lg transition-transform duration-300 
                group-hover:rotate-3 group-hover:scale-105">

                <p className="font-bold text-[44px]">
                    {value}
                    <span className={suffixColor}>{suffix}</span>
                </p>

                <p className="font-light text-2xl">{title}</p>
            </div>
        </article>
    );
}

export default LayeredCard;
