import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const {post, user} = new PrismaClient()

console.log(post)
