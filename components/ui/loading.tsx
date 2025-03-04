import { cn } from "@/lib/utils"

interface LoadingProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Loading({ className, size = "md" }: LoadingProps) {
  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent",
        {
          "h-4 w-4": size === "sm",
          "h-6 w-6": size === "md",
          "h-8 w-8": size === "lg",
        },
        "text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
} 