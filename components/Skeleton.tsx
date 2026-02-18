'use client';

import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-muted/50",
                className
            )}
        />
    );
};

export const CardSkeleton = () => (
    <div className="glass p-6 rounded-2xl border space-y-4">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
        </div>
    </div>
);

export const TableSkeleton = () => (
    <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-4 items-center">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-6 flex-1" />
                <Skeleton className="h-6 w-24" />
            </div>
        ))}
    </div>
);
