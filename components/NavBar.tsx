
import { getApiLimitCount } from "@/lib/api-limit"
import MobileSidebar from "../components/MobileSiderbar"
import { UserButton } from '@clerk/nextjs'
import { CheckSubscription } from "@/lib/subscription"

const NavBar = async  () => {
  const apiLimitCount = await getApiLimitCount()
  const isPro = await CheckSubscription()
  return (
    <div className='flex items-center p-4'>
    
           <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount ?? 0}/>

        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/'></UserButton>
        </div>
    </div>
  )
}

export default NavBar
