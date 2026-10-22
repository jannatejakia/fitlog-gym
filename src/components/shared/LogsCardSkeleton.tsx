const LogsCardSkeleton = () => {
    return (
        <article className="overflow-hidden rounded-xl border border-[#292d35] bg-[#15171c] text-white">
            <div className="h-[215px] w-full animate-pulse bg-[#22252c]" />

            <div className="px-5 py-5">
                <div className="mb-4 flex flex-wrap gap-2">
                    <div className="h-5 w-14 animate-pulse rounded-full bg-[#2a2e36]" />
                    <div className="h-5 w-16 animate-pulse rounded-full bg-[#2a2e36]" />
                </div>

                <div className="h-5 w-40 animate-pulse rounded bg-[#2a2e36]" />

                <div className="mt-2 h-3 w-24 animate-pulse rounded bg-[#2a2e36]" />

                <div className="mt-6 flex items-center gap-4 rounded-sm border border-base-content/10 p-2">
                    <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 animate-pulse rounded bg-[#2a2e36]" />
                        <div className="h-3 w-12 animate-pulse rounded bg-[#2a2e36]" />
                    </div>

                    <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 animate-pulse rounded bg-[#2a2e36]" />
                        <div className="h-3 w-14 animate-pulse rounded bg-[#2a2e36]" />
                    </div>

                    <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 animate-pulse rounded bg-[#2a2e36]" />
                        <div className="h-3 w-7 animate-pulse rounded bg-[#2a2e36]" />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default LogsCardSkeleton;