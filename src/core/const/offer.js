import { ReactComponent as Path1 } from "../../assets/images/offers/path1.svg";
import { ReactComponent as Path2 } from "../../assets/images/offers/path2.svg";
import { ReactComponent as Path3 } from "../../assets/images/offers/path3.svg";
import { ReactComponent as Path4 } from "../../assets/images/offers/path4.svg";

const offerData = [
  {
    id: "001",
    descr: (
      <p className="offer__text">
        <b>A world-class custom app</b> valued at $200,000 USD built from
        scratch by our team of experienced coders at 7 glyphs who have created
        some of the most successful fitness apps on the market.
      </p>
    ),
    path: Path1,
  },
  {
    id: "002",
    descr: (
      <p className="offer__text">
        <b>$500,000 USD Cash Payment</b> up front once the deal is sorted. We
        will instantly send you the full sign-on bonus in cash to your bank
        account. No caveats.
      </p>
    ),
    path: Path2,
  },
  {
    id: "003",
    descr: (
      <p className="offer__text">
        <b>A majority share of the profits</b> from the app. You will keep most
        of the revenue the app generates without any cost to you.
      </p>
    ),
    path: Path3,
  },
  {
    id: "004",
    descr: (
      <p className="offer__text">
        <b>Our expert management team</b> with over 10 years of experience in
        growing apps through marketing, advertising, customer relations, email
        campaigns and data analysis.
      </p>
    ),
    path: Path4,
  },
  {
    id: "005",
    descr: (
      <p className="offer__text">
        And you <b>keep your brand</b>. We want to join, not take over. Your
        brand is still owned by you.
      </p>
    ),
  },
];

export default offerData;
