import Image from "next/image";
import { Card, CardContent } from "@components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      {/* Full-bleed, full-viewport image */}
      <div className="w-full relative h-screen">
        <Image
          src="/notfound.png"
          alt="Not Found"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
