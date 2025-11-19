import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { TickCircle } from "iconsax-react";

export default function ResetSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md  rounded-2xl p-6 flex flex-col gap-6">
        <CardHeader className="text-center space-y-2">
          <div className="w-full flex items-center justify-center">
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-[var(--Surface-Subtle,#F2FDF5)] p-10">
              <TickCircle variant="Bold" size="80" color="#16B365" />
            </div>
          </div>

          <CardTitle className="text-3xl md:text-4xl font-semibold text-[#16B365] font-mosvita">
            Password Reset Successful!
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base text-gray-600">
              Your password has been reset successfully! Please sign in to
              Inception Force with your new password
            </p>
          </div>

          <Button className="w-full h-[54px] bg-[#1CE783] text-black font-semibold text-[16px] rounded-md hover:bg-[#16B365]">
            Continue to Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
