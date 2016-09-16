export type Options = {
  schema: Object
  rootValue?: Object
  pretty?: boolean
  graphiql?: boolean
  contextMapper?: (request) => any
  onError?: (result) => void
}

export default function register(server, options: Options, next);
