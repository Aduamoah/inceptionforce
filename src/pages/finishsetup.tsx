import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function FinishSetup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md  rounded-2xl p-6 flex flex-col gap-6">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl md:text-4xl font-semibold text-[#16B365] font-mosvita">
            Verification Successful!
          </CardTitle>
          <p className="text-sm md:text-base text-gray-600">
            Thank you for signing up. Complete the following details to finish
            setting up your account
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="companyname"
              className="text-[16px] font-normal text-[#2E323B] font-mosvita text-left"
            >
              Company Name
            </Label>
            <Input
              id="companyname"
              placeholder="e.g. Johnny Trust"
              className="h-12 border-[1.5px] border-gray-300 rounded-[8px] text-[#2E323B] placeholder:text-gray-400 font-mosvita"
            />
          </div>

          <Button className="w-full h-[54px] bg-[#1CE783] text-black font-semibold text-[16px] rounded-md hover:bg-[#16B365]">
            Complete Sign Up
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
