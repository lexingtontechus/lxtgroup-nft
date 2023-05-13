import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAppleWhole,faSeedling,faVialCircleCheck,faBuildingColumns,faMoneyBillTrendUp,faChartLine,faTruckFast,faPrescription,faVanShuttle,faTruckRampBox} from "@fortawesome/free-solid-svg-icons";

//import showcaseImgOne from "https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/biotech.png";
//import showcaseImgTwo from "https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/biotech.png";

const showcaseOne = {
  title: "BIO TECHNOLOGY",
  desc: "Advances in food technology spans from replacement food sources to synthetic replacements of biopharma applications. We are investing in businesses that divest & diversify in,",
  image: "biotech.png",
  bullets: [
    {
      title: "Food Security",
      desc: "Alternative food sources that utilize new food technologies",
      icon: (
        <FontAwesomeIcon
          icon={faAppleWhole}  
        />
      ),
    },
    {
      title: "BioTech",
      desc: "Synthetic pharma technologies to increase accessibility to low cost pharmaceuticals.",
      icon: (
        <FontAwesomeIcon
          icon={faSeedling}
        />
      ),
    },
    {
      title: "BioSciences",
      desc: "Biomanufacturing utilizing biological systems for the production of medical products and therapies, biomaterials, food & beverages, and specialty chemicals.",
      icon: (
        <FontAwesomeIcon
          icon={faVialCircleCheck}
        />
      ),
    },
  ],
};

const showcaseTwo = {
  title: "ETF",
  desc: "Our primary goal is to establish a wealth strategy for our clients through the use of Artificial Intelligence-driven Quantitative trading,",
  image: "crypto_etf2.png",
  bullets: [
    {
      title: "SEC Approved",
      desc: "Multi-asset forex & crypto brokerage service",
      icon: (
        <FontAwesomeIcon
          icon={faBuildingColumns}
        />
      ),
    },
    {
      title: "Licensed Management",
      desc: "Led by experienced brokers, traders & data scientists.",
      icon: (
        <FontAwesomeIcon
          icon={faMoneyBillTrendUp}
        />
      ),
    },
    {
      title: "GPT AI & ML",
      desc: "Dynamic AI & ML driven algorithms.",
      icon: (
        <FontAwesomeIcon
          icon={faChartLine}
        />
      ),
    },
  ],
};

const showcaseThree = {
  title: "HYPERLOCAL MICROSERVICES",
  desc: "Our primary goal is to establish a wealth strategy for our clients through the use of Artificial Intelligence-driven Quantitative trading,",
  image: "hyperlocal.png",
  bullets: [
    {
      title: "Food Delivery",
      desc: "Launch a food delivery or cloud kitchen app or marketplace",
      icon: (
        <FontAwesomeIcon
          icon={faTruckFast}
        />
      ),
    },
    {
      title: "Medical Delivery",
      desc: "Launch a pharmacy delivery app or marketplace",
      icon: (
        <FontAwesomeIcon
          icon={faPrescription}
        />
      ),
    },
    {
      title: "Transportation Services",
      desc: "Launch a transportation delivery app or marketplace",
      icon: (
        <FontAwesomeIcon
          icon={faVanShuttle}
        />
      ),
    },
    {
      title: "Parcel Logistics Services",
      desc: "Launch a parcel delivery or logistics app or marketplace",
      icon: (
        <FontAwesomeIcon
          icon={faTruckRampBox}
        />
      ),
    },
  ],
};

export { showcaseOne, showcaseTwo, showcaseThree };
