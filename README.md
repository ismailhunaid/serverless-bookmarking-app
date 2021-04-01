step continues ...

step 1
gatsby with netlify serverless functions
installation
npm install -g gatsby-cli
gatsby new [projectName] [url]
gatsby develop
then
signup to netlify
npm install -g yarn
npm install -g netlify-cli
then
netlify.toml file on the root we dont need toml file if we are using netlify dev only it works without toml file 
netlify login
netlify logout
netlify dev --live
netlify link
netlify unlink
netlify deploy --prod
netlify status
then CICD with github and netlify will do CICD for us . This is  automatic process of deploying
go to github ,
make a repo of you project connect this repo with netlfy dashboard then it will done CICD for us 
we can deploy react and gatsby both
but i am practicing here for gatsby only 
[build]
command="yarn build"
publish="build/"
publish="public/"
functions="functions/"

step 2 move forward to netlify serverless functions how we can add serverside code in single place 
1) create a folder and name it  as functions
2) in toml file type functions="functions/"
2) type command => netlify functions:create hello
3)  [build]
        command="yarn build"
        publish="build/"
        publish="public/"
        functions="functions/"
4) check this 
http://localhost:8888/.netlify/functions/hello

5) fetch data from client with useEffect to the server  

step 3 now add faunaDb to serverless functions
 refer to project 12  for faunadb with serverless crud APP only no graphQL 
here is the installation guide only


1) serverless + faunaDB CRUD Application
2) npm install faunadb  fauna db driver installation
3) const faunadb = require("faunadb") 
4) q = faunadb.query
5) const adminClient = new faunadb.Client ({ secret: "})>
6) const serverClient = new faunadb.Client({ secret:  })
7) use full links
8) npm init inside functions directory 
9) crud app using serverless and faunadb and gatsby.js 
10) first i have done hard coded crud for testing then using gatsby client for crud 
11) hard coded server side done 
12) moving toward dynamic way from client side 
13) crud operation from gatbsy client 
14) read done
15) addCountries done
16) delete 
17) update is pending  koi waat nai 

https://github.com/panacloud-modern-global-apps/jamstack-serverless

link https://docs.fauna.com/fauna/current/tutorials/crud?lang=javascript

https://www.netlify.com/docs/functions/#the-handler-method

https://docs.fauna.com/fauna/current/drivers/javascript

 step 4 now add GraphQl + faunaDB + serverless + Gatsby 
  see panacloud repo step 23 and 23 for syntax of runtime query provider wrap root element
 step 4 is in project 13 

*) repeat above steps to set project
*) create netlify.toml file
*) functions folder create
*) faunadb and serverless functions are done 
*) now add grapghQl to our serverless functions 
*) we need apollo client and apollo server to use graphQl  on run time not build time here we can use graphQl on build time also 
*) in gatsby , frontend , we have to do this
*) npm install @apollo/client
*) inside src folder make a folder named apollo 
*) make two files client.js and wrap-root-element.js
*) configure these  two files  see  these two files for configuration
*) provide wrapRootElement  to Two files gatsby-ssr.js and gatbsy-browser.js
*) export {wrapRootElement} from './src/apollo/wrap-root-element' two places 
*) npm install cross-fetch 
*) import fetch from cross-fetch
*) see syntax from previous projects 
*) now move to serverless functions
*) we have to work on server side with three things apollo server lamda graphql , serverless, and faunadb so install all this 
*) netlify functions:create todo
*) select apollo-grapghQl from the options
*) it will create apollo-server-lamda template for us 
*) npm install apollo-server-lamda  and graphql
*) npm install faunadb
*) install dotenv 
*) npm init and npm install 
*) we have done with basic configuration and installtion 
*) move on to make a todo app 
*) first done serverside code with faunadb get create update and delete
*) then from client side query all todos , add todos , update and delete todos 
*)  project done 
*) important link for netlify ADD ONS  https://docs.fauna.com/fauna/current/integrations/netlify.html
*) book marking App  project14
*) four important things  faunadb Graphql netlify Serverless Gatsby 


step 5  just summarize how to setup our project in simple steps details covered above 
 front End side installation 
1) create netlify.toml file 
2) npm install @apollo/client graphql
3) create apollo folder and create client.js file and wrap-root-element.js
4) configure gatsbybrowser.js file and gatsby-ssr.js file
5) npm install cross-fetch 
6) import fetch from cross-fetch
5) see syntax from previous projects 
6) npm install dotenv 


    In  the back end side server side 
1) set up collections or database in fauna db 
2) secret key 
3) create index
4) create a folder functions
5) npm install faunadb const faunadb = require("faunadb) q= faunadb.query const adminClient= new faunadb.client({secret:""hhhhhhf"})
6) netlify functions:create hello choose graphql fauna
7) npm init 
8) npm install apollo-server-lambda
9) npm install dotenv
10) 

10) inside functions folder we dont need any dependencies we need only package.json file 
11) we need all dependencies on the root  we can install all dependencies on the root 




   




