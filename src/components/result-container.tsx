"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"
import { Card } from "./ui/card"

export default function ResultContainer({ value, className, ...props }: React.HTMLAttributes<HTMLPreElement> & { value: string })
{
  return (
    <div className="relative w-full h-fit">
      <pre
        className={cn(
          "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 p-4 dark:bg-zinc-900",
          "font-mono text-sm",
          className
        )}
        {...props}
      >
        <code>{value}</code>
      </pre>
      <CopyButton
        value={value}
        className={cn("absolute right-4 top-4")}
      />
    </div>
  )
}
