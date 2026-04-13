import downloadImg from '../assets/images/icon-downloads.png'
import ratingImg from '../assets/images/icon-ratings.png'
const AppCard = ({appsData}) => {

const {downloads,ratingAvg,title,image} =appsData

  return (
    <div className='flex flex-col justify-between rounded-lg shadow p-4 space-y-4'>
      
      <div className="rounded-md h-75 flex justify-center  overflow-hidden">
        <img src={image} alt={title} className='h-70 object-contain  rounded-sm' />
      </div>

<h6 className="text-[#001931] font-medium text-xl ">{title}</h6>

<div className='flex justify-between items-center'>

<div className='badge font-medium items-center gap-1.5  rounded-md bg-[#F1F5E8] text-[#00D390]'>
  <img src={downloadImg} className='h-4' alt="download img" />
<span>{downloads}</span>
</div>
<div className='badge font-medium items-center gap-1.5 rounded-md bg-[#FFF0E1] text-[#FF8811] '>
  <img src={ratingImg} alt="rating img" className='h-4' />

<span>{ratingAvg}</span>
</div>
</div>

    </div>
  );
};

export default AppCard;