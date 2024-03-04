import request, { gql } from "graphql-request";

const MASTER_URL = "https://api-ap-southeast-2.hygraph.com/v2/clt6i66bj0coq07usd5kww0ka/master";

export const getCarsList = async () => {
    const query = gql`
        query CarLists {
            carLists {
                carAvg
                createdAt
                id
                name
                price
                publishedAt
                updatedAt
                carType
                carBrand
                image {
                    url
                }
            }
        }
    `;

    const result = await request(MASTER_URL, query);
    return result;
}