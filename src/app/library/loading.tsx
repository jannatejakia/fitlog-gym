import LogsCardSkeleton from "@/components/shared/LogsCardSkeleton";

const Loading = () => {
    return (
        <section className="container mx-auto w-full px-4 py-8">
            <div className="mb-8 text-center">
                <div className="mx-auto h-8 w-40 animate-pulse rounded bg-[#e5e5e5]" />
                <div className="mx-auto mt-3 h-4 w-72 animate-pulse rounded bg-[#eeeeee]" />
            </div>
            
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <LogsCardSkeleton key={index} />
                ))}
            </div>
        </section>
    );
};

export default Loading;