import { GraphQLClient } from "graphql-request";

export function request(query, variables = {}, preview =  false) {
    const endpoint = preview
        ? `https://graphql.datocms.com/preview`
        : `https://graphql.datocms.com/`;
    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_KEY}`
        }
    });
    return client.request(query, variables);
}