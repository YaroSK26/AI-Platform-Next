"use client"

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

interface MobileSidebarProps  {
  apiLimitCount: number
  isPro: boolean
}

const MobileSidebar = ({
  apiLimitCount = 0 , isPro = false
}: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        {windowWidth < 768 && (
          <Button variant="ghost" size="icon">
            <Menu className="hidden-medium" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideBar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
