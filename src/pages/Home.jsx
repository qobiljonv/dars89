import CookTime from "./CookTime";
import PremTime from "./PremTime";

function Home() {
  return (
    <>
      <div>Home</div>
      <div className="home__box">
        <PremTime />
        <CookTime />
      </div>
      <div>
        <img
          src="./images/quinoa-veggie-bowl-large.webp"
          alt=""
          width={360}
          height={360}
        />
      </div>
    </>
  );
}

export default Home;
