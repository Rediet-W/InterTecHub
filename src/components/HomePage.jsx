import React, { useState } from "react";
import Navbar from "./Navbar";
import shoe from "../assets/shoe.png";
import man from "../assets/man.png";
import shirt from "../assets/w-shirt.png";
import arrow from "../assets/uparrow.png";
import Collection from "./collection";
import bag from "../assets/bag.png";
import SmallCollection from "./smallcollections";
import tbag from "../assets/t-bag.png";
import tbelts from "../assets/t-belts.png";
import tjacket from "../assets/t-jacket.png";
import tlingerin from "../assets/t-lingerin.png";
import tshoe from "../assets/t-shoe.png";
import tstreetwear from "../assets/t-streetwear.png";
import tcosmetics from "../assets/t-cosmetics.png";
import tdress from "../assets/t-dress.png";
import that from "../assets/t-hat.png";
import tslippers from "../assets/t-slippers.png";
import tsunglass from "../assets/t-sunglass.png";
import twig from "../assets/t-wig.png";
import MediumCollection from "./mediumcollection";
import beauty from "../assets/l-beautyp.png";
import dress from "../assets/l-dress.png";
import gym from "../assets/l-gymwear.png";
import lshirt from "../assets/l-shirt.png";
import Footer from "./Footer";
import bdress from "../assets/brown-dress.png";
import pshoe from "../assets/pink-shoe.png";
import home from "../assets/home2.png";

const HomePage = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const tags = ["Men", "Women", "Kids", "Perfumes", "Sport", "Jewelry"];
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row bg-gebeya-purple text-white justify-between items-center px-4 md:px-8 py-10 max-w-screen-xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <p className="font-bold text-4xl md:text-8xl">Gebeya</p>
          <img
            src={shoe}
            alt="shoe"
            className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-white"
          />
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={man}
            alt="man"
            className="w-28 h-28 md:w-48 md:h-48 rounded-full border-4 border-white"
          />
          <button className="px-6 py-3 bg-gebeya-orange text-black font-medium rounded-md">
            Explore Now
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
          <p className="font-bold text-4xl md:text-8xl hidden md:block">SHOP</p>
          <p className="text-sm md:text-lg max-w-xs">
            Discover a world of convenience with our user-friendly platform,
            curated collections, and exceptional customer service.
          </p>
          <img
            src={shirt}
            alt="shirt"
            className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-white"
          />
        </div>
      </div>

      <div className="pl-4 m-4 max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Latest Collections</p>
          <div className="flex gap-3 ">
            <div className="bg-gebeya-orange p-1 rounded-l-lg">
              <img
                src={arrow}
                alt="left arrow"
                className="w-5 h-5 -rotate-90 filter invert"
              />
            </div>
            <div className="bg-gebeya-orange p-1 rounded-r-lg">
              <img
                src={arrow}
                alt="right arrow"
                className="w-5 h-5 rotate-90 filter invert"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-4 overflow-x-scroll mx-auto container hide-scrollbar">
          <Collection
            name="French Kiss Bag"
            description="ALDO"
            price="$500"
            rating="2K+rating"
            tag="women"
            image={bag}
          />
          <Collection
            name="Burberry shine"
            description="FENDI"
            price="$150"
            rating="1K+rating"
            tag="kids"
            image={pshoe}
          />
          <Collection
            name="Alvero Gown"
            description="DIVINE"
            price="$300"
            rating="5K+rating"
            tag="women"
            image={bdress}
          />
        </div>
        <div className="flex gap-4 mt-4 w-full overflow-x-scroll hide-scrollbar">
          {tags.map((tag) => (
            <div
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`py-2 px-4 border border-gray-300 rounded-full w-fit text-xl cursor-pointer ${
                selectedTag === tag ? "bg-gebeya-orange text-white" : ""
              }`}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="grid gap-2 grid-cols-2 md:grid md:grid-cols-6 mx-auto container">
          <SmallCollection image={tshoe} name="Shoes" />
          <SmallCollection image={tbag} name="Bags" />
          <SmallCollection image={tjacket} name="Jackets" />
          <SmallCollection image={tlingerin} name="Lingerie" />
          <SmallCollection image={tbelts} name="Belts" />
          <SmallCollection image={tstreetwear} name="Street wear" />
          <SmallCollection image={tsunglass} name="Sunglasses" />
          <SmallCollection image={tdress} name="Sun wear" />
          <SmallCollection image={that} name="Hats" />
          <SmallCollection image={tslippers} name="Slippers" />
          <SmallCollection image={twig} name="Wigs" />
          <SmallCollection image={tcosmetics} name="Cosmetics" />
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="text-white bg-gebeya-purple px-4 py-2 w-fit  rounded-md">
            {" "}
            See more &gt;&gt;&gt;{" "}
          </div>
        </div>
        <div className="bg-gray-400 flex flex-wrap rounded-md  items-center my-2 mx-auto container">
          <div className="text-white space-y-4 max-w-md p-4">
            <p className="text-3xl font-bold leading-tight">
              Our Curated Summer Collection
            </p>
            <p className="text-sm">
              Explore our curated summer collection featuring trending styles,
              vibrant colors, and lightweight fabrics perfect for long days and
              nights.
            </p>
            <button className="px-6 py-2 font-medium rounded-md bg-gebeya-orange">
              Explore Now
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-1 md:flex justify-end hidden md:visible">
            <img
              src={home}
              alt="home"
              className="w-full h-60 object-cover rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <p className="md:text-2xl font-bold text-md md:font-normal">
            Browse by category
          </p>
          <div className="flex gap-3 ">
            <div className="bg-gebeya-orange p-1 rounded-l-lg">
              <img
                src={arrow}
                alt="left arrow"
                className="w-5 h-5 -rotate-90 filter invert"
              />
            </div>
            <div className="bg-gebeya-orange p-1 rounded-r-lg sm:w-5 sm:h-5">
              <img
                src={arrow}
                alt="right arrow"
                className="w-5 h-5 rotate-90 filter invert"
              />
            </div>
          </div>
        </div>
        <div className="flex overflow-scroll">
          <MediumCollection
            name="Casual wear"
            image={lshirt}
            description="Over 20 categories in stock"
          />
          <MediumCollection
            name="Vintage"
            image={dress}
            description="Over 31 categories in stock"
          />
          <MediumCollection
            name="Beauty products"
            image={beauty}
            description="Over 24 categories in stock"
          />
          <MediumCollection
            name="Gym wears"
            image={gym}
            description="Over 62 categories in stock"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
