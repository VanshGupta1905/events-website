import Link from 'next/link';
import Image from 'next/image';
import { EventsPage } from '@/components/events/event-page';
const Page = async () => {  
    const data = await getData();  // Get the data
    
    return (
        
            <EventsPage data={data}/>
        
    )
}

export default Page

async function getData() {
    const { events_categories } = await import('../../../data/data.json');
    return events_categories;
}


