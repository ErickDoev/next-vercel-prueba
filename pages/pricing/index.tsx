import { DarkLayout } from "@/components/layouts/DarkLayout"
import { MainLayout } from "@/components/layouts/MainLayout"
import { ReactElement } from "react"

export default function PricingPage () {
  return (
    <>
        <h1 className={'title'}>Pricing Page</h1>
        <div className={'description'}>
            <br />
            <p className={'description'}>
                <span className={'code'}>Get started</span>
                <code className={'code'}>pages/pricing.js</code>
            </p>
        </div>
    </>
  )
}

PricingPage.getLayout = function getLayout(page: ReactElement){
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}