import Image from "next/image";
import getProducts from "../../sfcc.js";

export default function Product({ product }) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <Image
            alt="coffee"
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
              className="w-80 h-30 bg-orange-500 px-4 py-3 rounded-md p-10 my-5 flex justify-center"
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
    id: "lenovo-ideapad-3",
    name: "Lenovo IdeaPad 3",
    price: 2999,
    shortDescription:
      "notebook focado em produtividade, mas permite aquele alt + tab na epic",
    image: "/lenovo-ideapad-3.webp",
    url:"https://amzn.to/3Wew6tI",
    longDescription:
      "O Lenovo IdeaPad 3 com processador Ryzen 5 5500U é um notebook potente e versátil, oferecendo desempenho excepcional. Com um processador de seis núcleos, ele lida com multitarefas exigentes. A tela de alta definição proporciona uma experiência visual imersiva. O armazenamento SSD NVMe oferece acesso rápido aos arquivos, enquanto a memória RAM generosa permite uma execução fluida de várias tarefas. Com uma variedade de portas USB e conectividade sem fio, o IdeaPad 3 oferece opções de conectividade versáteis. Seu design compacto o torna perfeito para estudantes, profissionais e usuários domésticos que buscam um notebook confiável e poderoso.",
  },
  {
    id: "motospeed-ck-61",
    name: "Motospeed CK 61",
    price: 250,
    shortDescription: "Teclado",
    image: "/motospeed-ck-61.jpeg",
    url:"https://s.click.aliexpress.com/e/_DkCZGbT",
    longDescription:
      "O teclado Motospeed CK61 é um teclado mecânico compacto, ideal para jogadores e entusiastas da digitação. Com 61 teclas individuais e mecanismo de teclas mecânicas, proporciona uma resposta tátil precisa e um tempo de resposta rápido. Seu design compacto economiza espaço na mesa, enquanto as teclas retroiluminadas em LED RGB oferecem uma experiência visual incrível. Com suporte a múltiplas camadas de teclas programáveis, você pode personalizar o teclado de acordo com suas preferências. Compatível com diversos sistemas operacionais, o Motospeed CK61 é uma escolha excelente para gamers e digitação de alta performance.",
  },
  {
    id: "delux-m-625",
    name: "Delux m625",
    price: 230,
    shortDescription: "Mouse",
    image: "/delux-m-625.png",
    url:"https://s.click.aliexpress.com/e/_DlkUXwz",
    longDescription:
      "O mouse Delux M625 é um mouse gamer de alta performance, projetado para atender às demandas dos jogadores mais exigentes. Com um sensor óptico de alta precisão, oferece movimentos suaves e precisos, garantindo uma experiência de jogo imersiva. Seus botões programáveis permitem personalizar as configurações de acordo com suas preferências e estilo de jogo. O design ergonômico e confortável do mouse proporciona um manuseio confortável mesmo em longas sessões de jogo. Além disso, o mouse Delux M625 possui iluminação LED RGB personalizável, proporcionando um visual incrível. Com sua conectividade com fio USB de alta velocidade, oferece uma resposta instantânea aos comandos. Se você busca um mouse gamer de qualidade, o Delux M625 é uma excelente opção para melhorar sua experiência de jogo.",
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
