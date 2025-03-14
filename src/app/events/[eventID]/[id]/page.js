import SingleEvent from '@/components/events/single-event';
export const dynamicParams = false
const Page = async ({ params }) => {  
    const data = await getData(await params);
    
    if (!data) {
        return <div>Event not found</div>;
    }
    
    return (
       <SingleEvent data={data}/>
    )
}

export default Page;

export async function generateStaticParams() {
    const { allEvents } = await import('../../../../../data/data.json');
    const allPaths = allEvents.map((event) => ({
        eventID: event.city,
        id: event.id.toString(),
    }));
    
    return allPaths;
}

export async function getData(params) {
    const { allEvents } = await import('../../../../../data/data.json');
    const id = params.id;
    const eventData = allEvents.find((event) => event.id === id);
    return eventData;    
}