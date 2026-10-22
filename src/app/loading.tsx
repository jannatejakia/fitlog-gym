import LogsCardSkeleton from "@/components/shared/LogsCardSkeleton";

const Loading = () => {
    return (
        <section className="container mx-auto w-full px-4 py-8">   
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <LogsCardSkeleton key={index} />
                ))}
            </div>
        </section>
    );
};

export default Loading;