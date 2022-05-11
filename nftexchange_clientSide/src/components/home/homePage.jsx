import "../../styles/common.css";
import { Banner1 } from "./banner1";
import { Carousel } from "./dropCarousel";
import { CatCarousel } from "./categoryCarousel";
import { InfoBanner } from "./infoBanner";
import { ResourceCard } from "./ResourceCard";
import { CatCard } from "./CategoryCard";

export const HomePage = () => {
  return (
    <>
      <Banner1 />

      <Carousel />
      <CatCarousel />
      <InfoBanner />
      <ResourceCard />
      <CatCard />
    </>
  );
};
