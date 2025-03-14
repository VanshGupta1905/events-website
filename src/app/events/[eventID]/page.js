import CatEvent from '@/components/events/catEvent';
export const dynamicParams = false

const Page = async ({ params }) => {  
    const { eventID } = await params;
    const data = await getData(eventID);
    
    return (<CatEvent data={data} eventID={eventID} />)
}

export default Page

export async function generateStaticParams() {
    const { events_categories } = await import('../../../../data/data.json');
    const allPaths= events_categories.map((event) => ({
        eventID: event.id.toString(),
    }));
 
    return allPaths
    
}
export async function getData(eventID) {
    const { allEvents } = await import('../../../../data/data.json');
    const eventData = allEvents.filter((ev) => ev.city === eventID);
    return eventData;
}