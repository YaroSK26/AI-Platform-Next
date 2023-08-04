
import { getApiLimitCount } from "@/lib/api-limit"
import MobileSidebar from "../components/MobileSiderbar"
import { UserButton } from '@clerk/nextjs'

const NavBar = async  () => {
  const apiLimitCount = await getApiLimitCount()
  return (
    <div className='flex items-center p-4'>
    
           <MobileSidebar apiLimitCount={apiLimitCount ?? 0}/>

        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/'></UserButton>
        </div>
    </div>
  )
}

export default NavBar
