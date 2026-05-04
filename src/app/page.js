import Books from "@/components/books/Books";
import Banner from "@/components/heroSection/Banner";
import MemberShipPlan from "@/components/membership/MemberShipPlan";
import OfferSection from "@/components/offerSection/OfferSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <Books/>
      <MemberShipPlan/>
      <OfferSection/>
    </div>
  );
}
