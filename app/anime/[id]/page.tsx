import AnimeDetails from "@/components/containers/AnimesDetails";


interface PageProps {
    params: {
        id: string;
    };
}

export default function AnimeDetailsPage({ params }: PageProps) {
    return <AnimeDetails id={params.id} />;
}
