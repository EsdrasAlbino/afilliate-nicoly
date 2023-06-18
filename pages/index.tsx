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

const product = [
  {
    id: "Soul-Power-Máscara-Babosa-Aloe-Mask",
    name: "Soul Power Máscara Babosa Aloe Mask",
    price: 33,
    shortDescription: "Máscara capilar Soul Power",
    image: "https://m.media-amazon.com/images/I/61iWgdQJJYL._AC_SX466_.jpg",
  },
  {
    id: "Soul-Power-Masc-Coco-Cacau",
    name: "Soul Power Masc Coco Cacau",
    price: 35,
    shortDescription: "Máscara capilar Soul Power",
    image: "https://m.media-amazon.com/images/I/61QBeO0EiWL._AC_SX466_.jpg",
  },
  {
    id: "Creme-Tratamento-400G-Bomba-Force,-Soul-Power",
    name: "Creme Tratamento 400G Bomba Force, Soul Power",
    price: 34,
    shortDescription: "Máscara capilar Soul Power",
    image: "https://m.media-amazon.com/images/I/414719Ad8SL._AC_SX466_.jpg",
  },

  {
    id: "Salon-Line-Creme-Para-Pentear,-Hidratação-Profunda,-1-Kg",
    name: "Salon Line Creme Para Pentear, Hidratação Profunda, 1 Kg",
    price: 36,
    shortDescription: "Creme de pentear Salon Line",
    image: "https://m.media-amazon.com/images/I/71vBW43bRQL._AC_SY879_.jpg",
  },
  {
    id: "Creme-Para-Pentear-Nutrição-Reparadora,-1-Kg,-Salon-Line",
    name: "Creme Para Pentear - Nutrição Reparadora, 1 Kg, Salon Line",
    price: 36,
    shortDescription: "Creme Para Pentear Salon Line",
    image: "https://m.media-amazon.com/images/I/71B3MoMXteL._AC_SY879_.jpg",
  },
  {
    id: "Creme-Para-Pentear-Definição-Intensa-1-Kg-Salon-Line",
    name: "Creme Para Pentear Definição Intensa - 1 Kg Salon Line",
    price: 35,
    shortDescription: "Creme Para Pentear 1 Kg Salon Line",
    image: "https://m.media-amazon.com/images/I/61PCuuwuL9L._AC_SX466_.jpg",
  },

  {
    id: "Ativador-de-Cachos-Salon-Line-SOS-Cachos-Super-Óleos-300ml",
    name: "Ativador de Cachos Salon Line SOS Cachos Super Óleos 300ml",
    price: 19,
    shortDescription: "Ativador de Cachos Salon Line SOS Cachos",
    image: "https://m.media-amazon.com/images/I/51HvJAmIYWL._AC_SX466_.jpg",
  },
  {
    id: "Creme-Para-Pentear-500-Ml-curly-styling-cream,-Soul-Power",
    name: "Creme Para Pentear 500 Ml curly styling cream, Soul Power",
    price: 30,
    shortDescription: "Creme Para Pentear, Soul Power",
    image: "https://m.media-amazon.com/images/I/81PVhpmCJkL._AC_SY679_.jpg",
  },
  {
    id: "Óleo-Capilar-de-Rícino-Ouribel-100ml",
    name: "Óleo Capilar de Rícino Ouribel 100ml",
    price: 12,
    shortDescription: "Óleo Capilar de Rícino ",
    image:
      "https://shopee.com.br/%C3%93leo-Capilar-de-R%C3%ADcino-Ouribel-100ml-i.390304809.9616601247?sp_atk=ecd4d9e7-5557-42ae-983e-057bce1f176d&xptdk=ecd4d9e7-5557-42ae-983e-057bce1f176d",
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
