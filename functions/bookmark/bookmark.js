const { ApolloServer } = require('apollo-server-lambda')
const faunadb = require('faunadb')
const { typeDefs } = require('./schema')
const q = faunadb.query
require('dotenv').config()





const resolvers = {
  Query: {
    bookmark: async (parents, args, ctx, info) => {
      try {
        const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET });
        const response = await adminClient.query(
          q.Map(q.Paginate(q.Match(q.Index("get_by_url"))), q.Lambda((x) => q.Get(x)))
        )

        //console.log(response)
        const result = response.data.map((res) => {
          return {
            id: res.ref.id,
            ...res.data
          }
        });

        return result

      } catch (error) {
        console.log(error)
        return error.toString()

      }

    },


  },
  Mutation:{
    addBookmark:async (parents, args, ctc,info)=>{
      try{
        const adminClient= new faunadb.Client ({secret:process.env.ADMIN_KEY_SECRET})
        const response = await  adminClient.query(
          q.Create(
            q.Collection('links'),{data:{url:args.input.url,description:args.input.description}}
          )
        )
        const data = {
          id:response.ref.id,
          ...response.data
        }
        return data

      }catch(err){
        return err.toString()
      }

    },
    deleteBookmark: async (parents,args,ctx,info)=> {
      try {
        const adminClient= new faunadb.Client({secret:process.env.ADMIN_KEY_SECRET});
        const response = await adminClient.query(
          q.Delete(
            q.Ref(q.Collection('links'),args.input.id)
          )
        )
        const data ={ id:response.ref.id, ...response.data}
        return data
      } catch (error) {
        return error
      }
    },
  }
}



const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
