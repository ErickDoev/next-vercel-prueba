import { MainLayout } from '@/components/layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className={'title'}>Home Page</h1>
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
