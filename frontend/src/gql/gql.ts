/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetProducts($isLiked: Boolean, $isAddedToCart: Boolean) {\n    products(\n      filters: { isLiked: { eq: $isLiked }, isAddedToCart: { eq: $isAddedToCart } }\n      pagination: { limit: 50 }\n    ) {\n      data {\n        id\n        __typename\n        attributes {\n          name\n          desc\n          img\n          price\n          rating\n          isLiked\n          isAddedToCart\n          size\n          color\n          cartCounter\n        }\n      }\n      meta {\n        pagination {\n          page\n          pageSize\n          total\n          pageCount\n        }\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      data {\n        id\n        __typename\n        attributes {\n          name\n          desc\n          img\n          price\n          rating\n          isLiked\n          isAddedToCart\n          size\n          color\n          cartCounter\n        }\n      }\n    }\n  }\n": types.GetProductDocument,
    "\n  mutation UpdateProduct(\n    $id: ID!\n    $isLiked: Boolean\n    $isAddedToCart: Boolean\n    $size: String\n    $color: String\n    $cartCounter: Int\n    $target: String\n  ) {\n    updateProduct(\n      id: $id\n      data: {\n        isLiked: $isLiked\n        isAddedToCart: $isAddedToCart\n        size: $size\n        color: $color\n        cartCounter: $cartCounter\n        target: $target\n      }\n    ) {\n      data {\n        id\n        attributes {\n          name\n          desc\n          img\n          price\n          rating\n          isLiked\n          isAddedToCart\n          size\n          color\n          cartCounter\n          target\n        }\n      }\n    }\n  }\n": types.UpdateProductDocument,
    "\n  query GetCategories {\n    categories {\n      data {\n        id\n        attributes {\n          categoryName\n        }\n      }\n    }\n  }\n": types.GetCategoriesDocument,
    "\n  query GetCategory($id: ID!, $limit: Int, $name: String) {\n    category(id: $id) {\n      data {\n        id\n        attributes {\n          categoryName\n          products(\n            filters: { name: { contains: $name } }\n            pagination: { limit: $limit }\n            sort: \"id:asc\"\n          ) {\n            data {\n              id\n              __typename\n              attributes {\n                name\n                desc\n                img\n                price\n                rating\n                isLiked\n                isAddedToCart\n                size\n                color\n                cartCounter\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetCategoryDocument,
    "\n  query GetPagination($categoryId: ID!, $limit: Int) {\n    products(\n      pagination: { limit: $limit }\n      filters: { categories: { id: { in: [$categoryId] } } }\n    ) {\n      meta {\n        pagination {\n          page\n          pageSize\n          total\n          pageCount\n        }\n      }\n    }\n  }\n": types.GetPaginationDocument,
    "\n  query GetProductsItemsCount($isLiked: BooleanFilterInput, $isAddedToCart: BooleanFilterInput) {\n    products(\n      pagination: { limit: 100 }\n      filters: { isLiked: $isLiked, isAddedToCart: $isAddedToCart }\n    ) {\n      meta {\n        pagination {\n          total\n        }\n      }\n    }\n  }\n": types.GetProductsItemsCountDocument,
    "\n  mutation RegisterUser($username: String!, $email: String!, $password: String!) {\n    register(input: { username: $username, email: $email, password: $password }) {\n      jwt\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n": types.RegisterUserDocument,
    "\n  mutation Login($identifier: String!, $password: String!) {\n    login(input: { identifier: $identifier, password: $password }) {\n      jwt\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  query GetOrders($userId: String!) {\n    orders(\n      filters: { userId: { eq: $userId }, customOrderId: { notNull: true } }\n      pagination: { limit: 100 }\n    ) {\n      data {\n        id\n        attributes {\n          amount\n          items\n          stripeId\n          userId\n          customOrderId\n          createdAt\n        }\n      }\n      meta {\n        pagination {\n          page\n          pageSize\n          total\n          pageCount\n        }\n      }\n    }\n  }\n": types.GetOrdersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProducts($isLiked: Boolean, $isAddedToCart: Boolean) {\n    products(\n      filters: { isLiked: { eq: $isLiked }, isAddedToCart: { eq: $isAddedToCart } }\n      pagination: { limit: 50 }\n    ) {\n      data {\n        id\n        __typename\n        attributes {\n          name\n          desc\n          img\n          price\n          rating\n          isLiked\n          isAddedToCart\n          size\n          color\n          cartCounter\n        }\n      }\n      meta {\n        pagination {\n          page\n          pageSize\n          total\n          pageCount\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts($isLiked: Boolean, $isAddedToCart: Boolean) {\n    products(\n      filters: { isLiked: { eq: $isLiked }, isAddedToCart: { eq: $isAddedToCart } }\n      pagination: { limit: 50 }\n    ) {\n      data {\n        id\n        __typename\n        attributes {\n          name\n          desc\n          img\n          price\n          rating\n          isLiked\n          isAddedToCart\n          size\n          color\n          cartCounter\n        }\n      }\n      meta {\n        pagination {\n          page\n          pageSize\n          total\n          pageCount\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      data {\n        id\n        __typename\n        attributes {\n          name\n          desc\n          img\n          price\n          rating\n          isLiked\n          isAddedToCart\n          size\n          color\n          cartCounter\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      data {\n        id\n        __typename\n        attributes {\n          name\n          desc\n          img\n          price\n          rating\n          isLiked\n          isAddedToCart\n          size\n          color\n          cartCounter\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProduct(\n    $id: ID!\n    $isLiked: Boolean\n    $isAddedToCart: Boolean\n    $size: String\n    $color: String\n    $cartCounter: Int\n    $target: String\n  ) {\n    updateProduct(\n      id: $id\n      data: {\n        isLiked: $isLiked\n        isAddedToCart: $isAddedToCart\n        size: $size\n        color: $color\n        cartCounter: $cartCounter\n        target: $target\n      }\n    ) {\n      data {\n        id\n        attributes {\n          name\n          desc\n          img\n          price\n          rating\n          isLiked\n          isAddedToCart\n          size\n          color\n          cartCounter\n          target\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProduct(\n    $id: ID!\n    $isLiked: Boolean\n    $isAddedToCart: Boolean\n    $size: String\n    $color: String\n    $cartCounter: Int\n    $target: String\n  ) {\n    updateProduct(\n      id: $id\n      data: {\n        isLiked: $isLiked\n        isAddedToCart: $isAddedToCart\n        size: $size\n        color: $color\n        cartCounter: $cartCounter\n        target: $target\n      }\n    ) {\n      data {\n        id\n        attributes {\n          name\n          desc\n          img\n          price\n          rating\n          isLiked\n          isAddedToCart\n          size\n          color\n          cartCounter\n          target\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCategories {\n    categories {\n      data {\n        id\n        attributes {\n          categoryName\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCategories {\n    categories {\n      data {\n        id\n        attributes {\n          categoryName\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCategory($id: ID!, $limit: Int, $name: String) {\n    category(id: $id) {\n      data {\n        id\n        attributes {\n          categoryName\n          products(\n            filters: { name: { contains: $name } }\n            pagination: { limit: $limit }\n            sort: \"id:asc\"\n          ) {\n            data {\n              id\n              __typename\n              attributes {\n                name\n                desc\n                img\n                price\n                rating\n                isLiked\n                isAddedToCart\n                size\n                color\n                cartCounter\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCategory($id: ID!, $limit: Int, $name: String) {\n    category(id: $id) {\n      data {\n        id\n        attributes {\n          categoryName\n          products(\n            filters: { name: { contains: $name } }\n            pagination: { limit: $limit }\n            sort: \"id:asc\"\n          ) {\n            data {\n              id\n              __typename\n              attributes {\n                name\n                desc\n                img\n                price\n                rating\n                isLiked\n                isAddedToCart\n                size\n                color\n                cartCounter\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPagination($categoryId: ID!, $limit: Int) {\n    products(\n      pagination: { limit: $limit }\n      filters: { categories: { id: { in: [$categoryId] } } }\n    ) {\n      meta {\n        pagination {\n          page\n          pageSize\n          total\n          pageCount\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPagination($categoryId: ID!, $limit: Int) {\n    products(\n      pagination: { limit: $limit }\n      filters: { categories: { id: { in: [$categoryId] } } }\n    ) {\n      meta {\n        pagination {\n          page\n          pageSize\n          total\n          pageCount\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductsItemsCount($isLiked: BooleanFilterInput, $isAddedToCart: BooleanFilterInput) {\n    products(\n      pagination: { limit: 100 }\n      filters: { isLiked: $isLiked, isAddedToCart: $isAddedToCart }\n    ) {\n      meta {\n        pagination {\n          total\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductsItemsCount($isLiked: BooleanFilterInput, $isAddedToCart: BooleanFilterInput) {\n    products(\n      pagination: { limit: 100 }\n      filters: { isLiked: $isLiked, isAddedToCart: $isAddedToCart }\n    ) {\n      meta {\n        pagination {\n          total\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser($username: String!, $email: String!, $password: String!) {\n    register(input: { username: $username, email: $email, password: $password }) {\n      jwt\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser($username: String!, $email: String!, $password: String!) {\n    register(input: { username: $username, email: $email, password: $password }) {\n      jwt\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($identifier: String!, $password: String!) {\n    login(input: { identifier: $identifier, password: $password }) {\n      jwt\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($identifier: String!, $password: String!) {\n    login(input: { identifier: $identifier, password: $password }) {\n      jwt\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetOrders($userId: String!) {\n    orders(\n      filters: { userId: { eq: $userId }, customOrderId: { notNull: true } }\n      pagination: { limit: 100 }\n    ) {\n      data {\n        id\n        attributes {\n          amount\n          items\n          stripeId\n          userId\n          customOrderId\n          createdAt\n        }\n      }\n      meta {\n        pagination {\n          page\n          pageSize\n          total\n          pageCount\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOrders($userId: String!) {\n    orders(\n      filters: { userId: { eq: $userId }, customOrderId: { notNull: true } }\n      pagination: { limit: 100 }\n    ) {\n      data {\n        id\n        attributes {\n          amount\n          items\n          stripeId\n          userId\n          customOrderId\n          createdAt\n        }\n      }\n      meta {\n        pagination {\n          page\n          pageSize\n          total\n          pageCount\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;