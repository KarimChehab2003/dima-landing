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
                rotation: "-rotate-4 lg:-rotate-12",
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
        <article className="relative w-full min-h-[200px] max-h-[230px] lg:max-w-[280px] aspect-4/5 sm:aspect-5/6 lg:aspect-square">
            {/* Background card */}
            <div className={`absolute inset-1 rounded-2xl -z-10 blur-xs pointer-events-none ${bg} ${txt} ${rotation}`}></div>

            {/* Foreground card */}
            <div className="relative flex h-full w-full rounded-2xl bg-white p-6 lg:p-8 flex-col items-center justify-between gap-3 text-black shadow-lg">
                <p className="font-bold text-[28px] lg:text-[44px] text-center flex-1 flex items-center leading-tight" dir="ltr">
                    {value}
                    <span className={`${suffixColor} ml-1`}>{suffix}</span>
                </p>

                <p className={`font-light lg:text-lg self-start w-full text-center`}>{title}</p>
            </div>
        </article>
    );
}

export default LayeredCard;
