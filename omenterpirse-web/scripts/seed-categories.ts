import { db } from "../src/db";
import { categories } from "../src/db/schema";

async function main() {
  console.log("Seeding categories table...");

  const existing = await db.select().from(categories);
  if (existing.length > 0) {
    console.log("Categories already exist, skipping.");
    return;
  }

  await db.insert(categories).values([
    {
      name: "Electrical Wires",
      slug: "wires",
      imageUrl: "/images/wires_category.png",
      displayOrder: 1,
      isActive: true
    },
    {
      name: "Electrical Cables",
      slug: "cables",
      imageUrl: "/images/cables_category.png",
      displayOrder: 2,
      isActive: true
    },
    {
      name: "Switches & Modular",
      slug: "switches",
      imageUrl: "/images/switches_category.png",
      displayOrder: 3,
      isActive: true
    },
    {
      name: "MCBs & DBs",
      slug: "mcb-db",
      imageUrl: "/images/mcb_db_category.png",
      displayOrder: 4,
      isActive: true
    }
  ]);

  console.log("Categories seeded successfully!");
}

main().catch(console.error);
