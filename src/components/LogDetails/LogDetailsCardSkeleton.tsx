const LogDetailsSkeleton = () => {
    return (
        <article className="mx-auto my-10 grid h-[797px] w-full max-w-[1232px] grid-cols-[520px_520px] items-start justify-center gap-[56px] text-white">
            <div className="h-[600px] w-[520px] animate-pulse rounded-xl border border-[#29313d] bg-[#1d2027]" />

            <div className="flex h-[610px] min-w-0 flex-col justify-between">
                <div>
                    <div className="h-9 w-80 animate-pulse rounded bg-[#2a2e36]" />

                    <div className="mt-3 space-y-2">
                        <div className="h-3 w-full animate-pulse rounded bg-[#2a2e36]" />
                        <div className="h-3 w-4/5 animate-pulse rounded bg-[#2a2e36]" />
                    </div>

                    <div className="mt-3 flex gap-2">
                        <div className="h-5 w-14 animate-pulse rounded-full bg-[#2a2e36]" />
                        <div className="h-5 w-16 animate-pulse rounded-full bg-[#2a2e36]" />
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#29313d] bg-[#151922]">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between px-4 py-2 ${
                                index !== 6 ? 'border-b border-[#29313d]' : ''
                            }`}>
                            <div className="h-2.5 w-20 animate-pulse rounded bg-[#2a2e36]" />
                            <div className="h-2.5 w-24 animate-pulse rounded bg-[#2a2e36]" />
                        </div>
                    ))}
                </div>

                <div>
                    <div className="h-4 w-24 animate-pulse rounded bg-[#2a2e36]" />

                    <div className="mt-2 space-y-2">
                        <div className="h-3 w-full animate-pulse rounded bg-[#2a2e36]" />
                        <div className="h-3 w-11/12 animate-pulse rounded bg-[#2a2e36]" />
                        <div className="h-3 w-4/5 animate-pulse rounded bg-[#2a2e36]" />
                        <div className="h-3 w-10/12 animate-pulse rounded bg-[#2a2e36]" />
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="h-9 w-36 animate-pulse rounded bg-[#2a2e36]" />
                    <div className="h-9 w-28 animate-pulse rounded bg-[#2a2e36]" />
                </div>
            </div>
        </article>
    );
};

export default LogDetailsSkeleton;