import Banner from "@/components/front-office/home/Banner";
import Featured from "@/components/front-office/home/Featured";
import TopRated from "@/components/front-office/home/TopRated";
import About from "@/components/front-office/home/About";
import Questions from "@/components/front-office/home/Questions";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <Featured />
      <Questions />
      <TopRated />
    </div>
  );
}
