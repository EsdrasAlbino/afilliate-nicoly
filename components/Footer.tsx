import Image from "next/image";

export default function Footer() {
  return (
    <footer className="center mt-5 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs">
      <p>Veja nossas redes socias para mais dicas</p>
      <span>|</span>

      {social &&
        social.map((social) => (
          <a href={social.href} className={social.className} target="_blank">
            <Image
              alt={social.alt}
              src={social.src}
              width={social.width}
              height={social.height}
            />
          </a>
        ))}
    </footer>
  );
}

const social = [
  {
    href: "https://www.instagram.com/nicoly.camilli/",
    className: "font-medium text-orange-600",
    alt: "instagram",
    src: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    width: 18,
    height: 18,
  },
  {
    href: "https://www.tiktok.com/@n.albino08",
    className: "font-medium text-orange-600",
    alt: "tiktok",
    src: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png",
    width: 18,
    height: 18,
  },
  {
    href: "https://www.youtube.com/@nicolyalbino",
    className: "font-medium text-orange-600",
    alt: "youtube",
    src: "https://cdn-icons-png.flaticon.com/512/3128/3128307.png",
    width: 18,
    height: 18,
  },
];
