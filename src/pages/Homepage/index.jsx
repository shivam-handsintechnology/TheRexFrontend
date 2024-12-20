import About from "@/components/pages/home/about-us"
import Contact from "@/components/pages/home/contact-us"
import Edtech from "@/components/pages/home/ed-tech"
import HomeBanner from "@/components/pages/home/home-banner"
import JobSection from "@/components/pages/home/job-section"
import LatestUpdates from "@/components/pages/home/latest-updates"
import Blogs from "@/components/pages/home/our-blogs"
import Service from "@/components/pages/home/our-services"
import WhyChooseUs from "@/components/pages/home/why-choose-us"
import API_URL from "@/services/config"
import { useEffect, useState } from "react"

const Homepage = () => {

  const [clientIp, setClientIp] = useState(null);

  useEffect(() => {
    const fetchClientIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ip = data.ip;

        if (ip) {
          setClientIp(ip);

          // Send IP to the backend for tracking
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ip })
          };

          const response = await fetch(`${API_URL}/api/getclientip`, requestOptions);
          const result = await response.json();
          // console.log('IP logged:', result);
        }
      } catch (error) {
        console.error('Error fetching or logging IP:', error);
      }
    };

    fetchClientIp();
  }, []); 

  return (
    <div>
      <HomeBanner/>
      <About />
      <WhyChooseUs/>
      <Service/>
      <Edtech/>
      <Blogs />
      <LatestUpdates/>
      {/* <Testimonails/> */}
      <JobSection/>
      <Contact/>
    </div>
  )
}

export default Homepage
