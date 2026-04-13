import { Suspense } from "react";
import Hero from "../../components/hero/Hero";
import Stats from "../../components/stats/Stats";
import TrendingApp from "../../components/trending-apps/TrendingApp";


const getAppsDataPromise=fetch('/data.json').then(res=>res.json())


const Homepage = () => {
  return (
    <section className="py-20">
   
<Hero/>
<Stats/>

<Suspense fallback={<p>Loading Data...</p>}>
  <TrendingApp appDataPromise={getAppsDataPromise} />
</Suspense>
    </section>
  );
};

export default Homepage;