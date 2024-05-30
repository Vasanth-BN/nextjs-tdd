import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { APP_ROUTES } from "@/constants/appRoutes";
import { AUTH_CONST, TOKEN_EXPIRY } from "@/constants/appConstants";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (
          email === AUTH_CONST.VALID_MAIL &&
          password === AUTH_CONST.VALID_PASSWORD
        ) {
          return {
            id: AUTH_CONST.USER_ID,
            name: AUTH_CONST.USER_NAME,
            email: AUTH_CONST.VALID_MAIL,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: TOKEN_EXPIRY,
  },
  pages: {
    signIn: APP_ROUTES.SIGN_IN,
  },
  callbacks: {
    async signIn({ user }) {
      return user ? true : false;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          name: token.name,
          email: token.email,
        };
      }
      return session;
    },
  },
};
