import { useRef } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import getProducts from "../sfcc.js";

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
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
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

const product = [
  {
    id: "lenovo-ideapad-3",
    name: "Lenovo IdeaPad 3",
    price: 2999,
    shortDescription:
      "notebook focado em produtividade, mas permite aquele alt + tab na epic",
    image: "/lenovo-ideapad-3.webp",
  },
  {
    id: "motospeed-ck-61",
    name: "Motospeed CK 61",
    price: 250,
    shortDescription: "Teclado",
    image: "/motospeed-ck-61.jpeg",
  },
  {
    id: "delux-m-625",
    name: "Delux m625",
    price: 230,
    shortDescription: "Mouse",
    image: "/delux-m-625.png",
  },
];

export async function getStaticProps() {
  const searchResults = product;

  return {
    props: {
      data: searchResults,
    },
  };
}
