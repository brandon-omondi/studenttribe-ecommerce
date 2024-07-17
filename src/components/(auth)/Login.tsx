
import Logo from '../Logo'
import Input from './Input'
import AccountActions from './AccountActions'
import AuthBtn from './AuthBtn'
import AuthGraphic from './AuthGraphic'

function Login() {
  return (
    <>
    <div className='flex justify-center justify-items-center items-center pt-32'>
        <div className='Left-col w-[50%] px-28'>
          <Logo/>
          <div className='flex flex-col mb-[26px]'>
            <div className="text-center text-zinc-100 text-3xl font-bold font-['Inter'] leading-[38px]">Sign in to your account</div>
            <div className="text-center text-zinc-300 text-lg font-medium font-['Inter'] leading-7">Start your journey today!</div>
          </div>
          {/* Input */}
          <div>
            <Input label='Email' placeholder='example@gmail.com'/>
            <Input label='Password' placeholder='********************'/>
            <AccountActions/>
            <AuthBtn btnlabel='Log In' />
            <div className="w-[218px] justify-center items-center text-center"><span className="text-zinc-100 text-xs font-medium font-['Poppins'] leading-[18px]">Don’t have an account? </span><span className="text-amber-500 text-xs font-medium font-['Poppins'] leading-[18px]">Sign up</span></div>
          </div>
        </div>


        <div className='Right-col w-[50%]'>
          <AuthGraphic graphicUrl='https://i.postimg.cc/3dmNSFL6/video-tutorial.png'/>
        </div>
    </div>
    </>
  )
}

export default Login