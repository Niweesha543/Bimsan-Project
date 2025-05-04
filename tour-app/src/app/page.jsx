import VideoSlider from "./components/videoSlider";
import PlanButton from "./components/button";
import DestinationCard from "./components/destinationCards";
import Packages from "./components/packageCard";
import MemberBenefits from "./components/memberBenefitCards";
import TestimonialCarousel from "./components/testimonial ";
import TravelInspirationSection from "./components/dayTours";
import Navbar from "./components/navBar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <VideoSlider />

      <div className="text-center px-4 py-12 max-w-3xl mx-auto text-black">
        <p className="text-4xl font-serif  mb-4">The Global Circle of Discerning Travellers </p>
        <p className="font-sans text-base pb-6">
          BimsanTuors is the exclusive haven for luxury travel enthusiasts.
          Discover curated escapes, reserve extraordinary experiences, and
          engage with a community that shares your passion for refined journeys.
        </p>
      <PlanButton/>
     
      </div>
      <DestinationCard/>
    
    <div>
    <p className="text-4xl font-serif mb-1 text-center px-4 py-12 max-w-3xl mx-auto text-black">Our Packages </p>
    <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>
    <Packages/>
    <TestimonialCarousel/>
    <MemberBenefits/>
   <TravelInspirationSection/>

    </div>
  </div>
  );
}
