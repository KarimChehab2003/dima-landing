
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-dvh bg-gray-50 text-gray-800 p-4">

            <h1 className="text-7xl font-extrabold mb-4 text-primary">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-center mb-6 max-w-md">
                Sorry, the page you&apos;re looking for doesn&apos;t exist, may have been removed, or the URL is incorrect.
            </p>

            <div className="flex gap-4">
                <Link href="/">
                    <Button className="p-4 rounded-md">
                        Go Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
