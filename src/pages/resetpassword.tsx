import { EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md  rounded-2xl p-6 flex flex-col gap-6">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl md:text-4xl font-semibold text-[#16B365] font-mosvita">
            Reset Password
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="newpassword"
              className="text-[16px] font-normal text-[#2E323B] font-mosvita text-left"
            >
              New Password
            </Label>
            <div className="relative">
              <Input
                id="newpassword"
                type="password"
                placeholder="Password"
                className="h-12 border-[1.5px] border-gray-300 rounded-[8px] text-[#2E323B] placeholder:text-gray-400 font-mosvita pr-10"
              />
              <EyeOff className="absolute right-3 top-3 w-6 h-6 text-[#2E323B]" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="confirmpassword"
              className="text-[16px] font-normal text-[#2E323B] font-mosvita text-left"
            >
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmpassword"
                type="password"
                placeholder="Password"
                className="h-12 border-[1.5px] border-gray-300 rounded-[8px] text-[#2E323B] placeholder:text-gray-400 font-mosvita pr-10"
              />
              <EyeOff className="absolute right-3 top-3 w-6 h-6 text-[#2E323B]" />
            </div>
          </div>

          <Button className="w-full h-[54px] bg-[#1CE783] text-white font-semibold text-[16px] rounded-md hover:bg-[#16B365]">
            Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
