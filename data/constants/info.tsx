import { CardInfo, ConversationInfo } from "@/types/info";
import { FaChartLine, FaLaptop, FaLayerGroup } from "react-icons/fa6";
import { PiUserList } from "react-icons/pi";

export const expandableCardInfo: CardInfo[] = [
    {
        title: "FULL TRACKING",
        highlight: "full",
        variant: "text-left-content-right"
    },
    {
        title: "Grow with ZERO constraints",
        highlight: "zero",
        variant: "text-image"
    },
    {
        title: "Trusted by +250 leading agencies",
        highlight: "+250",
        variant: "text-only"
    },
]

export const ownConversationInfo: ConversationInfo[] = [
    {
        title: "Listen, analyze & act",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaLaptop,
        image: "https://placehold.co/800x600"
    },
    {
        title: "Grow with the right partners",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaChartLine,
        image: "https://placehold.co/800x600"
    },
    {
        title: "Daily monitoring Reports",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaLayerGroup,
        image: "https://placehold.co/800x600"
    },
    {
        title: "Daily monitoring Reports 2",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaLayerGroup,
        image: "https://placehold.co/800x600"
    },
    {
        title: "Elevating social Presence",
        subTitle: "Cut through the noise of millions of unfilteredconversations to uncover the insights thatmatter most powered by AI.",
        icon: PiUserList,
        image: "/elevating-social-presence.png"
    },
    {
        title: "Benchmark Performance",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaLayerGroup,
        image: "https://placehold.co/800x600"
    },
]