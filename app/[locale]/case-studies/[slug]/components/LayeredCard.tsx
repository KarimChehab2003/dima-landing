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
        <article className="relative w-full lg:w-auto aspect-square max-h-[250px]">
            {/* Background card */}
            <div className={`absolute inset-0 w-full h-full rounded-2xl -z-10 blur-xs ${bg} ${txt} ${rotation}`}></div>

            {/* Foreground card */}
            <div className="relative w-full h-full rounded-2xl 
                bg-white p-6 flex flex-col items-center justify-between gap-3 text-black shadow-lg transition-transform duration-300 
                group-hover:rotate-3 group-hover:scale-105">

                <p className="font-bold text-[28px] lg:text-[44px] text-center flex-1 flex items-center">
                    {value}
                    <span className={suffixColor}>{suffix}</span>
                </p>

                <p className="font-light lg:text-lg text-left self-start w-full">{title}</p>
            </div>
        </article>
    );
}

export default LayeredCard;
