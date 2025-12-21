
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Flashcard
 * 
 */
export type Flashcard = $Result.DefaultSelection<Prisma.$FlashcardPayload>
/**
 * Model FlashcardReview
 * 
 */
export type FlashcardReview = $Result.DefaultSelection<Prisma.$FlashcardReviewPayload>
/**
 * Model StudiedText
 * 
 */
export type StudiedText = $Result.DefaultSelection<Prisma.$StudiedTextPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PortionType: {
  Parasha: 'Parasha',
  Daf: 'Daf',
  Perek: 'Perek'
};

export type PortionType = (typeof PortionType)[keyof typeof PortionType]


export const Grade: {
  Again: 'Again',
  Hard: 'Hard',
  Good: 'Good',
  Easy: 'Easy'
};

export type Grade = (typeof Grade)[keyof typeof Grade]

}

export type PortionType = $Enums.PortionType

export const PortionType: typeof $Enums.PortionType

export type Grade = $Enums.Grade

export const Grade: typeof $Enums.Grade

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashcard`: Exposes CRUD operations for the **Flashcard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flashcards
    * const flashcards = await prisma.flashcard.findMany()
    * ```
    */
  get flashcard(): Prisma.FlashcardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashcardReview`: Exposes CRUD operations for the **FlashcardReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashcardReviews
    * const flashcardReviews = await prisma.flashcardReview.findMany()
    * ```
    */
  get flashcardReview(): Prisma.FlashcardReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studiedText`: Exposes CRUD operations for the **StudiedText** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudiedTexts
    * const studiedTexts = await prisma.studiedText.findMany()
    * ```
    */
  get studiedText(): Prisma.StudiedTextDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
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
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
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
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
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

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

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

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
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
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    Flashcard: 'Flashcard',
    FlashcardReview: 'FlashcardReview',
    StudiedText: 'StudiedText'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "flashcard" | "flashcardReview" | "studiedText"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Flashcard: {
        payload: Prisma.$FlashcardPayload<ExtArgs>
        fields: Prisma.FlashcardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashcardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashcardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          findFirst: {
            args: Prisma.FlashcardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashcardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          findMany: {
            args: Prisma.FlashcardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          create: {
            args: Prisma.FlashcardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          createMany: {
            args: Prisma.FlashcardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashcardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          delete: {
            args: Prisma.FlashcardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          update: {
            args: Prisma.FlashcardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          deleteMany: {
            args: Prisma.FlashcardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashcardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashcardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          upsert: {
            args: Prisma.FlashcardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          aggregate: {
            args: Prisma.FlashcardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashcard>
          }
          groupBy: {
            args: Prisma.FlashcardGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashcardGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashcardCountArgs<ExtArgs>
            result: $Utils.Optional<FlashcardCountAggregateOutputType> | number
          }
        }
      }
      FlashcardReview: {
        payload: Prisma.$FlashcardReviewPayload<ExtArgs>
        fields: Prisma.FlashcardReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashcardReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashcardReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload>
          }
          findFirst: {
            args: Prisma.FlashcardReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashcardReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload>
          }
          findMany: {
            args: Prisma.FlashcardReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload>[]
          }
          create: {
            args: Prisma.FlashcardReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload>
          }
          createMany: {
            args: Prisma.FlashcardReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashcardReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload>[]
          }
          delete: {
            args: Prisma.FlashcardReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload>
          }
          update: {
            args: Prisma.FlashcardReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload>
          }
          deleteMany: {
            args: Prisma.FlashcardReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashcardReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashcardReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload>[]
          }
          upsert: {
            args: Prisma.FlashcardReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardReviewPayload>
          }
          aggregate: {
            args: Prisma.FlashcardReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashcardReview>
          }
          groupBy: {
            args: Prisma.FlashcardReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashcardReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashcardReviewCountArgs<ExtArgs>
            result: $Utils.Optional<FlashcardReviewCountAggregateOutputType> | number
          }
        }
      }
      StudiedText: {
        payload: Prisma.$StudiedTextPayload<ExtArgs>
        fields: Prisma.StudiedTextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudiedTextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudiedTextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload>
          }
          findFirst: {
            args: Prisma.StudiedTextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudiedTextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload>
          }
          findMany: {
            args: Prisma.StudiedTextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload>[]
          }
          create: {
            args: Prisma.StudiedTextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload>
          }
          createMany: {
            args: Prisma.StudiedTextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudiedTextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload>[]
          }
          delete: {
            args: Prisma.StudiedTextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload>
          }
          update: {
            args: Prisma.StudiedTextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload>
          }
          deleteMany: {
            args: Prisma.StudiedTextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudiedTextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudiedTextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload>[]
          }
          upsert: {
            args: Prisma.StudiedTextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudiedTextPayload>
          }
          aggregate: {
            args: Prisma.StudiedTextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudiedText>
          }
          groupBy: {
            args: Prisma.StudiedTextGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudiedTextGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudiedTextCountArgs<ExtArgs>
            result: $Utils.Optional<StudiedTextCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    post?: PostOmit
    flashcard?: FlashcardOmit
    flashcardReview?: FlashcardReviewOmit
    studiedText?: StudiedTextOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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
   * Count Type FlashcardCountOutputType
   */

  export type FlashcardCountOutputType = {
    reviews: number
  }

  export type FlashcardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | FlashcardCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * FlashcardCountOutputType without action
   */
  export type FlashcardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardCountOutputType
     */
    select?: FlashcardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlashcardCountOutputType without action
   */
  export type FlashcardCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
  }


  /**
   * Model Flashcard
   */

  export type AggregateFlashcard = {
    _count: FlashcardCountAggregateOutputType | null
    _min: FlashcardMinAggregateOutputType | null
    _max: FlashcardMaxAggregateOutputType | null
  }

  export type FlashcardMinAggregateOutputType = {
    id: string | null
    portionType: $Enums.PortionType | null
    portionLabel: string | null
    prompt: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlashcardMaxAggregateOutputType = {
    id: string | null
    portionType: $Enums.PortionType | null
    portionLabel: string | null
    prompt: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlashcardCountAggregateOutputType = {
    id: number
    portionType: number
    portionLabel: number
    prompt: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlashcardMinAggregateInputType = {
    id?: true
    portionType?: true
    portionLabel?: true
    prompt?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlashcardMaxAggregateInputType = {
    id?: true
    portionType?: true
    portionLabel?: true
    prompt?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlashcardCountAggregateInputType = {
    id?: true
    portionType?: true
    portionLabel?: true
    prompt?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlashcardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flashcard to aggregate.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flashcards
    **/
    _count?: true | FlashcardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashcardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashcardMaxAggregateInputType
  }

  export type GetFlashcardAggregateType<T extends FlashcardAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashcard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashcard[P]>
      : GetScalarType<T[P], AggregateFlashcard[P]>
  }




  export type FlashcardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardWhereInput
    orderBy?: FlashcardOrderByWithAggregationInput | FlashcardOrderByWithAggregationInput[]
    by: FlashcardScalarFieldEnum[] | FlashcardScalarFieldEnum
    having?: FlashcardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashcardCountAggregateInputType | true
    _min?: FlashcardMinAggregateInputType
    _max?: FlashcardMaxAggregateInputType
  }

  export type FlashcardGroupByOutputType = {
    id: string
    portionType: $Enums.PortionType
    portionLabel: string
    prompt: string
    answer: string
    createdAt: Date
    updatedAt: Date
    _count: FlashcardCountAggregateOutputType | null
    _min: FlashcardMinAggregateOutputType | null
    _max: FlashcardMaxAggregateOutputType | null
  }

  type GetFlashcardGroupByPayload<T extends FlashcardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashcardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashcardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashcardGroupByOutputType[P]>
            : GetScalarType<T[P], FlashcardGroupByOutputType[P]>
        }
      >
    >


  export type FlashcardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portionType?: boolean
    portionLabel?: boolean
    prompt?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | Flashcard$reviewsArgs<ExtArgs>
    _count?: boolean | FlashcardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portionType?: boolean
    portionLabel?: boolean
    prompt?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portionType?: boolean
    portionLabel?: boolean
    prompt?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectScalar = {
    id?: boolean
    portionType?: boolean
    portionLabel?: boolean
    prompt?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlashcardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portionType" | "portionLabel" | "prompt" | "answer" | "createdAt" | "updatedAt", ExtArgs["result"]["flashcard"]>
  export type FlashcardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Flashcard$reviewsArgs<ExtArgs>
    _count?: boolean | FlashcardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlashcardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FlashcardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlashcardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flashcard"
    objects: {
      reviews: Prisma.$FlashcardReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      portionType: $Enums.PortionType
      portionLabel: string
      prompt: string
      answer: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flashcard"]>
    composites: {}
  }

  type FlashcardGetPayload<S extends boolean | null | undefined | FlashcardDefaultArgs> = $Result.GetResult<Prisma.$FlashcardPayload, S>

  type FlashcardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashcardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashcardCountAggregateInputType | true
    }

  export interface FlashcardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flashcard'], meta: { name: 'Flashcard' } }
    /**
     * Find zero or one Flashcard that matches the filter.
     * @param {FlashcardFindUniqueArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashcardFindUniqueArgs>(args: SelectSubset<T, FlashcardFindUniqueArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flashcard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashcardFindUniqueOrThrowArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashcardFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashcardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flashcard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindFirstArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashcardFindFirstArgs>(args?: SelectSubset<T, FlashcardFindFirstArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flashcard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindFirstOrThrowArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashcardFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashcardFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flashcards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flashcards
     * const flashcards = await prisma.flashcard.findMany()
     * 
     * // Get first 10 Flashcards
     * const flashcards = await prisma.flashcard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flashcardWithIdOnly = await prisma.flashcard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlashcardFindManyArgs>(args?: SelectSubset<T, FlashcardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flashcard.
     * @param {FlashcardCreateArgs} args - Arguments to create a Flashcard.
     * @example
     * // Create one Flashcard
     * const Flashcard = await prisma.flashcard.create({
     *   data: {
     *     // ... data to create a Flashcard
     *   }
     * })
     * 
     */
    create<T extends FlashcardCreateArgs>(args: SelectSubset<T, FlashcardCreateArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flashcards.
     * @param {FlashcardCreateManyArgs} args - Arguments to create many Flashcards.
     * @example
     * // Create many Flashcards
     * const flashcard = await prisma.flashcard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashcardCreateManyArgs>(args?: SelectSubset<T, FlashcardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flashcards and returns the data saved in the database.
     * @param {FlashcardCreateManyAndReturnArgs} args - Arguments to create many Flashcards.
     * @example
     * // Create many Flashcards
     * const flashcard = await prisma.flashcard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flashcards and only return the `id`
     * const flashcardWithIdOnly = await prisma.flashcard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashcardCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashcardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flashcard.
     * @param {FlashcardDeleteArgs} args - Arguments to delete one Flashcard.
     * @example
     * // Delete one Flashcard
     * const Flashcard = await prisma.flashcard.delete({
     *   where: {
     *     // ... filter to delete one Flashcard
     *   }
     * })
     * 
     */
    delete<T extends FlashcardDeleteArgs>(args: SelectSubset<T, FlashcardDeleteArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flashcard.
     * @param {FlashcardUpdateArgs} args - Arguments to update one Flashcard.
     * @example
     * // Update one Flashcard
     * const flashcard = await prisma.flashcard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashcardUpdateArgs>(args: SelectSubset<T, FlashcardUpdateArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flashcards.
     * @param {FlashcardDeleteManyArgs} args - Arguments to filter Flashcards to delete.
     * @example
     * // Delete a few Flashcards
     * const { count } = await prisma.flashcard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashcardDeleteManyArgs>(args?: SelectSubset<T, FlashcardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flashcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flashcards
     * const flashcard = await prisma.flashcard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashcardUpdateManyArgs>(args: SelectSubset<T, FlashcardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flashcards and returns the data updated in the database.
     * @param {FlashcardUpdateManyAndReturnArgs} args - Arguments to update many Flashcards.
     * @example
     * // Update many Flashcards
     * const flashcard = await prisma.flashcard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flashcards and only return the `id`
     * const flashcardWithIdOnly = await prisma.flashcard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlashcardUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashcardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flashcard.
     * @param {FlashcardUpsertArgs} args - Arguments to update or create a Flashcard.
     * @example
     * // Update or create a Flashcard
     * const flashcard = await prisma.flashcard.upsert({
     *   create: {
     *     // ... data to create a Flashcard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flashcard we want to update
     *   }
     * })
     */
    upsert<T extends FlashcardUpsertArgs>(args: SelectSubset<T, FlashcardUpsertArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flashcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardCountArgs} args - Arguments to filter Flashcards to count.
     * @example
     * // Count the number of Flashcards
     * const count = await prisma.flashcard.count({
     *   where: {
     *     // ... the filter for the Flashcards we want to count
     *   }
     * })
    **/
    count<T extends FlashcardCountArgs>(
      args?: Subset<T, FlashcardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashcardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flashcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlashcardAggregateArgs>(args: Subset<T, FlashcardAggregateArgs>): Prisma.PrismaPromise<GetFlashcardAggregateType<T>>

    /**
     * Group by Flashcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardGroupByArgs} args - Group by arguments.
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
      T extends FlashcardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashcardGroupByArgs['orderBy'] }
        : { orderBy?: FlashcardGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
    >(args: SubsetIntersection<T, FlashcardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashcardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flashcard model
   */
  readonly fields: FlashcardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flashcard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashcardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Flashcard$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Flashcard$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flashcard model
   */
  interface FlashcardFieldRefs {
    readonly id: FieldRef<"Flashcard", 'String'>
    readonly portionType: FieldRef<"Flashcard", 'PortionType'>
    readonly portionLabel: FieldRef<"Flashcard", 'String'>
    readonly prompt: FieldRef<"Flashcard", 'String'>
    readonly answer: FieldRef<"Flashcard", 'String'>
    readonly createdAt: FieldRef<"Flashcard", 'DateTime'>
    readonly updatedAt: FieldRef<"Flashcard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flashcard findUnique
   */
  export type FlashcardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard findUniqueOrThrow
   */
  export type FlashcardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard findFirst
   */
  export type FlashcardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flashcards.
     */
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard findFirstOrThrow
   */
  export type FlashcardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flashcards.
     */
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard findMany
   */
  export type FlashcardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcards to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard create
   */
  export type FlashcardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The data needed to create a Flashcard.
     */
    data: XOR<FlashcardCreateInput, FlashcardUncheckedCreateInput>
  }

  /**
   * Flashcard createMany
   */
  export type FlashcardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flashcards.
     */
    data: FlashcardCreateManyInput | FlashcardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flashcard createManyAndReturn
   */
  export type FlashcardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * The data used to create many Flashcards.
     */
    data: FlashcardCreateManyInput | FlashcardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flashcard update
   */
  export type FlashcardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The data needed to update a Flashcard.
     */
    data: XOR<FlashcardUpdateInput, FlashcardUncheckedUpdateInput>
    /**
     * Choose, which Flashcard to update.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard updateMany
   */
  export type FlashcardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flashcards.
     */
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyInput>
    /**
     * Filter which Flashcards to update
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to update.
     */
    limit?: number
  }

  /**
   * Flashcard updateManyAndReturn
   */
  export type FlashcardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * The data used to update Flashcards.
     */
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyInput>
    /**
     * Filter which Flashcards to update
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to update.
     */
    limit?: number
  }

  /**
   * Flashcard upsert
   */
  export type FlashcardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The filter to search for the Flashcard to update in case it exists.
     */
    where: FlashcardWhereUniqueInput
    /**
     * In case the Flashcard found by the `where` argument doesn't exist, create a new Flashcard with this data.
     */
    create: XOR<FlashcardCreateInput, FlashcardUncheckedCreateInput>
    /**
     * In case the Flashcard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashcardUpdateInput, FlashcardUncheckedUpdateInput>
  }

  /**
   * Flashcard delete
   */
  export type FlashcardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter which Flashcard to delete.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard deleteMany
   */
  export type FlashcardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flashcards to delete
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to delete.
     */
    limit?: number
  }

  /**
   * Flashcard.reviews
   */
  export type Flashcard$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    where?: FlashcardReviewWhereInput
    orderBy?: FlashcardReviewOrderByWithRelationInput | FlashcardReviewOrderByWithRelationInput[]
    cursor?: FlashcardReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashcardReviewScalarFieldEnum | FlashcardReviewScalarFieldEnum[]
  }

  /**
   * Flashcard without action
   */
  export type FlashcardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
  }


  /**
   * Model FlashcardReview
   */

  export type AggregateFlashcardReview = {
    _count: FlashcardReviewCountAggregateOutputType | null
    _avg: FlashcardReviewAvgAggregateOutputType | null
    _sum: FlashcardReviewSumAggregateOutputType | null
    _min: FlashcardReviewMinAggregateOutputType | null
    _max: FlashcardReviewMaxAggregateOutputType | null
  }

  export type FlashcardReviewAvgAggregateOutputType = {
    intervalDays: number | null
    ease: number | null
    reps: number | null
  }

  export type FlashcardReviewSumAggregateOutputType = {
    intervalDays: number | null
    ease: number | null
    reps: number | null
  }

  export type FlashcardReviewMinAggregateOutputType = {
    id: string | null
    flashcardId: string | null
    dueAt: Date | null
    intervalDays: number | null
    ease: number | null
    reps: number | null
    lastGrade: $Enums.Grade | null
    lastReviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlashcardReviewMaxAggregateOutputType = {
    id: string | null
    flashcardId: string | null
    dueAt: Date | null
    intervalDays: number | null
    ease: number | null
    reps: number | null
    lastGrade: $Enums.Grade | null
    lastReviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlashcardReviewCountAggregateOutputType = {
    id: number
    flashcardId: number
    dueAt: number
    intervalDays: number
    ease: number
    reps: number
    lastGrade: number
    lastReviewedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlashcardReviewAvgAggregateInputType = {
    intervalDays?: true
    ease?: true
    reps?: true
  }

  export type FlashcardReviewSumAggregateInputType = {
    intervalDays?: true
    ease?: true
    reps?: true
  }

  export type FlashcardReviewMinAggregateInputType = {
    id?: true
    flashcardId?: true
    dueAt?: true
    intervalDays?: true
    ease?: true
    reps?: true
    lastGrade?: true
    lastReviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlashcardReviewMaxAggregateInputType = {
    id?: true
    flashcardId?: true
    dueAt?: true
    intervalDays?: true
    ease?: true
    reps?: true
    lastGrade?: true
    lastReviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlashcardReviewCountAggregateInputType = {
    id?: true
    flashcardId?: true
    dueAt?: true
    intervalDays?: true
    ease?: true
    reps?: true
    lastGrade?: true
    lastReviewedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlashcardReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashcardReview to aggregate.
     */
    where?: FlashcardReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashcardReviews to fetch.
     */
    orderBy?: FlashcardReviewOrderByWithRelationInput | FlashcardReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashcardReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashcardReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashcardReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashcardReviews
    **/
    _count?: true | FlashcardReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlashcardReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlashcardReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashcardReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashcardReviewMaxAggregateInputType
  }

  export type GetFlashcardReviewAggregateType<T extends FlashcardReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashcardReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashcardReview[P]>
      : GetScalarType<T[P], AggregateFlashcardReview[P]>
  }




  export type FlashcardReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardReviewWhereInput
    orderBy?: FlashcardReviewOrderByWithAggregationInput | FlashcardReviewOrderByWithAggregationInput[]
    by: FlashcardReviewScalarFieldEnum[] | FlashcardReviewScalarFieldEnum
    having?: FlashcardReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashcardReviewCountAggregateInputType | true
    _avg?: FlashcardReviewAvgAggregateInputType
    _sum?: FlashcardReviewSumAggregateInputType
    _min?: FlashcardReviewMinAggregateInputType
    _max?: FlashcardReviewMaxAggregateInputType
  }

  export type FlashcardReviewGroupByOutputType = {
    id: string
    flashcardId: string
    dueAt: Date
    intervalDays: number
    ease: number
    reps: number
    lastGrade: $Enums.Grade | null
    lastReviewedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FlashcardReviewCountAggregateOutputType | null
    _avg: FlashcardReviewAvgAggregateOutputType | null
    _sum: FlashcardReviewSumAggregateOutputType | null
    _min: FlashcardReviewMinAggregateOutputType | null
    _max: FlashcardReviewMaxAggregateOutputType | null
  }

  type GetFlashcardReviewGroupByPayload<T extends FlashcardReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashcardReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashcardReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashcardReviewGroupByOutputType[P]>
            : GetScalarType<T[P], FlashcardReviewGroupByOutputType[P]>
        }
      >
    >


  export type FlashcardReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flashcardId?: boolean
    dueAt?: boolean
    intervalDays?: boolean
    ease?: boolean
    reps?: boolean
    lastGrade?: boolean
    lastReviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flashcard?: boolean | FlashcardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcardReview"]>

  export type FlashcardReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flashcardId?: boolean
    dueAt?: boolean
    intervalDays?: boolean
    ease?: boolean
    reps?: boolean
    lastGrade?: boolean
    lastReviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flashcard?: boolean | FlashcardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcardReview"]>

  export type FlashcardReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flashcardId?: boolean
    dueAt?: boolean
    intervalDays?: boolean
    ease?: boolean
    reps?: boolean
    lastGrade?: boolean
    lastReviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flashcard?: boolean | FlashcardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcardReview"]>

  export type FlashcardReviewSelectScalar = {
    id?: boolean
    flashcardId?: boolean
    dueAt?: boolean
    intervalDays?: boolean
    ease?: boolean
    reps?: boolean
    lastGrade?: boolean
    lastReviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlashcardReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flashcardId" | "dueAt" | "intervalDays" | "ease" | "reps" | "lastGrade" | "lastReviewedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["flashcardReview"]>
  export type FlashcardReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashcard?: boolean | FlashcardDefaultArgs<ExtArgs>
  }
  export type FlashcardReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashcard?: boolean | FlashcardDefaultArgs<ExtArgs>
  }
  export type FlashcardReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashcard?: boolean | FlashcardDefaultArgs<ExtArgs>
  }

  export type $FlashcardReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashcardReview"
    objects: {
      flashcard: Prisma.$FlashcardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flashcardId: string
      dueAt: Date
      intervalDays: number
      ease: number
      reps: number
      lastGrade: $Enums.Grade | null
      lastReviewedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flashcardReview"]>
    composites: {}
  }

  type FlashcardReviewGetPayload<S extends boolean | null | undefined | FlashcardReviewDefaultArgs> = $Result.GetResult<Prisma.$FlashcardReviewPayload, S>

  type FlashcardReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashcardReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashcardReviewCountAggregateInputType | true
    }

  export interface FlashcardReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashcardReview'], meta: { name: 'FlashcardReview' } }
    /**
     * Find zero or one FlashcardReview that matches the filter.
     * @param {FlashcardReviewFindUniqueArgs} args - Arguments to find a FlashcardReview
     * @example
     * // Get one FlashcardReview
     * const flashcardReview = await prisma.flashcardReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashcardReviewFindUniqueArgs>(args: SelectSubset<T, FlashcardReviewFindUniqueArgs<ExtArgs>>): Prisma__FlashcardReviewClient<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashcardReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashcardReviewFindUniqueOrThrowArgs} args - Arguments to find a FlashcardReview
     * @example
     * // Get one FlashcardReview
     * const flashcardReview = await prisma.flashcardReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashcardReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashcardReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashcardReviewClient<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashcardReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardReviewFindFirstArgs} args - Arguments to find a FlashcardReview
     * @example
     * // Get one FlashcardReview
     * const flashcardReview = await prisma.flashcardReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashcardReviewFindFirstArgs>(args?: SelectSubset<T, FlashcardReviewFindFirstArgs<ExtArgs>>): Prisma__FlashcardReviewClient<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashcardReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardReviewFindFirstOrThrowArgs} args - Arguments to find a FlashcardReview
     * @example
     * // Get one FlashcardReview
     * const flashcardReview = await prisma.flashcardReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashcardReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashcardReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashcardReviewClient<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashcardReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashcardReviews
     * const flashcardReviews = await prisma.flashcardReview.findMany()
     * 
     * // Get first 10 FlashcardReviews
     * const flashcardReviews = await prisma.flashcardReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flashcardReviewWithIdOnly = await prisma.flashcardReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlashcardReviewFindManyArgs>(args?: SelectSubset<T, FlashcardReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashcardReview.
     * @param {FlashcardReviewCreateArgs} args - Arguments to create a FlashcardReview.
     * @example
     * // Create one FlashcardReview
     * const FlashcardReview = await prisma.flashcardReview.create({
     *   data: {
     *     // ... data to create a FlashcardReview
     *   }
     * })
     * 
     */
    create<T extends FlashcardReviewCreateArgs>(args: SelectSubset<T, FlashcardReviewCreateArgs<ExtArgs>>): Prisma__FlashcardReviewClient<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashcardReviews.
     * @param {FlashcardReviewCreateManyArgs} args - Arguments to create many FlashcardReviews.
     * @example
     * // Create many FlashcardReviews
     * const flashcardReview = await prisma.flashcardReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashcardReviewCreateManyArgs>(args?: SelectSubset<T, FlashcardReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlashcardReviews and returns the data saved in the database.
     * @param {FlashcardReviewCreateManyAndReturnArgs} args - Arguments to create many FlashcardReviews.
     * @example
     * // Create many FlashcardReviews
     * const flashcardReview = await prisma.flashcardReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlashcardReviews and only return the `id`
     * const flashcardReviewWithIdOnly = await prisma.flashcardReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashcardReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashcardReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlashcardReview.
     * @param {FlashcardReviewDeleteArgs} args - Arguments to delete one FlashcardReview.
     * @example
     * // Delete one FlashcardReview
     * const FlashcardReview = await prisma.flashcardReview.delete({
     *   where: {
     *     // ... filter to delete one FlashcardReview
     *   }
     * })
     * 
     */
    delete<T extends FlashcardReviewDeleteArgs>(args: SelectSubset<T, FlashcardReviewDeleteArgs<ExtArgs>>): Prisma__FlashcardReviewClient<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashcardReview.
     * @param {FlashcardReviewUpdateArgs} args - Arguments to update one FlashcardReview.
     * @example
     * // Update one FlashcardReview
     * const flashcardReview = await prisma.flashcardReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashcardReviewUpdateArgs>(args: SelectSubset<T, FlashcardReviewUpdateArgs<ExtArgs>>): Prisma__FlashcardReviewClient<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashcardReviews.
     * @param {FlashcardReviewDeleteManyArgs} args - Arguments to filter FlashcardReviews to delete.
     * @example
     * // Delete a few FlashcardReviews
     * const { count } = await prisma.flashcardReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashcardReviewDeleteManyArgs>(args?: SelectSubset<T, FlashcardReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashcardReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashcardReviews
     * const flashcardReview = await prisma.flashcardReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashcardReviewUpdateManyArgs>(args: SelectSubset<T, FlashcardReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashcardReviews and returns the data updated in the database.
     * @param {FlashcardReviewUpdateManyAndReturnArgs} args - Arguments to update many FlashcardReviews.
     * @example
     * // Update many FlashcardReviews
     * const flashcardReview = await prisma.flashcardReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlashcardReviews and only return the `id`
     * const flashcardReviewWithIdOnly = await prisma.flashcardReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlashcardReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashcardReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlashcardReview.
     * @param {FlashcardReviewUpsertArgs} args - Arguments to update or create a FlashcardReview.
     * @example
     * // Update or create a FlashcardReview
     * const flashcardReview = await prisma.flashcardReview.upsert({
     *   create: {
     *     // ... data to create a FlashcardReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashcardReview we want to update
     *   }
     * })
     */
    upsert<T extends FlashcardReviewUpsertArgs>(args: SelectSubset<T, FlashcardReviewUpsertArgs<ExtArgs>>): Prisma__FlashcardReviewClient<$Result.GetResult<Prisma.$FlashcardReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashcardReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardReviewCountArgs} args - Arguments to filter FlashcardReviews to count.
     * @example
     * // Count the number of FlashcardReviews
     * const count = await prisma.flashcardReview.count({
     *   where: {
     *     // ... the filter for the FlashcardReviews we want to count
     *   }
     * })
    **/
    count<T extends FlashcardReviewCountArgs>(
      args?: Subset<T, FlashcardReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashcardReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashcardReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlashcardReviewAggregateArgs>(args: Subset<T, FlashcardReviewAggregateArgs>): Prisma.PrismaPromise<GetFlashcardReviewAggregateType<T>>

    /**
     * Group by FlashcardReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardReviewGroupByArgs} args - Group by arguments.
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
      T extends FlashcardReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashcardReviewGroupByArgs['orderBy'] }
        : { orderBy?: FlashcardReviewGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
    >(args: SubsetIntersection<T, FlashcardReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashcardReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashcardReview model
   */
  readonly fields: FlashcardReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashcardReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashcardReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flashcard<T extends FlashcardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlashcardDefaultArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlashcardReview model
   */
  interface FlashcardReviewFieldRefs {
    readonly id: FieldRef<"FlashcardReview", 'String'>
    readonly flashcardId: FieldRef<"FlashcardReview", 'String'>
    readonly dueAt: FieldRef<"FlashcardReview", 'DateTime'>
    readonly intervalDays: FieldRef<"FlashcardReview", 'Int'>
    readonly ease: FieldRef<"FlashcardReview", 'Float'>
    readonly reps: FieldRef<"FlashcardReview", 'Int'>
    readonly lastGrade: FieldRef<"FlashcardReview", 'Grade'>
    readonly lastReviewedAt: FieldRef<"FlashcardReview", 'DateTime'>
    readonly createdAt: FieldRef<"FlashcardReview", 'DateTime'>
    readonly updatedAt: FieldRef<"FlashcardReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlashcardReview findUnique
   */
  export type FlashcardReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardReview to fetch.
     */
    where: FlashcardReviewWhereUniqueInput
  }

  /**
   * FlashcardReview findUniqueOrThrow
   */
  export type FlashcardReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardReview to fetch.
     */
    where: FlashcardReviewWhereUniqueInput
  }

  /**
   * FlashcardReview findFirst
   */
  export type FlashcardReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardReview to fetch.
     */
    where?: FlashcardReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashcardReviews to fetch.
     */
    orderBy?: FlashcardReviewOrderByWithRelationInput | FlashcardReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashcardReviews.
     */
    cursor?: FlashcardReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashcardReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashcardReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashcardReviews.
     */
    distinct?: FlashcardReviewScalarFieldEnum | FlashcardReviewScalarFieldEnum[]
  }

  /**
   * FlashcardReview findFirstOrThrow
   */
  export type FlashcardReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardReview to fetch.
     */
    where?: FlashcardReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashcardReviews to fetch.
     */
    orderBy?: FlashcardReviewOrderByWithRelationInput | FlashcardReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashcardReviews.
     */
    cursor?: FlashcardReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashcardReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashcardReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashcardReviews.
     */
    distinct?: FlashcardReviewScalarFieldEnum | FlashcardReviewScalarFieldEnum[]
  }

  /**
   * FlashcardReview findMany
   */
  export type FlashcardReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    /**
     * Filter, which FlashcardReviews to fetch.
     */
    where?: FlashcardReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashcardReviews to fetch.
     */
    orderBy?: FlashcardReviewOrderByWithRelationInput | FlashcardReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashcardReviews.
     */
    cursor?: FlashcardReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashcardReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashcardReviews.
     */
    skip?: number
    distinct?: FlashcardReviewScalarFieldEnum | FlashcardReviewScalarFieldEnum[]
  }

  /**
   * FlashcardReview create
   */
  export type FlashcardReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashcardReview.
     */
    data: XOR<FlashcardReviewCreateInput, FlashcardReviewUncheckedCreateInput>
  }

  /**
   * FlashcardReview createMany
   */
  export type FlashcardReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashcardReviews.
     */
    data: FlashcardReviewCreateManyInput | FlashcardReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashcardReview createManyAndReturn
   */
  export type FlashcardReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * The data used to create many FlashcardReviews.
     */
    data: FlashcardReviewCreateManyInput | FlashcardReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashcardReview update
   */
  export type FlashcardReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashcardReview.
     */
    data: XOR<FlashcardReviewUpdateInput, FlashcardReviewUncheckedUpdateInput>
    /**
     * Choose, which FlashcardReview to update.
     */
    where: FlashcardReviewWhereUniqueInput
  }

  /**
   * FlashcardReview updateMany
   */
  export type FlashcardReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashcardReviews.
     */
    data: XOR<FlashcardReviewUpdateManyMutationInput, FlashcardReviewUncheckedUpdateManyInput>
    /**
     * Filter which FlashcardReviews to update
     */
    where?: FlashcardReviewWhereInput
    /**
     * Limit how many FlashcardReviews to update.
     */
    limit?: number
  }

  /**
   * FlashcardReview updateManyAndReturn
   */
  export type FlashcardReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * The data used to update FlashcardReviews.
     */
    data: XOR<FlashcardReviewUpdateManyMutationInput, FlashcardReviewUncheckedUpdateManyInput>
    /**
     * Filter which FlashcardReviews to update
     */
    where?: FlashcardReviewWhereInput
    /**
     * Limit how many FlashcardReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashcardReview upsert
   */
  export type FlashcardReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashcardReview to update in case it exists.
     */
    where: FlashcardReviewWhereUniqueInput
    /**
     * In case the FlashcardReview found by the `where` argument doesn't exist, create a new FlashcardReview with this data.
     */
    create: XOR<FlashcardReviewCreateInput, FlashcardReviewUncheckedCreateInput>
    /**
     * In case the FlashcardReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashcardReviewUpdateInput, FlashcardReviewUncheckedUpdateInput>
  }

  /**
   * FlashcardReview delete
   */
  export type FlashcardReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
    /**
     * Filter which FlashcardReview to delete.
     */
    where: FlashcardReviewWhereUniqueInput
  }

  /**
   * FlashcardReview deleteMany
   */
  export type FlashcardReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashcardReviews to delete
     */
    where?: FlashcardReviewWhereInput
    /**
     * Limit how many FlashcardReviews to delete.
     */
    limit?: number
  }

  /**
   * FlashcardReview without action
   */
  export type FlashcardReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashcardReview
     */
    select?: FlashcardReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashcardReview
     */
    omit?: FlashcardReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardReviewInclude<ExtArgs> | null
  }


  /**
   * Model StudiedText
   */

  export type AggregateStudiedText = {
    _count: StudiedTextCountAggregateOutputType | null
    _min: StudiedTextMinAggregateOutputType | null
    _max: StudiedTextMaxAggregateOutputType | null
  }

  export type StudiedTextMinAggregateOutputType = {
    id: string | null
    userKey: string | null
    ref: string | null
    heRef: string | null
    url: string | null
    title: string | null
    snippet: string | null
    createdAt: Date | null
  }

  export type StudiedTextMaxAggregateOutputType = {
    id: string | null
    userKey: string | null
    ref: string | null
    heRef: string | null
    url: string | null
    title: string | null
    snippet: string | null
    createdAt: Date | null
  }

  export type StudiedTextCountAggregateOutputType = {
    id: number
    userKey: number
    ref: number
    heRef: number
    url: number
    title: number
    snippet: number
    createdAt: number
    _all: number
  }


  export type StudiedTextMinAggregateInputType = {
    id?: true
    userKey?: true
    ref?: true
    heRef?: true
    url?: true
    title?: true
    snippet?: true
    createdAt?: true
  }

  export type StudiedTextMaxAggregateInputType = {
    id?: true
    userKey?: true
    ref?: true
    heRef?: true
    url?: true
    title?: true
    snippet?: true
    createdAt?: true
  }

  export type StudiedTextCountAggregateInputType = {
    id?: true
    userKey?: true
    ref?: true
    heRef?: true
    url?: true
    title?: true
    snippet?: true
    createdAt?: true
    _all?: true
  }

  export type StudiedTextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudiedText to aggregate.
     */
    where?: StudiedTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudiedTexts to fetch.
     */
    orderBy?: StudiedTextOrderByWithRelationInput | StudiedTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudiedTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudiedTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudiedTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudiedTexts
    **/
    _count?: true | StudiedTextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudiedTextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudiedTextMaxAggregateInputType
  }

  export type GetStudiedTextAggregateType<T extends StudiedTextAggregateArgs> = {
        [P in keyof T & keyof AggregateStudiedText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudiedText[P]>
      : GetScalarType<T[P], AggregateStudiedText[P]>
  }




  export type StudiedTextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudiedTextWhereInput
    orderBy?: StudiedTextOrderByWithAggregationInput | StudiedTextOrderByWithAggregationInput[]
    by: StudiedTextScalarFieldEnum[] | StudiedTextScalarFieldEnum
    having?: StudiedTextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudiedTextCountAggregateInputType | true
    _min?: StudiedTextMinAggregateInputType
    _max?: StudiedTextMaxAggregateInputType
  }

  export type StudiedTextGroupByOutputType = {
    id: string
    userKey: string
    ref: string
    heRef: string | null
    url: string | null
    title: string | null
    snippet: string | null
    createdAt: Date
    _count: StudiedTextCountAggregateOutputType | null
    _min: StudiedTextMinAggregateOutputType | null
    _max: StudiedTextMaxAggregateOutputType | null
  }

  type GetStudiedTextGroupByPayload<T extends StudiedTextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudiedTextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudiedTextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudiedTextGroupByOutputType[P]>
            : GetScalarType<T[P], StudiedTextGroupByOutputType[P]>
        }
      >
    >


  export type StudiedTextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userKey?: boolean
    ref?: boolean
    heRef?: boolean
    url?: boolean
    title?: boolean
    snippet?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studiedText"]>

  export type StudiedTextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userKey?: boolean
    ref?: boolean
    heRef?: boolean
    url?: boolean
    title?: boolean
    snippet?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studiedText"]>

  export type StudiedTextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userKey?: boolean
    ref?: boolean
    heRef?: boolean
    url?: boolean
    title?: boolean
    snippet?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studiedText"]>

  export type StudiedTextSelectScalar = {
    id?: boolean
    userKey?: boolean
    ref?: boolean
    heRef?: boolean
    url?: boolean
    title?: boolean
    snippet?: boolean
    createdAt?: boolean
  }

  export type StudiedTextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userKey" | "ref" | "heRef" | "url" | "title" | "snippet" | "createdAt", ExtArgs["result"]["studiedText"]>

  export type $StudiedTextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudiedText"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userKey: string
      ref: string
      heRef: string | null
      url: string | null
      title: string | null
      snippet: string | null
      createdAt: Date
    }, ExtArgs["result"]["studiedText"]>
    composites: {}
  }

  type StudiedTextGetPayload<S extends boolean | null | undefined | StudiedTextDefaultArgs> = $Result.GetResult<Prisma.$StudiedTextPayload, S>

  type StudiedTextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudiedTextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudiedTextCountAggregateInputType | true
    }

  export interface StudiedTextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudiedText'], meta: { name: 'StudiedText' } }
    /**
     * Find zero or one StudiedText that matches the filter.
     * @param {StudiedTextFindUniqueArgs} args - Arguments to find a StudiedText
     * @example
     * // Get one StudiedText
     * const studiedText = await prisma.studiedText.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudiedTextFindUniqueArgs>(args: SelectSubset<T, StudiedTextFindUniqueArgs<ExtArgs>>): Prisma__StudiedTextClient<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudiedText that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudiedTextFindUniqueOrThrowArgs} args - Arguments to find a StudiedText
     * @example
     * // Get one StudiedText
     * const studiedText = await prisma.studiedText.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudiedTextFindUniqueOrThrowArgs>(args: SelectSubset<T, StudiedTextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudiedTextClient<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudiedText that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudiedTextFindFirstArgs} args - Arguments to find a StudiedText
     * @example
     * // Get one StudiedText
     * const studiedText = await prisma.studiedText.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudiedTextFindFirstArgs>(args?: SelectSubset<T, StudiedTextFindFirstArgs<ExtArgs>>): Prisma__StudiedTextClient<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudiedText that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudiedTextFindFirstOrThrowArgs} args - Arguments to find a StudiedText
     * @example
     * // Get one StudiedText
     * const studiedText = await prisma.studiedText.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudiedTextFindFirstOrThrowArgs>(args?: SelectSubset<T, StudiedTextFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudiedTextClient<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudiedTexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudiedTextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudiedTexts
     * const studiedTexts = await prisma.studiedText.findMany()
     * 
     * // Get first 10 StudiedTexts
     * const studiedTexts = await prisma.studiedText.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studiedTextWithIdOnly = await prisma.studiedText.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudiedTextFindManyArgs>(args?: SelectSubset<T, StudiedTextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudiedText.
     * @param {StudiedTextCreateArgs} args - Arguments to create a StudiedText.
     * @example
     * // Create one StudiedText
     * const StudiedText = await prisma.studiedText.create({
     *   data: {
     *     // ... data to create a StudiedText
     *   }
     * })
     * 
     */
    create<T extends StudiedTextCreateArgs>(args: SelectSubset<T, StudiedTextCreateArgs<ExtArgs>>): Prisma__StudiedTextClient<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudiedTexts.
     * @param {StudiedTextCreateManyArgs} args - Arguments to create many StudiedTexts.
     * @example
     * // Create many StudiedTexts
     * const studiedText = await prisma.studiedText.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudiedTextCreateManyArgs>(args?: SelectSubset<T, StudiedTextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudiedTexts and returns the data saved in the database.
     * @param {StudiedTextCreateManyAndReturnArgs} args - Arguments to create many StudiedTexts.
     * @example
     * // Create many StudiedTexts
     * const studiedText = await prisma.studiedText.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudiedTexts and only return the `id`
     * const studiedTextWithIdOnly = await prisma.studiedText.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudiedTextCreateManyAndReturnArgs>(args?: SelectSubset<T, StudiedTextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudiedText.
     * @param {StudiedTextDeleteArgs} args - Arguments to delete one StudiedText.
     * @example
     * // Delete one StudiedText
     * const StudiedText = await prisma.studiedText.delete({
     *   where: {
     *     // ... filter to delete one StudiedText
     *   }
     * })
     * 
     */
    delete<T extends StudiedTextDeleteArgs>(args: SelectSubset<T, StudiedTextDeleteArgs<ExtArgs>>): Prisma__StudiedTextClient<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudiedText.
     * @param {StudiedTextUpdateArgs} args - Arguments to update one StudiedText.
     * @example
     * // Update one StudiedText
     * const studiedText = await prisma.studiedText.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudiedTextUpdateArgs>(args: SelectSubset<T, StudiedTextUpdateArgs<ExtArgs>>): Prisma__StudiedTextClient<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudiedTexts.
     * @param {StudiedTextDeleteManyArgs} args - Arguments to filter StudiedTexts to delete.
     * @example
     * // Delete a few StudiedTexts
     * const { count } = await prisma.studiedText.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudiedTextDeleteManyArgs>(args?: SelectSubset<T, StudiedTextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudiedTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudiedTextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudiedTexts
     * const studiedText = await prisma.studiedText.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudiedTextUpdateManyArgs>(args: SelectSubset<T, StudiedTextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudiedTexts and returns the data updated in the database.
     * @param {StudiedTextUpdateManyAndReturnArgs} args - Arguments to update many StudiedTexts.
     * @example
     * // Update many StudiedTexts
     * const studiedText = await prisma.studiedText.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudiedTexts and only return the `id`
     * const studiedTextWithIdOnly = await prisma.studiedText.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudiedTextUpdateManyAndReturnArgs>(args: SelectSubset<T, StudiedTextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudiedText.
     * @param {StudiedTextUpsertArgs} args - Arguments to update or create a StudiedText.
     * @example
     * // Update or create a StudiedText
     * const studiedText = await prisma.studiedText.upsert({
     *   create: {
     *     // ... data to create a StudiedText
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudiedText we want to update
     *   }
     * })
     */
    upsert<T extends StudiedTextUpsertArgs>(args: SelectSubset<T, StudiedTextUpsertArgs<ExtArgs>>): Prisma__StudiedTextClient<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudiedTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudiedTextCountArgs} args - Arguments to filter StudiedTexts to count.
     * @example
     * // Count the number of StudiedTexts
     * const count = await prisma.studiedText.count({
     *   where: {
     *     // ... the filter for the StudiedTexts we want to count
     *   }
     * })
    **/
    count<T extends StudiedTextCountArgs>(
      args?: Subset<T, StudiedTextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudiedTextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudiedText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudiedTextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudiedTextAggregateArgs>(args: Subset<T, StudiedTextAggregateArgs>): Prisma.PrismaPromise<GetStudiedTextAggregateType<T>>

    /**
     * Group by StudiedText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudiedTextGroupByArgs} args - Group by arguments.
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
      T extends StudiedTextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudiedTextGroupByArgs['orderBy'] }
        : { orderBy?: StudiedTextGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
    >(args: SubsetIntersection<T, StudiedTextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudiedTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudiedText model
   */
  readonly fields: StudiedTextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudiedText.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudiedTextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudiedText model
   */
  interface StudiedTextFieldRefs {
    readonly id: FieldRef<"StudiedText", 'String'>
    readonly userKey: FieldRef<"StudiedText", 'String'>
    readonly ref: FieldRef<"StudiedText", 'String'>
    readonly heRef: FieldRef<"StudiedText", 'String'>
    readonly url: FieldRef<"StudiedText", 'String'>
    readonly title: FieldRef<"StudiedText", 'String'>
    readonly snippet: FieldRef<"StudiedText", 'String'>
    readonly createdAt: FieldRef<"StudiedText", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudiedText findUnique
   */
  export type StudiedTextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * Filter, which StudiedText to fetch.
     */
    where: StudiedTextWhereUniqueInput
  }

  /**
   * StudiedText findUniqueOrThrow
   */
  export type StudiedTextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * Filter, which StudiedText to fetch.
     */
    where: StudiedTextWhereUniqueInput
  }

  /**
   * StudiedText findFirst
   */
  export type StudiedTextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * Filter, which StudiedText to fetch.
     */
    where?: StudiedTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudiedTexts to fetch.
     */
    orderBy?: StudiedTextOrderByWithRelationInput | StudiedTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudiedTexts.
     */
    cursor?: StudiedTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudiedTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudiedTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudiedTexts.
     */
    distinct?: StudiedTextScalarFieldEnum | StudiedTextScalarFieldEnum[]
  }

  /**
   * StudiedText findFirstOrThrow
   */
  export type StudiedTextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * Filter, which StudiedText to fetch.
     */
    where?: StudiedTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudiedTexts to fetch.
     */
    orderBy?: StudiedTextOrderByWithRelationInput | StudiedTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudiedTexts.
     */
    cursor?: StudiedTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudiedTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudiedTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudiedTexts.
     */
    distinct?: StudiedTextScalarFieldEnum | StudiedTextScalarFieldEnum[]
  }

  /**
   * StudiedText findMany
   */
  export type StudiedTextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * Filter, which StudiedTexts to fetch.
     */
    where?: StudiedTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudiedTexts to fetch.
     */
    orderBy?: StudiedTextOrderByWithRelationInput | StudiedTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudiedTexts.
     */
    cursor?: StudiedTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudiedTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudiedTexts.
     */
    skip?: number
    distinct?: StudiedTextScalarFieldEnum | StudiedTextScalarFieldEnum[]
  }

  /**
   * StudiedText create
   */
  export type StudiedTextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * The data needed to create a StudiedText.
     */
    data: XOR<StudiedTextCreateInput, StudiedTextUncheckedCreateInput>
  }

  /**
   * StudiedText createMany
   */
  export type StudiedTextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudiedTexts.
     */
    data: StudiedTextCreateManyInput | StudiedTextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudiedText createManyAndReturn
   */
  export type StudiedTextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * The data used to create many StudiedTexts.
     */
    data: StudiedTextCreateManyInput | StudiedTextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudiedText update
   */
  export type StudiedTextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * The data needed to update a StudiedText.
     */
    data: XOR<StudiedTextUpdateInput, StudiedTextUncheckedUpdateInput>
    /**
     * Choose, which StudiedText to update.
     */
    where: StudiedTextWhereUniqueInput
  }

  /**
   * StudiedText updateMany
   */
  export type StudiedTextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudiedTexts.
     */
    data: XOR<StudiedTextUpdateManyMutationInput, StudiedTextUncheckedUpdateManyInput>
    /**
     * Filter which StudiedTexts to update
     */
    where?: StudiedTextWhereInput
    /**
     * Limit how many StudiedTexts to update.
     */
    limit?: number
  }

  /**
   * StudiedText updateManyAndReturn
   */
  export type StudiedTextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * The data used to update StudiedTexts.
     */
    data: XOR<StudiedTextUpdateManyMutationInput, StudiedTextUncheckedUpdateManyInput>
    /**
     * Filter which StudiedTexts to update
     */
    where?: StudiedTextWhereInput
    /**
     * Limit how many StudiedTexts to update.
     */
    limit?: number
  }

  /**
   * StudiedText upsert
   */
  export type StudiedTextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * The filter to search for the StudiedText to update in case it exists.
     */
    where: StudiedTextWhereUniqueInput
    /**
     * In case the StudiedText found by the `where` argument doesn't exist, create a new StudiedText with this data.
     */
    create: XOR<StudiedTextCreateInput, StudiedTextUncheckedCreateInput>
    /**
     * In case the StudiedText was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudiedTextUpdateInput, StudiedTextUncheckedUpdateInput>
  }

  /**
   * StudiedText delete
   */
  export type StudiedTextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * Filter which StudiedText to delete.
     */
    where: StudiedTextWhereUniqueInput
  }

  /**
   * StudiedText deleteMany
   */
  export type StudiedTextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudiedTexts to delete
     */
    where?: StudiedTextWhereInput
    /**
     * Limit how many StudiedTexts to delete.
     */
    limit?: number
  }

  /**
   * StudiedText without action
   */
  export type StudiedTextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const FlashcardScalarFieldEnum: {
    id: 'id',
    portionType: 'portionType',
    portionLabel: 'portionLabel',
    prompt: 'prompt',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlashcardScalarFieldEnum = (typeof FlashcardScalarFieldEnum)[keyof typeof FlashcardScalarFieldEnum]


  export const FlashcardReviewScalarFieldEnum: {
    id: 'id',
    flashcardId: 'flashcardId',
    dueAt: 'dueAt',
    intervalDays: 'intervalDays',
    ease: 'ease',
    reps: 'reps',
    lastGrade: 'lastGrade',
    lastReviewedAt: 'lastReviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlashcardReviewScalarFieldEnum = (typeof FlashcardReviewScalarFieldEnum)[keyof typeof FlashcardReviewScalarFieldEnum]


  export const StudiedTextScalarFieldEnum: {
    id: 'id',
    userKey: 'userKey',
    ref: 'ref',
    heRef: 'heRef',
    url: 'url',
    title: 'title',
    snippet: 'snippet',
    createdAt: 'createdAt'
  };

  export type StudiedTextScalarFieldEnum = (typeof StudiedTextScalarFieldEnum)[keyof typeof StudiedTextScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PortionType'
   */
  export type EnumPortionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortionType'>
    


  /**
   * Reference to a field of type 'PortionType[]'
   */
  export type ListEnumPortionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Grade'
   */
  export type EnumGradeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Grade'>
    


  /**
   * Reference to a field of type 'Grade[]'
   */
  export type ListEnumGradeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Grade[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type FlashcardWhereInput = {
    AND?: FlashcardWhereInput | FlashcardWhereInput[]
    OR?: FlashcardWhereInput[]
    NOT?: FlashcardWhereInput | FlashcardWhereInput[]
    id?: StringFilter<"Flashcard"> | string
    portionType?: EnumPortionTypeFilter<"Flashcard"> | $Enums.PortionType
    portionLabel?: StringFilter<"Flashcard"> | string
    prompt?: StringFilter<"Flashcard"> | string
    answer?: StringFilter<"Flashcard"> | string
    createdAt?: DateTimeFilter<"Flashcard"> | Date | string
    updatedAt?: DateTimeFilter<"Flashcard"> | Date | string
    reviews?: FlashcardReviewListRelationFilter
  }

  export type FlashcardOrderByWithRelationInput = {
    id?: SortOrder
    portionType?: SortOrder
    portionLabel?: SortOrder
    prompt?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: FlashcardReviewOrderByRelationAggregateInput
  }

  export type FlashcardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlashcardWhereInput | FlashcardWhereInput[]
    OR?: FlashcardWhereInput[]
    NOT?: FlashcardWhereInput | FlashcardWhereInput[]
    portionType?: EnumPortionTypeFilter<"Flashcard"> | $Enums.PortionType
    portionLabel?: StringFilter<"Flashcard"> | string
    prompt?: StringFilter<"Flashcard"> | string
    answer?: StringFilter<"Flashcard"> | string
    createdAt?: DateTimeFilter<"Flashcard"> | Date | string
    updatedAt?: DateTimeFilter<"Flashcard"> | Date | string
    reviews?: FlashcardReviewListRelationFilter
  }, "id">

  export type FlashcardOrderByWithAggregationInput = {
    id?: SortOrder
    portionType?: SortOrder
    portionLabel?: SortOrder
    prompt?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlashcardCountOrderByAggregateInput
    _max?: FlashcardMaxOrderByAggregateInput
    _min?: FlashcardMinOrderByAggregateInput
  }

  export type FlashcardScalarWhereWithAggregatesInput = {
    AND?: FlashcardScalarWhereWithAggregatesInput | FlashcardScalarWhereWithAggregatesInput[]
    OR?: FlashcardScalarWhereWithAggregatesInput[]
    NOT?: FlashcardScalarWhereWithAggregatesInput | FlashcardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flashcard"> | string
    portionType?: EnumPortionTypeWithAggregatesFilter<"Flashcard"> | $Enums.PortionType
    portionLabel?: StringWithAggregatesFilter<"Flashcard"> | string
    prompt?: StringWithAggregatesFilter<"Flashcard"> | string
    answer?: StringWithAggregatesFilter<"Flashcard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Flashcard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flashcard"> | Date | string
  }

  export type FlashcardReviewWhereInput = {
    AND?: FlashcardReviewWhereInput | FlashcardReviewWhereInput[]
    OR?: FlashcardReviewWhereInput[]
    NOT?: FlashcardReviewWhereInput | FlashcardReviewWhereInput[]
    id?: StringFilter<"FlashcardReview"> | string
    flashcardId?: StringFilter<"FlashcardReview"> | string
    dueAt?: DateTimeFilter<"FlashcardReview"> | Date | string
    intervalDays?: IntFilter<"FlashcardReview"> | number
    ease?: FloatFilter<"FlashcardReview"> | number
    reps?: IntFilter<"FlashcardReview"> | number
    lastGrade?: EnumGradeNullableFilter<"FlashcardReview"> | $Enums.Grade | null
    lastReviewedAt?: DateTimeNullableFilter<"FlashcardReview"> | Date | string | null
    createdAt?: DateTimeFilter<"FlashcardReview"> | Date | string
    updatedAt?: DateTimeFilter<"FlashcardReview"> | Date | string
    flashcard?: XOR<FlashcardScalarRelationFilter, FlashcardWhereInput>
  }

  export type FlashcardReviewOrderByWithRelationInput = {
    id?: SortOrder
    flashcardId?: SortOrder
    dueAt?: SortOrder
    intervalDays?: SortOrder
    ease?: SortOrder
    reps?: SortOrder
    lastGrade?: SortOrderInput | SortOrder
    lastReviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flashcard?: FlashcardOrderByWithRelationInput
  }

  export type FlashcardReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlashcardReviewWhereInput | FlashcardReviewWhereInput[]
    OR?: FlashcardReviewWhereInput[]
    NOT?: FlashcardReviewWhereInput | FlashcardReviewWhereInput[]
    flashcardId?: StringFilter<"FlashcardReview"> | string
    dueAt?: DateTimeFilter<"FlashcardReview"> | Date | string
    intervalDays?: IntFilter<"FlashcardReview"> | number
    ease?: FloatFilter<"FlashcardReview"> | number
    reps?: IntFilter<"FlashcardReview"> | number
    lastGrade?: EnumGradeNullableFilter<"FlashcardReview"> | $Enums.Grade | null
    lastReviewedAt?: DateTimeNullableFilter<"FlashcardReview"> | Date | string | null
    createdAt?: DateTimeFilter<"FlashcardReview"> | Date | string
    updatedAt?: DateTimeFilter<"FlashcardReview"> | Date | string
    flashcard?: XOR<FlashcardScalarRelationFilter, FlashcardWhereInput>
  }, "id">

  export type FlashcardReviewOrderByWithAggregationInput = {
    id?: SortOrder
    flashcardId?: SortOrder
    dueAt?: SortOrder
    intervalDays?: SortOrder
    ease?: SortOrder
    reps?: SortOrder
    lastGrade?: SortOrderInput | SortOrder
    lastReviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlashcardReviewCountOrderByAggregateInput
    _avg?: FlashcardReviewAvgOrderByAggregateInput
    _max?: FlashcardReviewMaxOrderByAggregateInput
    _min?: FlashcardReviewMinOrderByAggregateInput
    _sum?: FlashcardReviewSumOrderByAggregateInput
  }

  export type FlashcardReviewScalarWhereWithAggregatesInput = {
    AND?: FlashcardReviewScalarWhereWithAggregatesInput | FlashcardReviewScalarWhereWithAggregatesInput[]
    OR?: FlashcardReviewScalarWhereWithAggregatesInput[]
    NOT?: FlashcardReviewScalarWhereWithAggregatesInput | FlashcardReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlashcardReview"> | string
    flashcardId?: StringWithAggregatesFilter<"FlashcardReview"> | string
    dueAt?: DateTimeWithAggregatesFilter<"FlashcardReview"> | Date | string
    intervalDays?: IntWithAggregatesFilter<"FlashcardReview"> | number
    ease?: FloatWithAggregatesFilter<"FlashcardReview"> | number
    reps?: IntWithAggregatesFilter<"FlashcardReview"> | number
    lastGrade?: EnumGradeNullableWithAggregatesFilter<"FlashcardReview"> | $Enums.Grade | null
    lastReviewedAt?: DateTimeNullableWithAggregatesFilter<"FlashcardReview"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FlashcardReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FlashcardReview"> | Date | string
  }

  export type StudiedTextWhereInput = {
    AND?: StudiedTextWhereInput | StudiedTextWhereInput[]
    OR?: StudiedTextWhereInput[]
    NOT?: StudiedTextWhereInput | StudiedTextWhereInput[]
    id?: StringFilter<"StudiedText"> | string
    userKey?: StringFilter<"StudiedText"> | string
    ref?: StringFilter<"StudiedText"> | string
    heRef?: StringNullableFilter<"StudiedText"> | string | null
    url?: StringNullableFilter<"StudiedText"> | string | null
    title?: StringNullableFilter<"StudiedText"> | string | null
    snippet?: StringNullableFilter<"StudiedText"> | string | null
    createdAt?: DateTimeFilter<"StudiedText"> | Date | string
  }

  export type StudiedTextOrderByWithRelationInput = {
    id?: SortOrder
    userKey?: SortOrder
    ref?: SortOrder
    heRef?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    snippet?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type StudiedTextWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userKey_ref?: StudiedTextUserKeyRefCompoundUniqueInput
    AND?: StudiedTextWhereInput | StudiedTextWhereInput[]
    OR?: StudiedTextWhereInput[]
    NOT?: StudiedTextWhereInput | StudiedTextWhereInput[]
    userKey?: StringFilter<"StudiedText"> | string
    ref?: StringFilter<"StudiedText"> | string
    heRef?: StringNullableFilter<"StudiedText"> | string | null
    url?: StringNullableFilter<"StudiedText"> | string | null
    title?: StringNullableFilter<"StudiedText"> | string | null
    snippet?: StringNullableFilter<"StudiedText"> | string | null
    createdAt?: DateTimeFilter<"StudiedText"> | Date | string
  }, "id" | "userKey_ref">

  export type StudiedTextOrderByWithAggregationInput = {
    id?: SortOrder
    userKey?: SortOrder
    ref?: SortOrder
    heRef?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    snippet?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudiedTextCountOrderByAggregateInput
    _max?: StudiedTextMaxOrderByAggregateInput
    _min?: StudiedTextMinOrderByAggregateInput
  }

  export type StudiedTextScalarWhereWithAggregatesInput = {
    AND?: StudiedTextScalarWhereWithAggregatesInput | StudiedTextScalarWhereWithAggregatesInput[]
    OR?: StudiedTextScalarWhereWithAggregatesInput[]
    NOT?: StudiedTextScalarWhereWithAggregatesInput | StudiedTextScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudiedText"> | string
    userKey?: StringWithAggregatesFilter<"StudiedText"> | string
    ref?: StringWithAggregatesFilter<"StudiedText"> | string
    heRef?: StringNullableWithAggregatesFilter<"StudiedText"> | string | null
    url?: StringNullableWithAggregatesFilter<"StudiedText"> | string | null
    title?: StringNullableWithAggregatesFilter<"StudiedText"> | string | null
    snippet?: StringNullableWithAggregatesFilter<"StudiedText"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudiedText"> | Date | string
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardCreateInput = {
    id?: string
    portionType: $Enums.PortionType
    portionLabel: string
    prompt: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: FlashcardReviewCreateNestedManyWithoutFlashcardInput
  }

  export type FlashcardUncheckedCreateInput = {
    id?: string
    portionType: $Enums.PortionType
    portionLabel: string
    prompt: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: FlashcardReviewUncheckedCreateNestedManyWithoutFlashcardInput
  }

  export type FlashcardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portionType?: EnumPortionTypeFieldUpdateOperationsInput | $Enums.PortionType
    portionLabel?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: FlashcardReviewUpdateManyWithoutFlashcardNestedInput
  }

  export type FlashcardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portionType?: EnumPortionTypeFieldUpdateOperationsInput | $Enums.PortionType
    portionLabel?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: FlashcardReviewUncheckedUpdateManyWithoutFlashcardNestedInput
  }

  export type FlashcardCreateManyInput = {
    id?: string
    portionType: $Enums.PortionType
    portionLabel: string
    prompt: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    portionType?: EnumPortionTypeFieldUpdateOperationsInput | $Enums.PortionType
    portionLabel?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    portionType?: EnumPortionTypeFieldUpdateOperationsInput | $Enums.PortionType
    portionLabel?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardReviewCreateInput = {
    id?: string
    dueAt?: Date | string
    intervalDays?: number
    ease?: number
    reps?: number
    lastGrade?: $Enums.Grade | null
    lastReviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flashcard: FlashcardCreateNestedOneWithoutReviewsInput
  }

  export type FlashcardReviewUncheckedCreateInput = {
    id?: string
    flashcardId: string
    dueAt?: Date | string
    intervalDays?: number
    ease?: number
    reps?: number
    lastGrade?: $Enums.Grade | null
    lastReviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intervalDays?: IntFieldUpdateOperationsInput | number
    ease?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    lastGrade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashcard?: FlashcardUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type FlashcardReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flashcardId?: StringFieldUpdateOperationsInput | string
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intervalDays?: IntFieldUpdateOperationsInput | number
    ease?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    lastGrade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardReviewCreateManyInput = {
    id?: string
    flashcardId: string
    dueAt?: Date | string
    intervalDays?: number
    ease?: number
    reps?: number
    lastGrade?: $Enums.Grade | null
    lastReviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intervalDays?: IntFieldUpdateOperationsInput | number
    ease?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    lastGrade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flashcardId?: StringFieldUpdateOperationsInput | string
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intervalDays?: IntFieldUpdateOperationsInput | number
    ease?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    lastGrade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudiedTextCreateInput = {
    id?: string
    userKey: string
    ref: string
    heRef?: string | null
    url?: string | null
    title?: string | null
    snippet?: string | null
    createdAt?: Date | string
  }

  export type StudiedTextUncheckedCreateInput = {
    id?: string
    userKey: string
    ref: string
    heRef?: string | null
    url?: string | null
    title?: string | null
    snippet?: string | null
    createdAt?: Date | string
  }

  export type StudiedTextUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    heRef?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudiedTextUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    heRef?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudiedTextCreateManyInput = {
    id?: string
    userKey: string
    ref: string
    heRef?: string | null
    url?: string | null
    title?: string | null
    snippet?: string | null
    createdAt?: Date | string
  }

  export type StudiedTextUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    heRef?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudiedTextUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    heRef?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumPortionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PortionType | EnumPortionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortionType[] | ListEnumPortionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortionType[] | ListEnumPortionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPortionTypeFilter<$PrismaModel> | $Enums.PortionType
  }

  export type FlashcardReviewListRelationFilter = {
    every?: FlashcardReviewWhereInput
    some?: FlashcardReviewWhereInput
    none?: FlashcardReviewWhereInput
  }

  export type FlashcardReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlashcardCountOrderByAggregateInput = {
    id?: SortOrder
    portionType?: SortOrder
    portionLabel?: SortOrder
    prompt?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlashcardMaxOrderByAggregateInput = {
    id?: SortOrder
    portionType?: SortOrder
    portionLabel?: SortOrder
    prompt?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlashcardMinOrderByAggregateInput = {
    id?: SortOrder
    portionType?: SortOrder
    portionLabel?: SortOrder
    prompt?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPortionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortionType | EnumPortionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortionType[] | ListEnumPortionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortionType[] | ListEnumPortionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPortionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PortionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortionTypeFilter<$PrismaModel>
    _max?: NestedEnumPortionTypeFilter<$PrismaModel>
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

  export type EnumGradeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGradeNullableFilter<$PrismaModel> | $Enums.Grade | null
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
  }

  export type FlashcardScalarRelationFilter = {
    is?: FlashcardWhereInput
    isNot?: FlashcardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FlashcardReviewCountOrderByAggregateInput = {
    id?: SortOrder
    flashcardId?: SortOrder
    dueAt?: SortOrder
    intervalDays?: SortOrder
    ease?: SortOrder
    reps?: SortOrder
    lastGrade?: SortOrder
    lastReviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlashcardReviewAvgOrderByAggregateInput = {
    intervalDays?: SortOrder
    ease?: SortOrder
    reps?: SortOrder
  }

  export type FlashcardReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    flashcardId?: SortOrder
    dueAt?: SortOrder
    intervalDays?: SortOrder
    ease?: SortOrder
    reps?: SortOrder
    lastGrade?: SortOrder
    lastReviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlashcardReviewMinOrderByAggregateInput = {
    id?: SortOrder
    flashcardId?: SortOrder
    dueAt?: SortOrder
    intervalDays?: SortOrder
    ease?: SortOrder
    reps?: SortOrder
    lastGrade?: SortOrder
    lastReviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlashcardReviewSumOrderByAggregateInput = {
    intervalDays?: SortOrder
    ease?: SortOrder
    reps?: SortOrder
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

  export type EnumGradeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGradeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Grade | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGradeNullableFilter<$PrismaModel>
    _max?: NestedEnumGradeNullableFilter<$PrismaModel>
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
  }

  export type StudiedTextUserKeyRefCompoundUniqueInput = {
    userKey: string
    ref: string
  }

  export type StudiedTextCountOrderByAggregateInput = {
    id?: SortOrder
    userKey?: SortOrder
    ref?: SortOrder
    heRef?: SortOrder
    url?: SortOrder
    title?: SortOrder
    snippet?: SortOrder
    createdAt?: SortOrder
  }

  export type StudiedTextMaxOrderByAggregateInput = {
    id?: SortOrder
    userKey?: SortOrder
    ref?: SortOrder
    heRef?: SortOrder
    url?: SortOrder
    title?: SortOrder
    snippet?: SortOrder
    createdAt?: SortOrder
  }

  export type StudiedTextMinOrderByAggregateInput = {
    id?: SortOrder
    userKey?: SortOrder
    ref?: SortOrder
    heRef?: SortOrder
    url?: SortOrder
    title?: SortOrder
    snippet?: SortOrder
    createdAt?: SortOrder
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
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlashcardReviewCreateNestedManyWithoutFlashcardInput = {
    create?: XOR<FlashcardReviewCreateWithoutFlashcardInput, FlashcardReviewUncheckedCreateWithoutFlashcardInput> | FlashcardReviewCreateWithoutFlashcardInput[] | FlashcardReviewUncheckedCreateWithoutFlashcardInput[]
    connectOrCreate?: FlashcardReviewCreateOrConnectWithoutFlashcardInput | FlashcardReviewCreateOrConnectWithoutFlashcardInput[]
    createMany?: FlashcardReviewCreateManyFlashcardInputEnvelope
    connect?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
  }

  export type FlashcardReviewUncheckedCreateNestedManyWithoutFlashcardInput = {
    create?: XOR<FlashcardReviewCreateWithoutFlashcardInput, FlashcardReviewUncheckedCreateWithoutFlashcardInput> | FlashcardReviewCreateWithoutFlashcardInput[] | FlashcardReviewUncheckedCreateWithoutFlashcardInput[]
    connectOrCreate?: FlashcardReviewCreateOrConnectWithoutFlashcardInput | FlashcardReviewCreateOrConnectWithoutFlashcardInput[]
    createMany?: FlashcardReviewCreateManyFlashcardInputEnvelope
    connect?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
  }

  export type EnumPortionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PortionType
  }

  export type FlashcardReviewUpdateManyWithoutFlashcardNestedInput = {
    create?: XOR<FlashcardReviewCreateWithoutFlashcardInput, FlashcardReviewUncheckedCreateWithoutFlashcardInput> | FlashcardReviewCreateWithoutFlashcardInput[] | FlashcardReviewUncheckedCreateWithoutFlashcardInput[]
    connectOrCreate?: FlashcardReviewCreateOrConnectWithoutFlashcardInput | FlashcardReviewCreateOrConnectWithoutFlashcardInput[]
    upsert?: FlashcardReviewUpsertWithWhereUniqueWithoutFlashcardInput | FlashcardReviewUpsertWithWhereUniqueWithoutFlashcardInput[]
    createMany?: FlashcardReviewCreateManyFlashcardInputEnvelope
    set?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
    disconnect?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
    delete?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
    connect?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
    update?: FlashcardReviewUpdateWithWhereUniqueWithoutFlashcardInput | FlashcardReviewUpdateWithWhereUniqueWithoutFlashcardInput[]
    updateMany?: FlashcardReviewUpdateManyWithWhereWithoutFlashcardInput | FlashcardReviewUpdateManyWithWhereWithoutFlashcardInput[]
    deleteMany?: FlashcardReviewScalarWhereInput | FlashcardReviewScalarWhereInput[]
  }

  export type FlashcardReviewUncheckedUpdateManyWithoutFlashcardNestedInput = {
    create?: XOR<FlashcardReviewCreateWithoutFlashcardInput, FlashcardReviewUncheckedCreateWithoutFlashcardInput> | FlashcardReviewCreateWithoutFlashcardInput[] | FlashcardReviewUncheckedCreateWithoutFlashcardInput[]
    connectOrCreate?: FlashcardReviewCreateOrConnectWithoutFlashcardInput | FlashcardReviewCreateOrConnectWithoutFlashcardInput[]
    upsert?: FlashcardReviewUpsertWithWhereUniqueWithoutFlashcardInput | FlashcardReviewUpsertWithWhereUniqueWithoutFlashcardInput[]
    createMany?: FlashcardReviewCreateManyFlashcardInputEnvelope
    set?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
    disconnect?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
    delete?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
    connect?: FlashcardReviewWhereUniqueInput | FlashcardReviewWhereUniqueInput[]
    update?: FlashcardReviewUpdateWithWhereUniqueWithoutFlashcardInput | FlashcardReviewUpdateWithWhereUniqueWithoutFlashcardInput[]
    updateMany?: FlashcardReviewUpdateManyWithWhereWithoutFlashcardInput | FlashcardReviewUpdateManyWithWhereWithoutFlashcardInput[]
    deleteMany?: FlashcardReviewScalarWhereInput | FlashcardReviewScalarWhereInput[]
  }

  export type FlashcardCreateNestedOneWithoutReviewsInput = {
    create?: XOR<FlashcardCreateWithoutReviewsInput, FlashcardUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: FlashcardCreateOrConnectWithoutReviewsInput
    connect?: FlashcardWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumGradeFieldUpdateOperationsInput = {
    set?: $Enums.Grade | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FlashcardUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<FlashcardCreateWithoutReviewsInput, FlashcardUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: FlashcardCreateOrConnectWithoutReviewsInput
    upsert?: FlashcardUpsertWithoutReviewsInput
    connect?: FlashcardWhereUniqueInput
    update?: XOR<XOR<FlashcardUpdateToOneWithWhereWithoutReviewsInput, FlashcardUpdateWithoutReviewsInput>, FlashcardUncheckedUpdateWithoutReviewsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedEnumPortionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PortionType | EnumPortionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortionType[] | ListEnumPortionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortionType[] | ListEnumPortionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPortionTypeFilter<$PrismaModel> | $Enums.PortionType
  }

  export type NestedEnumPortionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortionType | EnumPortionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortionType[] | ListEnumPortionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortionType[] | ListEnumPortionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPortionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PortionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortionTypeFilter<$PrismaModel>
    _max?: NestedEnumPortionTypeFilter<$PrismaModel>
  }

  export type NestedEnumGradeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGradeNullableFilter<$PrismaModel> | $Enums.Grade | null
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

  export type NestedEnumGradeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGradeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Grade | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGradeNullableFilter<$PrismaModel>
    _max?: NestedEnumGradeNullableFilter<$PrismaModel>
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
  }

  export type FlashcardReviewCreateWithoutFlashcardInput = {
    id?: string
    dueAt?: Date | string
    intervalDays?: number
    ease?: number
    reps?: number
    lastGrade?: $Enums.Grade | null
    lastReviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardReviewUncheckedCreateWithoutFlashcardInput = {
    id?: string
    dueAt?: Date | string
    intervalDays?: number
    ease?: number
    reps?: number
    lastGrade?: $Enums.Grade | null
    lastReviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardReviewCreateOrConnectWithoutFlashcardInput = {
    where: FlashcardReviewWhereUniqueInput
    create: XOR<FlashcardReviewCreateWithoutFlashcardInput, FlashcardReviewUncheckedCreateWithoutFlashcardInput>
  }

  export type FlashcardReviewCreateManyFlashcardInputEnvelope = {
    data: FlashcardReviewCreateManyFlashcardInput | FlashcardReviewCreateManyFlashcardInput[]
    skipDuplicates?: boolean
  }

  export type FlashcardReviewUpsertWithWhereUniqueWithoutFlashcardInput = {
    where: FlashcardReviewWhereUniqueInput
    update: XOR<FlashcardReviewUpdateWithoutFlashcardInput, FlashcardReviewUncheckedUpdateWithoutFlashcardInput>
    create: XOR<FlashcardReviewCreateWithoutFlashcardInput, FlashcardReviewUncheckedCreateWithoutFlashcardInput>
  }

  export type FlashcardReviewUpdateWithWhereUniqueWithoutFlashcardInput = {
    where: FlashcardReviewWhereUniqueInput
    data: XOR<FlashcardReviewUpdateWithoutFlashcardInput, FlashcardReviewUncheckedUpdateWithoutFlashcardInput>
  }

  export type FlashcardReviewUpdateManyWithWhereWithoutFlashcardInput = {
    where: FlashcardReviewScalarWhereInput
    data: XOR<FlashcardReviewUpdateManyMutationInput, FlashcardReviewUncheckedUpdateManyWithoutFlashcardInput>
  }

  export type FlashcardReviewScalarWhereInput = {
    AND?: FlashcardReviewScalarWhereInput | FlashcardReviewScalarWhereInput[]
    OR?: FlashcardReviewScalarWhereInput[]
    NOT?: FlashcardReviewScalarWhereInput | FlashcardReviewScalarWhereInput[]
    id?: StringFilter<"FlashcardReview"> | string
    flashcardId?: StringFilter<"FlashcardReview"> | string
    dueAt?: DateTimeFilter<"FlashcardReview"> | Date | string
    intervalDays?: IntFilter<"FlashcardReview"> | number
    ease?: FloatFilter<"FlashcardReview"> | number
    reps?: IntFilter<"FlashcardReview"> | number
    lastGrade?: EnumGradeNullableFilter<"FlashcardReview"> | $Enums.Grade | null
    lastReviewedAt?: DateTimeNullableFilter<"FlashcardReview"> | Date | string | null
    createdAt?: DateTimeFilter<"FlashcardReview"> | Date | string
    updatedAt?: DateTimeFilter<"FlashcardReview"> | Date | string
  }

  export type FlashcardCreateWithoutReviewsInput = {
    id?: string
    portionType: $Enums.PortionType
    portionLabel: string
    prompt: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardUncheckedCreateWithoutReviewsInput = {
    id?: string
    portionType: $Enums.PortionType
    portionLabel: string
    prompt: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardCreateOrConnectWithoutReviewsInput = {
    where: FlashcardWhereUniqueInput
    create: XOR<FlashcardCreateWithoutReviewsInput, FlashcardUncheckedCreateWithoutReviewsInput>
  }

  export type FlashcardUpsertWithoutReviewsInput = {
    update: XOR<FlashcardUpdateWithoutReviewsInput, FlashcardUncheckedUpdateWithoutReviewsInput>
    create: XOR<FlashcardCreateWithoutReviewsInput, FlashcardUncheckedCreateWithoutReviewsInput>
    where?: FlashcardWhereInput
  }

  export type FlashcardUpdateToOneWithWhereWithoutReviewsInput = {
    where?: FlashcardWhereInput
    data: XOR<FlashcardUpdateWithoutReviewsInput, FlashcardUncheckedUpdateWithoutReviewsInput>
  }

  export type FlashcardUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    portionType?: EnumPortionTypeFieldUpdateOperationsInput | $Enums.PortionType
    portionLabel?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    portionType?: EnumPortionTypeFieldUpdateOperationsInput | $Enums.PortionType
    portionLabel?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardReviewCreateManyFlashcardInput = {
    id?: string
    dueAt?: Date | string
    intervalDays?: number
    ease?: number
    reps?: number
    lastGrade?: $Enums.Grade | null
    lastReviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardReviewUpdateWithoutFlashcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intervalDays?: IntFieldUpdateOperationsInput | number
    ease?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    lastGrade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardReviewUncheckedUpdateWithoutFlashcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intervalDays?: IntFieldUpdateOperationsInput | number
    ease?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    lastGrade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardReviewUncheckedUpdateManyWithoutFlashcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    intervalDays?: IntFieldUpdateOperationsInput | number
    ease?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    lastGrade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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