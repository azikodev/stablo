"use client";

import "./style.css";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default function Links() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();
      setData(products);
    };
    fetchData();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = selectedCategory
    ? data.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : data;

  return (
    <div>
      <header>
        <nav>
          <select className="select__nav" onChange={handleCategoryChange}>
            <option value="">Hammasi</option>
            <option value="women's clothing">Ayollar kiyimlari</option>
            <option value="men's clothing">Erkak kiyimlari</option>
            <option value="jewelery">Taqinchoqlar</option>
            <option value="electronics">Kompyuter Hotirasi</option>
          </select>
          <nav className="flex max-w-screen-xl  flex-wrap items-center justify-center gap-8 mx-auto p-2 my-6">
            <Link href="/">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="/">
              <Image
                src="/image.svg"
                width={100}
                height={100}
                alt="logo brend"
              />
            </Link>
            <Link href="#">Archive</Link>
            <Link href="#">Pro Version</Link>
            <Link href="#">Download</Link>
          </nav>
        </nav>
      </header>

      <main>
        <section className="flex max-w-screen-xl  flex-wrap justify-center gap-8 mx-auto ">
          {filteredData.map((product) => (
            <div
              className="w-full md:w-1/4 lg:w-1/4 xl:w-1/5 p-4"
              key={product.id}
            >
              <div className="border border-gray-200 rounded-lg p-4 w-[250px] h-[350px] flex flex-col justify-between">
                <img
                  src={product.image}
                  width={300}
                  height={200}
                  className="max-w-[100px] max-h-[200px] object-contain m-auto"
                  alt={product.title}
                />
                <Link
                  className="text-lg font-semibold mt-2"
                  href={`/links/${product.id}`}
                >
                  {product.title.slice(0, 20)}...
                </Link>
                <p className="text-gray-600">
                  {product.description.slice(0, 30)}...
                </p>
                <p className="text-gray-800 font-bold mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
