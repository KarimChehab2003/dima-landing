type CollapsibleInfoCardProps = {
    index: number;

}

function CollapsibleInfoCard() {
    return (
        <article className="relative flex flex-col justify-center p-6 border rounded-xl bg-white basis basis-1/3 hover:basis-2/3 transition-all duration-300">
            <span className="absolute top-0 left-0">01</span>
            <h3>full tracking</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis dicta sapiente cum hic? Mollitia doloribus illo in delectus aspernatur fuga architecto nihil quidem dicta placeat. Sint aut magni aperiam?</p>
        </article>
    );
}

export default CollapsibleInfoCard;