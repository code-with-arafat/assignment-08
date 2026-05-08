import Books from "@/components/books/Books";
import Banner from "@/components/heroSection/Banner";
import MarqueeLine from "@/components/marquee/MarqueeLine";
import MemberShipPlan from "@/components/membership/MemberShipPlan";
import OfferSection from "@/components/offerSection/OfferSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <MarqueeLine/>
      <Banner/>
      <Books/>
      <MemberShipPlan/>
      <OfferSection/>
      
    </div>
  );
}
