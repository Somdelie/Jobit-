import Banner from "@/components/front-office/home/Banner";

export default function Home({ currentUser }) {
  console.log(currentUser);
  return (
    <div className="">
      <Banner />
    </div>
  );
}
