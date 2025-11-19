// import { EyeOff } from "lucide-react";
// import googleicon from "../assets/google-icon-logo-0.jpg";
// export default function Signin() {
//   return (
//     <>
//       <div className="relative w-[1440px] h-[768px] rotate-0 opacity-100 bg-white">
//         <div className="absolute top-[69.5px] left-[507px] w-[500px] h-[700px] rotate-0 opacity-100 flex flex-col items-center gap-8 bg-white-100 p-4 rounded-2xl shadow-md">
//           {/* Header Section */}
//           <div className="w-full flex flex-col items-center gap-4">
//             {/* Sign In Text */}
//             <div className="w-[427px] h-[55px] rotate-0 opacity-100 text-[39px] font-semibold leading-[100%] tracking-normal text-center font-mosvita flex items-center justify-center text-[#16B365]">
//               Sign in to your account
//             </div>

//             {/* Subtitle Text */}
//             <div className="w-[323px] h-[44px] rotate-0 opacity-100 bg-white font-mosvita font-normal text-[16px] leading-[100%] tracking-normal text-center flex items-center justify-center text-black px-4 rounded-lg">
//               Securely access all the tools to simplify your business
//               operations.
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="w-full flex flex-col items-center gap-8">
//             {/* Email Field */}
//             <div className="w-full flex flex-col gap-[5px] max-w-[427px]">
//               <div className="text-[16px] font-normal leading-[100%] font-[Mosvita] text-[#2E323B] text-left">
//                 Email
//               </div>

//               <div className="w-full h-[54px] flex items-center justify-start gap-[10px] rounded-[8px] border-[1.5px] border-[var(--Gray-200,#D0D2D7)] p-4 bg-white text-[#9298A5] text-[16px] font-[Mosvita]">
//                 e.g. johndoe@gmail.com
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="w-full flex flex-col gap-2 max-w-[427px]">
//               <div className="text-[16px] font-normal leading-[100%] font-[Mosvita] text-[#2E323B] text-left">
//                 Password
//               </div>

//               <div className="w-full h-[56px] flex items-center justify-between gap-[10px] rounded-[8px] border-[1.5px] border-[var(--Gray-200,#D0D2D7)] p-4 bg-white text-[16px] font-[Mosvita] text-[#9298A5]">
//                 Password
//                 <EyeOff className="w-6 h-6 text-[#2E323B]" />
//               </div>

//               <div className="w-full flex items-center justify-between mt-2">
//                 <div className="flex items-center gap-2">
//                   <div className="w-[15px] h-[15px] rounded-[2px] border border-[var(--Gray-200,#9298A5)]"></div>
//                   <div className="text-[16px] font-normal font-[Mosvita] text-[#2E323B]">
//                     Remember me
//                   </div>
//                 </div>

//                 <div className="text-[16px] font-normal font-[Mosvita] text-[#16B365] cursor-pointer hover:underline">
//                   Forgot Password?
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bellow Section */}
//           <div className="w-full flex flex-col items-center gap-4">
//             <div className="w-full flex flex-col gap-4">
//               <button className="w-[427px] h-[54px] rotate-0 opacity-100 flex items-center justify-center gap-2 rounded-[4px] py-4 px-6 bg-[var(--Surface-Default,#1CE783)] text-white font-semibold text-[16px] leading-none transition-none">
//                 Sign In
//               </button>

//               <div className="w-[427px] h-[22px] flex items-center gap-6 rotate-0 opacity-100">
//                 <div className="w-[182.5px] h-[0px] border border-[var(--Gray-300,#B4B7BF)]"></div>
//                 <div className="text-[16px] font-normal leading-[100%] tracking-normal text-center font-[Mosvita] text-[#2E323B]">
//                   or
//                 </div>
//                 <div className="w-[182.5px] h-[0px] border border-[var(--Gray-300,#B4B7BF)]"></div>
//               </div>

//               <button className="w-[427px] h-[56px] flex items-center justify-center gap-2 rounded-[4px] border border-[var(--Gray-300,#B4B7BF)] py-4 px-6 bg-white text-[#2E323B] font-semibold text-[16px] leading-none transition-none">
//                 <img src={googleicon} alt="Google Icon" className="w-10 h-5" />
//                 Sign in with Google
//               </button>
//             </div>
//           </div>

//           <div className="w-full flex items-center justify-center gap-4">
//             <p className="text-[15px] font-normal leading-none font-[Mosvita] text-[#2E323B]">
//               Don’t have an account?{" "}
//               <a
//                 href="#"
//                 className="text-[#16B365] font-semibold hover:underline"
//               >
//                 Sign up
//               </a>
//             </p>
//           </div>

//           <div className="w-full flex items-center justify-center gap-4">
//             <p className="text-[15px] font-normal leading-none font-[Mosvita] text-[#2E323B]">
//               Terms of use |{" "}
//               <a href="#" className="text-[#2E323B] font-semibold">
//                 Privacy Policy
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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
import googleicon from "../assets/google-icon-logo-0.jpg";

export default function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md  rounded-2xl p-6 flex flex-col gap-6">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl md:text-4xl font-semibold text-[#16B365] font-mosvita">
            Sign in to your account
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

          <div className="flex flex-col gap-2">
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
          </div>

          <Button className="w-full h-[54px] bg-[#1CE783] text-white font-semibold text-[16px] rounded-md hover:bg-[#16B365]">
            Sign In
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
            Sign in with Google
          </Button>

          <p className="text-center text-[15px] text-[#2E323B] font-mosvita mt-2">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-[#16B365] font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>

          <p className="text-center text-sm text-[#2E323B] font-mosvita">
            Terms of use |{" "}
            <a href="#" className="font-semibold text-[#2E323B]">
              Privacy Policy
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
