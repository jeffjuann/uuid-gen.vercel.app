
import ResultContainer from '@/components/result-container'
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils';
import Axios from 'axios';
import Link from 'next/link';

export default async function Home()
{
  const res = await Axios.get(`${process.env.NEXT_PUBLIC_URL}/api/uuid`).then(res => res.data);
  
  return (
    <main className="h-full grid place-items-center p-8">
      <Card className='max-w-[430px]'>
        <CardHeader>
          <CardTitle>Page Unavailable</CardTitle>
          <CardDescription>Sorry, this page is unavailable</CardDescription>
        </CardHeader>
        <CardContent>
          <Link className={cn(buttonVariants({ variant: 'outline' }), 'w-full p-4 text-sm')} href={'/'}>Back to Home</Link>
        </CardContent>
      </Card>
    </main>
  )
}
