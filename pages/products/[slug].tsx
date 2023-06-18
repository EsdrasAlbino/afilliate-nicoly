import Image from "next/image";
import getProducts from "../../sfcc.js";

export default function Product({ product }) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <Image
            alt="hair"
            className="rounded-lg"
            src={product.image}
            width={560}
            height={640}
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.name}
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              R$ {product.price}
            </h1>
            <a
              className="w-80 h-30 bg-[#553E27] px-4 py-3 rounded-md p-10 my-5 flex justify-center"
              href={product.url}
              target="_blank"
            >
              <div>
                <p className="text-white">EU QUERO!</p>
              </div>
            </a>

            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Descrição
            </div>
            <p className="max-w-xl">{product.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const product = [
  {
    id: "Soul-Power-Máscara-Babosa-Aloe-Mask",
    name: "Soul Power Máscara Babosa Aloe Mask",
    price: 33,
    shortDescription: "Máscara capilar Soul Power",
    image: "https://m.media-amazon.com/images/I/61iWgdQJJYL._AC_SX466_.jpg",
    url: "https://amzn.to/3CwE8F8",
    longDescription:
      "A Máscara Bomba Forte da Soul Power é uma solução capilar intensiva com biotina, pantenol, queratina e óleos vegetais. Fortalece, revitaliza e estimula o crescimento saudável dos cabelos. Repara danos, deixa os fios mais macios e resistentes. Recomendada para cabelos fracos e quebradiços. Aplicar nos cabelos úmidos, aguardar alguns minutos e enxaguar conforme as instruções do fabricante.",
  },
  {
    id: "Soul-Power-Masc-Coco-Cacau",
    name: "Soul Power Masc Coco Cacau",
    price: 35,
    shortDescription: "Máscara capilar Soul Power",
    image: "https://m.media-amazon.com/images/I/61QBeO0EiWL._AC_SX466_.jpg",
    url: "https://amzn.to/466cI6x",
    longDescription:
      "A Máscara Coco e Cacau da Soul Power combina as propriedades hidratantes do coco e do cacau para nutrir os cabelos. Indicada para cabelos ressecados, danificados ou que precisam de hidratação extra, ela proporciona reparação e suavidade. Contém coco, que repõe a umidade, e cacau, com antioxidantes que protegem os fios. Aplicar nos cabelos molhados, deixar agir por alguns minutos e enxaguar. Resultados podem variar entre pessoas.",
  },
  {
    id: "Creme-Tratamento-400G-Bomba-Force,-Soul-Power",
    name: "Creme Tratamento 400G Bomba Force, Soul Power",
    price: 34,
    shortDescription: "Máscara capilar Soul Power",
    image: "https://m.media-amazon.com/images/I/414719Ad8SL._AC_SX466_.jpg",
    url: "https://amzn.to/3Xcm7p3",
    longDescription:
      "A Máscara de Babosa da Soul Power contém extrato de babosa, também conhecida como aloe vera. Proporciona hidratação profunda, deixando os cabelos mais macios, brilhantes e saudáveis. Indicada para todos os tipos de cabelo, fortalece os fios e previne a quebra. Pode ser usada após o shampoo, aplicada nos fios molhados e deixada agir por alguns minutos antes de enxaguar. Resultados podem variar, siga as instruções do fabricante.",
  },

  {
    id: "Salon-Line-Creme-Para-Pentear,-Hidratação-Profunda,-1-Kg",
    name: "Salon Line Creme Para Pentear, Hidratação Profunda, 1 Kg",
    price: 36,
    shortDescription: "Creme de pentear Salon Line",
    image: "https://m.media-amazon.com/images/I/71vBW43bRQL._AC_SY879_.jpg",
    url: "https://amzn.to/3N6DrY4",
    longDescription:
      "O Creme para Pentear Hidratação Profunda da Salon Line é um produto capilar com fórmula de 1 kg desenvolvido para proporcionar uma hidratação intensa aos cabelos. Ele ajuda a nutrir, fortalecer e dar brilho aos fios, deixando-os mais macios, saudáveis e fáceis de pentear. Indicado para cabelos secos, danificados e ressecados, pode ser utilizado diariamente. Sua textura leve não pesa nos cabelos e possui um delicioso aroma.",
  },
  {
    id: "Creme-Para-Pentear-Nutrição-Reparadora,-1-Kg,-Salon-Line",
    name: "Creme Para Pentear - Nutrição Reparadora, 1 Kg, Salon Line",
    price: 36,
    shortDescription: "Creme Para Pentear Salon Line",
    image: "https://m.media-amazon.com/images/I/71B3MoMXteL._AC_SY879_.jpg",
    url: "https://amzn.to/3N8Kj7g",
    longDescription:
      "O Creme para Pentear Nutrição Reparadora da Salon Line é um produto capilar em embalagem de 1 kg, formulado para proporcionar nutrição e reparação aos cabelos. Com ingredientes poderosos, ele ajuda a fortalecer, hidratar e revitalizar os fios, deixando-os mais saudáveis, macios e brilhantes. Indicado para cabelos danificados e ressecados, pode ser utilizado diariamente. Sua textura leve facilita o pentear e possui uma fragrância agradável.",
  },
  {
    id: "Creme-Para-Pentear-Definição-Intensa-1-Kg-Salon-Line",
    name: "Creme Para Pentear Definição Intensa - 1 Kg Salon Line",
    price: 35,
    shortDescription: "Creme Para Pentear 1 Kg Salon Line",
    image: "https://m.media-amazon.com/images/I/61PCuuwuL9L._AC_SX466_.jpg",
    url: "https://amzn.to/3qJPQtj",
    longDescription:
      "O Creme para Pentear Definição Intensa da Salon Line, em embalagem de 1 kg, é ideal para cabelos cacheados e ondulados. Proporciona uma definição intensa, controlando o frizz e deixando os cachos e ondas com aspecto natural. Sua fórmula hidratante e de fácil aplicação promove maciez, desembaraço e finalização dos fios. Pode ser usado diariamente, resultando em um visual incrível e definição duradoura.",
  },

  {
    id: "Ativador-de-Cachos-Salon-Line-SOS-Cachos-Super-Óleos-300ml",
    name: "Ativador de Cachos Salon Line SOS Cachos Super Óleos 300ml",
    price: 19,
    shortDescription: "Ativador de Cachos Salon Line SOS Cachos",
    image: "https://m.media-amazon.com/images/I/51HvJAmIYWL._AC_SX466_.jpg",
    url:"https://amzn.to/3Nymhnw",
    longDescription:
      "O Ativador de Cachos Salon Line SOS Cachos Super Óleos, em embalagem de 300ml, é um produto especialmente desenvolvido para cuidar e definir os cachos. Sua fórmula enriquecida com super óleos proporciona hidratação, nutrição e brilho aos fios, controlando o frizz e deixando os cachos mais definidos e saudáveis. Indicado para cabelos cacheados e crespos, o ativador de cachos é de fácil aplicação e pode ser utilizado diariamente. Deixa os cabelos macios, com movimento natural e com um delicioso aroma.",
  },
{
  id: "Creme-Para-Pentear-500-Ml-curly-styling-cream,-Soul-Power",
  name: "Creme Para Pentear 500 Ml curly styling cream, Soul Power",
  price: 30,
  shortDescription: "Creme Para Pentear, Soul Power",
  image: "https://m.media-amazon.com/images/I/81PVhpmCJkL._AC_SY679_.jpg",
  url:"https://amzn.to/3CzO94r",
  longDescription:
    "O Creme para Pentear Curly Styling Cream da Soul Power, em embalagem de 500 ml, é um produto desenvolvido especialmente para cuidar dos cabelos cacheados. Sua fórmula nutritiva e hidratante define os cachos, reduz o frizz e proporciona maciez aos fios. Ideal para definir e modelar os cachos, facilitando o penteado e promovendo uma finalização duradoura. Pode ser utilizado diariamente, deixando os cabelos com aspecto natural, brilho e movimento. Um aliado perfeito para realçar a beleza dos cachos.",
  },
{
  id: "Óleo-Capilar-de-Rícino-Ouribel-100ml",
  name: "Óleo Capilar de Rícino Ouribel 100ml",
  price: 12,
  shortDescription: "Óleo Capilar de Rícino ",
  image: "https://shopee.com.br/%C3%93leo-Capilar-de-R%C3%ADcino-Ouribel-100ml-i.390304809.9616601247?sp_atk=ecd4d9e7-5557-42ae-983e-057bce1f176d&xptdk=ecd4d9e7-5557-42ae-983e-057bce1f176d",
  url:"https://shope.ee/7pOmoLbuc4",
  longDescription:
    "O Óleo Capilar de Rícino Ouribel, em embalagem de 100 ml, é um produto multifuncional que hidrata, fortalece e estimula o crescimento saudável dos cabelos. Com propriedades nutritivas, proporciona brilho, maciez e prevenção da quebra. Pode ser usado no couro cabeludo e nos fios, massageando suavemente. Um aliado eficaz para a saúde e beleza dos cabelos.",
  },
];

export async function getStaticProps({ params }) {
  console.log("params", params.slug);
  const searchResults = product.filter((p) => p.id === params.slug);
  const coffeeProduct = searchResults[0];

  return {
    props: {
      product: coffeeProduct,
    },
  };
}

export async function getStaticPaths() {
  const coffeeProducts = product;
  let fullPaths = [];

  for (let product of coffeeProducts) {
    fullPaths.push({ params: { slug: product.id } });
  }

  return {
    paths: fullPaths,
    fallback: "blocking",
  };
}
