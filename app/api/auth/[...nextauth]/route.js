// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/models/user";
// import { signJwtToken } from "@/libs/jwt";
// import bcrypt from "bcryptjs";
// import { connectMongoDB } from "@/libs/mongodb";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//       credentials: {
//         name: { label: "Email", type: "text", placeholder: "john Doe" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials, req) {
//         const { email, password } = credentials;
//         await connectMongoDB();
//         const user = await User.findOne({ email });
//         if (!user) {
//           throw new Error("Invalid input");
//         }
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (!passwordMatch) {
//           throw new Error("Invalid input");
//         } else {
//           const { password, ...currentUser } = user._doc;
//           const accessToken = signJwtToken(currentUser, { expiresIn: "6d" });
//           return {
//             ...currentUser,
//             accessToken,
//           };
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/sign-in",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.accessToken = user.accessToken;
//         token._id = user._id;
//         token.role = user.role;
//       }

//       return token;
//     },
//   },
//   async session({ session, token }) {
//     if (token) {
//       session.user._id = token._id;
//       session.user.role = token.role;
//       session.user.accessToken = token.accessToken;
//     }

//     return session;
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/libs/mongodb";
import User from "@/models/user";
import { signJwtToken } from "@/libs/jwt";
import bcrypt from "bcryptjs";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "John Doe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        await connectMongoDB();

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid input");
        }

        // 2 parameters ->
        // 1 normal password -> 123123
        // 2 hashed password -> dasuytfygdsaidsaugydsaudsadsadsauads
        const comparePass = await bcrypt.compare(password, user.password);

        if (!comparePass) {
          throw new Error("Invalid input");
        } else {
          const { password, ...currentUser } = user._doc;

          const accessToken = signJwtToken(currentUser, { expiresIn: "6d" });

          return {
            ...currentUser,
            accessToken,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token._id = user._id;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.accessToken = token.accessToken;
        session.user.role = token.role;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
