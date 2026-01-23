/**
 * Client
 **/

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model Article
 *
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 *
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 *
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Authenticator
 *
 */
export type Authenticator = $Result.DefaultSelection<Prisma.$AuthenticatorPayload>
/**
 * Model Message
 *
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Subscriber
 *
 */
export type Subscriber = $Result.DefaultSelection<Prisma.$SubscriberPayload>
/**
 * Model CacheData
 *
 */
export type CacheData = $Result.DefaultSelection<Prisma.$CacheDataPayload>
/**
 * Model TrafficData
 *
 */
export type TrafficData = $Result.DefaultSelection<Prisma.$TrafficDataPayload>
/**
 * Model TrafficCategory
 *
 */
export type TrafficCategory = $Result.DefaultSelection<Prisma.$TrafficCategoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>)
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
  ): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P]
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number }
  ): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs
      }
    >
  >

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more VerificationTokens
   * const verificationTokens = await prisma.verificationToken.findMany()
   * ```
   */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.authenticator`: Exposes CRUD operations for the **Authenticator** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Authenticators
   * const authenticators = await prisma.authenticator.findMany()
   * ```
   */
  get authenticator(): Prisma.AuthenticatorDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
   * ```
   */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.subscriber`: Exposes CRUD operations for the **Subscriber** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscribers
   * const subscribers = await prisma.subscriber.findMany()
   * ```
   */
  get subscriber(): Prisma.SubscriberDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.cacheData`: Exposes CRUD operations for the **CacheData** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CacheData
   * const cacheData = await prisma.cacheData.findMany()
   * ```
   */
  get cacheData(): Prisma.CacheDataDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.trafficData`: Exposes CRUD operations for the **TrafficData** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TrafficData
   * const trafficData = await prisma.trafficData.findMany()
   * ```
   */
  get trafficData(): Prisma.TrafficDataDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.trafficCategory`: Exposes CRUD operations for the **TrafficCategory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TrafficCategories
   * const trafficCategories = await prisma.trafficCategory.findMany()
   * ```
   */
  get trafficCategory(): Prisma.TrafficCategoryDelegate<ExtArgs, ClientOptions>
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    Article: 'Article'
    User: 'User'
    Account: 'Account'
    Session: 'Session'
    VerificationToken: 'VerificationToken'
    Authenticator: 'Authenticator'
    Message: 'Message'
    Subscriber: 'Subscriber'
    CacheData: 'CacheData'
    TrafficData: 'TrafficData'
    TrafficCategory: 'TrafficCategory'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps:
        | 'article'
        | 'user'
        | 'account'
        | 'session'
        | 'verificationToken'
        | 'authenticator'
        | 'message'
        | 'subscriber'
        | 'cacheData'
        | 'trafficData'
        | 'trafficCategory'
      txIsolationLevel: never
    }
    model: {
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArticleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArticleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VerificationTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VerificationTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Authenticator: {
        payload: Prisma.$AuthenticatorPayload<ExtArgs>
        fields: Prisma.AuthenticatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findFirst: {
            args: Prisma.AuthenticatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findMany: {
            args: Prisma.AuthenticatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          create: {
            args: Prisma.AuthenticatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          createMany: {
            args: Prisma.AuthenticatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuthenticatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          update: {
            args: Prisma.AuthenticatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthenticatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          aggregate: {
            args: Prisma.AuthenticatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthenticator>
          }
          groupBy: {
            args: Prisma.AuthenticatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AuthenticatorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AuthenticatorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AuthenticatorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Subscriber: {
        payload: Prisma.$SubscriberPayload<ExtArgs>
        fields: Prisma.SubscriberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findFirst: {
            args: Prisma.SubscriberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findMany: {
            args: Prisma.SubscriberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[]
          }
          create: {
            args: Prisma.SubscriberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          createMany: {
            args: Prisma.SubscriberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          update: {
            args: Prisma.SubscriberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          deleteMany: {
            args: Prisma.SubscriberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          aggregate: {
            args: Prisma.SubscriberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriber>
          }
          groupBy: {
            args: Prisma.SubscriberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriberGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubscriberFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubscriberAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubscriberCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriberCountAggregateOutputType> | number
          }
        }
      }
      CacheData: {
        payload: Prisma.$CacheDataPayload<ExtArgs>
        fields: Prisma.CacheDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CacheDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CacheDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheDataPayload>
          }
          findFirst: {
            args: Prisma.CacheDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CacheDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheDataPayload>
          }
          findMany: {
            args: Prisma.CacheDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheDataPayload>[]
          }
          create: {
            args: Prisma.CacheDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheDataPayload>
          }
          createMany: {
            args: Prisma.CacheDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CacheDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheDataPayload>
          }
          update: {
            args: Prisma.CacheDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheDataPayload>
          }
          deleteMany: {
            args: Prisma.CacheDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CacheDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CacheDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheDataPayload>
          }
          aggregate: {
            args: Prisma.CacheDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCacheData>
          }
          groupBy: {
            args: Prisma.CacheDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<CacheDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CacheDataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CacheDataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CacheDataCountArgs<ExtArgs>
            result: $Utils.Optional<CacheDataCountAggregateOutputType> | number
          }
        }
      }
      TrafficData: {
        payload: Prisma.$TrafficDataPayload<ExtArgs>
        fields: Prisma.TrafficDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrafficDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrafficDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficDataPayload>
          }
          findFirst: {
            args: Prisma.TrafficDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrafficDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficDataPayload>
          }
          findMany: {
            args: Prisma.TrafficDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficDataPayload>[]
          }
          create: {
            args: Prisma.TrafficDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficDataPayload>
          }
          createMany: {
            args: Prisma.TrafficDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrafficDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficDataPayload>
          }
          update: {
            args: Prisma.TrafficDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficDataPayload>
          }
          deleteMany: {
            args: Prisma.TrafficDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrafficDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrafficDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficDataPayload>
          }
          aggregate: {
            args: Prisma.TrafficDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrafficData>
          }
          groupBy: {
            args: Prisma.TrafficDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrafficDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TrafficDataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TrafficDataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TrafficDataCountArgs<ExtArgs>
            result: $Utils.Optional<TrafficDataCountAggregateOutputType> | number
          }
        }
      }
      TrafficCategory: {
        payload: Prisma.$TrafficCategoryPayload<ExtArgs>
        fields: Prisma.TrafficCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrafficCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrafficCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficCategoryPayload>
          }
          findFirst: {
            args: Prisma.TrafficCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrafficCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficCategoryPayload>
          }
          findMany: {
            args: Prisma.TrafficCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficCategoryPayload>[]
          }
          create: {
            args: Prisma.TrafficCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficCategoryPayload>
          }
          createMany: {
            args: Prisma.TrafficCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrafficCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficCategoryPayload>
          }
          update: {
            args: Prisma.TrafficCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TrafficCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrafficCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrafficCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafficCategoryPayload>
          }
          aggregate: {
            args: Prisma.TrafficCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrafficCategory>
          }
          groupBy: {
            args: Prisma.TrafficCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrafficCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TrafficCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TrafficCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TrafficCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TrafficCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    article?: ArticleOmit
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    authenticator?: AuthenticatorOmit
    message?: MessageOmit
    subscriber?: SubscriberOmit
    cacheData?: CacheDataOmit
    trafficData?: TrafficDataOmit
    trafficCategory?: TrafficCategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never

  export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    Authenticator: number
    messages: number
  }

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    Authenticator?: boolean | UserCountOutputTypeCountAuthenticatorArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthenticatorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: AuthenticatorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: MessageWhereInput
  }

  /**
   * Count Type TrafficCategoryCountOutputType
   */

  export type TrafficCategoryCountOutputType = {
    trafficData: number
  }

  export type TrafficCategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    trafficData?: boolean | TrafficCategoryCountOutputTypeCountTrafficDataArgs
  }

  // Custom InputTypes
  /**
   * TrafficCategoryCountOutputType without action
   */
  export type TrafficCategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategoryCountOutputType
     */
    select?: TrafficCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrafficCategoryCountOutputType without action
   */
  export type TrafficCategoryCountOutputTypeCountTrafficDataArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: TrafficDataWhereInput
  }

  /**
   * Models
   */

  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    views: number | null
    likes: number | null
    favorites: number | null
    showNumber: number | null
    isDeleted: number | null
  }

  export type ArticleSumAggregateOutputType = {
    views: number | null
    likes: number | null
    favorites: number | null
    showNumber: number | null
    isDeleted: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    classify: string | null
    coverImg: string | null
    summary: string | null
    source: string | null
    views: number | null
    likes: number | null
    favorites: number | null
    showNumber: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    isDeleted: number | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    classify: string | null
    coverImg: string | null
    summary: string | null
    source: string | null
    views: number | null
    likes: number | null
    favorites: number | null
    showNumber: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    isDeleted: number | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    classify: number
    coverImg: number
    summary: number
    source: number
    views: number
    likes: number
    favorites: number
    showNumber: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    isDeleted: number
    _all: number
  }

  export type ArticleAvgAggregateInputType = {
    views?: true
    likes?: true
    favorites?: true
    showNumber?: true
    isDeleted?: true
  }

  export type ArticleSumAggregateInputType = {
    views?: true
    likes?: true
    favorites?: true
    showNumber?: true
    isDeleted?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    classify?: true
    coverImg?: true
    summary?: true
    source?: true
    views?: true
    likes?: true
    favorites?: true
    showNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    isDeleted?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    classify?: true
    coverImg?: true
    summary?: true
    source?: true
    views?: true
    likes?: true
    favorites?: true
    showNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    isDeleted?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    classify?: true
    coverImg?: true
    summary?: true
    source?: true
    views?: true
    likes?: true
    favorites?: true
    showNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type ArticleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Articles
     **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
    [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }

  export type ArticleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    userId: string
    title: string
    content: string
    classify: string | null
    coverImg: string | null
    summary: string
    source: string | null
    views: number
    likes: number
    favorites: number
    showNumber: number
    status: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    isDeleted: number | null
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ArticleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
          : GetScalarType<T[P], ArticleGroupByOutputType[P]>
      }
    >
  >

  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        userId?: boolean
        title?: boolean
        content?: boolean
        classify?: boolean
        coverImg?: boolean
        summary?: boolean
        source?: boolean
        views?: boolean
        likes?: boolean
        favorites?: boolean
        showNumber?: boolean
        status?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        deletedAt?: boolean
        isDeleted?: boolean
      },
      ExtArgs['result']['article']
    >

  export type ArticleSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    classify?: boolean
    coverImg?: boolean
    summary?: boolean
    source?: boolean
    views?: boolean
    likes?: boolean
    favorites?: boolean
    showNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    isDeleted?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'userId'
      | 'title'
      | 'content'
      | 'classify'
      | 'coverImg'
      | 'summary'
      | 'source'
      | 'views'
      | 'likes'
      | 'favorites'
      | 'showNumber'
      | 'status'
      | 'createdAt'
      | 'updatedAt'
      | 'deletedAt'
      | 'isDeleted',
      ExtArgs['result']['article']
    >

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Article'
      objects: {}
      scalars: $Extensions.GetPayloadResult<
        {
          id: string
          userId: string
          title: string
          content: string
          classify: string | null
          coverImg: string | null
          summary: string
          source: string | null
          views: number
          likes: number
          favorites: number
          showNumber: number
          status: string
          createdAt: Date
          updatedAt: Date | null
          deletedAt: Date | null
          isDeleted: number | null
        },
        ExtArgs['result']['article']
      >
      composites: {}
    }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> =
    $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ArticleFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ArticleCountAggregateInputType | true
  }

  export interface ArticleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article']; meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(
      args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(
      args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     *
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ArticleFindManyArgs>(
      args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     *
     */
    create<T extends ArticleCreateArgs>(
      args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ArticleCreateManyArgs>(
      args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     *
     */
    delete<T extends ArticleDeleteArgs>(
      args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ArticleUpdateArgs>(
      args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ArticleDeleteManyArgs>(
      args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ArticleUpdateManyArgs>(
      args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(
      args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>
    ): Prisma__ArticleClient<
      $Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Articles that matches the filter.
     * @param {ArticleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const article = await prisma.article.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ArticleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Article.
     * @param {ArticleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const article = await prisma.article.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ArticleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
     **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ArticleAggregateArgs>(
      args: Subset<T, ArticleAggregateArgs>
    ): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Article model
     */
    readonly fields: ArticleFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<'Article', 'String'>
    readonly userId: FieldRef<'Article', 'String'>
    readonly title: FieldRef<'Article', 'String'>
    readonly content: FieldRef<'Article', 'String'>
    readonly classify: FieldRef<'Article', 'String'>
    readonly coverImg: FieldRef<'Article', 'String'>
    readonly summary: FieldRef<'Article', 'String'>
    readonly source: FieldRef<'Article', 'String'>
    readonly views: FieldRef<'Article', 'Int'>
    readonly likes: FieldRef<'Article', 'Int'>
    readonly favorites: FieldRef<'Article', 'Int'>
    readonly showNumber: FieldRef<'Article', 'Int'>
    readonly status: FieldRef<'Article', 'String'>
    readonly createdAt: FieldRef<'Article', 'DateTime'>
    readonly updatedAt: FieldRef<'Article', 'DateTime'>
    readonly deletedAt: FieldRef<'Article', 'DateTime'>
    readonly isDeleted: FieldRef<'Article', 'Int'>
  }

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article findRaw
   */
  export type ArticleFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Article aggregateRaw
   */
  export type ArticleAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
  }

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    password: number
    role: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: UserWhereInput
      orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
      by: UserScalarFieldEnum[] | UserScalarFieldEnum
      having?: UserScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: UserCountAggregateInputType | true
      _min?: UserMinAggregateInputType
      _max?: UserMaxAggregateInputType
    }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        name?: boolean
        username?: boolean
        email?: boolean
        password?: boolean
        role?: boolean
        emailVerified?: boolean
        image?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        accounts?: boolean | User$accountsArgs<ExtArgs>
        sessions?: boolean | User$sessionsArgs<ExtArgs>
        Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
        messages?: boolean | User$messagesArgs<ExtArgs>
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['user']
    >

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'name'
      | 'username'
      | 'email'
      | 'password'
      | 'role'
      | 'emailVerified'
      | 'image'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['user']
    >
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User'
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      Authenticator: Prisma.$AuthenticatorPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string | null
        username: string | null
        email: string | null
        password: string | null
        role: string | null
        emailVerified: Date | null
        image: string | null
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['user']
    >
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true
  }

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$accountsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sessionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    Authenticator<T extends User$AuthenticatorArgs<ExtArgs> = {}>(
      args?: Subset<T, User$AuthenticatorArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >
    messages<T extends User$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$messagesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>
    readonly name: FieldRef<'User', 'String'>
    readonly username: FieldRef<'User', 'String'>
    readonly email: FieldRef<'User', 'String'>
    readonly password: FieldRef<'User', 'String'>
    readonly role: FieldRef<'User', 'String'>
    readonly emailVerified: FieldRef<'User', 'DateTime'>
    readonly image: FieldRef<'User', 'String'>
    readonly createdAt: FieldRef<'User', 'DateTime'>
    readonly updatedAt: FieldRef<'User', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null
      /**
       * Filter, which Users to fetch.
       */
      where?: UserWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       */
      orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       */
      cursor?: UserWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       */
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       */
      skip?: number
      distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
       */
      filter?: InputJsonValue
      /**
       * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
       */
      options?: InputJsonValue
    }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Authenticator
   */
  export type User$AuthenticatorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    cursor?: AuthenticatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null
    }

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Accounts
     **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }

  export type AccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AccountGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
          : GetScalarType<T[P], AccountGroupByOutputType[P]>
      }
    >
  >

  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        userId?: boolean
        type?: boolean
        provider?: boolean
        providerAccountId?: boolean
        refresh_token?: boolean
        access_token?: boolean
        expires_at?: boolean
        token_type?: boolean
        scope?: boolean
        id_token?: boolean
        session_state?: boolean
        refresh_token_expires_in?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        user?: boolean | Account$userArgs<ExtArgs>
      },
      ExtArgs['result']['account']
    >

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'userId'
      | 'type'
      | 'provider'
      | 'providerAccountId'
      | 'refresh_token'
      | 'access_token'
      | 'expires_at'
      | 'token_type'
      | 'scope'
      | 'id_token'
      | 'session_state'
      | 'refresh_token_expires_in'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['account']
    >
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Account$userArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Account'
      objects: {
        user: Prisma.$UserPayload<ExtArgs> | null
      }
      scalars: $Extensions.GetPayloadResult<
        {
          id: string
          userId: string
          type: string
          provider: string
          providerAccountId: string
          refresh_token: string | null
          access_token: string | null
          expires_at: number | null
          token_type: string | null
          scope: string | null
          id_token: string | null
          session_state: string | null
          refresh_token_expires_in: number | null
          createdAt: Date
          updatedAt: Date
        },
        ExtArgs['result']['account']
      >
      composites: {}
    }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> =
    $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    AccountFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: AccountCountAggregateInputType | true
  }

  export interface AccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account']; meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     *
     */
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     *
     */
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
     **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AccountAggregateArgs>(
      args: Subset<T, AccountAggregateArgs>
    ): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Account model
     */
    readonly fields: AccountFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends Account$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Account$userArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<'Account', 'String'>
    readonly userId: FieldRef<'Account', 'String'>
    readonly type: FieldRef<'Account', 'String'>
    readonly provider: FieldRef<'Account', 'String'>
    readonly providerAccountId: FieldRef<'Account', 'String'>
    readonly refresh_token: FieldRef<'Account', 'String'>
    readonly access_token: FieldRef<'Account', 'String'>
    readonly expires_at: FieldRef<'Account', 'Int'>
    readonly token_type: FieldRef<'Account', 'String'>
    readonly scope: FieldRef<'Account', 'String'>
    readonly id_token: FieldRef<'Account', 'String'>
    readonly session_state: FieldRef<'Account', 'String'>
    readonly refresh_token_expires_in: FieldRef<'Account', 'Int'>
    readonly createdAt: FieldRef<'Account', 'DateTime'>
    readonly updatedAt: FieldRef<'Account', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account.user
   */
  export type Account$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null
      where?: UserWhereInput
    }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Sessions
     **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }

  export type SessionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SessionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
          : GetScalarType<T[P], SessionGroupByOutputType[P]>
      }
    >
  >

  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        sessionToken?: boolean
        userId?: boolean
        expires?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        user?: boolean | UserDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['session']
    >

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'sessionToken' | 'userId' | 'expires' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['session']
    >
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Session'
      objects: {
        user: Prisma.$UserPayload<ExtArgs>
      }
      scalars: $Extensions.GetPayloadResult<
        {
          id: string
          sessionToken: string
          userId: string
          expires: Date
          createdAt: Date
          updatedAt: Date
        },
        ExtArgs['result']['session']
      >
      composites: {}
    }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> =
    $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    SessionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: SessionCountAggregateInputType | true
  }

  export interface SessionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session']; meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     *
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     *
     */
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     *
     */
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
     **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SessionAggregateArgs>(
      args: Subset<T, SessionAggregateArgs>
    ): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Session model
     */
    readonly fields: SessionFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<'Session', 'String'>
    readonly sessionToken: FieldRef<'Session', 'String'>
    readonly userId: FieldRef<'Session', 'String'>
    readonly expires: FieldRef<'Session', 'DateTime'>
    readonly createdAt: FieldRef<'Session', 'DateTime'>
    readonly updatedAt: FieldRef<'Session', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }

  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    _all: number
  }

  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?:
      | VerificationTokenOrderByWithRelationInput
      | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VerificationTokens
     **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }

  export type VerificationTokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: VerificationTokenWhereInput
    orderBy?:
      | VerificationTokenOrderByWithAggregationInput
      | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<VerificationTokenGroupByOutputType, T['by']> & {
          [P in keyof T & keyof VerificationTokenGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >

  export type VerificationTokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      identifier?: boolean
      token?: boolean
      expires?: boolean
    },
    ExtArgs['result']['verificationToken']
  >

  export type VerificationTokenSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'id' | 'identifier' | 'token' | 'expires',
    ExtArgs['result']['verificationToken']
  >

  export type $VerificationTokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'VerificationToken'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        identifier: string
        token: string
        expires: Date
      },
      ExtArgs['result']['verificationToken']
    >
    composites: {}
  }

  type VerificationTokenGetPayload<
    S extends boolean | null | undefined | VerificationTokenDefaultArgs
  > = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VerificationTokenCountAggregateInputType | true
  }

  export interface VerificationTokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken']
      meta: { name: 'VerificationToken' }
    }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     *
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     *
     */
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VerificationTokenCreateManyArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     *
     */
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * @param {VerificationTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VerificationTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VerificationToken.
     * @param {VerificationTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VerificationTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
     **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends VerificationTokenAggregateArgs>(
      args: Subset<T, VerificationTokenAggregateArgs>
    ): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetVerificationTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the VerificationToken model
     */
    readonly fields: VerificationTokenFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<'VerificationToken', 'String'>
    readonly identifier: FieldRef<'VerificationToken', 'String'>
    readonly token: FieldRef<'VerificationToken', 'String'>
    readonly expires: FieldRef<'VerificationToken', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?:
      | VerificationTokenOrderByWithRelationInput
      | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?:
      | VerificationTokenOrderByWithRelationInput
      | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?:
      | VerificationTokenOrderByWithRelationInput
      | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken findRaw
   */
  export type VerificationTokenFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken aggregateRaw
   */
  export type VerificationTokenAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }

  /**
   * Model Authenticator
   */

  export type AggregateAuthenticator = {
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  export type AuthenticatorAvgAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorSumAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorMinAggregateOutputType = {
    id: string | null
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorMaxAggregateOutputType = {
    id: string | null
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorCountAggregateOutputType = {
    id: number
    credentialID: number
    userId: number
    providerAccountId: number
    credentialPublicKey: number
    counter: number
    credentialDeviceType: number
    credentialBackedUp: number
    transports: number
    _all: number
  }

  export type AuthenticatorAvgAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorSumAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorMinAggregateInputType = {
    id?: true
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorMaxAggregateInputType = {
    id?: true
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorCountAggregateInputType = {
    id?: true
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
    _all?: true
  }

  export type AuthenticatorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Authenticator to aggregate.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Authenticators
     **/
    _count?: true | AuthenticatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AuthenticatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AuthenticatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuthenticatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type GetAuthenticatorAggregateType<T extends AuthenticatorAggregateArgs> = {
    [P in keyof T & keyof AggregateAuthenticator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticator[P]>
      : GetScalarType<T[P], AggregateAuthenticator[P]>
  }

  export type AuthenticatorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithAggregationInput | AuthenticatorOrderByWithAggregationInput[]
    by: AuthenticatorScalarFieldEnum[] | AuthenticatorScalarFieldEnum
    having?: AuthenticatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticatorCountAggregateInputType | true
    _avg?: AuthenticatorAvgAggregateInputType
    _sum?: AuthenticatorSumAggregateInputType
    _min?: AuthenticatorMinAggregateInputType
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type AuthenticatorGroupByOutputType = {
    id: string
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports: string | null
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  type GetAuthenticatorGroupByPayload<T extends AuthenticatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticatorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AuthenticatorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
          : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
      }
    >
  >

  export type AuthenticatorSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      credentialID?: boolean
      userId?: boolean
      providerAccountId?: boolean
      credentialPublicKey?: boolean
      counter?: boolean
      credentialDeviceType?: boolean
      credentialBackedUp?: boolean
      transports?: boolean
      user?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['authenticator']
  >

  export type AuthenticatorSelectScalar = {
    id?: boolean
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
  }

  export type AuthenticatorOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'credentialID'
    | 'userId'
    | 'providerAccountId'
    | 'credentialPublicKey'
    | 'counter'
    | 'credentialDeviceType'
    | 'credentialBackedUp'
    | 'transports',
    ExtArgs['result']['authenticator']
  >
  export type AuthenticatorInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthenticatorPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Authenticator'
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        credentialID: string
        userId: string
        providerAccountId: string
        credentialPublicKey: string
        counter: number
        credentialDeviceType: string
        credentialBackedUp: boolean
        transports: string | null
      },
      ExtArgs['result']['authenticator']
    >
    composites: {}
  }

  type AuthenticatorGetPayload<S extends boolean | null | undefined | AuthenticatorDefaultArgs> =
    $Result.GetResult<Prisma.$AuthenticatorPayload, S>

  type AuthenticatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticatorCountAggregateInputType | true
    }

  export interface AuthenticatorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Authenticator']
      meta: { name: 'Authenticator' }
    }
    /**
     * Find zero or one Authenticator that matches the filter.
     * @param {AuthenticatorFindUniqueArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticatorFindUniqueArgs>(
      args: SelectSubset<T, AuthenticatorFindUniqueArgs<ExtArgs>>
    ): Prisma__AuthenticatorClient<
      $Result.GetResult<
        Prisma.$AuthenticatorPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Authenticator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticatorFindUniqueOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticatorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AuthenticatorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthenticatorClient<
      $Result.GetResult<
        Prisma.$AuthenticatorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Authenticator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticatorFindFirstArgs>(
      args?: SelectSubset<T, AuthenticatorFindFirstArgs<ExtArgs>>
    ): Prisma__AuthenticatorClient<
      $Result.GetResult<
        Prisma.$AuthenticatorPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Authenticator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticatorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuthenticatorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthenticatorClient<
      $Result.GetResult<
        Prisma.$AuthenticatorPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Authenticators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authenticators
     * const authenticators = await prisma.authenticator.findMany()
     *
     * // Get first 10 Authenticators
     * const authenticators = await prisma.authenticator.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const authenticatorWithIdOnly = await prisma.authenticator.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuthenticatorFindManyArgs>(
      args?: SelectSubset<T, AuthenticatorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Authenticator.
     * @param {AuthenticatorCreateArgs} args - Arguments to create a Authenticator.
     * @example
     * // Create one Authenticator
     * const Authenticator = await prisma.authenticator.create({
     *   data: {
     *     // ... data to create a Authenticator
     *   }
     * })
     *
     */
    create<T extends AuthenticatorCreateArgs>(
      args: SelectSubset<T, AuthenticatorCreateArgs<ExtArgs>>
    ): Prisma__AuthenticatorClient<
      $Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Authenticators.
     * @param {AuthenticatorCreateManyArgs} args - Arguments to create many Authenticators.
     * @example
     * // Create many Authenticators
     * const authenticator = await prisma.authenticator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuthenticatorCreateManyArgs>(
      args?: SelectSubset<T, AuthenticatorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Authenticator.
     * @param {AuthenticatorDeleteArgs} args - Arguments to delete one Authenticator.
     * @example
     * // Delete one Authenticator
     * const Authenticator = await prisma.authenticator.delete({
     *   where: {
     *     // ... filter to delete one Authenticator
     *   }
     * })
     *
     */
    delete<T extends AuthenticatorDeleteArgs>(
      args: SelectSubset<T, AuthenticatorDeleteArgs<ExtArgs>>
    ): Prisma__AuthenticatorClient<
      $Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Authenticator.
     * @param {AuthenticatorUpdateArgs} args - Arguments to update one Authenticator.
     * @example
     * // Update one Authenticator
     * const authenticator = await prisma.authenticator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuthenticatorUpdateArgs>(
      args: SelectSubset<T, AuthenticatorUpdateArgs<ExtArgs>>
    ): Prisma__AuthenticatorClient<
      $Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Authenticators.
     * @param {AuthenticatorDeleteManyArgs} args - Arguments to filter Authenticators to delete.
     * @example
     * // Delete a few Authenticators
     * const { count } = await prisma.authenticator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuthenticatorDeleteManyArgs>(
      args?: SelectSubset<T, AuthenticatorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuthenticatorUpdateManyArgs>(
      args: SelectSubset<T, AuthenticatorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Authenticator.
     * @param {AuthenticatorUpsertArgs} args - Arguments to update or create a Authenticator.
     * @example
     * // Update or create a Authenticator
     * const authenticator = await prisma.authenticator.upsert({
     *   create: {
     *     // ... data to create a Authenticator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authenticator we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticatorUpsertArgs>(
      args: SelectSubset<T, AuthenticatorUpsertArgs<ExtArgs>>
    ): Prisma__AuthenticatorClient<
      $Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Authenticators that matches the filter.
     * @param {AuthenticatorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const authenticator = await prisma.authenticator.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AuthenticatorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Authenticator.
     * @param {AuthenticatorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const authenticator = await prisma.authenticator.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AuthenticatorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorCountArgs} args - Arguments to filter Authenticators to count.
     * @example
     * // Count the number of Authenticators
     * const count = await prisma.authenticator.count({
     *   where: {
     *     // ... the filter for the Authenticators we want to count
     *   }
     * })
     **/
    count<T extends AuthenticatorCountArgs>(
      args?: Subset<T, AuthenticatorCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AuthenticatorAggregateArgs>(
      args: Subset<T, AuthenticatorAggregateArgs>
    ): Prisma.PrismaPromise<GetAuthenticatorAggregateType<T>>

    /**
     * Group by Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AuthenticatorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatorGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, AuthenticatorGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetAuthenticatorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Authenticator model
     */
    readonly fields: AuthenticatorFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authenticator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticatorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Authenticator model
   */
  interface AuthenticatorFieldRefs {
    readonly id: FieldRef<'Authenticator', 'String'>
    readonly credentialID: FieldRef<'Authenticator', 'String'>
    readonly userId: FieldRef<'Authenticator', 'String'>
    readonly providerAccountId: FieldRef<'Authenticator', 'String'>
    readonly credentialPublicKey: FieldRef<'Authenticator', 'String'>
    readonly counter: FieldRef<'Authenticator', 'Int'>
    readonly credentialDeviceType: FieldRef<'Authenticator', 'String'>
    readonly credentialBackedUp: FieldRef<'Authenticator', 'Boolean'>
    readonly transports: FieldRef<'Authenticator', 'String'>
  }

  // Custom InputTypes
  /**
   * Authenticator findUnique
   */
  export type AuthenticatorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findUniqueOrThrow
   */
  export type AuthenticatorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findFirst
   */
  export type AuthenticatorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findFirstOrThrow
   */
  export type AuthenticatorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findMany
   */
  export type AuthenticatorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticators to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authenticators.
     */
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator create
   */
  export type AuthenticatorCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Authenticator.
     */
    data: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
  }

  /**
   * Authenticator createMany
   */
  export type AuthenticatorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Authenticators.
     */
    data: AuthenticatorCreateManyInput | AuthenticatorCreateManyInput[]
  }

  /**
   * Authenticator update
   */
  export type AuthenticatorUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Authenticator.
     */
    data: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
    /**
     * Choose, which Authenticator to update.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator updateMany
   */
  export type AuthenticatorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Authenticators.
     */
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyInput>
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to update.
     */
    limit?: number
  }

  /**
   * Authenticator upsert
   */
  export type AuthenticatorUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Authenticator to update in case it exists.
     */
    where: AuthenticatorWhereUniqueInput
    /**
     * In case the Authenticator found by the `where` argument doesn't exist, create a new Authenticator with this data.
     */
    create: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
    /**
     * In case the Authenticator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
  }

  /**
   * Authenticator delete
   */
  export type AuthenticatorDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter which Authenticator to delete.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator deleteMany
   */
  export type AuthenticatorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Authenticators to delete
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to delete.
     */
    limit?: number
  }

  /**
   * Authenticator findRaw
   */
  export type AuthenticatorFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Authenticator aggregateRaw
   */
  export type AuthenticatorAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Authenticator without action
   */
  export type AuthenticatorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
  }

  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    authorId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    authorId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    authorId: number
    _all: number
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    authorId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    authorId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    authorId?: true
    _all?: true
  }

  export type MessageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Messages
     **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }

  export type MessageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    authorId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MessageGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
          : GetScalarType<T[P], MessageGroupByOutputType[P]>
      }
    >
  >

  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        content?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        deletedAt?: boolean
        authorId?: boolean
        author?: boolean | UserDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['message']
    >

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    authorId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'content' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'authorId',
      ExtArgs['result']['message']
    >
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Message'
      objects: {
        author: Prisma.$UserPayload<ExtArgs>
      }
      scalars: $Extensions.GetPayloadResult<
        {
          id: string
          content: string
          createdAt: Date
          updatedAt: Date
          deletedAt: Date | null
          authorId: string
        },
        ExtArgs['result']['message']
      >
      composites: {}
    }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> =
    $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    MessageFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MessageCountAggregateInputType | true
  }

  export interface MessageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message']; meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     *
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     *
     */
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     *
     */
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Messages that matches the filter.
     * @param {MessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const message = await prisma.message.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Message.
     * @param {MessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const message = await prisma.message.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
     **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MessageAggregateArgs>(
      args: Subset<T, MessageAggregateArgs>
    ): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Message model
     */
    readonly fields: MessageFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<'Message', 'String'>
    readonly content: FieldRef<'Message', 'String'>
    readonly createdAt: FieldRef<'Message', 'DateTime'>
    readonly updatedAt: FieldRef<'Message', 'DateTime'>
    readonly deletedAt: FieldRef<'Message', 'DateTime'>
    readonly authorId: FieldRef<'Message', 'String'>
  }

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message findRaw
   */
  export type MessageFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message aggregateRaw
   */
  export type MessageAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }

  /**
   * Model Subscriber
   */

  export type AggregateSubscriber = {
    _count: SubscriberCountAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  export type SubscriberMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SubscriberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SubscriberCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type SubscriberMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SubscriberMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SubscriberCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SubscriberAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Subscriber to aggregate.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subscribers
     **/
    _count?: true | SubscriberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriberMaxAggregateInputType
  }

  export type GetSubscriberAggregateType<T extends SubscriberAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriber[P]>
      : GetScalarType<T[P], AggregateSubscriber[P]>
  }

  export type SubscriberGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: SubscriberWhereInput
    orderBy?: SubscriberOrderByWithAggregationInput | SubscriberOrderByWithAggregationInput[]
    by: SubscriberScalarFieldEnum[] | SubscriberScalarFieldEnum
    having?: SubscriberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriberCountAggregateInputType | true
    _min?: SubscriberMinAggregateInputType
    _max?: SubscriberMaxAggregateInputType
  }

  export type SubscriberGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SubscriberCountAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  type GetSubscriberGroupByPayload<T extends SubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SubscriberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
          : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
      }
    >
  >

  export type SubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        email?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        deletedAt?: boolean
      },
      ExtArgs['result']['subscriber']
    >

  export type SubscriberSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SubscriberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'email' | 'createdAt' | 'updatedAt' | 'deletedAt',
      ExtArgs['result']['subscriber']
    >

  export type $SubscriberPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Subscriber'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        email: string
        createdAt: Date
        updatedAt: Date
        deletedAt: Date | null
      },
      ExtArgs['result']['subscriber']
    >
    composites: {}
  }

  type SubscriberGetPayload<S extends boolean | null | undefined | SubscriberDefaultArgs> =
    $Result.GetResult<Prisma.$SubscriberPayload, S>

  type SubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriberCountAggregateInputType | true
    }

  export interface SubscriberDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Subscriber']
      meta: { name: 'Subscriber' }
    }
    /**
     * Find zero or one Subscriber that matches the filter.
     * @param {SubscriberFindUniqueArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriberFindUniqueArgs>(
      args: SelectSubset<T, SubscriberFindUniqueArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Subscriber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriberFindUniqueOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriberFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubscriberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Subscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriberFindFirstArgs>(
      args?: SelectSubset<T, SubscriberFindFirstArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Subscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribers
     * const subscribers = await prisma.subscriber.findMany()
     *
     * // Get first 10 Subscribers
     * const subscribers = await prisma.subscriber.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubscriberFindManyArgs>(
      args?: SelectSubset<T, SubscriberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Subscriber.
     * @param {SubscriberCreateArgs} args - Arguments to create a Subscriber.
     * @example
     * // Create one Subscriber
     * const Subscriber = await prisma.subscriber.create({
     *   data: {
     *     // ... data to create a Subscriber
     *   }
     * })
     *
     */
    create<T extends SubscriberCreateArgs>(
      args: SelectSubset<T, SubscriberCreateArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Subscribers.
     * @param {SubscriberCreateManyArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscriber = await prisma.subscriber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubscriberCreateManyArgs>(
      args?: SelectSubset<T, SubscriberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscriber.
     * @param {SubscriberDeleteArgs} args - Arguments to delete one Subscriber.
     * @example
     * // Delete one Subscriber
     * const Subscriber = await prisma.subscriber.delete({
     *   where: {
     *     // ... filter to delete one Subscriber
     *   }
     * })
     *
     */
    delete<T extends SubscriberDeleteArgs>(
      args: SelectSubset<T, SubscriberDeleteArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Subscriber.
     * @param {SubscriberUpdateArgs} args - Arguments to update one Subscriber.
     * @example
     * // Update one Subscriber
     * const subscriber = await prisma.subscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubscriberUpdateArgs>(
      args: SelectSubset<T, SubscriberUpdateArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Subscribers.
     * @param {SubscriberDeleteManyArgs} args - Arguments to filter Subscribers to delete.
     * @example
     * // Delete a few Subscribers
     * const { count } = await prisma.subscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubscriberDeleteManyArgs>(
      args?: SelectSubset<T, SubscriberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribers
     * const subscriber = await prisma.subscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubscriberUpdateManyArgs>(
      args: SelectSubset<T, SubscriberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscriber.
     * @param {SubscriberUpsertArgs} args - Arguments to update or create a Subscriber.
     * @example
     * // Update or create a Subscriber
     * const subscriber = await prisma.subscriber.upsert({
     *   create: {
     *     // ... data to create a Subscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriber we want to update
     *   }
     * })
     */
    upsert<T extends SubscriberUpsertArgs>(
      args: SelectSubset<T, SubscriberUpsertArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Subscribers that matches the filter.
     * @param {SubscriberFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subscriber = await prisma.subscriber.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubscriberFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Subscriber.
     * @param {SubscriberAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subscriber = await prisma.subscriber.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubscriberAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberCountArgs} args - Arguments to filter Subscribers to count.
     * @example
     * // Count the number of Subscribers
     * const count = await prisma.subscriber.count({
     *   where: {
     *     // ... the filter for the Subscribers we want to count
     *   }
     * })
     **/
    count<T extends SubscriberCountArgs>(
      args?: Subset<T, SubscriberCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriberAggregateArgs>(
      args: Subset<T, SubscriberAggregateArgs>
    ): Prisma.PrismaPromise<GetSubscriberAggregateType<T>>

    /**
     * Group by Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubscriberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriberGroupByArgs['orderBy'] }
        : { orderBy?: SubscriberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, SubscriberGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Subscriber model
     */
    readonly fields: SubscriberFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Subscriber model
   */
  interface SubscriberFieldRefs {
    readonly id: FieldRef<'Subscriber', 'String'>
    readonly email: FieldRef<'Subscriber', 'String'>
    readonly createdAt: FieldRef<'Subscriber', 'DateTime'>
    readonly updatedAt: FieldRef<'Subscriber', 'DateTime'>
    readonly deletedAt: FieldRef<'Subscriber', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Subscriber findUnique
   */
  export type SubscriberFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findUniqueOrThrow
   */
  export type SubscriberFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findFirst
   */
  export type SubscriberFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findFirstOrThrow
   */
  export type SubscriberFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findMany
   */
  export type SubscriberFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscribers.
     */
    skip?: number
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber create
   */
  export type SubscriberCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data needed to create a Subscriber.
     */
    data: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
  }

  /**
   * Subscriber createMany
   */
  export type SubscriberCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Subscribers.
     */
    data: SubscriberCreateManyInput | SubscriberCreateManyInput[]
  }

  /**
   * Subscriber update
   */
  export type SubscriberUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data needed to update a Subscriber.
     */
    data: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
    /**
     * Choose, which Subscriber to update.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber updateMany
   */
  export type SubscriberUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyInput>
    /**
     * Filter which Subscribers to update
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number
  }

  /**
   * Subscriber upsert
   */
  export type SubscriberUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The filter to search for the Subscriber to update in case it exists.
     */
    where: SubscriberWhereUniqueInput
    /**
     * In case the Subscriber found by the `where` argument doesn't exist, create a new Subscriber with this data.
     */
    create: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
    /**
     * In case the Subscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
  }

  /**
   * Subscriber delete
   */
  export type SubscriberDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter which Subscriber to delete.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber deleteMany
   */
  export type SubscriberDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Subscribers to delete
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to delete.
     */
    limit?: number
  }

  /**
   * Subscriber findRaw
   */
  export type SubscriberFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscriber aggregateRaw
   */
  export type SubscriberAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscriber without action
   */
  export type SubscriberDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
  }

  /**
   * Model CacheData
   */

  export type AggregateCacheData = {
    _count: CacheDataCountAggregateOutputType | null
    _min: CacheDataMinAggregateOutputType | null
    _max: CacheDataMaxAggregateOutputType | null
  }

  export type CacheDataMinAggregateOutputType = {
    id: string | null
    key: string | null
    data: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CacheDataMaxAggregateOutputType = {
    id: string | null
    key: string | null
    data: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CacheDataCountAggregateOutputType = {
    id: number
    key: number
    data: number
    desc: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type CacheDataMinAggregateInputType = {
    id?: true
    key?: true
    data?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CacheDataMaxAggregateInputType = {
    id?: true
    key?: true
    data?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CacheDataCountAggregateInputType = {
    id?: true
    key?: true
    data?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CacheDataAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which CacheData to aggregate.
     */
    where?: CacheDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CacheData to fetch.
     */
    orderBy?: CacheDataOrderByWithRelationInput | CacheDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CacheDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CacheData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CacheData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CacheData
     **/
    _count?: true | CacheDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CacheDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CacheDataMaxAggregateInputType
  }

  export type GetCacheDataAggregateType<T extends CacheDataAggregateArgs> = {
    [P in keyof T & keyof AggregateCacheData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCacheData[P]>
      : GetScalarType<T[P], AggregateCacheData[P]>
  }

  export type CacheDataGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CacheDataWhereInput
    orderBy?: CacheDataOrderByWithAggregationInput | CacheDataOrderByWithAggregationInput[]
    by: CacheDataScalarFieldEnum[] | CacheDataScalarFieldEnum
    having?: CacheDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CacheDataCountAggregateInputType | true
    _min?: CacheDataMinAggregateInputType
    _max?: CacheDataMaxAggregateInputType
  }

  export type CacheDataGroupByOutputType = {
    id: string
    key: string
    data: string
    desc: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CacheDataCountAggregateOutputType | null
    _min: CacheDataMinAggregateOutputType | null
    _max: CacheDataMaxAggregateOutputType | null
  }

  type GetCacheDataGroupByPayload<T extends CacheDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CacheDataGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CacheDataGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CacheDataGroupByOutputType[P]>
          : GetScalarType<T[P], CacheDataGroupByOutputType[P]>
      }
    >
  >

  export type CacheDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        key?: boolean
        data?: boolean
        desc?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        deletedAt?: boolean
      },
      ExtArgs['result']['cacheData']
    >

  export type CacheDataSelectScalar = {
    id?: boolean
    key?: boolean
    data?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CacheDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'key' | 'data' | 'desc' | 'createdAt' | 'updatedAt' | 'deletedAt',
      ExtArgs['result']['cacheData']
    >

  export type $CacheDataPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'CacheData'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        key: string
        data: string
        desc: string
        createdAt: Date
        updatedAt: Date
        deletedAt: Date | null
      },
      ExtArgs['result']['cacheData']
    >
    composites: {}
  }

  type CacheDataGetPayload<S extends boolean | null | undefined | CacheDataDefaultArgs> =
    $Result.GetResult<Prisma.$CacheDataPayload, S>

  type CacheDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CacheDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CacheDataCountAggregateInputType | true
    }

  export interface CacheDataDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CacheData']
      meta: { name: 'CacheData' }
    }
    /**
     * Find zero or one CacheData that matches the filter.
     * @param {CacheDataFindUniqueArgs} args - Arguments to find a CacheData
     * @example
     * // Get one CacheData
     * const cacheData = await prisma.cacheData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CacheDataFindUniqueArgs>(
      args: SelectSubset<T, CacheDataFindUniqueArgs<ExtArgs>>
    ): Prisma__CacheDataClient<
      $Result.GetResult<
        Prisma.$CacheDataPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one CacheData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CacheDataFindUniqueOrThrowArgs} args - Arguments to find a CacheData
     * @example
     * // Get one CacheData
     * const cacheData = await prisma.cacheData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CacheDataFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CacheDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CacheDataClient<
      $Result.GetResult<
        Prisma.$CacheDataPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first CacheData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheDataFindFirstArgs} args - Arguments to find a CacheData
     * @example
     * // Get one CacheData
     * const cacheData = await prisma.cacheData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CacheDataFindFirstArgs>(
      args?: SelectSubset<T, CacheDataFindFirstArgs<ExtArgs>>
    ): Prisma__CacheDataClient<
      $Result.GetResult<
        Prisma.$CacheDataPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first CacheData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheDataFindFirstOrThrowArgs} args - Arguments to find a CacheData
     * @example
     * // Get one CacheData
     * const cacheData = await prisma.cacheData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CacheDataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CacheDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CacheDataClient<
      $Result.GetResult<
        Prisma.$CacheDataPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more CacheData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CacheData
     * const cacheData = await prisma.cacheData.findMany()
     *
     * // Get first 10 CacheData
     * const cacheData = await prisma.cacheData.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cacheDataWithIdOnly = await prisma.cacheData.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CacheDataFindManyArgs>(
      args?: SelectSubset<T, CacheDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CacheDataPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a CacheData.
     * @param {CacheDataCreateArgs} args - Arguments to create a CacheData.
     * @example
     * // Create one CacheData
     * const CacheData = await prisma.cacheData.create({
     *   data: {
     *     // ... data to create a CacheData
     *   }
     * })
     *
     */
    create<T extends CacheDataCreateArgs>(
      args: SelectSubset<T, CacheDataCreateArgs<ExtArgs>>
    ): Prisma__CacheDataClient<
      $Result.GetResult<Prisma.$CacheDataPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many CacheData.
     * @param {CacheDataCreateManyArgs} args - Arguments to create many CacheData.
     * @example
     * // Create many CacheData
     * const cacheData = await prisma.cacheData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CacheDataCreateManyArgs>(
      args?: SelectSubset<T, CacheDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CacheData.
     * @param {CacheDataDeleteArgs} args - Arguments to delete one CacheData.
     * @example
     * // Delete one CacheData
     * const CacheData = await prisma.cacheData.delete({
     *   where: {
     *     // ... filter to delete one CacheData
     *   }
     * })
     *
     */
    delete<T extends CacheDataDeleteArgs>(
      args: SelectSubset<T, CacheDataDeleteArgs<ExtArgs>>
    ): Prisma__CacheDataClient<
      $Result.GetResult<Prisma.$CacheDataPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one CacheData.
     * @param {CacheDataUpdateArgs} args - Arguments to update one CacheData.
     * @example
     * // Update one CacheData
     * const cacheData = await prisma.cacheData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CacheDataUpdateArgs>(
      args: SelectSubset<T, CacheDataUpdateArgs<ExtArgs>>
    ): Prisma__CacheDataClient<
      $Result.GetResult<Prisma.$CacheDataPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more CacheData.
     * @param {CacheDataDeleteManyArgs} args - Arguments to filter CacheData to delete.
     * @example
     * // Delete a few CacheData
     * const { count } = await prisma.cacheData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CacheDataDeleteManyArgs>(
      args?: SelectSubset<T, CacheDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CacheData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CacheData
     * const cacheData = await prisma.cacheData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CacheDataUpdateManyArgs>(
      args: SelectSubset<T, CacheDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CacheData.
     * @param {CacheDataUpsertArgs} args - Arguments to update or create a CacheData.
     * @example
     * // Update or create a CacheData
     * const cacheData = await prisma.cacheData.upsert({
     *   create: {
     *     // ... data to create a CacheData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CacheData we want to update
     *   }
     * })
     */
    upsert<T extends CacheDataUpsertArgs>(
      args: SelectSubset<T, CacheDataUpsertArgs<ExtArgs>>
    ): Prisma__CacheDataClient<
      $Result.GetResult<Prisma.$CacheDataPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more CacheData that matches the filter.
     * @param {CacheDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cacheData = await prisma.cacheData.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CacheDataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CacheData.
     * @param {CacheDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cacheData = await prisma.cacheData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CacheDataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of CacheData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheDataCountArgs} args - Arguments to filter CacheData to count.
     * @example
     * // Count the number of CacheData
     * const count = await prisma.cacheData.count({
     *   where: {
     *     // ... the filter for the CacheData we want to count
     *   }
     * })
     **/
    count<T extends CacheDataCountArgs>(
      args?: Subset<T, CacheDataCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CacheDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CacheData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CacheDataAggregateArgs>(
      args: Subset<T, CacheDataAggregateArgs>
    ): Prisma.PrismaPromise<GetCacheDataAggregateType<T>>

    /**
     * Group by CacheData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CacheDataGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CacheDataGroupByArgs['orderBy'] }
        : { orderBy?: CacheDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, CacheDataGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetCacheDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the CacheData model
     */
    readonly fields: CacheDataFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for CacheData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CacheDataClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the CacheData model
   */
  interface CacheDataFieldRefs {
    readonly id: FieldRef<'CacheData', 'String'>
    readonly key: FieldRef<'CacheData', 'String'>
    readonly data: FieldRef<'CacheData', 'String'>
    readonly desc: FieldRef<'CacheData', 'String'>
    readonly createdAt: FieldRef<'CacheData', 'DateTime'>
    readonly updatedAt: FieldRef<'CacheData', 'DateTime'>
    readonly deletedAt: FieldRef<'CacheData', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * CacheData findUnique
   */
  export type CacheDataFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
    /**
     * Filter, which CacheData to fetch.
     */
    where: CacheDataWhereUniqueInput
  }

  /**
   * CacheData findUniqueOrThrow
   */
  export type CacheDataFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
    /**
     * Filter, which CacheData to fetch.
     */
    where: CacheDataWhereUniqueInput
  }

  /**
   * CacheData findFirst
   */
  export type CacheDataFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
    /**
     * Filter, which CacheData to fetch.
     */
    where?: CacheDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CacheData to fetch.
     */
    orderBy?: CacheDataOrderByWithRelationInput | CacheDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CacheData.
     */
    cursor?: CacheDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CacheData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CacheData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CacheData.
     */
    distinct?: CacheDataScalarFieldEnum | CacheDataScalarFieldEnum[]
  }

  /**
   * CacheData findFirstOrThrow
   */
  export type CacheDataFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
    /**
     * Filter, which CacheData to fetch.
     */
    where?: CacheDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CacheData to fetch.
     */
    orderBy?: CacheDataOrderByWithRelationInput | CacheDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CacheData.
     */
    cursor?: CacheDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CacheData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CacheData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CacheData.
     */
    distinct?: CacheDataScalarFieldEnum | CacheDataScalarFieldEnum[]
  }

  /**
   * CacheData findMany
   */
  export type CacheDataFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
    /**
     * Filter, which CacheData to fetch.
     */
    where?: CacheDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CacheData to fetch.
     */
    orderBy?: CacheDataOrderByWithRelationInput | CacheDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CacheData.
     */
    cursor?: CacheDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CacheData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CacheData.
     */
    skip?: number
    distinct?: CacheDataScalarFieldEnum | CacheDataScalarFieldEnum[]
  }

  /**
   * CacheData create
   */
  export type CacheDataCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
    /**
     * The data needed to create a CacheData.
     */
    data: XOR<CacheDataCreateInput, CacheDataUncheckedCreateInput>
  }

  /**
   * CacheData createMany
   */
  export type CacheDataCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many CacheData.
     */
    data: CacheDataCreateManyInput | CacheDataCreateManyInput[]
  }

  /**
   * CacheData update
   */
  export type CacheDataUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
    /**
     * The data needed to update a CacheData.
     */
    data: XOR<CacheDataUpdateInput, CacheDataUncheckedUpdateInput>
    /**
     * Choose, which CacheData to update.
     */
    where: CacheDataWhereUniqueInput
  }

  /**
   * CacheData updateMany
   */
  export type CacheDataUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update CacheData.
     */
    data: XOR<CacheDataUpdateManyMutationInput, CacheDataUncheckedUpdateManyInput>
    /**
     * Filter which CacheData to update
     */
    where?: CacheDataWhereInput
    /**
     * Limit how many CacheData to update.
     */
    limit?: number
  }

  /**
   * CacheData upsert
   */
  export type CacheDataUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
    /**
     * The filter to search for the CacheData to update in case it exists.
     */
    where: CacheDataWhereUniqueInput
    /**
     * In case the CacheData found by the `where` argument doesn't exist, create a new CacheData with this data.
     */
    create: XOR<CacheDataCreateInput, CacheDataUncheckedCreateInput>
    /**
     * In case the CacheData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CacheDataUpdateInput, CacheDataUncheckedUpdateInput>
  }

  /**
   * CacheData delete
   */
  export type CacheDataDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
    /**
     * Filter which CacheData to delete.
     */
    where: CacheDataWhereUniqueInput
  }

  /**
   * CacheData deleteMany
   */
  export type CacheDataDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which CacheData to delete
     */
    where?: CacheDataWhereInput
    /**
     * Limit how many CacheData to delete.
     */
    limit?: number
  }

  /**
   * CacheData findRaw
   */
  export type CacheDataFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CacheData aggregateRaw
   */
  export type CacheDataAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CacheData without action
   */
  export type CacheDataDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CacheData
     */
    select?: CacheDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheData
     */
    omit?: CacheDataOmit<ExtArgs> | null
  }

  /**
   * Model TrafficData
   */

  export type AggregateTrafficData = {
    _count: TrafficDataCountAggregateOutputType | null
    _avg: TrafficDataAvgAggregateOutputType | null
    _sum: TrafficDataSumAggregateOutputType | null
    _min: TrafficDataMinAggregateOutputType | null
    _max: TrafficDataMaxAggregateOutputType | null
  }

  export type TrafficDataAvgAggregateOutputType = {
    amount: number | null
  }

  export type TrafficDataSumAggregateOutputType = {
    amount: number | null
  }

  export type TrafficDataMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    amount: number | null
    date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrafficDataMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    amount: number | null
    date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrafficDataCountAggregateOutputType = {
    id: number
    categoryId: number
    amount: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type TrafficDataAvgAggregateInputType = {
    amount?: true
  }

  export type TrafficDataSumAggregateInputType = {
    amount?: true
  }

  export type TrafficDataMinAggregateInputType = {
    id?: true
    categoryId?: true
    amount?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrafficDataMaxAggregateInputType = {
    id?: true
    categoryId?: true
    amount?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrafficDataCountAggregateInputType = {
    id?: true
    categoryId?: true
    amount?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrafficDataAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which TrafficData to aggregate.
     */
    where?: TrafficDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrafficData to fetch.
     */
    orderBy?: TrafficDataOrderByWithRelationInput | TrafficDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TrafficDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrafficData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrafficData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TrafficData
     **/
    _count?: true | TrafficDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TrafficDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TrafficDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TrafficDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TrafficDataMaxAggregateInputType
  }

  export type GetTrafficDataAggregateType<T extends TrafficDataAggregateArgs> = {
    [P in keyof T & keyof AggregateTrafficData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafficData[P]>
      : GetScalarType<T[P], AggregateTrafficData[P]>
  }

  export type TrafficDataGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: TrafficDataWhereInput
    orderBy?: TrafficDataOrderByWithAggregationInput | TrafficDataOrderByWithAggregationInput[]
    by: TrafficDataScalarFieldEnum[] | TrafficDataScalarFieldEnum
    having?: TrafficDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafficDataCountAggregateInputType | true
    _avg?: TrafficDataAvgAggregateInputType
    _sum?: TrafficDataSumAggregateInputType
    _min?: TrafficDataMinAggregateInputType
    _max?: TrafficDataMaxAggregateInputType
  }

  export type TrafficDataGroupByOutputType = {
    id: string
    categoryId: string
    amount: number
    date: string
    createdAt: Date
    updatedAt: Date
    _count: TrafficDataCountAggregateOutputType | null
    _avg: TrafficDataAvgAggregateOutputType | null
    _sum: TrafficDataSumAggregateOutputType | null
    _min: TrafficDataMinAggregateOutputType | null
    _max: TrafficDataMaxAggregateOutputType | null
  }

  type GetTrafficDataGroupByPayload<T extends TrafficDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrafficDataGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TrafficDataGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TrafficDataGroupByOutputType[P]>
          : GetScalarType<T[P], TrafficDataGroupByOutputType[P]>
      }
    >
  >

  export type TrafficDataSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      categoryId?: boolean
      amount?: boolean
      date?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      category?: boolean | TrafficCategoryDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['trafficData']
  >

  export type TrafficDataSelectScalar = {
    id?: boolean
    categoryId?: boolean
    amount?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrafficDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'categoryId' | 'amount' | 'date' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['trafficData']
    >
  export type TrafficDataInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    category?: boolean | TrafficCategoryDefaultArgs<ExtArgs>
  }

  export type $TrafficDataPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'TrafficData'
    objects: {
      category: Prisma.$TrafficCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        categoryId: string
        amount: number
        date: string
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['trafficData']
    >
    composites: {}
  }

  type TrafficDataGetPayload<S extends boolean | null | undefined | TrafficDataDefaultArgs> =
    $Result.GetResult<Prisma.$TrafficDataPayload, S>

  type TrafficDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrafficDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrafficDataCountAggregateInputType | true
    }

  export interface TrafficDataDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TrafficData']
      meta: { name: 'TrafficData' }
    }
    /**
     * Find zero or one TrafficData that matches the filter.
     * @param {TrafficDataFindUniqueArgs} args - Arguments to find a TrafficData
     * @example
     * // Get one TrafficData
     * const trafficData = await prisma.trafficData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrafficDataFindUniqueArgs>(
      args: SelectSubset<T, TrafficDataFindUniqueArgs<ExtArgs>>
    ): Prisma__TrafficDataClient<
      $Result.GetResult<
        Prisma.$TrafficDataPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one TrafficData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrafficDataFindUniqueOrThrowArgs} args - Arguments to find a TrafficData
     * @example
     * // Get one TrafficData
     * const trafficData = await prisma.trafficData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrafficDataFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TrafficDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrafficDataClient<
      $Result.GetResult<
        Prisma.$TrafficDataPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first TrafficData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficDataFindFirstArgs} args - Arguments to find a TrafficData
     * @example
     * // Get one TrafficData
     * const trafficData = await prisma.trafficData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrafficDataFindFirstArgs>(
      args?: SelectSubset<T, TrafficDataFindFirstArgs<ExtArgs>>
    ): Prisma__TrafficDataClient<
      $Result.GetResult<
        Prisma.$TrafficDataPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first TrafficData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficDataFindFirstOrThrowArgs} args - Arguments to find a TrafficData
     * @example
     * // Get one TrafficData
     * const trafficData = await prisma.trafficData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrafficDataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TrafficDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrafficDataClient<
      $Result.GetResult<
        Prisma.$TrafficDataPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more TrafficData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrafficData
     * const trafficData = await prisma.trafficData.findMany()
     *
     * // Get first 10 TrafficData
     * const trafficData = await prisma.trafficData.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const trafficDataWithIdOnly = await prisma.trafficData.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TrafficDataFindManyArgs>(
      args?: SelectSubset<T, TrafficDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TrafficDataPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a TrafficData.
     * @param {TrafficDataCreateArgs} args - Arguments to create a TrafficData.
     * @example
     * // Create one TrafficData
     * const TrafficData = await prisma.trafficData.create({
     *   data: {
     *     // ... data to create a TrafficData
     *   }
     * })
     *
     */
    create<T extends TrafficDataCreateArgs>(
      args: SelectSubset<T, TrafficDataCreateArgs<ExtArgs>>
    ): Prisma__TrafficDataClient<
      $Result.GetResult<Prisma.$TrafficDataPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many TrafficData.
     * @param {TrafficDataCreateManyArgs} args - Arguments to create many TrafficData.
     * @example
     * // Create many TrafficData
     * const trafficData = await prisma.trafficData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TrafficDataCreateManyArgs>(
      args?: SelectSubset<T, TrafficDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrafficData.
     * @param {TrafficDataDeleteArgs} args - Arguments to delete one TrafficData.
     * @example
     * // Delete one TrafficData
     * const TrafficData = await prisma.trafficData.delete({
     *   where: {
     *     // ... filter to delete one TrafficData
     *   }
     * })
     *
     */
    delete<T extends TrafficDataDeleteArgs>(
      args: SelectSubset<T, TrafficDataDeleteArgs<ExtArgs>>
    ): Prisma__TrafficDataClient<
      $Result.GetResult<Prisma.$TrafficDataPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one TrafficData.
     * @param {TrafficDataUpdateArgs} args - Arguments to update one TrafficData.
     * @example
     * // Update one TrafficData
     * const trafficData = await prisma.trafficData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TrafficDataUpdateArgs>(
      args: SelectSubset<T, TrafficDataUpdateArgs<ExtArgs>>
    ): Prisma__TrafficDataClient<
      $Result.GetResult<Prisma.$TrafficDataPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more TrafficData.
     * @param {TrafficDataDeleteManyArgs} args - Arguments to filter TrafficData to delete.
     * @example
     * // Delete a few TrafficData
     * const { count } = await prisma.trafficData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TrafficDataDeleteManyArgs>(
      args?: SelectSubset<T, TrafficDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrafficData
     * const trafficData = await prisma.trafficData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TrafficDataUpdateManyArgs>(
      args: SelectSubset<T, TrafficDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrafficData.
     * @param {TrafficDataUpsertArgs} args - Arguments to update or create a TrafficData.
     * @example
     * // Update or create a TrafficData
     * const trafficData = await prisma.trafficData.upsert({
     *   create: {
     *     // ... data to create a TrafficData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrafficData we want to update
     *   }
     * })
     */
    upsert<T extends TrafficDataUpsertArgs>(
      args: SelectSubset<T, TrafficDataUpsertArgs<ExtArgs>>
    ): Prisma__TrafficDataClient<
      $Result.GetResult<Prisma.$TrafficDataPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more TrafficData that matches the filter.
     * @param {TrafficDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const trafficData = await prisma.trafficData.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TrafficDataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TrafficData.
     * @param {TrafficDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const trafficData = await prisma.trafficData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TrafficDataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TrafficData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficDataCountArgs} args - Arguments to filter TrafficData to count.
     * @example
     * // Count the number of TrafficData
     * const count = await prisma.trafficData.count({
     *   where: {
     *     // ... the filter for the TrafficData we want to count
     *   }
     * })
     **/
    count<T extends TrafficDataCountArgs>(
      args?: Subset<T, TrafficDataCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafficDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrafficData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TrafficDataAggregateArgs>(
      args: Subset<T, TrafficDataAggregateArgs>
    ): Prisma.PrismaPromise<GetTrafficDataAggregateType<T>>

    /**
     * Group by TrafficData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TrafficDataGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafficDataGroupByArgs['orderBy'] }
        : { orderBy?: TrafficDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, TrafficDataGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetTrafficDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the TrafficData model
     */
    readonly fields: TrafficDataFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrafficData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrafficDataClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    category<T extends TrafficCategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TrafficCategoryDefaultArgs<ExtArgs>>
    ): Prisma__TrafficCategoryClient<
      | $Result.GetResult<
          Prisma.$TrafficCategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the TrafficData model
   */
  interface TrafficDataFieldRefs {
    readonly id: FieldRef<'TrafficData', 'String'>
    readonly categoryId: FieldRef<'TrafficData', 'String'>
    readonly amount: FieldRef<'TrafficData', 'Float'>
    readonly date: FieldRef<'TrafficData', 'String'>
    readonly createdAt: FieldRef<'TrafficData', 'DateTime'>
    readonly updatedAt: FieldRef<'TrafficData', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * TrafficData findUnique
   */
  export type TrafficDataFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    /**
     * Filter, which TrafficData to fetch.
     */
    where: TrafficDataWhereUniqueInput
  }

  /**
   * TrafficData findUniqueOrThrow
   */
  export type TrafficDataFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    /**
     * Filter, which TrafficData to fetch.
     */
    where: TrafficDataWhereUniqueInput
  }

  /**
   * TrafficData findFirst
   */
  export type TrafficDataFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    /**
     * Filter, which TrafficData to fetch.
     */
    where?: TrafficDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrafficData to fetch.
     */
    orderBy?: TrafficDataOrderByWithRelationInput | TrafficDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TrafficData.
     */
    cursor?: TrafficDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrafficData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrafficData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TrafficData.
     */
    distinct?: TrafficDataScalarFieldEnum | TrafficDataScalarFieldEnum[]
  }

  /**
   * TrafficData findFirstOrThrow
   */
  export type TrafficDataFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    /**
     * Filter, which TrafficData to fetch.
     */
    where?: TrafficDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrafficData to fetch.
     */
    orderBy?: TrafficDataOrderByWithRelationInput | TrafficDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TrafficData.
     */
    cursor?: TrafficDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrafficData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrafficData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TrafficData.
     */
    distinct?: TrafficDataScalarFieldEnum | TrafficDataScalarFieldEnum[]
  }

  /**
   * TrafficData findMany
   */
  export type TrafficDataFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    /**
     * Filter, which TrafficData to fetch.
     */
    where?: TrafficDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrafficData to fetch.
     */
    orderBy?: TrafficDataOrderByWithRelationInput | TrafficDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TrafficData.
     */
    cursor?: TrafficDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrafficData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrafficData.
     */
    skip?: number
    distinct?: TrafficDataScalarFieldEnum | TrafficDataScalarFieldEnum[]
  }

  /**
   * TrafficData create
   */
  export type TrafficDataCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    /**
     * The data needed to create a TrafficData.
     */
    data: XOR<TrafficDataCreateInput, TrafficDataUncheckedCreateInput>
  }

  /**
   * TrafficData createMany
   */
  export type TrafficDataCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many TrafficData.
     */
    data: TrafficDataCreateManyInput | TrafficDataCreateManyInput[]
  }

  /**
   * TrafficData update
   */
  export type TrafficDataUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    /**
     * The data needed to update a TrafficData.
     */
    data: XOR<TrafficDataUpdateInput, TrafficDataUncheckedUpdateInput>
    /**
     * Choose, which TrafficData to update.
     */
    where: TrafficDataWhereUniqueInput
  }

  /**
   * TrafficData updateMany
   */
  export type TrafficDataUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update TrafficData.
     */
    data: XOR<TrafficDataUpdateManyMutationInput, TrafficDataUncheckedUpdateManyInput>
    /**
     * Filter which TrafficData to update
     */
    where?: TrafficDataWhereInput
    /**
     * Limit how many TrafficData to update.
     */
    limit?: number
  }

  /**
   * TrafficData upsert
   */
  export type TrafficDataUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    /**
     * The filter to search for the TrafficData to update in case it exists.
     */
    where: TrafficDataWhereUniqueInput
    /**
     * In case the TrafficData found by the `where` argument doesn't exist, create a new TrafficData with this data.
     */
    create: XOR<TrafficDataCreateInput, TrafficDataUncheckedCreateInput>
    /**
     * In case the TrafficData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrafficDataUpdateInput, TrafficDataUncheckedUpdateInput>
  }

  /**
   * TrafficData delete
   */
  export type TrafficDataDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    /**
     * Filter which TrafficData to delete.
     */
    where: TrafficDataWhereUniqueInput
  }

  /**
   * TrafficData deleteMany
   */
  export type TrafficDataDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which TrafficData to delete
     */
    where?: TrafficDataWhereInput
    /**
     * Limit how many TrafficData to delete.
     */
    limit?: number
  }

  /**
   * TrafficData findRaw
   */
  export type TrafficDataFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TrafficData aggregateRaw
   */
  export type TrafficDataAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TrafficData without action
   */
  export type TrafficDataDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
  }

  /**
   * Model TrafficCategory
   */

  export type AggregateTrafficCategory = {
    _count: TrafficCategoryCountAggregateOutputType | null
    _min: TrafficCategoryMinAggregateOutputType | null
    _max: TrafficCategoryMaxAggregateOutputType | null
  }

  export type TrafficCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrafficCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrafficCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type TrafficCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrafficCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrafficCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrafficCategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which TrafficCategory to aggregate.
     */
    where?: TrafficCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrafficCategories to fetch.
     */
    orderBy?: TrafficCategoryOrderByWithRelationInput | TrafficCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TrafficCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrafficCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrafficCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TrafficCategories
     **/
    _count?: true | TrafficCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TrafficCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TrafficCategoryMaxAggregateInputType
  }

  export type GetTrafficCategoryAggregateType<T extends TrafficCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateTrafficCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafficCategory[P]>
      : GetScalarType<T[P], AggregateTrafficCategory[P]>
  }

  export type TrafficCategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: TrafficCategoryWhereInput
    orderBy?:
      | TrafficCategoryOrderByWithAggregationInput
      | TrafficCategoryOrderByWithAggregationInput[]
    by: TrafficCategoryScalarFieldEnum[] | TrafficCategoryScalarFieldEnum
    having?: TrafficCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafficCategoryCountAggregateInputType | true
    _min?: TrafficCategoryMinAggregateInputType
    _max?: TrafficCategoryMaxAggregateInputType
  }

  export type TrafficCategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TrafficCategoryCountAggregateOutputType | null
    _min: TrafficCategoryMinAggregateOutputType | null
    _max: TrafficCategoryMaxAggregateOutputType | null
  }

  type GetTrafficCategoryGroupByPayload<T extends TrafficCategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TrafficCategoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof TrafficCategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrafficCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TrafficCategoryGroupByOutputType[P]>
        }
      >
    >

  export type TrafficCategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      trafficData?: boolean | TrafficCategory$trafficDataArgs<ExtArgs>
      _count?: boolean | TrafficCategoryCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['trafficCategory']
  >

  export type TrafficCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrafficCategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'id' | 'name' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['trafficCategory']
  >
  export type TrafficCategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    trafficData?: boolean | TrafficCategory$trafficDataArgs<ExtArgs>
    _count?: boolean | TrafficCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TrafficCategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'TrafficCategory'
    objects: {
      trafficData: Prisma.$TrafficDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['trafficCategory']
    >
    composites: {}
  }

  type TrafficCategoryGetPayload<
    S extends boolean | null | undefined | TrafficCategoryDefaultArgs
  > = $Result.GetResult<Prisma.$TrafficCategoryPayload, S>

  type TrafficCategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<TrafficCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrafficCategoryCountAggregateInputType | true
  }

  export interface TrafficCategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TrafficCategory']
      meta: { name: 'TrafficCategory' }
    }
    /**
     * Find zero or one TrafficCategory that matches the filter.
     * @param {TrafficCategoryFindUniqueArgs} args - Arguments to find a TrafficCategory
     * @example
     * // Get one TrafficCategory
     * const trafficCategory = await prisma.trafficCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrafficCategoryFindUniqueArgs>(
      args: SelectSubset<T, TrafficCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__TrafficCategoryClient<
      $Result.GetResult<
        Prisma.$TrafficCategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one TrafficCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrafficCategoryFindUniqueOrThrowArgs} args - Arguments to find a TrafficCategory
     * @example
     * // Get one TrafficCategory
     * const trafficCategory = await prisma.trafficCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrafficCategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TrafficCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrafficCategoryClient<
      $Result.GetResult<
        Prisma.$TrafficCategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first TrafficCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficCategoryFindFirstArgs} args - Arguments to find a TrafficCategory
     * @example
     * // Get one TrafficCategory
     * const trafficCategory = await prisma.trafficCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrafficCategoryFindFirstArgs>(
      args?: SelectSubset<T, TrafficCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__TrafficCategoryClient<
      $Result.GetResult<
        Prisma.$TrafficCategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first TrafficCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficCategoryFindFirstOrThrowArgs} args - Arguments to find a TrafficCategory
     * @example
     * // Get one TrafficCategory
     * const trafficCategory = await prisma.trafficCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrafficCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TrafficCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrafficCategoryClient<
      $Result.GetResult<
        Prisma.$TrafficCategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more TrafficCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrafficCategories
     * const trafficCategories = await prisma.trafficCategory.findMany()
     *
     * // Get first 10 TrafficCategories
     * const trafficCategories = await prisma.trafficCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const trafficCategoryWithIdOnly = await prisma.trafficCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TrafficCategoryFindManyArgs>(
      args?: SelectSubset<T, TrafficCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TrafficCategoryPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a TrafficCategory.
     * @param {TrafficCategoryCreateArgs} args - Arguments to create a TrafficCategory.
     * @example
     * // Create one TrafficCategory
     * const TrafficCategory = await prisma.trafficCategory.create({
     *   data: {
     *     // ... data to create a TrafficCategory
     *   }
     * })
     *
     */
    create<T extends TrafficCategoryCreateArgs>(
      args: SelectSubset<T, TrafficCategoryCreateArgs<ExtArgs>>
    ): Prisma__TrafficCategoryClient<
      $Result.GetResult<Prisma.$TrafficCategoryPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many TrafficCategories.
     * @param {TrafficCategoryCreateManyArgs} args - Arguments to create many TrafficCategories.
     * @example
     * // Create many TrafficCategories
     * const trafficCategory = await prisma.trafficCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TrafficCategoryCreateManyArgs>(
      args?: SelectSubset<T, TrafficCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrafficCategory.
     * @param {TrafficCategoryDeleteArgs} args - Arguments to delete one TrafficCategory.
     * @example
     * // Delete one TrafficCategory
     * const TrafficCategory = await prisma.trafficCategory.delete({
     *   where: {
     *     // ... filter to delete one TrafficCategory
     *   }
     * })
     *
     */
    delete<T extends TrafficCategoryDeleteArgs>(
      args: SelectSubset<T, TrafficCategoryDeleteArgs<ExtArgs>>
    ): Prisma__TrafficCategoryClient<
      $Result.GetResult<Prisma.$TrafficCategoryPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one TrafficCategory.
     * @param {TrafficCategoryUpdateArgs} args - Arguments to update one TrafficCategory.
     * @example
     * // Update one TrafficCategory
     * const trafficCategory = await prisma.trafficCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TrafficCategoryUpdateArgs>(
      args: SelectSubset<T, TrafficCategoryUpdateArgs<ExtArgs>>
    ): Prisma__TrafficCategoryClient<
      $Result.GetResult<Prisma.$TrafficCategoryPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more TrafficCategories.
     * @param {TrafficCategoryDeleteManyArgs} args - Arguments to filter TrafficCategories to delete.
     * @example
     * // Delete a few TrafficCategories
     * const { count } = await prisma.trafficCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TrafficCategoryDeleteManyArgs>(
      args?: SelectSubset<T, TrafficCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrafficCategories
     * const trafficCategory = await prisma.trafficCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TrafficCategoryUpdateManyArgs>(
      args: SelectSubset<T, TrafficCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrafficCategory.
     * @param {TrafficCategoryUpsertArgs} args - Arguments to update or create a TrafficCategory.
     * @example
     * // Update or create a TrafficCategory
     * const trafficCategory = await prisma.trafficCategory.upsert({
     *   create: {
     *     // ... data to create a TrafficCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrafficCategory we want to update
     *   }
     * })
     */
    upsert<T extends TrafficCategoryUpsertArgs>(
      args: SelectSubset<T, TrafficCategoryUpsertArgs<ExtArgs>>
    ): Prisma__TrafficCategoryClient<
      $Result.GetResult<Prisma.$TrafficCategoryPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more TrafficCategories that matches the filter.
     * @param {TrafficCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const trafficCategory = await prisma.trafficCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TrafficCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TrafficCategory.
     * @param {TrafficCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const trafficCategory = await prisma.trafficCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TrafficCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TrafficCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficCategoryCountArgs} args - Arguments to filter TrafficCategories to count.
     * @example
     * // Count the number of TrafficCategories
     * const count = await prisma.trafficCategory.count({
     *   where: {
     *     // ... the filter for the TrafficCategories we want to count
     *   }
     * })
     **/
    count<T extends TrafficCategoryCountArgs>(
      args?: Subset<T, TrafficCategoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafficCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrafficCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TrafficCategoryAggregateArgs>(
      args: Subset<T, TrafficCategoryAggregateArgs>
    ): Prisma.PrismaPromise<GetTrafficCategoryAggregateType<T>>

    /**
     * Group by TrafficCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TrafficCategoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafficCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TrafficCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(
      args: SubsetIntersection<T, TrafficCategoryGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTrafficCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the TrafficCategory model
     */
    readonly fields: TrafficCategoryFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrafficCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrafficCategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    trafficData<T extends TrafficCategory$trafficDataArgs<ExtArgs> = {}>(
      args?: Subset<T, TrafficCategory$trafficDataArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$TrafficDataPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the TrafficCategory model
   */
  interface TrafficCategoryFieldRefs {
    readonly id: FieldRef<'TrafficCategory', 'String'>
    readonly name: FieldRef<'TrafficCategory', 'String'>
    readonly createdAt: FieldRef<'TrafficCategory', 'DateTime'>
    readonly updatedAt: FieldRef<'TrafficCategory', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * TrafficCategory findUnique
   */
  export type TrafficCategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TrafficCategory to fetch.
     */
    where: TrafficCategoryWhereUniqueInput
  }

  /**
   * TrafficCategory findUniqueOrThrow
   */
  export type TrafficCategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TrafficCategory to fetch.
     */
    where: TrafficCategoryWhereUniqueInput
  }

  /**
   * TrafficCategory findFirst
   */
  export type TrafficCategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TrafficCategory to fetch.
     */
    where?: TrafficCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrafficCategories to fetch.
     */
    orderBy?: TrafficCategoryOrderByWithRelationInput | TrafficCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TrafficCategories.
     */
    cursor?: TrafficCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrafficCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrafficCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TrafficCategories.
     */
    distinct?: TrafficCategoryScalarFieldEnum | TrafficCategoryScalarFieldEnum[]
  }

  /**
   * TrafficCategory findFirstOrThrow
   */
  export type TrafficCategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TrafficCategory to fetch.
     */
    where?: TrafficCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrafficCategories to fetch.
     */
    orderBy?: TrafficCategoryOrderByWithRelationInput | TrafficCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TrafficCategories.
     */
    cursor?: TrafficCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrafficCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrafficCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TrafficCategories.
     */
    distinct?: TrafficCategoryScalarFieldEnum | TrafficCategoryScalarFieldEnum[]
  }

  /**
   * TrafficCategory findMany
   */
  export type TrafficCategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TrafficCategories to fetch.
     */
    where?: TrafficCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TrafficCategories to fetch.
     */
    orderBy?: TrafficCategoryOrderByWithRelationInput | TrafficCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TrafficCategories.
     */
    cursor?: TrafficCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TrafficCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TrafficCategories.
     */
    skip?: number
    distinct?: TrafficCategoryScalarFieldEnum | TrafficCategoryScalarFieldEnum[]
  }

  /**
   * TrafficCategory create
   */
  export type TrafficCategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TrafficCategory.
     */
    data: XOR<TrafficCategoryCreateInput, TrafficCategoryUncheckedCreateInput>
  }

  /**
   * TrafficCategory createMany
   */
  export type TrafficCategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many TrafficCategories.
     */
    data: TrafficCategoryCreateManyInput | TrafficCategoryCreateManyInput[]
  }

  /**
   * TrafficCategory update
   */
  export type TrafficCategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TrafficCategory.
     */
    data: XOR<TrafficCategoryUpdateInput, TrafficCategoryUncheckedUpdateInput>
    /**
     * Choose, which TrafficCategory to update.
     */
    where: TrafficCategoryWhereUniqueInput
  }

  /**
   * TrafficCategory updateMany
   */
  export type TrafficCategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update TrafficCategories.
     */
    data: XOR<TrafficCategoryUpdateManyMutationInput, TrafficCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TrafficCategories to update
     */
    where?: TrafficCategoryWhereInput
    /**
     * Limit how many TrafficCategories to update.
     */
    limit?: number
  }

  /**
   * TrafficCategory upsert
   */
  export type TrafficCategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TrafficCategory to update in case it exists.
     */
    where: TrafficCategoryWhereUniqueInput
    /**
     * In case the TrafficCategory found by the `where` argument doesn't exist, create a new TrafficCategory with this data.
     */
    create: XOR<TrafficCategoryCreateInput, TrafficCategoryUncheckedCreateInput>
    /**
     * In case the TrafficCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrafficCategoryUpdateInput, TrafficCategoryUncheckedUpdateInput>
  }

  /**
   * TrafficCategory delete
   */
  export type TrafficCategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
    /**
     * Filter which TrafficCategory to delete.
     */
    where: TrafficCategoryWhereUniqueInput
  }

  /**
   * TrafficCategory deleteMany
   */
  export type TrafficCategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which TrafficCategories to delete
     */
    where?: TrafficCategoryWhereInput
    /**
     * Limit how many TrafficCategories to delete.
     */
    limit?: number
  }

  /**
   * TrafficCategory findRaw
   */
  export type TrafficCategoryFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TrafficCategory aggregateRaw
   */
  export type TrafficCategoryAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TrafficCategory.trafficData
   */
  export type TrafficCategory$trafficDataArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficData
     */
    select?: TrafficDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficData
     */
    omit?: TrafficDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficDataInclude<ExtArgs> | null
    where?: TrafficDataWhereInput
    orderBy?: TrafficDataOrderByWithRelationInput | TrafficDataOrderByWithRelationInput[]
    cursor?: TrafficDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrafficDataScalarFieldEnum | TrafficDataScalarFieldEnum[]
  }

  /**
   * TrafficCategory without action
   */
  export type TrafficCategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TrafficCategory
     */
    select?: TrafficCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafficCategory
     */
    omit?: TrafficCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrafficCategoryInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const ArticleScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    title: 'title'
    content: 'content'
    classify: 'classify'
    coverImg: 'coverImg'
    summary: 'summary'
    source: 'source'
    views: 'views'
    likes: 'likes'
    favorites: 'favorites'
    showNumber: 'showNumber'
    status: 'status'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
    isDeleted: 'isDeleted'
  }

  export type ArticleScalarFieldEnum =
    (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]

  export const UserScalarFieldEnum: {
    id: 'id'
    name: 'name'
    username: 'username'
    email: 'email'
    password: 'password'
    role: 'role'
    emailVerified: 'emailVerified'
    image: 'image'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

  export const AccountScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    type: 'type'
    provider: 'provider'
    providerAccountId: 'providerAccountId'
    refresh_token: 'refresh_token'
    access_token: 'access_token'
    expires_at: 'expires_at'
    token_type: 'token_type'
    scope: 'scope'
    id_token: 'id_token'
    session_state: 'session_state'
    refresh_token_expires_in: 'refresh_token_expires_in'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type AccountScalarFieldEnum =
    (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]

  export const SessionScalarFieldEnum: {
    id: 'id'
    sessionToken: 'sessionToken'
    userId: 'userId'
    expires: 'expires'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type SessionScalarFieldEnum =
    (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]

  export const VerificationTokenScalarFieldEnum: {
    id: 'id'
    identifier: 'identifier'
    token: 'token'
    expires: 'expires'
  }

  export type VerificationTokenScalarFieldEnum =
    (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]

  export const AuthenticatorScalarFieldEnum: {
    id: 'id'
    credentialID: 'credentialID'
    userId: 'userId'
    providerAccountId: 'providerAccountId'
    credentialPublicKey: 'credentialPublicKey'
    counter: 'counter'
    credentialDeviceType: 'credentialDeviceType'
    credentialBackedUp: 'credentialBackedUp'
    transports: 'transports'
  }

  export type AuthenticatorScalarFieldEnum =
    (typeof AuthenticatorScalarFieldEnum)[keyof typeof AuthenticatorScalarFieldEnum]

  export const MessageScalarFieldEnum: {
    id: 'id'
    content: 'content'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
    authorId: 'authorId'
  }

  export type MessageScalarFieldEnum =
    (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]

  export const SubscriberScalarFieldEnum: {
    id: 'id'
    email: 'email'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type SubscriberScalarFieldEnum =
    (typeof SubscriberScalarFieldEnum)[keyof typeof SubscriberScalarFieldEnum]

  export const CacheDataScalarFieldEnum: {
    id: 'id'
    key: 'key'
    data: 'data'
    desc: 'desc'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type CacheDataScalarFieldEnum =
    (typeof CacheDataScalarFieldEnum)[keyof typeof CacheDataScalarFieldEnum]

  export const TrafficDataScalarFieldEnum: {
    id: 'id'
    categoryId: 'categoryId'
    amount: 'amount'
    date: 'date'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type TrafficDataScalarFieldEnum =
    (typeof TrafficDataScalarFieldEnum)[keyof typeof TrafficDataScalarFieldEnum]

  export const TrafficCategoryScalarFieldEnum: {
    id: 'id'
    name: 'name'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type TrafficCategoryScalarFieldEnum =
    (typeof TrafficCategoryScalarFieldEnum)[keyof typeof TrafficCategoryScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const QueryMode: {
    default: 'default'
    insensitive: 'insensitive'
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>

  /**
   * Deep Input Types
   */

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<'Article'> | string
    userId?: StringFilter<'Article'> | string
    title?: StringFilter<'Article'> | string
    content?: StringFilter<'Article'> | string
    classify?: StringNullableFilter<'Article'> | string | null
    coverImg?: StringNullableFilter<'Article'> | string | null
    summary?: StringFilter<'Article'> | string
    source?: StringNullableFilter<'Article'> | string | null
    views?: IntFilter<'Article'> | number
    likes?: IntFilter<'Article'> | number
    favorites?: IntFilter<'Article'> | number
    showNumber?: IntFilter<'Article'> | number
    status?: StringFilter<'Article'> | string
    createdAt?: DateTimeFilter<'Article'> | Date | string
    updatedAt?: DateTimeNullableFilter<'Article'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Article'> | Date | string | null
    isDeleted?: IntNullableFilter<'Article'> | number | null
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    classify?: SortOrder
    coverImg?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    favorites?: SortOrder
    showNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: ArticleWhereInput | ArticleWhereInput[]
      OR?: ArticleWhereInput[]
      NOT?: ArticleWhereInput | ArticleWhereInput[]
      userId?: StringFilter<'Article'> | string
      title?: StringFilter<'Article'> | string
      content?: StringFilter<'Article'> | string
      classify?: StringNullableFilter<'Article'> | string | null
      coverImg?: StringNullableFilter<'Article'> | string | null
      summary?: StringFilter<'Article'> | string
      source?: StringNullableFilter<'Article'> | string | null
      views?: IntFilter<'Article'> | number
      likes?: IntFilter<'Article'> | number
      favorites?: IntFilter<'Article'> | number
      showNumber?: IntFilter<'Article'> | number
      status?: StringFilter<'Article'> | string
      createdAt?: DateTimeFilter<'Article'> | Date | string
      updatedAt?: DateTimeNullableFilter<'Article'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Article'> | Date | string | null
      isDeleted?: IntNullableFilter<'Article'> | number | null
    },
    'id'
  >

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    classify?: SortOrder
    coverImg?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    favorites?: SortOrder
    showNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Article'> | string
    userId?: StringWithAggregatesFilter<'Article'> | string
    title?: StringWithAggregatesFilter<'Article'> | string
    content?: StringWithAggregatesFilter<'Article'> | string
    classify?: StringNullableWithAggregatesFilter<'Article'> | string | null
    coverImg?: StringNullableWithAggregatesFilter<'Article'> | string | null
    summary?: StringWithAggregatesFilter<'Article'> | string
    source?: StringNullableWithAggregatesFilter<'Article'> | string | null
    views?: IntWithAggregatesFilter<'Article'> | number
    likes?: IntWithAggregatesFilter<'Article'> | number
    favorites?: IntWithAggregatesFilter<'Article'> | number
    showNumber?: IntWithAggregatesFilter<'Article'> | number
    status?: StringWithAggregatesFilter<'Article'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Article'> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<'Article'> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<'Article'> | Date | string | null
    isDeleted?: IntNullableWithAggregatesFilter<'Article'> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<'User'> | string
    name?: StringNullableFilter<'User'> | string | null
    username?: StringNullableFilter<'User'> | string | null
    email?: StringNullableFilter<'User'> | string | null
    password?: StringNullableFilter<'User'> | string | null
    role?: StringNullableFilter<'User'> | string | null
    emailVerified?: DateTimeNullableFilter<'User'> | Date | string | null
    image?: StringNullableFilter<'User'> | string | null
    createdAt?: DateTimeFilter<'User'> | Date | string
    updatedAt?: DateTimeFilter<'User'> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Authenticator?: AuthenticatorListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    Authenticator?: AuthenticatorOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      username?: string
      email?: string
      AND?: UserWhereInput | UserWhereInput[]
      OR?: UserWhereInput[]
      NOT?: UserWhereInput | UserWhereInput[]
      name?: StringNullableFilter<'User'> | string | null
      password?: StringNullableFilter<'User'> | string | null
      role?: StringNullableFilter<'User'> | string | null
      emailVerified?: DateTimeNullableFilter<'User'> | Date | string | null
      image?: StringNullableFilter<'User'> | string | null
      createdAt?: DateTimeFilter<'User'> | Date | string
      updatedAt?: DateTimeFilter<'User'> | Date | string
      accounts?: AccountListRelationFilter
      sessions?: SessionListRelationFilter
      Authenticator?: AuthenticatorListRelationFilter
      messages?: MessageListRelationFilter
    },
    'id' | 'username' | 'email'
  >

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'User'> | string
    name?: StringNullableWithAggregatesFilter<'User'> | string | null
    username?: StringNullableWithAggregatesFilter<'User'> | string | null
    email?: StringNullableWithAggregatesFilter<'User'> | string | null
    password?: StringNullableWithAggregatesFilter<'User'> | string | null
    role?: StringNullableWithAggregatesFilter<'User'> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<'User'> | Date | string | null
    image?: StringNullableWithAggregatesFilter<'User'> | string | null
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<'Account'> | string
    userId?: StringFilter<'Account'> | string
    type?: StringFilter<'Account'> | string
    provider?: StringFilter<'Account'> | string
    providerAccountId?: StringFilter<'Account'> | string
    refresh_token?: StringNullableFilter<'Account'> | string | null
    access_token?: StringNullableFilter<'Account'> | string | null
    expires_at?: IntNullableFilter<'Account'> | number | null
    token_type?: StringNullableFilter<'Account'> | string | null
    scope?: StringNullableFilter<'Account'> | string | null
    id_token?: StringNullableFilter<'Account'> | string | null
    session_state?: StringNullableFilter<'Account'> | string | null
    refresh_token_expires_in?: IntNullableFilter<'Account'> | number | null
    createdAt?: DateTimeFilter<'Account'> | Date | string
    updatedAt?: DateTimeFilter<'Account'> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
      AND?: AccountWhereInput | AccountWhereInput[]
      OR?: AccountWhereInput[]
      NOT?: AccountWhereInput | AccountWhereInput[]
      userId?: StringFilter<'Account'> | string
      type?: StringFilter<'Account'> | string
      provider?: StringFilter<'Account'> | string
      providerAccountId?: StringFilter<'Account'> | string
      refresh_token?: StringNullableFilter<'Account'> | string | null
      access_token?: StringNullableFilter<'Account'> | string | null
      expires_at?: IntNullableFilter<'Account'> | number | null
      token_type?: StringNullableFilter<'Account'> | string | null
      scope?: StringNullableFilter<'Account'> | string | null
      id_token?: StringNullableFilter<'Account'> | string | null
      session_state?: StringNullableFilter<'Account'> | string | null
      refresh_token_expires_in?: IntNullableFilter<'Account'> | number | null
      createdAt?: DateTimeFilter<'Account'> | Date | string
      updatedAt?: DateTimeFilter<'Account'> | Date | string
      user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    },
    'id' | 'provider_providerAccountId'
  >

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Account'> | string
    userId?: StringWithAggregatesFilter<'Account'> | string
    type?: StringWithAggregatesFilter<'Account'> | string
    provider?: StringWithAggregatesFilter<'Account'> | string
    providerAccountId?: StringWithAggregatesFilter<'Account'> | string
    refresh_token?: StringNullableWithAggregatesFilter<'Account'> | string | null
    access_token?: StringNullableWithAggregatesFilter<'Account'> | string | null
    expires_at?: IntNullableWithAggregatesFilter<'Account'> | number | null
    token_type?: StringNullableWithAggregatesFilter<'Account'> | string | null
    scope?: StringNullableWithAggregatesFilter<'Account'> | string | null
    id_token?: StringNullableWithAggregatesFilter<'Account'> | string | null
    session_state?: StringNullableWithAggregatesFilter<'Account'> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<'Account'> | number | null
    createdAt?: DateTimeWithAggregatesFilter<'Account'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Account'> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<'Session'> | string
    sessionToken?: StringFilter<'Session'> | string
    userId?: StringFilter<'Session'> | string
    expires?: DateTimeFilter<'Session'> | Date | string
    createdAt?: DateTimeFilter<'Session'> | Date | string
    updatedAt?: DateTimeFilter<'Session'> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      sessionToken?: string
      AND?: SessionWhereInput | SessionWhereInput[]
      OR?: SessionWhereInput[]
      NOT?: SessionWhereInput | SessionWhereInput[]
      userId?: StringFilter<'Session'> | string
      expires?: DateTimeFilter<'Session'> | Date | string
      createdAt?: DateTimeFilter<'Session'> | Date | string
      updatedAt?: DateTimeFilter<'Session'> | Date | string
      user?: XOR<UserScalarRelationFilter, UserWhereInput>
    },
    'id' | 'sessionToken'
  >

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Session'> | string
    sessionToken?: StringWithAggregatesFilter<'Session'> | string
    userId?: StringWithAggregatesFilter<'Session'> | string
    expires?: DateTimeWithAggregatesFilter<'Session'> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<'Session'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Session'> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<'VerificationToken'> | string
    identifier?: StringFilter<'VerificationToken'> | string
    token?: StringFilter<'VerificationToken'> | string
    expires?: DateTimeFilter<'VerificationToken'> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
      AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
      OR?: VerificationTokenWhereInput[]
      NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
      identifier?: StringFilter<'VerificationToken'> | string
      token?: StringFilter<'VerificationToken'> | string
      expires?: DateTimeFilter<'VerificationToken'> | Date | string
    },
    'id' | 'identifier_token'
  >

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?:
      | VerificationTokenScalarWhereWithAggregatesInput
      | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?:
      | VerificationTokenScalarWhereWithAggregatesInput
      | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'VerificationToken'> | string
    identifier?: StringWithAggregatesFilter<'VerificationToken'> | string
    token?: StringWithAggregatesFilter<'VerificationToken'> | string
    expires?: DateTimeWithAggregatesFilter<'VerificationToken'> | Date | string
  }

  export type AuthenticatorWhereInput = {
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    id?: StringFilter<'Authenticator'> | string
    credentialID?: StringFilter<'Authenticator'> | string
    userId?: StringFilter<'Authenticator'> | string
    providerAccountId?: StringFilter<'Authenticator'> | string
    credentialPublicKey?: StringFilter<'Authenticator'> | string
    counter?: IntFilter<'Authenticator'> | number
    credentialDeviceType?: StringFilter<'Authenticator'> | string
    credentialBackedUp?: BoolFilter<'Authenticator'> | boolean
    transports?: StringNullableFilter<'Authenticator'> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthenticatorOrderByWithRelationInput = {
    id?: SortOrder
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthenticatorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      credentialID?: string
      AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
      OR?: AuthenticatorWhereInput[]
      NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
      userId?: StringFilter<'Authenticator'> | string
      providerAccountId?: StringFilter<'Authenticator'> | string
      credentialPublicKey?: StringFilter<'Authenticator'> | string
      counter?: IntFilter<'Authenticator'> | number
      credentialDeviceType?: StringFilter<'Authenticator'> | string
      credentialBackedUp?: BoolFilter<'Authenticator'> | boolean
      transports?: StringNullableFilter<'Authenticator'> | string | null
      user?: XOR<UserScalarRelationFilter, UserWhereInput>
    },
    'id' | 'credentialID'
  >

  export type AuthenticatorOrderByWithAggregationInput = {
    id?: SortOrder
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
    _count?: AuthenticatorCountOrderByAggregateInput
    _avg?: AuthenticatorAvgOrderByAggregateInput
    _max?: AuthenticatorMaxOrderByAggregateInput
    _min?: AuthenticatorMinOrderByAggregateInput
    _sum?: AuthenticatorSumOrderByAggregateInput
  }

  export type AuthenticatorScalarWhereWithAggregatesInput = {
    AND?:
      | AuthenticatorScalarWhereWithAggregatesInput
      | AuthenticatorScalarWhereWithAggregatesInput[]
    OR?: AuthenticatorScalarWhereWithAggregatesInput[]
    NOT?:
      | AuthenticatorScalarWhereWithAggregatesInput
      | AuthenticatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Authenticator'> | string
    credentialID?: StringWithAggregatesFilter<'Authenticator'> | string
    userId?: StringWithAggregatesFilter<'Authenticator'> | string
    providerAccountId?: StringWithAggregatesFilter<'Authenticator'> | string
    credentialPublicKey?: StringWithAggregatesFilter<'Authenticator'> | string
    counter?: IntWithAggregatesFilter<'Authenticator'> | number
    credentialDeviceType?: StringWithAggregatesFilter<'Authenticator'> | string
    credentialBackedUp?: BoolWithAggregatesFilter<'Authenticator'> | boolean
    transports?: StringNullableWithAggregatesFilter<'Authenticator'> | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<'Message'> | string
    content?: StringFilter<'Message'> | string
    createdAt?: DateTimeFilter<'Message'> | Date | string
    updatedAt?: DateTimeFilter<'Message'> | Date | string
    deletedAt?: DateTimeNullableFilter<'Message'> | Date | string | null
    authorId?: StringFilter<'Message'> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: MessageWhereInput | MessageWhereInput[]
      OR?: MessageWhereInput[]
      NOT?: MessageWhereInput | MessageWhereInput[]
      content?: StringFilter<'Message'> | string
      createdAt?: DateTimeFilter<'Message'> | Date | string
      updatedAt?: DateTimeFilter<'Message'> | Date | string
      deletedAt?: DateTimeNullableFilter<'Message'> | Date | string | null
      authorId?: StringFilter<'Message'> | string
      author?: XOR<UserScalarRelationFilter, UserWhereInput>
    },
    'id'
  >

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Message'> | string
    content?: StringWithAggregatesFilter<'Message'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<'Message'> | Date | string | null
    authorId?: StringWithAggregatesFilter<'Message'> | string
  }

  export type SubscriberWhereInput = {
    AND?: SubscriberWhereInput | SubscriberWhereInput[]
    OR?: SubscriberWhereInput[]
    NOT?: SubscriberWhereInput | SubscriberWhereInput[]
    id?: StringFilter<'Subscriber'> | string
    email?: StringFilter<'Subscriber'> | string
    createdAt?: DateTimeFilter<'Subscriber'> | Date | string
    updatedAt?: DateTimeFilter<'Subscriber'> | Date | string
    deletedAt?: DateTimeNullableFilter<'Subscriber'> | Date | string | null
  }

  export type SubscriberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubscriberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      email?: string
      AND?: SubscriberWhereInput | SubscriberWhereInput[]
      OR?: SubscriberWhereInput[]
      NOT?: SubscriberWhereInput | SubscriberWhereInput[]
      createdAt?: DateTimeFilter<'Subscriber'> | Date | string
      updatedAt?: DateTimeFilter<'Subscriber'> | Date | string
      deletedAt?: DateTimeNullableFilter<'Subscriber'> | Date | string | null
    },
    'id' | 'email'
  >

  export type SubscriberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: SubscriberCountOrderByAggregateInput
    _max?: SubscriberMaxOrderByAggregateInput
    _min?: SubscriberMinOrderByAggregateInput
  }

  export type SubscriberScalarWhereWithAggregatesInput = {
    AND?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    OR?: SubscriberScalarWhereWithAggregatesInput[]
    NOT?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Subscriber'> | string
    email?: StringWithAggregatesFilter<'Subscriber'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Subscriber'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Subscriber'> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<'Subscriber'> | Date | string | null
  }

  export type CacheDataWhereInput = {
    AND?: CacheDataWhereInput | CacheDataWhereInput[]
    OR?: CacheDataWhereInput[]
    NOT?: CacheDataWhereInput | CacheDataWhereInput[]
    id?: StringFilter<'CacheData'> | string
    key?: StringFilter<'CacheData'> | string
    data?: StringFilter<'CacheData'> | string
    desc?: StringFilter<'CacheData'> | string
    createdAt?: DateTimeFilter<'CacheData'> | Date | string
    updatedAt?: DateTimeFilter<'CacheData'> | Date | string
    deletedAt?: DateTimeNullableFilter<'CacheData'> | Date | string | null
  }

  export type CacheDataOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    data?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CacheDataWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      key?: string
      AND?: CacheDataWhereInput | CacheDataWhereInput[]
      OR?: CacheDataWhereInput[]
      NOT?: CacheDataWhereInput | CacheDataWhereInput[]
      data?: StringFilter<'CacheData'> | string
      desc?: StringFilter<'CacheData'> | string
      createdAt?: DateTimeFilter<'CacheData'> | Date | string
      updatedAt?: DateTimeFilter<'CacheData'> | Date | string
      deletedAt?: DateTimeNullableFilter<'CacheData'> | Date | string | null
    },
    'id' | 'key'
  >

  export type CacheDataOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    data?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: CacheDataCountOrderByAggregateInput
    _max?: CacheDataMaxOrderByAggregateInput
    _min?: CacheDataMinOrderByAggregateInput
  }

  export type CacheDataScalarWhereWithAggregatesInput = {
    AND?: CacheDataScalarWhereWithAggregatesInput | CacheDataScalarWhereWithAggregatesInput[]
    OR?: CacheDataScalarWhereWithAggregatesInput[]
    NOT?: CacheDataScalarWhereWithAggregatesInput | CacheDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'CacheData'> | string
    key?: StringWithAggregatesFilter<'CacheData'> | string
    data?: StringWithAggregatesFilter<'CacheData'> | string
    desc?: StringWithAggregatesFilter<'CacheData'> | string
    createdAt?: DateTimeWithAggregatesFilter<'CacheData'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'CacheData'> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<'CacheData'> | Date | string | null
  }

  export type TrafficDataWhereInput = {
    AND?: TrafficDataWhereInput | TrafficDataWhereInput[]
    OR?: TrafficDataWhereInput[]
    NOT?: TrafficDataWhereInput | TrafficDataWhereInput[]
    id?: StringFilter<'TrafficData'> | string
    categoryId?: StringFilter<'TrafficData'> | string
    amount?: FloatFilter<'TrafficData'> | number
    date?: StringFilter<'TrafficData'> | string
    createdAt?: DateTimeFilter<'TrafficData'> | Date | string
    updatedAt?: DateTimeFilter<'TrafficData'> | Date | string
    category?: XOR<TrafficCategoryScalarRelationFilter, TrafficCategoryWhereInput>
  }

  export type TrafficDataOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: TrafficCategoryOrderByWithRelationInput
  }

  export type TrafficDataWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: TrafficDataWhereInput | TrafficDataWhereInput[]
      OR?: TrafficDataWhereInput[]
      NOT?: TrafficDataWhereInput | TrafficDataWhereInput[]
      categoryId?: StringFilter<'TrafficData'> | string
      amount?: FloatFilter<'TrafficData'> | number
      date?: StringFilter<'TrafficData'> | string
      createdAt?: DateTimeFilter<'TrafficData'> | Date | string
      updatedAt?: DateTimeFilter<'TrafficData'> | Date | string
      category?: XOR<TrafficCategoryScalarRelationFilter, TrafficCategoryWhereInput>
    },
    'id'
  >

  export type TrafficDataOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrafficDataCountOrderByAggregateInput
    _avg?: TrafficDataAvgOrderByAggregateInput
    _max?: TrafficDataMaxOrderByAggregateInput
    _min?: TrafficDataMinOrderByAggregateInput
    _sum?: TrafficDataSumOrderByAggregateInput
  }

  export type TrafficDataScalarWhereWithAggregatesInput = {
    AND?: TrafficDataScalarWhereWithAggregatesInput | TrafficDataScalarWhereWithAggregatesInput[]
    OR?: TrafficDataScalarWhereWithAggregatesInput[]
    NOT?: TrafficDataScalarWhereWithAggregatesInput | TrafficDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'TrafficData'> | string
    categoryId?: StringWithAggregatesFilter<'TrafficData'> | string
    amount?: FloatWithAggregatesFilter<'TrafficData'> | number
    date?: StringWithAggregatesFilter<'TrafficData'> | string
    createdAt?: DateTimeWithAggregatesFilter<'TrafficData'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'TrafficData'> | Date | string
  }

  export type TrafficCategoryWhereInput = {
    AND?: TrafficCategoryWhereInput | TrafficCategoryWhereInput[]
    OR?: TrafficCategoryWhereInput[]
    NOT?: TrafficCategoryWhereInput | TrafficCategoryWhereInput[]
    id?: StringFilter<'TrafficCategory'> | string
    name?: StringFilter<'TrafficCategory'> | string
    createdAt?: DateTimeFilter<'TrafficCategory'> | Date | string
    updatedAt?: DateTimeFilter<'TrafficCategory'> | Date | string
    trafficData?: TrafficDataListRelationFilter
  }

  export type TrafficCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trafficData?: TrafficDataOrderByRelationAggregateInput
  }

  export type TrafficCategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: TrafficCategoryWhereInput | TrafficCategoryWhereInput[]
      OR?: TrafficCategoryWhereInput[]
      NOT?: TrafficCategoryWhereInput | TrafficCategoryWhereInput[]
      name?: StringFilter<'TrafficCategory'> | string
      createdAt?: DateTimeFilter<'TrafficCategory'> | Date | string
      updatedAt?: DateTimeFilter<'TrafficCategory'> | Date | string
      trafficData?: TrafficDataListRelationFilter
    },
    'id'
  >

  export type TrafficCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrafficCategoryCountOrderByAggregateInput
    _max?: TrafficCategoryMaxOrderByAggregateInput
    _min?: TrafficCategoryMinOrderByAggregateInput
  }

  export type TrafficCategoryScalarWhereWithAggregatesInput = {
    AND?:
      | TrafficCategoryScalarWhereWithAggregatesInput
      | TrafficCategoryScalarWhereWithAggregatesInput[]
    OR?: TrafficCategoryScalarWhereWithAggregatesInput[]
    NOT?:
      | TrafficCategoryScalarWhereWithAggregatesInput
      | TrafficCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'TrafficCategory'> | string
    name?: StringWithAggregatesFilter<'TrafficCategory'> | string
    createdAt?: DateTimeWithAggregatesFilter<'TrafficCategory'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'TrafficCategory'> | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    classify?: string | null
    coverImg?: string | null
    summary: string
    source?: string | null
    views?: number
    likes?: number
    favorites?: number
    showNumber?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    isDeleted?: number | null
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    classify?: string | null
    coverImg?: string | null
    summary: string
    source?: string | null
    views?: number
    likes?: number
    favorites?: number
    showNumber?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    isDeleted?: number | null
  }

  export type ArticleUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    classify?: NullableStringFieldUpdateOperationsInput | string | null
    coverImg?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    favorites?: IntFieldUpdateOperationsInput | number
    showNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    classify?: NullableStringFieldUpdateOperationsInput | string | null
    coverImg?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    favorites?: IntFieldUpdateOperationsInput | number
    showNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticleCreateManyInput = {
    id?: string
    userId: string
    title: string
    content: string
    classify?: string | null
    coverImg?: string | null
    summary: string
    source?: string | null
    views?: number
    likes?: number
    favorites?: number
    showNumber?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    isDeleted?: number | null
  }

  export type ArticleUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    classify?: NullableStringFieldUpdateOperationsInput | string | null
    coverImg?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    favorites?: IntFieldUpdateOperationsInput | number
    showNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    classify?: NullableStringFieldUpdateOperationsInput | string | null
    coverImg?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    favorites?: IntFieldUpdateOperationsInput | number
    showNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorCreateInput = {
    id?: string
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
    user: UserCreateNestedOneWithoutAuthenticatorInput
  }

  export type AuthenticatorUncheckedCreateInput = {
    id?: string
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAuthenticatorNestedInput
  }

  export type AuthenticatorUncheckedUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorCreateManyInput = {
    id?: string
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateManyMutationInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    author: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authorId: string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authorId: string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriberCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubscriberUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubscriberUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriberUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriberCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubscriberUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriberUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CacheDataCreateInput = {
    id?: string
    key: string
    data: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CacheDataUncheckedCreateInput = {
    id?: string
    key: string
    data: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CacheDataUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CacheDataUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CacheDataCreateManyInput = {
    id?: string
    key: string
    data: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CacheDataUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CacheDataUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrafficDataCreateInput = {
    id?: string
    amount: number
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: TrafficCategoryCreateNestedOneWithoutTrafficDataInput
  }

  export type TrafficDataUncheckedCreateInput = {
    id?: string
    categoryId: string
    amount: number
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficDataUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TrafficCategoryUpdateOneRequiredWithoutTrafficDataNestedInput
  }

  export type TrafficDataUncheckedUpdateInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficDataCreateManyInput = {
    id?: string
    categoryId: string
    amount: number
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficDataUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficDataUncheckedUpdateManyInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trafficData?: TrafficDataCreateNestedManyWithoutCategoryInput
  }

  export type TrafficCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trafficData?: TrafficDataUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TrafficCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficData?: TrafficDataUpdateManyWithoutCategoryNestedInput
  }

  export type TrafficCategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficData?: TrafficDataUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TrafficCategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficCategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    classify?: SortOrder
    coverImg?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    favorites?: SortOrder
    showNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    views?: SortOrder
    likes?: SortOrder
    favorites?: SortOrder
    showNumber?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    classify?: SortOrder
    coverImg?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    favorites?: SortOrder
    showNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    classify?: SortOrder
    coverImg?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    favorites?: SortOrder
    showNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    views?: SortOrder
    likes?: SortOrder
    favorites?: SortOrder
    showNumber?: SortOrder
    isDeleted?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AuthenticatorListRelationFilter = {
    every?: AuthenticatorWhereInput
    some?: AuthenticatorWhereInput
    none?: AuthenticatorWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthenticatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuthenticatorCountOrderByAggregateInput = {
    id?: SortOrder
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type AuthenticatorMaxOrderByAggregateInput = {
    id?: SortOrder
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorMinOrderByAggregateInput = {
    id?: SortOrder
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type SubscriberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubscriberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubscriberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CacheDataCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    data?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CacheDataMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    data?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CacheDataMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    data?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TrafficCategoryScalarRelationFilter = {
    is?: TrafficCategoryWhereInput
    isNot?: TrafficCategoryWhereInput
  }

  export type TrafficDataCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrafficDataAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TrafficDataMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrafficDataMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrafficDataSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TrafficDataListRelationFilter = {
    every?: TrafficDataWhereInput
    some?: TrafficDataWhereInput
    none?: TrafficDataWhereInput
  }

  export type TrafficDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrafficCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrafficCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrafficCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
      | AuthenticatorCreateWithoutUserInput[]
      | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | AuthenticatorCreateOrConnectWithoutUserInput
      | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
      | MessageCreateWithoutAuthorInput[]
      | MessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?:
      | MessageCreateOrConnectWithoutAuthorInput
      | MessageCreateOrConnectWithoutAuthorInput[]
    createMany?: MessageCreateManyAuthorInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
      | AuthenticatorCreateWithoutUserInput[]
      | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | AuthenticatorCreateOrConnectWithoutUserInput
      | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
      | MessageCreateWithoutAuthorInput[]
      | MessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?:
      | MessageCreateOrConnectWithoutAuthorInput
      | MessageCreateOrConnectWithoutAuthorInput[]
    createMany?: MessageCreateManyAuthorInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[]
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[]
    upsert?:
      | SessionUpsertWithWhereUniqueWithoutUserInput
      | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?:
      | SessionUpdateWithWhereUniqueWithoutUserInput
      | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | SessionUpdateManyWithWhereWithoutUserInput
      | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
      | AuthenticatorCreateWithoutUserInput[]
      | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | AuthenticatorCreateOrConnectWithoutUserInput
      | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?:
      | AuthenticatorUpsertWithWhereUniqueWithoutUserInput
      | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?:
      | AuthenticatorUpdateWithWhereUniqueWithoutUserInput
      | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | AuthenticatorUpdateManyWithWhereWithoutUserInput
      | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
      | MessageCreateWithoutAuthorInput[]
      | MessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?:
      | MessageCreateOrConnectWithoutAuthorInput
      | MessageCreateOrConnectWithoutAuthorInput[]
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutAuthorInput
      | MessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MessageCreateManyAuthorInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?:
      | MessageUpdateWithWhereUniqueWithoutAuthorInput
      | MessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?:
      | MessageUpdateManyWithWhereWithoutAuthorInput
      | MessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[]
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[]
    upsert?:
      | SessionUpsertWithWhereUniqueWithoutUserInput
      | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?:
      | SessionUpdateWithWhereUniqueWithoutUserInput
      | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | SessionUpdateManyWithWhereWithoutUserInput
      | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
      | AuthenticatorCreateWithoutUserInput[]
      | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | AuthenticatorCreateOrConnectWithoutUserInput
      | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?:
      | AuthenticatorUpsertWithWhereUniqueWithoutUserInput
      | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?:
      | AuthenticatorUpdateWithWhereUniqueWithoutUserInput
      | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | AuthenticatorUpdateManyWithWhereWithoutUserInput
      | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
      | MessageCreateWithoutAuthorInput[]
      | MessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?:
      | MessageCreateOrConnectWithoutAuthorInput
      | MessageCreateOrConnectWithoutAuthorInput[]
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutAuthorInput
      | MessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MessageCreateManyAuthorInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?:
      | MessageUpdateWithWhereUniqueWithoutAuthorInput
      | MessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?:
      | MessageUpdateManyWithWhereWithoutAuthorInput
      | MessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>,
      UserUncheckedUpdateWithoutAccountsInput
    >
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>,
      UserUncheckedUpdateWithoutSessionsInput
    >
  }

  export type UserCreateNestedOneWithoutAuthenticatorInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAuthenticatorNestedInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    upsert?: UserUpsertWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutAuthenticatorInput, UserUpdateWithoutAuthenticatorInput>,
      UserUncheckedUpdateWithoutAuthenticatorInput
    >
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>,
      UserUncheckedUpdateWithoutMessagesInput
    >
  }

  export type TrafficCategoryCreateNestedOneWithoutTrafficDataInput = {
    create?: XOR<
      TrafficCategoryCreateWithoutTrafficDataInput,
      TrafficCategoryUncheckedCreateWithoutTrafficDataInput
    >
    connectOrCreate?: TrafficCategoryCreateOrConnectWithoutTrafficDataInput
    connect?: TrafficCategoryWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrafficCategoryUpdateOneRequiredWithoutTrafficDataNestedInput = {
    create?: XOR<
      TrafficCategoryCreateWithoutTrafficDataInput,
      TrafficCategoryUncheckedCreateWithoutTrafficDataInput
    >
    connectOrCreate?: TrafficCategoryCreateOrConnectWithoutTrafficDataInput
    upsert?: TrafficCategoryUpsertWithoutTrafficDataInput
    connect?: TrafficCategoryWhereUniqueInput
    update?: XOR<
      XOR<
        TrafficCategoryUpdateToOneWithWhereWithoutTrafficDataInput,
        TrafficCategoryUpdateWithoutTrafficDataInput
      >,
      TrafficCategoryUncheckedUpdateWithoutTrafficDataInput
    >
  }

  export type TrafficDataCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<TrafficDataCreateWithoutCategoryInput, TrafficDataUncheckedCreateWithoutCategoryInput>
      | TrafficDataCreateWithoutCategoryInput[]
      | TrafficDataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?:
      | TrafficDataCreateOrConnectWithoutCategoryInput
      | TrafficDataCreateOrConnectWithoutCategoryInput[]
    createMany?: TrafficDataCreateManyCategoryInputEnvelope
    connect?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
  }

  export type TrafficDataUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<TrafficDataCreateWithoutCategoryInput, TrafficDataUncheckedCreateWithoutCategoryInput>
      | TrafficDataCreateWithoutCategoryInput[]
      | TrafficDataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?:
      | TrafficDataCreateOrConnectWithoutCategoryInput
      | TrafficDataCreateOrConnectWithoutCategoryInput[]
    createMany?: TrafficDataCreateManyCategoryInputEnvelope
    connect?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
  }

  export type TrafficDataUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<TrafficDataCreateWithoutCategoryInput, TrafficDataUncheckedCreateWithoutCategoryInput>
      | TrafficDataCreateWithoutCategoryInput[]
      | TrafficDataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?:
      | TrafficDataCreateOrConnectWithoutCategoryInput
      | TrafficDataCreateOrConnectWithoutCategoryInput[]
    upsert?:
      | TrafficDataUpsertWithWhereUniqueWithoutCategoryInput
      | TrafficDataUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TrafficDataCreateManyCategoryInputEnvelope
    set?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
    disconnect?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
    delete?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
    connect?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
    update?:
      | TrafficDataUpdateWithWhereUniqueWithoutCategoryInput
      | TrafficDataUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?:
      | TrafficDataUpdateManyWithWhereWithoutCategoryInput
      | TrafficDataUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TrafficDataScalarWhereInput | TrafficDataScalarWhereInput[]
  }

  export type TrafficDataUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<TrafficDataCreateWithoutCategoryInput, TrafficDataUncheckedCreateWithoutCategoryInput>
      | TrafficDataCreateWithoutCategoryInput[]
      | TrafficDataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?:
      | TrafficDataCreateOrConnectWithoutCategoryInput
      | TrafficDataCreateOrConnectWithoutCategoryInput[]
    upsert?:
      | TrafficDataUpsertWithWhereUniqueWithoutCategoryInput
      | TrafficDataUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TrafficDataCreateManyCategoryInputEnvelope
    set?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
    disconnect?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
    delete?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
    connect?: TrafficDataWhereUniqueInput | TrafficDataWhereUniqueInput[]
    update?:
      | TrafficDataUpdateWithWhereUniqueWithoutCategoryInput
      | TrafficDataUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?:
      | TrafficDataUpdateManyWithWhereWithoutCategoryInput
      | TrafficDataUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TrafficDataScalarWhereInput | TrafficDataScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AuthenticatorCreateWithoutUserInput = {
    id?: string
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUncheckedCreateWithoutUserInput = {
    id?: string
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorCreateOrConnectWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorCreateManyUserInputEnvelope = {
    data: AuthenticatorCreateManyUserInput | AuthenticatorCreateManyUserInput[]
  }

  export type MessageCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MessageUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MessageCreateOrConnectWithoutAuthorInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
  }

  export type MessageCreateManyAuthorInputEnvelope = {
    data: MessageCreateManyAuthorInput | MessageCreateManyAuthorInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<'Account'> | string
    userId?: StringFilter<'Account'> | string
    type?: StringFilter<'Account'> | string
    provider?: StringFilter<'Account'> | string
    providerAccountId?: StringFilter<'Account'> | string
    refresh_token?: StringNullableFilter<'Account'> | string | null
    access_token?: StringNullableFilter<'Account'> | string | null
    expires_at?: IntNullableFilter<'Account'> | number | null
    token_type?: StringNullableFilter<'Account'> | string | null
    scope?: StringNullableFilter<'Account'> | string | null
    id_token?: StringNullableFilter<'Account'> | string | null
    session_state?: StringNullableFilter<'Account'> | string | null
    refresh_token_expires_in?: IntNullableFilter<'Account'> | number | null
    createdAt?: DateTimeFilter<'Account'> | Date | string
    updatedAt?: DateTimeFilter<'Account'> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<'Session'> | string
    sessionToken?: StringFilter<'Session'> | string
    userId?: StringFilter<'Session'> | string
    expires?: DateTimeFilter<'Session'> | Date | string
    createdAt?: DateTimeFilter<'Session'> | Date | string
    updatedAt?: DateTimeFilter<'Session'> | Date | string
  }

  export type AuthenticatorUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    update: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    data: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
  }

  export type AuthenticatorUpdateManyWithWhereWithoutUserInput = {
    where: AuthenticatorScalarWhereInput
    data: XOR<
      AuthenticatorUpdateManyMutationInput,
      AuthenticatorUncheckedUpdateManyWithoutUserInput
    >
  }

  export type AuthenticatorScalarWhereInput = {
    AND?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    OR?: AuthenticatorScalarWhereInput[]
    NOT?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    id?: StringFilter<'Authenticator'> | string
    credentialID?: StringFilter<'Authenticator'> | string
    userId?: StringFilter<'Authenticator'> | string
    providerAccountId?: StringFilter<'Authenticator'> | string
    credentialPublicKey?: StringFilter<'Authenticator'> | string
    counter?: IntFilter<'Authenticator'> | number
    credentialDeviceType?: StringFilter<'Authenticator'> | string
    credentialBackedUp?: BoolFilter<'Authenticator'> | boolean
    transports?: StringNullableFilter<'Authenticator'> | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAuthorInput, MessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAuthorInput, MessageUncheckedUpdateWithoutAuthorInput>
  }

  export type MessageUpdateManyWithWhereWithoutAuthorInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<'Message'> | string
    content?: StringFilter<'Message'> | string
    createdAt?: DateTimeFilter<'Message'> | Date | string
    updatedAt?: DateTimeFilter<'Message'> | Date | string
    deletedAt?: DateTimeNullableFilter<'Message'> | Date | string | null
    authorId?: StringFilter<'Message'> | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAuthenticatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
  }

  export type UserUpsertWithoutAuthenticatorInput = {
    update: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthenticatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
  }

  export type UserUpdateWithoutAuthenticatorInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthenticatorInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrafficCategoryCreateWithoutTrafficDataInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficCategoryUncheckedCreateWithoutTrafficDataInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficCategoryCreateOrConnectWithoutTrafficDataInput = {
    where: TrafficCategoryWhereUniqueInput
    create: XOR<
      TrafficCategoryCreateWithoutTrafficDataInput,
      TrafficCategoryUncheckedCreateWithoutTrafficDataInput
    >
  }

  export type TrafficCategoryUpsertWithoutTrafficDataInput = {
    update: XOR<
      TrafficCategoryUpdateWithoutTrafficDataInput,
      TrafficCategoryUncheckedUpdateWithoutTrafficDataInput
    >
    create: XOR<
      TrafficCategoryCreateWithoutTrafficDataInput,
      TrafficCategoryUncheckedCreateWithoutTrafficDataInput
    >
    where?: TrafficCategoryWhereInput
  }

  export type TrafficCategoryUpdateToOneWithWhereWithoutTrafficDataInput = {
    where?: TrafficCategoryWhereInput
    data: XOR<
      TrafficCategoryUpdateWithoutTrafficDataInput,
      TrafficCategoryUncheckedUpdateWithoutTrafficDataInput
    >
  }

  export type TrafficCategoryUpdateWithoutTrafficDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficCategoryUncheckedUpdateWithoutTrafficDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficDataCreateWithoutCategoryInput = {
    id?: string
    amount: number
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficDataUncheckedCreateWithoutCategoryInput = {
    id?: string
    amount: number
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficDataCreateOrConnectWithoutCategoryInput = {
    where: TrafficDataWhereUniqueInput
    create: XOR<
      TrafficDataCreateWithoutCategoryInput,
      TrafficDataUncheckedCreateWithoutCategoryInput
    >
  }

  export type TrafficDataCreateManyCategoryInputEnvelope = {
    data: TrafficDataCreateManyCategoryInput | TrafficDataCreateManyCategoryInput[]
  }

  export type TrafficDataUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TrafficDataWhereUniqueInput
    update: XOR<
      TrafficDataUpdateWithoutCategoryInput,
      TrafficDataUncheckedUpdateWithoutCategoryInput
    >
    create: XOR<
      TrafficDataCreateWithoutCategoryInput,
      TrafficDataUncheckedCreateWithoutCategoryInput
    >
  }

  export type TrafficDataUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TrafficDataWhereUniqueInput
    data: XOR<TrafficDataUpdateWithoutCategoryInput, TrafficDataUncheckedUpdateWithoutCategoryInput>
  }

  export type TrafficDataUpdateManyWithWhereWithoutCategoryInput = {
    where: TrafficDataScalarWhereInput
    data: XOR<
      TrafficDataUpdateManyMutationInput,
      TrafficDataUncheckedUpdateManyWithoutCategoryInput
    >
  }

  export type TrafficDataScalarWhereInput = {
    AND?: TrafficDataScalarWhereInput | TrafficDataScalarWhereInput[]
    OR?: TrafficDataScalarWhereInput[]
    NOT?: TrafficDataScalarWhereInput | TrafficDataScalarWhereInput[]
    id?: StringFilter<'TrafficData'> | string
    categoryId?: StringFilter<'TrafficData'> | string
    amount?: FloatFilter<'TrafficData'> | number
    date?: StringFilter<'TrafficData'> | string
    createdAt?: DateTimeFilter<'TrafficData'> | Date | string
    updatedAt?: DateTimeFilter<'TrafficData'> | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticatorCreateManyUserInput = {
    id?: string
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type MessageCreateManyAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrafficDataCreateManyCategoryInput = {
    id?: string
    amount: number
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficDataUpdateWithoutCategoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficDataUncheckedUpdateWithoutCategoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficDataUncheckedUpdateManyWithoutCategoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
