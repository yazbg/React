const StaticComponent = () => {
    const items = [
        {
            id: 1,
            name: "Item 1",
            description: "Description 1",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description 2",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description 3",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
        },
    ];

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default StaticComponent;