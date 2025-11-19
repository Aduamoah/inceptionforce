import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { SmsTracking } from "iconsax-react";

export default function EmailVerify() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md  rounded-2xl p-6 flex flex-col gap-6">
        <CardHeader className="text-center space-y-2">
          <div className="w-full flex items-center justify-center">
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-[var(--Surface-Subtle,#F2FDF5)] p-10">
              <SmsTracking size="80" color="#16B365" />
            </div>
          </div>

          <CardTitle className="text-3xl md:text-4xl font-semibold text-[#16B365] font-mosvita">
            Verify your email
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base text-gray-600">
              We have sent an email to{" "}
              <span className="text-[#16B365]">worlako@inceptionforce.com</span>
              . You need to verify your email to continue.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base text-gray-600">
              Follow the link provided in the email to complete your
              registration. If you don’t see the mail, you may need to check
              your spam folder
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base text-gray-600">
              Still can't find the mail
            </p>
          </div>

          <Button className="w-full h-[54px] bg-[#1CE783] text-black font-semibold text-[16px] rounded-md hover:bg-[#16B365]">
            Resend email
          </Button>
          <p className="text-center text-[15px] text-[#2E323B] font-mosvita mt-2">
            Need help?{" "}
            <a
              href="#"
              className="text-[#16B365] font-semibold hover:underline"
            >
              Contact us
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
