import { DarkLayout } from '@/components/layouts/DarkLayout';
import { MainLayout } from '@/components/layouts/MainLayout';
import { ReactNode } from 'react';

export default function AboutPage(){

    return (
        <>
            <h1 className={'title'}>About Page</h1>
            <div className={'description'}>
                <br />
                <p className={'description'}>
                    <span className={'code'}>Get started</span>
                    <code className={'code'}>pages/about.js</code>
                </p>
            </div>
        </>
    )
}

AboutPage.getLayout = function getLayout(page: ReactNode){
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}