import { MainLayout } from "@/components/layouts/MainLayout";

export default function ContactPage(){

    return(
        <MainLayout>
            <h1 className={'title'}>Contact Page</h1>
            <br />
            <div className={'description'}>
                <p className={'description'}>
                    <span className={'code'}>Get started</span>
                    <code className={'code'}>pages/index.js</code>
                </p>
            </div>
        </MainLayout>
    )
}