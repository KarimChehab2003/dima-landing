import { Label } from "@/components/ui/label";
import SectionWrapper from "../components/SectionWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function RequestDemoSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto max-w-5xl flex flex-col gap-4">
                <h2 className="text-4xl sm:text-5xl text-center">Request a Demo</h2>
                <p className="text-xl text-muted-foreground font-medium text-center">Discover how dima&apos;s arabic-first AI empowers your team with unparalleled monitoring, real-time insights, and competitive benchmarking</p>
                <div className="flex justify-between items-center gap-8">
                    <div className="flex-1 bg-[linear-gradient(90deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)] p-6 rounded-4xl">
                        <form className="space-y-6 rounded-4xl p-8 bg-white">
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="formNameInput">Name</Label>
                                <Input type="text" id="formNameInput" name="name" placeholder="Jane Smith" />
                            </div>
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="formEmailInput">Email</Label>
                                <Input type="email" id="formEmailInput" name="email" placeholder="jane@framer.com" />
                            </div>
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="formPhoneNumInput">Phone Number</Label>
                                <Input type="text" id="formPhoneNumInput" name="phoneNum" placeholder="Add here country code" />
                            </div>
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="formCompanyInput">Company</Label>
                                <Input type="text" id="formCompanyInput" name="company" placeholder="Company Name" />
                            </div>

                            <div className="flex justify-center items-center ">
                                <Button className="bg-linear-to-r from-black to-[#6D6D6D] w-full max-w-xs py-5">Submit</Button>
                            </div>

                        </form>
                    </div>
                    <figure className="flex-1 hidden lg:flex justify-center items-center bg-[linear-gradient(90deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)] rounded-4xl">
                        <Image
                            src="/dima-phone.png"
                            alt="dima phone"
                            width={400}
                            height={500}
                        />
                    </figure>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default RequestDemoSection;