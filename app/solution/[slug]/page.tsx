type SolutionPageProps = {
    params: Promise<{ slug: string }>
}

async function SolutionPage({ params }: SolutionPageProps) {
    const name = (await params).slug;
    return (
        <main>
            solution page, {name}
        </main>
    );
}

export default SolutionPage;