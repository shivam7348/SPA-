import React from "react";
import HealthCardsList from "../../../HealthList/HealthCardsList";
import Banner from "../../../banner/Banner";

const conetnt = "Labratory management System";

const img = "https://img.freepik.com/free-photo/side-view-science-woman_23-2148581261.jpg?t=st=1735387919~exp=1735391519~hmac=4b087ba3c92793812e1750b043730dc548b5294e59e7cbb9fbe6fae8d5e33d5e&w=1380"
function LabratorymanagementSystem() {
  return (
    <>
      <Banner data={conetnt} img={img} />

      <HealthCardsList img={img} />
    </>
  );
}

export default LabratorymanagementSystem;
