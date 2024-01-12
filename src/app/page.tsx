import { CopyButton } from '@/components/copy-button'
import ResultContainer from '@/components/result-container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Home()
{
  return (
    <main className="w-full h-full grid place-items-center p-12">
      <Card>
        <CardHeader>
          <CardTitle>Page Unavailable</CardTitle>
          <CardDescription>Sorry, this website is currently under development</CardDescription>
        </CardHeader>
      </Card>
    </main>
  )
}
