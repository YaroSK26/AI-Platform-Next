"use client"

import { Zap } from "lucide-react"
import { Button } from "./ui/button"
import axios from "axios"
import { useState } from "react"


interface  SubscriptionButtonProps {
    isPro: boolean
}

export const SubscriptionButton = ({isPro = false} : SubscriptionButtonProps) => {
    const [loading,setLoading ] = useState(false)
    const onClick = async () => {
        try {
            setLoading(true)
            const res = await axios.get("/api/stripe")

            window.location.href = res.data.url
        } catch (error) {
            console.log("BILLING_ERROR",error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <Button disabled={loading} variant={isPro ? "default" : "premuim"} onClick={onClick}>
            {isPro ? "Manage Subscription" : "Upgrade" }
            {!isPro && <Zap className="ml-2 fill-white w-4 h-4"/>}
        </Button>
) 
}