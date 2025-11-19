import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

export default function ResetPasswordMessage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md  rounded-2xl p-6 flex flex-col gap-6">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl md:text-4xl font-semibold text-[#16B365] font-mosvita">
            Recover your password
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
              Follow the link provided in the email to recover your password. If
              you don’t see the mail, you may need to check your spam folder
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
