import NextAuth from "next-auth"
import RedditProvider from "next-auth/providers/reddit"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
      clientId: 'u4Yan7vCRdAlkFB-3yTuIQ',
      clientSecret: 'nBCWNL-MOWkDVMPmt_CaHTYGKIu4Uw',
      secret: '20fce96dd380f8b1d7fc3834e790a947'
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)