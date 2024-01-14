import prisma from "@/lib/db";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession() {
    return await getServerSession(authOptions)
}

export async function getCurrentUser(){
    try {
        const session = await getSession()

        if(!session?.user.email){
            return null
        }
const currentUser = await prisma.user.findUnique({
    where:{
        email: session?.user?.email
    }
})

if(!currentUser){
    return null
}

return{
    ...currentUser,
      createdAt: currentUser.createdAt?.toISOString() || null,
      updatedAt: currentUser.updatedAt?.toISOString() || null,
      isEmailVerified:
        currentUser.isEmailVerified?.toISOString() || null,

}

    } catch (error) {
        console.log(error)
    }
}