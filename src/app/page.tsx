
import ResultContainer from '@/components/result-container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Axios from 'axios';

export default async function Home()
{
  const res = await Axios.get(`${process.env.NEXT_PUBLIC_URL}/api/uuid`).then(res => res.data);
  
  return (
    <main className="h-full grid place-items-center m-8">
      <Card className='max-w-[430px]'>
        <CardHeader>
          <CardTitle>UUID-GEN</CardTitle>
          <CardDescription>Welcome to UUID-GEN. Your Ultimate Generator for UUID</CardDescription>
        </CardHeader>
        <CardContent>
          <ResultContainer value={res}/>
        </CardContent>
      </Card>
    </main>
  )
}
