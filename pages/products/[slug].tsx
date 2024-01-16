import Image from "next/image";

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
            {/* <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              R$ {product.price}
            </h1> */}
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

export const product = [
  {
    id: "Gel para cravos e espinhas acnezil 20g",
    name: "Gel para cravos e espinhas acnezil 20g",
    price: 0,
    shortDescription:
      "Acnezil penetra profundamente na pele para combater e eliminar a acne",
    image: "https://m.media-amazon.com/images/I/61HILJY+PCL._AC_SX425_.jpg",
    url: "https://shope.ee/602b3JA5PU",
    longDescription:
      " Acnezil Gel Para Cravos e Espinhas 20g\n\nGraças aos seus grânulos antibacterianos de peróxido de benzoíla, Acnezil penetra profundamente na pele para combater e eliminar a acne, além de combater e prevenir o aparecimento de cravos e espinhas. Promove a esfoliação da pele.",
  },
  {
    id: "protetor labial isacare",
    name: "Protetor Labial Isacare",
    price: 0,
    shortDescription:
      "O hidratante Labial Isacare, foi desenvolvido para pessoas modernas que desejam manter sempre os lábios macios, hidratados e protegidos por muito mais tempo.",
    image:
      "https://m.media-amazon.com/images/I/61HF-p9wo9L._AC_UF1000,1000_QL80_.jpg",
    url: "https://shope.ee/4AatClDV3R",
    longDescription:
      "O hidratante Labial Isacare, foi desenvolvido para pessoas modernas que desejam manter sempre os lábios macios, hidratados e protegidos por muito mais tempo. Aqueles lábios rachados, soltando peles, extra ressecado e as vezes até sangrando, não irá te afetar mais, pois com a fórmula exclusiva do Hidratante Labial Isacare, proporciona proteção contra os raios solares, prevenção contra ressecamento e deixa hidratado por muito mais tempo.",
  },
  {
    id: "Máscara Capilar Bio Extratus Shitake Plus 250g",
    name: "Máscara Capilar Bio Extratus Shitake Plus 250g",
    price: 0,
    shortDescription:
      "Máscara de reconstrução nutritiva,  Bio Extratus Skitake plus 250g",
    image:
      " https://imgs.search.brave.com/4QzgKAW8XEfwFjFlaejEV9f-ZqEJxdji3AfuvoWjkQ8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pa2Vz/YWtpLnZ0ZXhhc3Nl/dHMuY29tL2FycXVp/dm9zL2lkcy8yMjMy/OTgtODAwLWF1dG8_/dj02MzY4ODcxNzM0/MzYzNzAwMDAmd2lk/dGg9ODAwJmhlaWdo/dD1hdXRvJmFzcGVj/dD10cnVl.jpeg",
    url: " https://amzn.to/47xHAN2",
    longDescription:
      " Hidrata profundamente os fios, oferecendo os principais nutrientes essenciais à restauração da fibra capilar. Recupera a vitalidade e dá brilho intenso ao cabelo. pH 4,5. Modo de usar: Após lavar o cabelo, aplique a máscara massageando mecha a mecha. Deixe agir por 10 minutos. Para intensificar o tratamento, use touca de hidratação. Enxágue",
  },
  {
    id: "Máscara Capilar Bio Extratus Queravit 250g",
    name: "Máscara Capilar Bio Extratus Queravit 250g",
    price: 0,
    shortDescription: "Substitui cronograma capilar, para cabelos danificados",
    image: "https://m.media-amazon.com/images/I/51rSjKKHMZL.AC_SY450.jpg",
    url: "https://amzn.to/3tGHZyI",
    longDescription:
      " Resgata a umidade, recondiciona e nutre profundamente os fios. pH 4,0. Modo de usar: Após lavar o cabelo, aplique a máscara massageando mecha a mecha. Deixe agir de 3 a 5 minutos. Para intensificar o tratamento, use touca de hidratação. Enxágue.",
  },
  {
    id: "Eudora Máscara Capilar Siàge Nutri Rosé 250g",
    name: "Eudora Máscara Capilar Siàge Nutri Rosé 250g",
    price: 0,
    shortDescription:
      "A Máscara Capilar Siàge Nutri Rosé hidrata profundamente e repara as áreas fragilizadas dos fios por todo seu comprimento.",
    image: "https://m.media-amazon.com/images/I/61T0MvmMqCL.AC_SY450.jpg",
    url: "https://amzn.to/41PxHbX",
    longDescription:
      "Com o incrível Efeito Anti-tesoura não será mais necessário recorrer ao corte para ter cabelos lindos e saudáveis. Além de devolver sua resistência natural, evitando que eles se quebrem facilmente. Proporciona cabelos com toque macio, mais resistentes, com brilho natural e benefícios como:\nNutrição profunda até a 3ª camada do fio;Reparação instantânea e duradoura, sem pesar;Raiz saudável e comprimento livre de pontas duplas;Livre de Petrolatos, Parabenos e Sal.",
  },
  {
    id: "Kit Escova E Pente 3 PCS Escova Perola Jacaré Pente Desembaraçador Cabelo Cacheado Liso",
    name: "Kit Escova E Pente 3 PCS Escova Perola Jacaré Pente Desembaraçador Cabelo Cacheado Liso",
    price: 0,
    shortDescription:
      "pente ideal para desembaraçar os cabelos sem danificar e dar uma ótima definição",
    image:
      "https://down-br.img.susercontent.com/file/sg-11134201-22100-t3e00utyb6hvc1",
    url: "https://shope.ee/602JVRlgHc",
    longDescription:
      "Ótimo para finalizar os fios, dar definição e ajudar no desembaraço dos fios.",
  },
  {
    id: "Gel Cera Capilar Ultra Forte Ouribel 250g",
    name: "Gel Cera Capilar Ultra Forte Ouribel 250g",
    price: 0,
    shortDescription:
      "O Gel Cera Ouribel promove uma fixação forte e duradoura.",
    image:
      "https://imgs.search.brave.com/KDmjNtcJdHMG3gImy4APretyq4Nxb7g2woa_xMYW5Ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/ODQ1NjItTUxCNDQx/OTY5MDI1MzlfMTEy/MDIwLU8ud2VicA",
    url: "https://shope.ee/7fAXV6Qb22",
    longDescription:
      "O produto facilita o penteado e mantém seus cabelos fixos e modelados o dia todo, resiste à umidade e não resseca os cabelos. Gel Cera Ouribel é formulado com D-Pantenol, um precursor da Vitamina B5, que auxilia no crescimento e ajuda a formar fios mais fortes e espessos. O produto atua também no combate à queda.",
  },
  {
    id: "Dabelle Oleo Em Creme Sos Crescimento 190Ml",
    name: "Dabelle Oleo Em Creme Sos Crescimento 190Ml",
    price: 0,
    shortDescription:
      "Com Multivitaminas, Óleo de Rícino, D-Pantenol e Biotina.",
    image: "https://m.media-amazon.com/images/I/51mNn4WMZHL.AC_SY450.jpg",
    url: "https://amzn.to/48EDyTR",
    longDescription:
      "Que tal um cabelo tão forte que cresce saudável? O Óleo em Creme Fortalecedor é um tratamento multifuncional essencial para cabelos fragilizados e quebradiços. Sua fórmula cremosa é rica em nutrientes que fortalecem os fios para prevenir a queda devido à quebra.",
  },
  {
    id: "Creme para Pentear Modelador de Cachos Soul Power Curly Styling Cream - 500ml",
    name: "Creme para Pentear Modelador de Cachos Soul Power Curly Styling Cream - 500ml",
    price: 0,
    shortDescription: "MODELADOR DE CACHOSPH 4.0 - 5.0",
    image: "https://m.media-amazon.com/images/I/81PVhpmCJkL.AC_SY679.jpg",
    url: "https://amzn.to/3vlS7xf",
    longDescription:
      "Sua formulação contém Colágeno Vegetal, Manteiga de Karité e Óleo de Oliva, o que confere hidratação profunda e duradoura, mantendo os cachos modelados por mais tempo.\n\nCOMPONENTES:\nMANTEIGA DE KARITÉ: Manteiga vegetal com alto poder de hidratação, tem propriedade de reter a umidade e devolver a elasticidade e maleabilidade aos cabelos. COLÁGENO VEGETAL: Extraído da planta Acácia Senegal, que é rica em polissacarídeos, aminoácidos e proteínas com estruturas semelhantes ao colágeno humano, oferecendo precursores biológicos com alta afinidade com os cabelos, com poderosas propriedades hidratantes e formadoras de filme para impedir a perda de água. ÓLEO DE OLIVA: Óleo natural da Oliva com propriedades emolientes e lubrificantes , auxilia na restauração do equilíbrio lipídico preservando a maciez e combatendo o ressecamento.",
  },
  {
    id: "Kit Elseve Shampoo 375mL + Condicionador 170mL",
    name: "Kit Elseve Shampoo 375mL + Condicionador 170mL",
    price: 0,
    shortDescription: "Kit Elseve Shampoo 375mL + Condicionador 170mL váriados",
    image:
      "https://imgs.search.brave.com/5nT_V320eY9E9z8YtwjorwCdjbsKwoVWFU8g-srJ1Vc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFLSjJWWXRQR0wu/anBn",
    url: "https://shope.ee/602JWdHzl2",
    longDescription:
      "1. *Kit Elseve Reparação Total 5:*\n- Indicado para cabelos danificados.\n- Enriquecido com Cicatri-Ceramida para combater danos desde os primeiros sinais.\n- Reduz fios quebradiços, proporciona brilho e flexibilidade.\n- Remove pontas duplas e recupera a estrutura dos fios.\n- Dica: Lave com água fria para mais brilho.\n\n2. *Kit Elseve Óleo Extraordinário Nutrição:*\n- Ideal para cabelos secos, opacos e sem brilho.\n- Textura ultrafina e leve.\n- Enriquecido com Micro-Óleos de Flores Preciosas.\n- Reconstrói a fibra capilar, proporcionando nutrição, leveza e brilho.\n\n3. *Kit Elseve Hidra Hialurônico:*\n- Preenche e retém hidratação profunda na fibra capilar.\n- Shampoo promove limpeza profunda e hidratação.\n- Condicionador desembaraça, controla o frizz e sela as cutículas.\n\n4. *Kit Elseve Longo dos Sonhos:*\n- Ideal para cabelos compridos e danificados.\n- Shampoo Salvador e Condicionador Desata Nós.\n- Contém Queratina Vegetal, Vitaminas e Óleo de Rícino.\n- Preenche, recupera, deixa o cabelo macio, brilhante e evita pontas duplas.\n\n5. *Kit Elseve Liso dos Sonhos:*\n- Para cabelos lisos e longos.\n- Fórmula com Queratina Vegetal, Manteiga de Cac",
  },
  {
    id: "Widi Care Infusão 2.0 Acidificante - Controle De Ph",
    name: "Widi Care Infusão 2.0 Acidificante - Controle De Ph",
    price: 0,
    shortDescription:
      "O Infusão 2.0 Acidificante é a solução para cabelos porosos, desvitalizados e sem brilho. Ideal para recuperar a saúde capilar após tratamentos químicos, sua fórmula inteligente controla o pH, sela as cutículas, minimiza o frizz e devolve o brilho perdido.",
    image: "https://m.media-amazon.com/images/I/61sISUtLpPL.AC_SY879.jpg",
    url: "https://amzn.to/47qE2vG",
    longDescription:
      "Como usar?\n PARA CABELOS POROSOS, QUE PRECISAM DE REVITALIZAÇÃO OU PARA EQUILIBRAR O pH DAS CUTÍCULAS, APÓS TRATAMENTOS ALCALINOS.\nLave os fios com um shampoo hidratante de sua preferência, enxágue abundantemente, certificando-se da total retirada dos produtos aplicados anteriormente (no caso de um pós química).Retire o excesso de água e aplique o ACIDIFICANTE INFUSÃO 2.0 mechas a mecha, massageando bem.Distribua bem o produto com o auxílio de um pente, promovendo a sua distribuição por todos os fios.Deixe agir de 05 à 10 minutos, enxágue bem e a seguir aplique uma máscara de sua preferência. Enxágue e finalize como desejar.",
  },
  {
    id: "Máscara Coco e Cacau Mask Soul Power - 400g",
    name: "Máscara Coco e Cacau Mask Soul Power - 400g",
    price: 0,
    shortDescription: "Máscara nutritiva(pH: 3,5 - 4,5) - contém: 400g",
    image: "https://m.media-amazon.com/images/I/61QBeO0EiWL.AC_SY450.jpg",
    url: "https://amzn.to/3S8gTd5",
    longDescription:
      "Sua formulação combina potentes ativos nutritivos que devolvem carga lipídica nos cabelos, combatendo profundamente o ressecamento e reequilibrando os nutrientes na fibra capilar. Promove revitalização intensa, deixando os cabelos cacheados e crespos muito macios, com balanço, naturalidade e brilho intenso.\nCOMPONENTES:\nÓleo de Coco - Com emoliência e lubrificação, forma uma camada protetora que proporciona elevada hidratação, maciez e brilho.\nÁgua de Coco- Água amaciante e suavizante, com alto poder hidratante devido à sua composição rica em ácidos graxos e sais minerais.\nManteiga de Cacau – Possui antioxidantes, flavonóides, vitaminas e minerais que penetram profundamente nos cabelos, aumentando a nutrição em todo o fio e deixando os cabelos muito macios.\nÓleo de Oliva - Óleo natural com propriedades emolientes e lubrificantes, auxilia na restauração do equilíbrio lipídico preservando a maciez e combatendo o ressecamento.\nÓleo de Macadâmia - Óleo natural emoliente e nutritivo, rico em Ácido Oleico (Ômega 9) e Ácido Palmitoleico (Ômega 7). Promove brilho, emoliência e lubrificação dos fios.\nManteiga de Manga - Manteiga consistente e nutritiva, fornece um efeito protetor natural contra radiação UV reestruturando o fio e auxiliando no rejuvenescimento da fibra capilar.\nManteiga de Shorea - Conhecido por seus benefícios de nutrição e revitalização, possui Ômega 9 e ácidos graxos essenciais que protegem os cabelos contra o envelhecimento e a radiação UV.\nÓleo de Abacate - Óleo nutritivo, hidratante e emoliente.",
  },
  {
    id: "Ativador de Cachos SOS Cachos Super Óleos Salon Line 300ml",
    name: "Ativador de Cachos SOS Cachos Super Óleos Salon Line 300ml",
    price: 0,
    shortDescription:
      "O Ativador de Cachos Super Óleos Nutritivo S.O.S Cachos traz em sua fórmula 12 óleos poderosos para um tratamento profundo.",
    image:
      "https://down-br.img.susercontent.com/file/br-11134201-7r98o-ln1ytv6fzwoz42",
    url: "https://shope.ee/3pxoxViQpI",
    longDescription:
      " ATIVOS\nQuais os principais ativos?\nSuper óleos: a combinação entre os óleos de Coco, Argan, Karité, Macadâmia, Oliva, além de outras sementes, ervas e frutos garante ação nutritiva, pois atua nas camadas mais profundas das fibras capilares, repondo seus nutrientes, garantindo brilho no cabelo e vitalidade. ",
  },
  {
    id: "Máscara Babosa Soul Power Aloe Mask - 400g",
    name: "Máscara Babosa Soul Power Aloe Mask - 400g",
    price: 0,
    shortDescription: "BABOSA SOUL POWER(pH: 4,0 – 5,0) – contém: 400G",
    image: "https://m.media-amazon.com/images/I/71ngmJGDuKL.AC_SX466.jpg",
    url: "https://amzn.to/41LSNIu",
    longDescription:
      "Máscara de hidratação intensa com Babosa para recuperar fios ressecados, devolvendo a maleabilidade e definição das curvaturas dos cabelos.\nCOMPONENTES:\nBABOSA: Mucilagem emoliente, hidratante e nutritiva. Contém uma grande variedade de vitaminas, sais minerais e glucídios que nutrem e doam brilho. VITAMINA E Poderoso antioxidante que combate os radicais livres, auxiliando na saúde dos fios. MEL VEGETAL: Possui propriedades emoliente, remineralizante, hidratante e nutritiva aos fios, conferindo suavidade aos cabelos. ÓLEO DE ABACATE Óleo vegetal de nutrição intensa para cabelos muito ressecados. ÓLEO DE OLIVA Óleo natural da Oliva com propriedades emolientes e lubrificantes, auxilia na restauração do equilíbrio lipídico preservando a maciez e combatendo o ressecamento. MANTEIGA DE KARITÉ Manteiga vegetal com alto poder de hidratação, tem propriedade de reter a umidade e devolver a elasticidade e maleabilidade aos cabelos.",
  },
  {
    id: "Creme para Pentear Coco e Cacau Cream Soul Power - 500ml",
    name: "Creme para Pentear Coco e Cacau Cream Soul Power - 500ml",
    price: 0,
    shortDescription: "Creme para pentear(pH: 4,0 - 5,0) - contém: 500ml",
    image: " https://m.media-amazon.com/images/I/61CKRSYWysL.AC_SY450.jpg",
    url: "https://amzn.to/3tAwAR4",
    longDescription:
      "Sua formulação rica em ativos naturais forma uma camada emoliente antirressecamento que evita a perda de nutrientes importantes nos fios, mantendo os cabelos cacheados e crespos nutridos por mais tempo, com menos frizz e redução de pontas duplas.",
  },
  {
    id: "Creme Para Pentear Nutrição Reparadora Salon Line 1kg",
    name: "Creme Para Pentear Nutrição Reparadora Salon Line 1kg",
    price: 0,
    shortDescription: "Definição dos cachos e controle do frizz.",
    image:
      "https://down-br.img.susercontent.com/file/br-11134201-7r98o-ln1yw0j2sx50b2",
    url: "https://shope.ee/VhN0D5Jmk",
    longDescription:
      "Qual a indicação? \nCabelos ressecados e cabelos desnutridos. \n Pode usar a partir de quantos anos? \n A partir de 12 anos \nATIVOS \nQuais os principais ativos? \nÓleo de coco: rico em vitaminas essenciais para os cabelos e ácidos graxos, fortalece os fios e proporciona brilho e maciez extrema. \n  Óleo de argan: forma uma película protetora que evita a perda de água natural dos fios. Além disso, promove hidratação e nutrição, reparando e fortalecendo os cabelos. \nAzeite de oliva orgânico: hidrata e dá brilho ao cabelo, além de nutrir e regenerar os fios.",
  },
  {
    id: "Creme Para Pentear Hidratação Profunda 1kg Salon Line",
    name: "Creme Para Pentear Hidratação Profunda 1kg Salon Line",
    price: 0,
    shortDescription: " Definição dos cachos e controle do frizz ",
    image:
      "https://down-br.img.susercontent.com/file/br-11134201-7r98o-ln1yuc6t3rus95",
    url: "https://shope.ee/1VZuCCJsGa",
    longDescription:
      "Para quais tipos de cabelo? \nCabelos ondulados, cabelos cacheados e crespos. \nQual a indicação? \nCabelos secos e desidratados. \nPode usar a partir de quantos anos? \nA partir de 12 anos. \nATIVOS \nQuais os principais ativos? \nÓleo de coco: rico em vitaminas e ácidos graxos, fortalece os fios e proporciona brilho e maciez extrema. \nBabosa: também conhecido como Aloe vera o ativo possui vitaminas e sais minerais, garantindo uma hidratação e couro cabeludo saudável. \nD-pantenol: além de proteger o cabelo contra danos externos, fortalece o couro cabeludo e garante fios hidratados, brilhantes e ultramacios.",
  },
  {
    id: "Lola Cosmetics - Argan Oil, 50 ml",
    name: "Lola Cosmetics - Argan Oil, 50 ml",
    price: 0,
    shortDescription: "Óleo de tratamento para cabelos danificados.",
    image: "https://m.media-amazon.com/images/I/81xuqkyF3DL.AC_SY879.jpg",
    url: "https://amzn.to/3RPbO8d",
    longDescription:
      "Lola Cosmetics Argan Oil finaliza o cuidado ao ajudar na reconstrução dos fios, além de proteger e disciplinar com leveza.\nO Óleo Capilar Lola Cosmetics Argan Oil evita os danos causados pelo calor do secador e prancha. Ele não pesa nos fios e é rapidamente absorvido pela fibra capilar. Com isso, o Óleo de Argan Lola deixa o cabelo protegido, livre dos arrepiados e com brilho intenso.",
  },
  {
    id: "Lola Cosmetics - Pinga Açai e Pracaxi",
    name: "Lola Cosmetics - Pinga Açai e Pracaxi",
    price: 0,
    shortDescription: "Óleo finalizador pinga",
    image: "https://m.media-amazon.com/images/I/41pcPqDerNL.AC_SY450.jpg",
    url: "https://amzn.to/3HaaWGw",
    longDescription:
      "Pinga! Patauá & Moringa Pré e Pós Shampoo 50ml.\nÉ um óleo multiuso pré e pós shampoo. Intensamente hidratante, nutre o cabelo desidratado, proporciona brilho instantâneo e evita o indesejado frizz. Sua textura com toque seco e não oleoso é absorvida instantaneamente pelos fios.\nPinga! Cenoura & Oliva Pré e Pós Sol 50ml contém uma mistura de óleos vegetais que combinados deixam os cabelos macios e radiantes. Perfeito como um produto pré e pós-sol ou para uso diário, sua textura glamorosa é absorvida instantaneamente. Toque seco e perfume maravilhoso.\nPinga! Açaí & Pracaxi Pré e Pós Química 50ml.\nÉ um tratamento profundamente nutritivo que pode ser usado como protetor da cor e dos danos ambientais ou para reparar pontas duplas. Formulado com óleos vegetais orgânicos, previne o desbotamento da cor, reduz o frizz e confere brilho intenso. Sua textura glamourosa é absorvida instantaneamente. Toque seco e perfume maravilhoso",
  },
  {
    id: "Óleo Capilar Pinga - Lola Cosmetics",
    name: "Óleo Capilar Pinga - Lola Cosmetics",
    price: 0,
    shortDescription: "Óleo finalizador pinga",
    image:
      "https://down-br.img.susercontent.com/file/719c309cf5520dc97f47abb419237cd7",
    url: "https://shope.ee/2flrb3AeUS",
    longDescription:
      "Pinga! Patauá & Moringa Pré e Pós Shampoo 50ml.\nÉ um óleo multiuso pré e pós shampoo. Intensamente hidratante, nutre o cabelo desidratado, proporciona brilho instantâneo e evita o indesejado frizz. Sua textura com toque seco e não oleoso é absorvida instantaneamente pelos fios.\n\nPinga! Cenoura & Oliva Pré e Pós Sol 50ml contém uma mistura de óleos vegetais que combinados deixam os cabelos macios e radiantes. Perfeito como um produto pré e pós-sol ou para uso diário, sua textura glamorosa é absorvida instantaneamente. Toque seco e perfume maravilhoso. \n\nPinga! Açaí & Pracaxi Pré e Pós Química 50ml.\nÉ um tratamento profundamente nutritivo que pode ser usado como protetor da cor e dos danos ambientais ou para reparar pontas duplas. Formulado com óleos vegetais orgânicos, previne o desbotamento da cor, reduz o frizz e confere brilho intenso. Sua textura glamourosa é absorvida instantaneamente. Toque seco e perfume maravilhoso",
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
