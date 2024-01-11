import { useRef } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import getProducts from "../sfcc.js";
import { product } from "../utils/products_mock";


export default function Gallery({ data }) {
  let coffeeRef = useRef<HTMLParagraphElement>();

  const scrollHandler = (e) => {
    e.preventDefault();
    // @ts-ignore
    console.log(coffeeRef);
    coffeeRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center" ref={coffeeRef}>
            <p
              key="aaa"
              className="mt-1 text-4xl font-bold uppercase text-[#553E27] sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={coffeeRef}
            >
              Escolhido por nós, para você
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data &&
            data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </>
  );
}



export async function getStaticProps() {
  const searchResults = product;

  return {
    props: {
      data: searchResults,
    },
  };
}
