import axios from 'axios';
import Category from '@/components/Category';
import { toast } from 'react-toastify';



export async function fetchdata() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products",{cache:"force-cache"});
    const fetchedData =await response.data;
    return fetchedData
  
  } catch (error) {
    toast.error("Error fetching data");
    return {
     error:true
    };
  }
}

const Page = async() => {
  const initialData=await fetchdata()
 
  return (
    <div >
      
   <Category initialData={initialData}/>
  </div>
  );
};



export default Page;