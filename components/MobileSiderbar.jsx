"use client";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";

const MobileSiderbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon "></Button>
        <Menu className="hidden-medium"></Menu>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideBar></SideBar>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSiderbar;
