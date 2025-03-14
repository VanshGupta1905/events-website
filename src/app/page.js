import Page from "./app";
async function getData() {
  const { events_categories } = await import('../../data/data.json');
  return events_categories;
}

export default async function Home() {
    const data = await getData();
    return(
      <div>
        
        <Page prop={data} />
        
     </div>
     )
}

