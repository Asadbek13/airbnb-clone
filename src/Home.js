import React from "react";
import "./Home.css";

import Banner from "./Banner";
import Card from "./Card";

// ES7 snippets "rfce"
function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://i.pinimg.com/564x/8a/d6/1e/8ad61ea83560fa5d1bf76e85f2b4fbd8.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://i.pinimg.com/564x/09/8e/ed/098eedf6788dfaccb4fad2ed9804ac02.jpg"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://i.pinimg.com/564x/d1/3f/ee/d13fee1bc7686dd10151425888540004.jpg"
          title="Entire homes"
          description="Comfortable private places with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://i.pinimg.com/564x/8e/cd/28/8ecd28cce9587d834ed30940bb052826.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="$130/night"
          sna="second__row"
        />
        <Card
          src="https://i.pinimg.com/564x/b1/04/5f/b1045fdf96ef94318d120bdd917ded2d.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/night"
          sna="second__row"
        />
        <Card
          src="https://i.pinimg.com/564x/70/b2/6f/70b26f17f81a01832e995965bb2041b7.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/night"
          sna="second__row"
        />
      </div>
    </div>
  );
}

export default Home;
