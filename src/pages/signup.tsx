import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import googleicon from "../assets/google-icon-logo-0.jpg";
import outlookicon from "../assets/Outlook-icon-on-transparent-background-PNG.png";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md  rounded-2xl p-6 flex flex-col gap-6">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl md:text-4xl font-semibold text-[#16B365] font-mosvita">
            Sign up for an account
          </CardTitle>
          <p className="text-sm md:text-base text-gray-600">
            Securely access all the tools to simplify your business operations.
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="email"
              className="text-[16px] font-normal text-[#2E323B] font-mosvita text-left"
            >
              Email
            </Label>
            <Input
              id="email"
              placeholder="e.g. johndoe@gmail.com"
              className="h-12 border-[1.5px] border-gray-300 rounded-[8px] text-[#2E323B] placeholder:text-gray-400 font-mosvita"
            />
          </div>

          {/* <div className="flex flex-col gap-2">
            <Label
              htmlFor="password"
              className="text-[16px] font-normal text-[#2E323B] font-mosvita text-left"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="h-12 border-[1.5px] border-gray-300 rounded-[8px] text-[#2E323B] placeholder:text-gray-400 font-mosvita pr-10"
              />
              <EyeOff className="absolute right-3 top-3 w-6 h-6 text-[#2E323B]" />
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 border-gray-400 rounded"
                />
                <Label
                  htmlFor="remember"
                  className="text-[16px] font-normal text-[#2E323B] font-mosvita"
                >
                  Remember me
                </Label>
              </div>
              <a
                href="#"
                className="text-[16px] text-[#16B365] font-mosvita hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div> */}

          <Button className="w-full h-[54px] bg-[#1CE783] text-black font-semibold text-[16px] rounded-md hover:bg-[#16B365]">
            Sign up
          </Button>

          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-600 text-sm font-mosvita">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <Button
            variant="outline"
            className="w-full h-[56px] flex items-center justify-center gap-3 rounded-md text-[#2E323B] border-gray-300 bg-white hover:bg-gray-50"
          >
            <img
              src={googleicon}
              alt="Google Icon"
              className="w-5 h-5 object-contain"
            />
            Sign up with Google
          </Button>

          <Button
            variant="outline"
            className="w-full h-[56px] flex items-center justify-center gap-3 rounded-md text-[#2E323B] border-gray-300 bg-white hover:bg-gray-50"
          >
            <img
              src={outlookicon}
              alt="Outlook Icon"
              className="w-5 h-5 object-contain"
            />
            Sign up with Outlook
          </Button>
          <p className="text-center text-[15px] text-[#2E323B] font-mosvita mt-2">
            Already have an account?{" "}
            <a
              href="#"
              className="text-[#16B365] font-semibold hover:underline"
            >
              Sign in
            </a>
          </p>

          {/* <p className="text-center text-sm text-[#2E323B] font-mosvita">
            Terms of use |{" "}
            <a href="#" className="font-semibold text-[#2E323B]">
              Privacy Policy
            </a>
          </p> */}
        </CardContent>
      </Card>
    </div>
  );
}
