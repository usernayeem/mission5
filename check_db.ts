import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        const res = await prisma.$queryRaw`SELECT id, email, role FROM "auth"."user" LIMIT 10`;
        console.log("auth.user rows:", res);
    } catch (e: any) {
        console.log("Error querying auth.user:", e.message);
    }

    try {
        const res = await prisma.$queryRaw`SELECT id, email, role FROM "user" LIMIT 10`;
        console.log("user rows:", res);
    } catch (e: any) {
        console.log("Error querying user:", e.message);
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
