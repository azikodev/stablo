import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error("None fetching data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <header className="Container mx-auto">
        <nav className="flex max-w-screen-xl  flex-wrap items-center justify-center gap-8 mx-auto p-2 my-6">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="/">
            <Image src="/image.svg" width={100} height={100} alt="logo brend" />
          </Link>
          <Link href="#">Archive</Link>
          <Link href="#">Pro Version</Link>
          <Link href="#">Download</Link>
        </nav>
      </header>

      <main className="max-w-screen-xl flex flex-wrap mx-auto p-2  justify-center">
        <div className="flex max-w-screen-xl  flex-wrap justify-center gap-8 mx-auto ">
          {data.slice(0, 20).map((product) => (
            <div
              key={product.id}
              className="w-full md:w-1/4 lg:w-1/4 xl:w-1/5 p-4"
            >
              <Link href={`${product.id}`}>
                <div className="border border-gray-200 rounded-lg p-4 w-[250px] h-[350px] flex flex-col justify-between">
                  <Image
                    src={product.image}
                    width={300}
                    height={200}
                    className="max-w-[100px] max-h-[200px] object-contain m-auto"
                    alt={product.title}
                  />
                  <h2 className="text-lg font-semibold mt-2">
                    {product.title.slice(0, 20)}...
                  </h2>
                  <p className="text-gray-600">
                    {product.description.slice(0, 30)}...
                  </p>
                  <p className="text-gray-800 font-bold mt-2">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
