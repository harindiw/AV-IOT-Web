import "animate.css";
import "./Banner.css";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Review } from "./Review";
import { Explore } from "../Consultation/Explore";
import { Banner } from "./Banner";
import { Stories } from "./Stories";
import { Stats } from "./Stats";


// import './Myimage.css'


export const Home = () => {

  return (
  <div>

<Banner />
<Stats />
{/* <Features /> */}
<Stories />
<Review />

</div>
  );
};