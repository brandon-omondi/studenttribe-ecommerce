import Logo from "../Logo";
import Input from "./Input";
import AccountActions from "./AccountActions";
import AuthBtn from "./AuthBtn";
import AuthGraphic from "./AuthGraphic";
import { useState } from "react";
import { supabase } from "../../backend/lib/supabase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  async function signUpWithEmail() {
    //setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) alert(error.message);
    navigate('/home')
    //setLoading(false);
  }

  return (
    <>
      <div className="flex justify-center justify-items-center items-center pt-32">
        <div className="Left-col w-[50%] px-28">
          <Logo />
          <div className="flex flex-col mb-[26px]">
            <div className="text-center text-black-100 text-3xl font-bold font-['Inter'] leading-[38px]">
              Sign up to your account
            </div>
            <div className="text-center text-black-300 text-lg font-medium font-['Inter'] leading-7">
              Start your journey today!
            </div>
          </div>
          {/* Input */}
          <div>
            <Input
              inputType="text"
              label="Email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              label="Password"
              placeholder="********************"
              value={password}
              onChange={handlePasswordChange}
              inputType="password"
            />
            <AccountActions />
            <AuthBtn btnLabel="Sign Up" onClick={signUpWithEmail}/>
            <div className="w-[218px] justify-center items-center text-center">
              <span className="text-black-100 text-xs font-medium font-['Poppins'] leading-[18px]">
                Have an account?{" "}
              </span>
              <a
                href="/login"
                className="text-amber-500 text-xs font-medium font-['Poppins'] leading-[18px]"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>

        <div className="Right-col w-[50%]">
          <AuthGraphic graphicUrl="https://i.postimg.cc/3dmNSFL6/video-tutorial.png" />
        </div>
      </div>
    </>
  );
}

export default Signup;
