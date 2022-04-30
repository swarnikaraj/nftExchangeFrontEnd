import { MdFilterList, MdViewHeadline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Searchbox } from "../profile/searchbox";
import { Statusfilter } from "./statusFilter";
import { Pricefilter } from "./priceFilter";
//[{"trait_type":"Background","traits":[{"trait":"Picnic Day","count":1061},{"trait":"Grassy Knoll","count":998},{"trait":"Ocean Mist","count":996},{"trait":"Stone Grey","count":1036},{"trait":"Sunset","count":1018},{"trait":"Puls","count":47},{"trait":"Buds","count":22},{"trait":"Denza","count":8}],"trait_type_count":8},{"trait_type":"Skin","traits":[{"trait":"Dark","count":1398},{"trait":"Alien","count":90},{"trait":"Mid","count":1400},{"trait":"Ape","count":266},{"trait":"Light","count":1442},{"trait":"Zombie","count":419},{"trait":"Vampire","count":66},{"trait":"Skeleton","count":47},{"trait":"Rainbow","count":13},{"trait":"Ghost","count":38},{"trait":"Robot","count":7}],"trait_type_count":11},{"trait_type":"Body","traits":[{"trait":"None","count":2855},{"trait":"Backpack","count":306},{"trait":"Chest Hair","count":309},{"trait":"Bee Wings","count":66},{"trait":"Sash","count":155},{"trait":"Trenchcoat","count":36},{"trait":"Bikini","count":192},{"trait":"Boxers","count":158},{"trait":"Overalls","count":204},{"trait":"Vampire Cape","count":103},{"trait":"Ballerina","count":228},{"trait":"Ruffles","count":58},{"trait":"Peed Pants","count":212},{"trait":"Pox","count":50},{"trait":"Tracksuit","count":102},{"trait":"Pasties","count":27},{"trait":"Jumpsuit","count":71},{"trait":"Tuxedo","count":41},{"trait":"Mankini","count":13}],"trait_type_count":19},{"trait_type":"Hat","traits":[{"trait":"Detective","count":81},{"trait":"Bonnet","count":70},{"trait":"Trucker","count":114},{"trait":"None","count":1347},{"trait":"Afro","count":130},{"trait":"Bunny","count":87},{"trait":"Fez","count":107},{"trait":"Jester","count":137},{"trait":"Straw Hat","count":139},{"trait":"Your Future","count":116},{"trait":"Sombrero","count":142},{"trait":"Beret","count":137},{"trait":"Captain","count":116},{"trait":"Leeloo","count":35},{"trait":"Toque","count":130},{"trait":"Marge","count":84},{"trait":"Cute Ears","count":133},{"trait":"Poop","count":46},{"trait":"Ogre","count":65},{"trait":"Unicorn","count":12},{"trait":"Pirate","count":27},{"trait":"Birthday Hat","count":92},{"trait":"Santa","count":95},{"trait":"Mohawk","count":91},{"trait":"Swimming Cap","count":136},{"trait":"Army","count":71},{"trait":"Miner","count":48},{"trait":"Bowl Cut","count":127},{"trait":"Tinfoil","count":22},{"trait":"Cowboy","count":98},{"trait":"Horns","count":43},{"trait":"Fur Hat","count":81},{"trait":"Franky","count":29},{"trait":"Exposed Brain","count":57},{"trait":"Long Hair","count":143},{"trait":"Karen","count":88},{"trait":"Balaclava","count":51},{"trait":"Siren","count":58},{"trait":"Sanchez","count":34},{"trait":"Mullet","count":76},{"trait":"Buns","count":139},{"trait":"Hero","count":82},{"trait":"Candle","count":43},{"trait":"Strawberry","count":15},{"trait":"Robinhood","count":48},{"trait":"Plant","count":32},{"trait":"Dino","count":20},{"trait":"Cat","count":18},{"trait":"Witch","count":25},{"trait":"Visor","count":31},{"trait":"Pharaoh","count":4},{"trait":"Antennae","count":32},{"trait":"Party Hat","count":2}],"trait_type_count":53},{"trait_type":"Eyes","traits":[{"trait":"Ski Goggles","count":359},{"trait":"None","count":1649},{"trait":"Swimming Goggles","count":336},{"trait":"Hippie","count":293},{"trait":"Nerd","count":249},{"trait":"Blindfold","count":65},{"trait":"Eyelashes","count":135},{"trait":"Single Lens","count":263},{"trait":"Heart","count":207},{"trait":"Welding Mask","count":50},{"trait":"Masquerade","count":115},{"trait":"Green","count":116},{"trait":"Googly","count":182},{"trait":"Potter","count":237},{"trait":"Steampunk","count":170},{"trait":"Designer","count":122},{"trait":"Clout","count":211},{"trait":"Alien","count":115},{"trait":"White","count":29},{"trait":"Mascara","count":108},{"trait":"Cyborg","count":59},{"trait":"Gas Mask","count":35},{"trait":"Blue","count":56},{"trait":"Skull Mask","count":12},{"trait":"White Mask","count":6},{"trait":"Third Eye","count":7}],"trait_type_count":26},{"trait_type":"Mouth","traits":[{"trait":"None","count":4057},{"trait":"Drool","count":317},{"trait":"Cigar","count":425},{"trait":"Clown","count":107},{"trait":"Pierced","count":280}],"trait_type_count":5},{"trait_type":"Nose","traits":[{"trait":"None","count":4870},{"trait":"Squid","count":108},{"trait":"Piggy","count":43},{"trait":"Pierced","count":165}],"trait_type_count":4},{"trait_type":"Hand","traits":[{"trait":"Spiked Club","count":126},{"trait":"Scythe","count":133},{"trait":"None","count":2912},{"trait":"Trident","count":33},{"trait":"Boxing Glove","count":252},{"trait":"Camera","count":130},{"trait":"Flowers","count":180},{"trait":"Wizard's Staff","count":22},{"trait":"Lollipop","count":52},{"trait":"Wine","count":169},{"trait":"Gavel","count":130},{"trait":"Luggage","count":81},{"trait":"Torch","count":185},{"trait":"Megaphone","count":148},{"trait":"Keyboard","count":119},{"trait":"Lifesaver","count":97},{"trait":"Skateboard","count":115},{"trait":"Flag","count":113},{"trait":"Flamethrower","count":50},{"trait":"Pencil","count":64},{"trait":"Pickle","count":34},{"trait":"Hero's Sword","count":24},{"trait":"Cardboard Sign","count":12},{"trait":"Baggie","count":5}],"trait_type_count":24},{"trait_type":"Shoes","traits":[{"trait":"None","count":2814},{"trait":"Roman Sandals","count":432},{"trait":"Socks & Sandals","count":102},{"trait":"Chucks","count":361},{"trait":"Trainers","count":307},{"trait":"Knight","count":288},{"trait":"Rocket","count":36},{"trait":"Gym Socks","count":348},{"trait":"Rollerskates","count":194},{"trait":"Bunny Slippers","count":51},{"trait":"Basketball","count":189},{"trait":"Pegleg","count":52},{"trait":"Carpet","count":12}],"trait_type_count":13},{"trait_type":"Butt","traits":[{"trait":"None","count":4497},{"trait":"Wounded","count":475},{"trait":"Reddish","count":144},{"trait":"Gassy","count":70}],"trait_type_count":4},{"trait_type":"Dick","traits":[{"trait":"Cannon","count":263},{"trait":"None","count":2562},{"trait":"Elephant Trunk","count":203},{"trait":"Chicken","count":135},{"trait":"Flame","count":82},{"trait":"Flower","count":239},{"trait":"Mushroom","count":66},{"trait":"Umbrella","count":188},{"trait":"Fuse","count":236},{"trait":"Carrot","count":181},{"trait":"Rocket","count":175},{"trait":"Purpy","count":23},{"trait":"Dynamite","count":175},{"trait":"Old Sock","count":240},{"trait":"Oh Canada","count":42},{"trait":"Pierced","count":169},{"trait":"Scorpion","count":83},{"trait":"Fox","count":77},{"trait":"Tentacle","count":38},{"trait":"Spidey","count":9}],"trait_type_count":20},{"trait_type":"Special","traits":[{"trait":"None","count":5039},{"trait":"Buddy","count":99},{"trait":"Shiba","count":48}],"trait_type_count":3},{"trait_type":"Legendary","traits":[{"trait":"Dotbutt","count":1},{"trait":"Dickfits","count":1},{"trait":"Prototype","count":1},{"trait":"Paris","count":1},{"trait":"Bananabutt","count":1},{"trait":"Dickasus","count":1},{"trait":"Dickpet","count":1},{"trait":"Cryptoad Dickbutt","count":1},{"trait":"Dicka Lisa","count":1},{"trait":"Dixty Nine","count":1},{"trait":"Lady Libutty","count":1},{"trait":"Spider-butt","count":1},{"trait":"Butt De Kooning","count":1},{"trait":"Telebutty","count":1}],"trait_type_count":14}]
export const Sidebar = () => {
  const [clicked, setClicked] = useState(false);
  const [arr, setArr] = useState([]);

  const [filtObj, setFiltObj] = useState({});

  var className = clicked ? "hidden py-2 space-y-2 " : "py-2 space-y-2";

  function oncheck(trait_type, value) {
    console.log(filtObj);
  }

  useEffect(() => {
    fetch(
      "http://localhost:1234/contract/byAddress/0xED5AF388653567Af2F388E6224dC7C4b3241C544"
    )
      .then((res) => res.json())
      .then((res) => {
        let data = JSON.parse(res.nft[0].attributes);
        setArr(data);
      });
  }, []);

  return (
    <>
      <aside className="md:w-1/4 " aria-label="Sidebar ">
        <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-transparent-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-black-900 dark:text-black hover:bg-gray-100 dark:hover:bg-transparent-700"
              >
                <MdFilterList />
                <span className="ml-3">Filter</span>
              </a>
            </li>
            <Pricefilter />
            <Statusfilter />

            {arr?.map((dta) => (
              <li key={uuidv4()}>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg text-black-900 group hover:bg-gray-100 dark:text-black dark:hover:bg-transparent-700"
                  aria-controls="dropdown-opt"
                  data-collapse-toggle="dropdown-opt"
                  onClick={(e) => {
                    setClicked((p) => !p);
                    console.log(e.target);
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <MdViewHeadline />
                      <label
                        className="inline-block ml-2"
                        // sidebar-toggle-item
                      >
                        {dta.trait_type}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="inline-block mr-1"
                        // sidebar-toggle-item
                      >
                        {dta.trait_type_count}
                      </label>

                      <FaAngleDown />
                    </div>
                  </div>
                </button>
                <ul id="dropdown-opt" className={className}>
                  <Searchbox />

                  {dta.traits.map((list) => (
                    <li key={uuidv4()} className="overflow-y-scroll">
                      <input
                        className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                        type="checkbox"
                        id="flexCheckDefault"
                      />

                      <div className="flex justify-between">
                        <label
                          className="inline-block text-gray-800 form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          {list.trait}
                        </label>
                        <label
                          className="inline-block text-gray-800 form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          {list.count}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
