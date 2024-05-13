type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "AirPodsMax Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero sit amet nisi hendrerit fermentum. Fusce condimentum libero a magna consequat, nec lacinia sem rhoncus.",
    img: "/black.png",
    price: 6500,
  },
  {
    id: 2,
    title: "AirPodsMax White",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero sit amet nisi hendrerit fermentum. Fusce condimentum libero a magna consequat, nec lacinia sem rhoncus.",
    img: "/white.png",
    price: 6500,
  },
  {
    id: 3,
    title: "AirPodsMax Blue",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero sit amet nisi hendrerit fermentum. Fusce condimentum libero a magna consequat, nec lacinia sem rhoncus.",
    img: "/blue.png",
    price: 6500,
  },
  {
    id: 4,
    title: "AirPodsMax Pink",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero sit amet nisi hendrerit fermentum. Fusce condimentum libero a magna consequat, nec lacinia sem rhoncus.",
    img: "/pink.png",
    price: 6500,
  },
  {
    id: 5,
    title: "AirPodsMax Green",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero sit amet nisi hendrerit fermentum. Fusce condimentum libero a magna consequat, nec lacinia sem rhoncus.",
    img: "/green.png",
    price: 6500,
  },
];
