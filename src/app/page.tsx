
import ResultContainer from '@/components/result-container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { randomUUID } from 'crypto'

export default function Home()
{
  return (
    <main className="w-full h-full grid place-items-center p-12">
      <Card>
        <CardHeader>
          <CardTitle>UUID-GEN</CardTitle>
          <CardDescription>Welcome to UUID-GEN. Your Ultimate Generator for UUID</CardDescription>
        </CardHeader>
        <CardContent>
          <ResultContainer value={randomUUID()}/>
        </CardContent>
      </Card>
    </main>
  )
}
