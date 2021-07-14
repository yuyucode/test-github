import path from 'path'
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const {post, user} = new PrismaClient()

console.log(post)


/** 添加服务器端的内容 **/

const a = path.resolve("/...")
console.log(a)
