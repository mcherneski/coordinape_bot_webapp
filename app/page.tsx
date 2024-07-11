'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { retrieveLaunchParams } from '@telegram-apps/sdk-react'

export default function Home() {
  const [count, setCount] = useState(0)
  const { initData } = retrieveLaunchParams()

  console.log('initData', initData)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Coordinape Bot</h1>
        <p>Counter: {count}</p>
        <Button variant='default' size='lg' onClick={() => setCount(count + 1)}>Increase Counter</Button>
      </main>
    )
}
