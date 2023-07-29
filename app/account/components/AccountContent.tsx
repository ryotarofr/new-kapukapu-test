"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

import useSubscribeModal from "@/hooks/useSubscribeModal"
import { useUser } from "@/hooks/useUser"
import { postData } from "@/libs/helpers"
import Button from "@/components/Button"


const AccountContent = () => {
  const router = useRouter()
  const subscriveModal = useSubscribeModal()
  const { isLoading, subscription, user } = useUser()


  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/')
    }
  }, [isLoading, user, router])

  const redirectToCustomerPortal = async () => {
    setLoading(true)
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link'
      })
      window.location.assign(url)
    } catch (error) {
      toast.error((error as Error).message)
    }
    setLoading(false)
  }
  return (
    <div className="mb-7 px-6">
      {!subscription && (
        <div className="flex flex-cal gap-y-4">
          <p>有効なプランに加入していません。</p>
          <Button
            onClick={subscriveModal.onOpen}
            className="w-[300px]"
          >
            今すぐ加入する。
          </Button>
        </div>
      )}
      {subscription && (
        <div className="flex flex-cal gap-y-4">
          <p>
            現在のプラン:<b>{subscription?.prices?.products?.name}</b>
          </p>
          <Button
            disabled={loading || isLoading}
            onClick={redirectToCustomerPortal}
            className="w-[300px]"
          >
            Open customer portal
          </Button>
        </div>
      )}
    </div>
  )
}

export default AccountContent