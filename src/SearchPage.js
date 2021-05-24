import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";

import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 august to 30 august - 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://i.pinimg.com/564x/c2/cd/35/c2cd352d7d85be0a06b45ec4aaed1e6c.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - WiFi - Kitchen - Free parking - Washing machine"
        star={4.7}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://i.pinimg.com/564x/db/a4/90/dba490e273a27ee29919f2148ee7e3c8.jpg"
        location="Private room in center of London"
        title="Independant luxury studio apartment"
        description="2 guests - 3 bedroom - 1 bed - 1.5 shared bathrooms - WiFi - Kitchen"
        star={4.3}
        price="$40 / night"
        total="$157 total"
      />
      <SearchResult
        img="https://i.pinimg.com/564x/a6/ee/72/a6ee728c5db1e9fa37b7ae4f5799d918.jpg"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - WiFi - Kitchen - Free parking - Washing machine"
        star={4.1}
        price="$55 / night"
        total="$320 total"
      />
      <SearchResult
        img="https://i.pinimg.com/564x/a2/5e/69/a25e69eccc4b781732e2b5a7fa2516f8.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - WiFi - Kitchen - Free parking - Dry cleaning"
        star={5}
        price="$70 / night"
        total="$400 total"
      />
      <SearchResult
        img="https://i.pinimg.com/564x/91/e9/25/91e925f87a60d43e6c7a8a8a68aed373.jpg"
        location="Private room in center of London"
        title="5 star Luxury Apartment"
        description="3 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - WiFi - Kitchen - Free parking - Washing machine"
        star={3.8}
        price="$90 / night"
        total="$500 total"
      />
      <SearchResult
        img="https://i.pinimg.com/564x/5e/b1/12/5eb1125afa379235c75101add48bed5a.jpg"
        location="Private room in center of London"
        title="The Blue room in London"
        description="2 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - WiFi - Kitchen - Free parking"
        star={4.2}
        price="$50 / night"
        total="$300 total"
      />
    </div>
  );
}

export default SearchPage;
