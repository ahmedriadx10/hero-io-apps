

import { use } from "react";
import AppCard from "../../ui/AppCard";
import { useNavigate } from "react-router";

const TrendingApp = ({appDataPromise}) => {

  const appsData=use(appDataPromise)

  const showEightApps=appsData.slice(0,8)

const navigate=useNavigate()


  return (
    <section className="mt-20 max-w-7xl mx-auto w-[90%] ">

      <div className="space-y-4 text-center">
        <h2 className="text-[#001931] font-bold text-5xl">Trending Apps</h2>
        <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
      </div>


<section className="my-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

{showEightApps.map(item=><AppCard appsData={item} key={item.id} ></AppCard>)}


</section>

<div className="flex justify-center "><button className="btn bg-linear-[160deg,#632EE3,#9F62F2] text-white font-semibold" onClick={()=>navigate('/apps')}>Show All</button></div>

      
    </section>
  );
};

export default TrendingApp;


/**
 * {
    "image": "https://i.pinimg.com/736x/db/bb/57/dbbb57e4a4dd74be71504cdbac7a3095.jpg",
    "title": "TikTok",
    "companyName": "TikTok Pte. Ltd.",
    "id": 4,
    "description": "TikTok is the destination for mobile videos. Create short-form videos that are exciting, spontaneous, and genuine. Whether you're a sports fan, a pet lover, or just looking for laughter, there's something for everyone on TikTok. Discover millions of creators, participate in challenges, and share your creativity with the world.",
    "size": 180,
    "reviews": "45000K",
    "ratingAvg": 4.4,
    "downloads": "3000M",
    "ratings": [
        {
            "name": "1 star",
            "count": 3000000
        },
        {
            "name": "2 star",
            "count": 5000000
        },
        {
            "name": "3 star",
            "count": 7000000
        },
        {
            "name": "4 star",
            "count": 13000000
        },
        {
            "name": "5 star",
            "count": 17000000
        }
    ]
}
 */