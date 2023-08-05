import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar"
import { getApiLimitCount } from "@/lib/api-limit"
import { CheckSubscription } from "@/lib/subscription";

const DashboardLayout =  async ({children} : {children: React.ReactNode} ) => {

  const apiLimitCount = await getApiLimitCount()
  const isPro = await CheckSubscription();

  return (
    <div className="h-full relative">
        
            <div className="hidden h-full md:flex md:w-72  md:flex-col md:fixed md:inset-y-0  bg-gray-900">
                    <SideBar isPro={isPro} apiLimitCount={apiLimitCount ?? 0}></SideBar>
            </div>
            <main className="md:pl-72">
              <NavBar></NavBar>
                {children}
            </main>
    </div>
  )
}

export default DashboardLayout
