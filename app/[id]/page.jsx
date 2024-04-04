import Link from 'next/link'; 

async function getDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
}

export default async function Details({ params }) {
  const product = await getDetails(params.id);

  return (
    <>
      <div className="flex items-center flex-col gap-8 justify-between h-150">
        <h1 className="text-2xl font-bold mb-4 text-[#5fca2d]">Product Details</h1>
        {product && (
          <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <div className="md:flex flex-col items-center">
              <div className="md:flex-shrink-0">
                <img
                  className="flex w-full items-center md:w-48"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-red-500 text-[25px] font-[900] ">
                  {product.category}
                </div>
                <p className="text-gray-600 text-lg mt-2">{product.title}</p>
                <p className="text-gray-400 text-sm mt-2 ">{product.description}</p>
                <p className="text-gray-800 font-bold mt-4">${product.price}</p>
              </div>
            </div>
          </div>
        )}
        <Link href="/" className='bg-[#218721] mt-6 text-white pl-7 pr-7 pt-3 pb-3 rounded-[5px]'>Back to home</Link>
      </div>
    </>
  );
}
