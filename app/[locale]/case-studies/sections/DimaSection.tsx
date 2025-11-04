import RequestDemoButton from "../../(home)/components/RequestDemoButton";

function DimaSection() {
    return (
        <div className="container mx-auto flex flex-col justify-center gap-8 my-12 rounded-4xl lg:rounded-[64px] bg-[#043558] p-12 text-white">
            <span className="text-sm font-bold">dima ai</span>
            <h2 className="text-2xl lg:text-[44px]">Discover how dima&apos;s arabic-first AI copilot helps your team unlock
                deeper insights, respond faster, protect reputation, and scale impact</h2>
            <p className="lg:text-2xl">Whether you&apos;re an agency or an enterprise, dima empowers you to monitor every mention, predict crises before they escalate, analyze conversations in real time, benchmark performance across competitors and deliver more accurate coverage with seamless reporting. Get your personalized demo today.</p>
            <RequestDemoButton className="bg-white! text-black!" computerVariant="black" size="xl" />
        </div>
    );
}

export default DimaSection;