import { Shoes } from "@prisma/client";
import { prisma } from "./client";

const main = async () => {
  try {
    await prisma.announcement.deleteMany();
    await prisma.hero.deleteMany();
    await prisma.latests.deleteMany();
    await prisma.image.deleteMany();
    await prisma.size.deleteMany();
    await prisma.shoes.deleteMany();

    await prisma.hero.createMany({
      data: [
        {
          status: "ACTIVE",
          name: "NIKE",
          img: "/images/nike/2.jpg",
        },
        {
          status: "ACTIVE",
          name: "ADIDAS",
          img: "/images/adidas/1.jpg",
        },
        {
          status: "ACTIVE",
          name: "NEW BALANCE",
          img: "/images/newBalance/1.jpg",
        },
        {
          status: "ACTIVE",
          name: "VANS",
          img: "/images/vans/1.jpg",
        },
      ],
      skipDuplicates: true,
    });
    await prisma.announcement.createMany({
      data: [
        {
          title: "Student Get 10% Off",
          subtitle: "Learn More",
          link: "#",
          status: "ACTIVE",
        },
        {
          title: "New Styles on Sale: Up to 40% Off",
          subtitle: "Shop All Our New Markdowns",
          link: "#",
          status: "ACTIVE",
        }
      ],
      skipDuplicates: true,
    });
    await prisma.latests.createMany({
      data: [
        {
          name: "NIKE",
          img: "/images/nike/2.jpg",
          status: "ACTIVE",
        },
        {
          name: "NIKE",
          img: "/images/nike/4.jpg",
          status: "ACTIVE",
        },
        {
          name: "ADIDAS",
          img: "/images/adidas/1.2.jpg",
          status: "ACTIVE",
        },
        {
          name: "VANS",
          img: "/images/vans/2.jpg",
          status: "ACTIVE",
        },
      ],
      skipDuplicates: true,
    });
    await prisma.shoes.createMany({
      data: [
        {
          name: "Nike 1",
          brand: "NIKE",
          color: "White",
          gender: "MALE",
          type: "Running",
          price: 1500,
        },
        {
          name: "Nike 2",
          brand: "NIKE",
          color: "White",
          gender: "UNISEX",
          type: "Skateboard",
          price: 1500,
        },
        {
          name: "Nike 3",
          brand: "NIKE",
          color: "Black",
          gender: "UNISEX",
          type: "Running",
          price: 1500,
        },
        {
          name: "Nike 4",
          brand: "NIKE",
          color: "Gray",
          gender: "FEMALE",
          type: "Running",
          price: 1500,
        },
        {
          name: "Nike 4",
          brand: "NIKE",
          color: "Gray",
          gender: "FEMALE",
          type: "Running",
          price: 1500,
        },
        {
          name: "Vans 1",
          brand: "VANS",
          color: "Black",
          gender: "MALE",
          type: "Skateboard",
          price: 1000,
        },
        {
          name: "Vans 2",
          brand: "VANS",
          color: "White | Blue",
          gender: "MALE",
          type: "Skateboard",
          price: 1000,
        },
        {
          name: "Vans 3",
          brand: "VANS",
          color: "Yellow",
          gender: "UNISEX",
          type: "Skateboard",
          price: 1000,
        },
        {
          name: "New Balance 1",
          brand: "NEW BALANCE",
          color: "Mustard",
          gender: "UNISEX",
          type: "Casual",
          price: 1200,
        },
        {
          name: "New Balance 2",
          brand: "NEW BALANCE",
          color: "Black",
          gender: "MALE",
          type: "Casual",
          price: 1200,
        },
        {
          name: "Adidas 1",
          brand: "ADIDAS",
          color: "Black | Orange",
          gender: "UNISEX",
          type: "Casual",
          price: 1400,
        },
      ],
      skipDuplicates: true,
    });
    await sizes();
    await images();
  } catch (e) {
    throw e;
  }
}

const sizes = async () => {
  try {
    const results = await prisma.shoes.findMany(); 
    results.forEach(async (shoe) => {
      await prisma.size.createMany({
        data: [
          { shoeId: shoe.shoeId, size: 7 },
          { shoeId: shoe.shoeId, size: 8 },
          { shoeId: shoe.shoeId, size: 9 },
          { shoeId: shoe.shoeId, size: 10 },
          { shoeId: shoe.shoeId, size: 11 },
          { shoeId: shoe.shoeId, size: 12 },
        ],
        skipDuplicates: true,
      })
    });
  } catch (error) {
    console.error(error);
  }
}

const nikeOne = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/nike/1.jpg' },
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/nike/1.2.jpg' },
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/nike/1.3.jpg' },
    ],
    skipDuplicates: true,
  })
}

const nikeTwo = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/nike/2.jpg' },
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/nike/2.2.jpg' },
    ],
    skipDuplicates: true,
  })
}

const nikeThree = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/nike/3.jpg' },
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/nike/3.2.jpg' },
    ],
    skipDuplicates: true,
  })
}

const nikeFour = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/nike/4.jpg' },
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/nike/4.2.jpg' },
    ],
    skipDuplicates: true,
  })
}

const vansOne = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/vans/1.jpg' },
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/vans/1.2.jpg' },
    ],
    skipDuplicates: true,
  })
}

const vansTwo = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/vans/2.jpg' },
    ],
    skipDuplicates: true,
  })
}

const vansThree = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/vans/3.jpg' },
    ],
    skipDuplicates: true,
  })
}

const newBalanceOne = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/newBalance/1.jpg' },
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/newBalance/1.2.jpg' },
    ],
    skipDuplicates: true,
  })
}

const newBalanceTwo = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/newBalance/2.jpg' },
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/newBalance/2.2.jpg' },
    ],
    skipDuplicates: true,
  })
}

const adidasOne = async (shoe: Shoes) => {
  await prisma.image.createMany({
    data: [
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/adidas/1.jpg' },
      { name: shoe.name, shoeId: shoe.shoeId, src: '/images/adidas/1.2.jpg' },
    ],
    skipDuplicates: true,
  })
}



const images = async () => {
  try {
    const results = await prisma.shoes.findMany();
    results.forEach(async (shoe) => {
      if (shoe.name === "Nike 1") await nikeOne(shoe);
      if (shoe.name === "Nike 2") await nikeTwo(shoe);
      if (shoe.name === "Nike 3") await nikeThree(shoe);
      if (shoe.name === "Nike 4") await nikeFour(shoe);
      if (shoe.name === "Vans 1") await vansOne(shoe);
      if (shoe.name === "Vans 2") await vansTwo(shoe);
      if (shoe.name === "Vans 3") await vansThree(shoe);
      if (shoe.name === "New Balance 1") await newBalanceOne(shoe);
      if (shoe.name === "New Balance 2") await newBalanceTwo(shoe);
      if (shoe.name === "Adidas 1") await adidasOne(shoe);
    });
  } catch (error) {
    console.error(error);
  }
}


main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });