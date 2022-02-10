interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;
export const helloBuilder: HelloBuilder = name => ({ hello: name });
