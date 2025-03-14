'use client';

import { HomePage } from "@/components/home/home-page";
export default function Page({prop}) {
    const data = prop;
    return (
        <div>
            
           
            <HomePage data={data}/>
          
        </div>
    )
}