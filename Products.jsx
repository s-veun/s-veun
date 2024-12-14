"use client";
import { useState } from "react";
// import { Card } from "flowbite-react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Card, CardBody, Image } from "@nextui-org/react";
import Rating from "./Rating";
import products from "../data/Blog";
import { BiCollapse } from "react-icons/bi";
import { Link } from "react-router-dom";
import Item from "../layout/Item";

const product = () => {
  const [loadedMore, setLoadedMore] = useState(6);
  const handleLoadMore = () => {
    setLoadedMore((prevCount) => prevCount + 6);
  };

  const slice = products.slice(0, loadedMore);

  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="container-fluid mt-20">
      <h2 className="text-2xl font-bold mx-10 mt-5">New Products</h2>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-6 mx-10 mt-5">
        {slice.map((item, index) => (
          <Card
            shadow="sm"
            className="relative flex flex-col items-center justify-center bg-white rounded-md h-[400px] w-[230px]"
            elevation={24}
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="relative overflow-visible p-0h-[500px] hover:translate-y-2">
              <p className="relative text-tiny text-gray-50 uppercase font-bold bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-br-3xl w-[50px] items-center">
                New
              </p>
              <Image
                // width="100%"
                alt={item.title}
                className="w-full object-contain h-[200px] static"
                src={item.image}
              />
              <div className=" absolute flex items-center right-6 mt-5">
                <Link to={`/product/${item._id}`}>
                  <BiCollapse className="text-2xl bg-gray-200 rounded-full p-1 shadow-2xl cursor-pointer transition-all duration-500" />
                </Link>
              </div>
              <div className="flex flex-col items-center h-[100px]">
                <div className="">
                  <h2 className="text-sm font-bold text-gray-900 mb-2">
                    {item.name}
                  </h2>
                  <h3 className="text-xl font-bold text-sky-500 mb-2 mx-2">
                    ${item.price}
                    <s className="text-sm mx-2 text-red-500">$6.50</s>
                  </h3>
                  <Rating />
                </div>
                <button className="w-[220px] h-[40px] gap-1 shadow-2xl rounded-md mt-2 flex items-center bg-sky-500 text-gray-100 hover:translate-x-0 active:text-sky-400">
                  <div className="">
                    <Item />
                  </div>
                  Add Cart
                  <MdOutlineShoppingCartCheckout className="text-xl" />
                </button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-3">
        {loadedMore < products.length ? (
          <button
            className="bg-gray-200 text-gray-950 hover:bg-gray-50 p-2 w-[150px] rounded-xl border-2 border-sky-400 font-bold active:text-sky-400"
            onClick={handleLoadMore}
          >
            Load More!
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default product;
