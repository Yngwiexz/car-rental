const { PrismaClient } = require("@prisma/client");
const { read } = require("pdfkit");
const prisma = new PrismaClient();

const ACCESS = [
  {
    id: 1,
    visible: true,
    grant: { create: true, update: true, read: true, delete: true, },
    role_id: 2, 
    menu_id: 1, 
    createdBy: "Super Duper Admin"
  },
];

async function accessSeed() {
  await prisma.access.deleteMany();  //kalau ada data disitu delete semua
  return await prisma.access.createMany({   
    data: ACCESS,
  });
}

module.exports = accessSeed;
