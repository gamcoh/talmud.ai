
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Streak
 * 
 */
export type Streak = $Result.DefaultSelection<Prisma.$StreakPayload>
/**
 * Model Points
 * 
 */
export type Points = $Result.DefaultSelection<Prisma.$PointsPayload>
/**
 * Model Level
 * 
 */
export type Level = $Result.DefaultSelection<Prisma.$LevelPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model StudySession
 * 
 */
export type StudySession = $Result.DefaultSelection<Prisma.$StudySessionPayload>
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


export const PointAction: {
  STUDY_TEXT: 'STUDY_TEXT',
  COMPLETE_FLASHCARD: 'COMPLETE_FLASHCARD',
  STREAK_BONUS: 'STREAK_BONUS',
  GOAL_COMPLETED: 'GOAL_COMPLETED',
  LEVEL_UP: 'LEVEL_UP',
  FIRST_STUDY_TODAY: 'FIRST_STUDY_TODAY'
};

export type PointAction = (typeof PointAction)[keyof typeof PointAction]


export const GoalType: {
  TEXTS_STUDIED: 'TEXTS_STUDIED',
  FLASHCARDS_REVIEWED: 'FLASHCARDS_REVIEWED',
  STUDY_MINUTES: 'STUDY_MINUTES',
  STREAK_DAYS: 'STREAK_DAYS'
};

export type GoalType = (typeof GoalType)[keyof typeof GoalType]


export const GoalPeriod: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  CUSTOM: 'CUSTOM'
};

export type GoalPeriod = (typeof GoalPeriod)[keyof typeof GoalPeriod]

}

export type PortionType = $Enums.PortionType

export const PortionType: typeof $Enums.PortionType

export type Grade = $Enums.Grade

export const Grade: typeof $Enums.Grade

export type PointAction = $Enums.PointAction

export const PointAction: typeof $Enums.PointAction

export type GoalType = $Enums.GoalType

export const GoalType: typeof $Enums.GoalType

export type GoalPeriod = $Enums.GoalPeriod

export const GoalPeriod: typeof $Enums.GoalPeriod

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streak`: Exposes CRUD operations for the **Streak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streaks
    * const streaks = await prisma.streak.findMany()
    * ```
    */
  get streak(): Prisma.StreakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.points`: Exposes CRUD operations for the **Points** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.points.findMany()
    * ```
    */
  get points(): Prisma.PointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studySession`: Exposes CRUD operations for the **StudySession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudySessions
    * const studySessions = await prisma.studySession.findMany()
    * ```
    */
  get studySession(): Prisma.StudySessionDelegate<ExtArgs, ClientOptions>;

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
    User: 'User',
    Streak: 'Streak',
    Points: 'Points',
    Level: 'Level',
    Goal: 'Goal',
    StudySession: 'StudySession',
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
      modelProps: "post" | "flashcard" | "flashcardReview" | "user" | "streak" | "points" | "level" | "goal" | "studySession" | "studiedText"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Streak: {
        payload: Prisma.$StreakPayload<ExtArgs>
        fields: Prisma.StreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findFirst: {
            args: Prisma.StreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findMany: {
            args: Prisma.StreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          create: {
            args: Prisma.StreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          createMany: {
            args: Prisma.StreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          delete: {
            args: Prisma.StreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          update: {
            args: Prisma.StreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          deleteMany: {
            args: Prisma.StreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreakUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          upsert: {
            args: Prisma.StreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          aggregate: {
            args: Prisma.StreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreak>
          }
          groupBy: {
            args: Prisma.StreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreakCountArgs<ExtArgs>
            result: $Utils.Optional<StreakCountAggregateOutputType> | number
          }
        }
      }
      Points: {
        payload: Prisma.$PointsPayload<ExtArgs>
        fields: Prisma.PointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          findFirst: {
            args: Prisma.PointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          findMany: {
            args: Prisma.PointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>[]
          }
          create: {
            args: Prisma.PointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          createMany: {
            args: Prisma.PointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>[]
          }
          delete: {
            args: Prisma.PointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          update: {
            args: Prisma.PointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          deleteMany: {
            args: Prisma.PointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>[]
          }
          upsert: {
            args: Prisma.PointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          aggregate: {
            args: Prisma.PointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoints>
          }
          groupBy: {
            args: Prisma.PointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointsCountArgs<ExtArgs>
            result: $Utils.Optional<PointsCountAggregateOutputType> | number
          }
        }
      }
      Level: {
        payload: Prisma.$LevelPayload<ExtArgs>
        fields: Prisma.LevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findFirst: {
            args: Prisma.LevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findMany: {
            args: Prisma.LevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          create: {
            args: Prisma.LevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          createMany: {
            args: Prisma.LevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          delete: {
            args: Prisma.LevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          update: {
            args: Prisma.LevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          deleteMany: {
            args: Prisma.LevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          upsert: {
            args: Prisma.LevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          aggregate: {
            args: Prisma.LevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel>
          }
          groupBy: {
            args: Prisma.LevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelCountArgs<ExtArgs>
            result: $Utils.Optional<LevelCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      StudySession: {
        payload: Prisma.$StudySessionPayload<ExtArgs>
        fields: Prisma.StudySessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudySessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudySessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          findFirst: {
            args: Prisma.StudySessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudySessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          findMany: {
            args: Prisma.StudySessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>[]
          }
          create: {
            args: Prisma.StudySessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          createMany: {
            args: Prisma.StudySessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudySessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>[]
          }
          delete: {
            args: Prisma.StudySessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          update: {
            args: Prisma.StudySessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          deleteMany: {
            args: Prisma.StudySessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudySessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudySessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>[]
          }
          upsert: {
            args: Prisma.StudySessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          aggregate: {
            args: Prisma.StudySessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudySession>
          }
          groupBy: {
            args: Prisma.StudySessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudySessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudySessionCountArgs<ExtArgs>
            result: $Utils.Optional<StudySessionCountAggregateOutputType> | number
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
    user?: UserOmit
    streak?: StreakOmit
    points?: PointsOmit
    level?: LevelOmit
    goal?: GoalOmit
    studySession?: StudySessionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    points: number
    goals: number
    studySessions: number
    studiedTexts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | UserCountOutputTypeCountPointsArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    studySessions?: boolean | UserCountOutputTypeCountStudySessionsArgs
    studiedTexts?: boolean | UserCountOutputTypeCountStudiedTextsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudySessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudySessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudiedTextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudiedTextWhereInput
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    userKey: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streak?: boolean | User$streakArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    level?: boolean | User$levelArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    studySessions?: boolean | User$studySessionsArgs<ExtArgs>
    studiedTexts?: boolean | User$studiedTextsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userKey" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streak?: boolean | User$streakArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    level?: boolean | User$levelArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    studySessions?: boolean | User$studySessionsArgs<ExtArgs>
    studiedTexts?: boolean | User$studiedTextsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      streak: Prisma.$StreakPayload<ExtArgs> | null
      points: Prisma.$PointsPayload<ExtArgs>[]
      level: Prisma.$LevelPayload<ExtArgs> | null
      goals: Prisma.$GoalPayload<ExtArgs>[]
      studySessions: Prisma.$StudySessionPayload<ExtArgs>[]
      studiedTexts: Prisma.$StudiedTextPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userKey: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, UserCountArgs>,
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streak<T extends User$streakArgs<ExtArgs> = {}>(args?: Subset<T, User$streakArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    points<T extends User$pointsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    level<T extends User$levelArgs<ExtArgs> = {}>(args?: Subset<T, User$levelArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studySessions<T extends User$studySessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$studySessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studiedTexts<T extends User$studiedTextsArgs<ExtArgs> = {}>(args?: Subset<T, User$studiedTextsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudiedTextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userKey: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.streak
   */
  export type User$streakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    where?: StreakWhereInput
  }

  /**
   * User.points
   */
  export type User$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    where?: PointsWhereInput
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    cursor?: PointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * User.level
   */
  export type User$levelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    where?: LevelWhereInput
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.studySessions
   */
  export type User$studySessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    where?: StudySessionWhereInput
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    cursor?: StudySessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudySessionScalarFieldEnum | StudySessionScalarFieldEnum[]
  }

  /**
   * User.studiedTexts
   */
  export type User$studiedTextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudiedText
     */
    select?: StudiedTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudiedText
     */
    omit?: StudiedTextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
    where?: StudiedTextWhereInput
    orderBy?: StudiedTextOrderByWithRelationInput | StudiedTextOrderByWithRelationInput[]
    cursor?: StudiedTextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudiedTextScalarFieldEnum | StudiedTextScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Streak
   */

  export type AggregateStreak = {
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  export type StreakAvgAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
  }

  export type StreakSumAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
  }

  export type StreakMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastStudyDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreakMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastStudyDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreakCountAggregateOutputType = {
    id: number
    userId: number
    currentStreak: number
    longestStreak: number
    lastStudyDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreakAvgAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
  }

  export type StreakSumAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
  }

  export type StreakMinAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    longestStreak?: true
    lastStudyDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreakMaxAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    longestStreak?: true
    lastStudyDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreakCountAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    longestStreak?: true
    lastStudyDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streak to aggregate.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streaks
    **/
    _count?: true | StreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreakMaxAggregateInputType
  }

  export type GetStreakAggregateType<T extends StreakAggregateArgs> = {
        [P in keyof T & keyof AggregateStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreak[P]>
      : GetScalarType<T[P], AggregateStreak[P]>
  }




  export type StreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreakWhereInput
    orderBy?: StreakOrderByWithAggregationInput | StreakOrderByWithAggregationInput[]
    by: StreakScalarFieldEnum[] | StreakScalarFieldEnum
    having?: StreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreakCountAggregateInputType | true
    _avg?: StreakAvgAggregateInputType
    _sum?: StreakSumAggregateInputType
    _min?: StreakMinAggregateInputType
    _max?: StreakMaxAggregateInputType
  }

  export type StreakGroupByOutputType = {
    id: string
    userId: string
    currentStreak: number
    longestStreak: number
    lastStudyDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  type GetStreakGroupByPayload<T extends StreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreakGroupByOutputType[P]>
            : GetScalarType<T[P], StreakGroupByOutputType[P]>
        }
      >
    >


  export type StreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastStudyDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastStudyDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastStudyDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectScalar = {
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastStudyDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currentStreak" | "longestStreak" | "lastStudyDate" | "createdAt" | "updatedAt", ExtArgs["result"]["streak"]>
  export type StreakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreakIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streak"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentStreak: number
      longestStreak: number
      lastStudyDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["streak"]>
    composites: {}
  }

  type StreakGetPayload<S extends boolean | null | undefined | StreakDefaultArgs> = $Result.GetResult<Prisma.$StreakPayload, S>

  type StreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreakCountAggregateInputType | true
    }

  export interface StreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streak'], meta: { name: 'Streak' } }
    /**
     * Find zero or one Streak that matches the filter.
     * @param {StreakFindUniqueArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreakFindUniqueArgs>(args: SelectSubset<T, StreakFindUniqueArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Streak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreakFindUniqueOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreakFindUniqueOrThrowArgs>(args: SelectSubset<T, StreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreakFindFirstArgs>(args?: SelectSubset<T, StreakFindFirstArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreakFindFirstOrThrowArgs>(args?: SelectSubset<T, StreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streaks
     * const streaks = await prisma.streak.findMany()
     * 
     * // Get first 10 Streaks
     * const streaks = await prisma.streak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streakWithIdOnly = await prisma.streak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreakFindManyArgs>(args?: SelectSubset<T, StreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Streak.
     * @param {StreakCreateArgs} args - Arguments to create a Streak.
     * @example
     * // Create one Streak
     * const Streak = await prisma.streak.create({
     *   data: {
     *     // ... data to create a Streak
     *   }
     * })
     * 
     */
    create<T extends StreakCreateArgs>(args: SelectSubset<T, StreakCreateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streaks.
     * @param {StreakCreateManyArgs} args - Arguments to create many Streaks.
     * @example
     * // Create many Streaks
     * const streak = await prisma.streak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreakCreateManyArgs>(args?: SelectSubset<T, StreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streaks and returns the data saved in the database.
     * @param {StreakCreateManyAndReturnArgs} args - Arguments to create many Streaks.
     * @example
     * // Create many Streaks
     * const streak = await prisma.streak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streaks and only return the `id`
     * const streakWithIdOnly = await prisma.streak.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreakCreateManyAndReturnArgs>(args?: SelectSubset<T, StreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Streak.
     * @param {StreakDeleteArgs} args - Arguments to delete one Streak.
     * @example
     * // Delete one Streak
     * const Streak = await prisma.streak.delete({
     *   where: {
     *     // ... filter to delete one Streak
     *   }
     * })
     * 
     */
    delete<T extends StreakDeleteArgs>(args: SelectSubset<T, StreakDeleteArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Streak.
     * @param {StreakUpdateArgs} args - Arguments to update one Streak.
     * @example
     * // Update one Streak
     * const streak = await prisma.streak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreakUpdateArgs>(args: SelectSubset<T, StreakUpdateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streaks.
     * @param {StreakDeleteManyArgs} args - Arguments to filter Streaks to delete.
     * @example
     * // Delete a few Streaks
     * const { count } = await prisma.streak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreakDeleteManyArgs>(args?: SelectSubset<T, StreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streaks
     * const streak = await prisma.streak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreakUpdateManyArgs>(args: SelectSubset<T, StreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streaks and returns the data updated in the database.
     * @param {StreakUpdateManyAndReturnArgs} args - Arguments to update many Streaks.
     * @example
     * // Update many Streaks
     * const streak = await prisma.streak.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streaks and only return the `id`
     * const streakWithIdOnly = await prisma.streak.updateManyAndReturn({
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
    updateManyAndReturn<T extends StreakUpdateManyAndReturnArgs>(args: SelectSubset<T, StreakUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Streak.
     * @param {StreakUpsertArgs} args - Arguments to update or create a Streak.
     * @example
     * // Update or create a Streak
     * const streak = await prisma.streak.upsert({
     *   create: {
     *     // ... data to create a Streak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streak we want to update
     *   }
     * })
     */
    upsert<T extends StreakUpsertArgs>(args: SelectSubset<T, StreakUpsertArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakCountArgs} args - Arguments to filter Streaks to count.
     * @example
     * // Count the number of Streaks
     * const count = await prisma.streak.count({
     *   where: {
     *     // ... the filter for the Streaks we want to count
     *   }
     * })
    **/
    count<T extends StreakCountArgs>(
      args?: Subset<T, StreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreakAggregateArgs>(args: Subset<T, StreakAggregateArgs>): Prisma.PrismaPromise<GetStreakAggregateType<T>>

    /**
     * Group by Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakGroupByArgs} args - Group by arguments.
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
      T extends StreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreakGroupByArgs['orderBy'] }
        : { orderBy?: StreakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streak model
   */
  readonly fields: StreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Streak model
   */
  interface StreakFieldRefs {
    readonly id: FieldRef<"Streak", 'String'>
    readonly userId: FieldRef<"Streak", 'String'>
    readonly currentStreak: FieldRef<"Streak", 'Int'>
    readonly longestStreak: FieldRef<"Streak", 'Int'>
    readonly lastStudyDate: FieldRef<"Streak", 'DateTime'>
    readonly createdAt: FieldRef<"Streak", 'DateTime'>
    readonly updatedAt: FieldRef<"Streak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Streak findUnique
   */
  export type StreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findUniqueOrThrow
   */
  export type StreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findFirst
   */
  export type StreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findFirstOrThrow
   */
  export type StreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findMany
   */
  export type StreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streaks to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak create
   */
  export type StreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The data needed to create a Streak.
     */
    data: XOR<StreakCreateInput, StreakUncheckedCreateInput>
  }

  /**
   * Streak createMany
   */
  export type StreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streaks.
     */
    data: StreakCreateManyInput | StreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streak createManyAndReturn
   */
  export type StreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * The data used to create many Streaks.
     */
    data: StreakCreateManyInput | StreakCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streak update
   */
  export type StreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The data needed to update a Streak.
     */
    data: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
    /**
     * Choose, which Streak to update.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak updateMany
   */
  export type StreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streaks.
     */
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyInput>
    /**
     * Filter which Streaks to update
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to update.
     */
    limit?: number
  }

  /**
   * Streak updateManyAndReturn
   */
  export type StreakUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * The data used to update Streaks.
     */
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyInput>
    /**
     * Filter which Streaks to update
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streak upsert
   */
  export type StreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The filter to search for the Streak to update in case it exists.
     */
    where: StreakWhereUniqueInput
    /**
     * In case the Streak found by the `where` argument doesn't exist, create a new Streak with this data.
     */
    create: XOR<StreakCreateInput, StreakUncheckedCreateInput>
    /**
     * In case the Streak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
  }

  /**
   * Streak delete
   */
  export type StreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter which Streak to delete.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak deleteMany
   */
  export type StreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streaks to delete
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to delete.
     */
    limit?: number
  }

  /**
   * Streak without action
   */
  export type StreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
  }


  /**
   * Model Points
   */

  export type AggregatePoints = {
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  export type PointsAvgAggregateOutputType = {
    points: number | null
  }

  export type PointsSumAggregateOutputType = {
    points: number | null
  }

  export type PointsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: $Enums.PointAction | null
    points: number | null
    earnedAt: Date | null
  }

  export type PointsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: $Enums.PointAction | null
    points: number | null
    earnedAt: Date | null
  }

  export type PointsCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    points: number
    metadata: number
    earnedAt: number
    _all: number
  }


  export type PointsAvgAggregateInputType = {
    points?: true
  }

  export type PointsSumAggregateInputType = {
    points?: true
  }

  export type PointsMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    points?: true
    earnedAt?: true
  }

  export type PointsMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    points?: true
    earnedAt?: true
  }

  export type PointsCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    points?: true
    metadata?: true
    earnedAt?: true
    _all?: true
  }

  export type PointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to aggregate.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointsMaxAggregateInputType
  }

  export type GetPointsAggregateType<T extends PointsAggregateArgs> = {
        [P in keyof T & keyof AggregatePoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoints[P]>
      : GetScalarType<T[P], AggregatePoints[P]>
  }




  export type PointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsWhereInput
    orderBy?: PointsOrderByWithAggregationInput | PointsOrderByWithAggregationInput[]
    by: PointsScalarFieldEnum[] | PointsScalarFieldEnum
    having?: PointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointsCountAggregateInputType | true
    _avg?: PointsAvgAggregateInputType
    _sum?: PointsSumAggregateInputType
    _min?: PointsMinAggregateInputType
    _max?: PointsMaxAggregateInputType
  }

  export type PointsGroupByOutputType = {
    id: string
    userId: string
    action: $Enums.PointAction
    points: number
    metadata: JsonValue | null
    earnedAt: Date
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  type GetPointsGroupByPayload<T extends PointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointsGroupByOutputType[P]>
            : GetScalarType<T[P], PointsGroupByOutputType[P]>
        }
      >
    >


  export type PointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    points?: boolean
    metadata?: boolean
    earnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type PointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    points?: boolean
    metadata?: boolean
    earnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type PointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    points?: boolean
    metadata?: boolean
    earnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type PointsSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    points?: boolean
    metadata?: boolean
    earnedAt?: boolean
  }

  export type PointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "points" | "metadata" | "earnedAt", ExtArgs["result"]["points"]>
  export type PointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Points"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: $Enums.PointAction
      points: number
      metadata: Prisma.JsonValue | null
      earnedAt: Date
    }, ExtArgs["result"]["points"]>
    composites: {}
  }

  type PointsGetPayload<S extends boolean | null | undefined | PointsDefaultArgs> = $Result.GetResult<Prisma.$PointsPayload, S>

  type PointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointsCountAggregateInputType | true
    }

  export interface PointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Points'], meta: { name: 'Points' } }
    /**
     * Find zero or one Points that matches the filter.
     * @param {PointsFindUniqueArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointsFindUniqueArgs>(args: SelectSubset<T, PointsFindUniqueArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Points that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointsFindUniqueOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointsFindUniqueOrThrowArgs>(args: SelectSubset<T, PointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsFindFirstArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointsFindFirstArgs>(args?: SelectSubset<T, PointsFindFirstArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsFindFirstOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointsFindFirstOrThrowArgs>(args?: SelectSubset<T, PointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.points.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.points.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointsWithIdOnly = await prisma.points.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointsFindManyArgs>(args?: SelectSubset<T, PointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Points.
     * @param {PointsCreateArgs} args - Arguments to create a Points.
     * @example
     * // Create one Points
     * const Points = await prisma.points.create({
     *   data: {
     *     // ... data to create a Points
     *   }
     * })
     * 
     */
    create<T extends PointsCreateArgs>(args: SelectSubset<T, PointsCreateArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointsCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointsCreateManyArgs>(args?: SelectSubset<T, PointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointsCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointsWithIdOnly = await prisma.points.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointsCreateManyAndReturnArgs>(args?: SelectSubset<T, PointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Points.
     * @param {PointsDeleteArgs} args - Arguments to delete one Points.
     * @example
     * // Delete one Points
     * const Points = await prisma.points.delete({
     *   where: {
     *     // ... filter to delete one Points
     *   }
     * })
     * 
     */
    delete<T extends PointsDeleteArgs>(args: SelectSubset<T, PointsDeleteArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Points.
     * @param {PointsUpdateArgs} args - Arguments to update one Points.
     * @example
     * // Update one Points
     * const points = await prisma.points.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointsUpdateArgs>(args: SelectSubset<T, PointsUpdateArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointsDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.points.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointsDeleteManyArgs>(args?: SelectSubset<T, PointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointsUpdateManyArgs>(args: SelectSubset<T, PointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointsUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointsWithIdOnly = await prisma.points.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointsUpdateManyAndReturnArgs>(args: SelectSubset<T, PointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Points.
     * @param {PointsUpsertArgs} args - Arguments to update or create a Points.
     * @example
     * // Update or create a Points
     * const points = await prisma.points.upsert({
     *   create: {
     *     // ... data to create a Points
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Points we want to update
     *   }
     * })
     */
    upsert<T extends PointsUpsertArgs>(args: SelectSubset<T, PointsUpsertArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.points.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointsCountArgs>(
      args?: Subset<T, PointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointsAggregateArgs>(args: Subset<T, PointsAggregateArgs>): Prisma.PrismaPromise<GetPointsAggregateType<T>>

    /**
     * Group by Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsGroupByArgs} args - Group by arguments.
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
      T extends PointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointsGroupByArgs['orderBy'] }
        : { orderBy?: PointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Points model
   */
  readonly fields: PointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Points.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Points model
   */
  interface PointsFieldRefs {
    readonly id: FieldRef<"Points", 'String'>
    readonly userId: FieldRef<"Points", 'String'>
    readonly action: FieldRef<"Points", 'PointAction'>
    readonly points: FieldRef<"Points", 'Int'>
    readonly metadata: FieldRef<"Points", 'Json'>
    readonly earnedAt: FieldRef<"Points", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Points findUnique
   */
  export type PointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points findUniqueOrThrow
   */
  export type PointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points findFirst
   */
  export type PointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Points findFirstOrThrow
   */
  export type PointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Points findMany
   */
  export type PointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Points create
   */
  export type PointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * The data needed to create a Points.
     */
    data: XOR<PointsCreateInput, PointsUncheckedCreateInput>
  }

  /**
   * Points createMany
   */
  export type PointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointsCreateManyInput | PointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Points createManyAndReturn
   */
  export type PointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointsCreateManyInput | PointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Points update
   */
  export type PointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * The data needed to update a Points.
     */
    data: XOR<PointsUpdateInput, PointsUncheckedUpdateInput>
    /**
     * Choose, which Points to update.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points updateMany
   */
  export type PointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointsWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Points updateManyAndReturn
   */
  export type PointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointsWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Points upsert
   */
  export type PointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * The filter to search for the Points to update in case it exists.
     */
    where: PointsWhereUniqueInput
    /**
     * In case the Points found by the `where` argument doesn't exist, create a new Points with this data.
     */
    create: XOR<PointsCreateInput, PointsUncheckedCreateInput>
    /**
     * In case the Points was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointsUpdateInput, PointsUncheckedUpdateInput>
  }

  /**
   * Points delete
   */
  export type PointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter which Points to delete.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points deleteMany
   */
  export type PointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointsWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Points without action
   */
  export type PointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
  }


  /**
   * Model Level
   */

  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelAvgAggregateOutputType = {
    currentLevel: number | null
    totalPoints: number | null
  }

  export type LevelSumAggregateOutputType = {
    currentLevel: number | null
    totalPoints: number | null
  }

  export type LevelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currentLevel: number | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currentLevel: number | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelCountAggregateOutputType = {
    id: number
    userId: number
    currentLevel: number
    totalPoints: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LevelAvgAggregateInputType = {
    currentLevel?: true
    totalPoints?: true
  }

  export type LevelSumAggregateInputType = {
    currentLevel?: true
    totalPoints?: true
  }

  export type LevelMinAggregateInputType = {
    id?: true
    userId?: true
    currentLevel?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelMaxAggregateInputType = {
    id?: true
    userId?: true
    currentLevel?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelCountAggregateInputType = {
    id?: true
    userId?: true
    currentLevel?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelWhereInput
    orderBy?: LevelOrderByWithAggregationInput | LevelOrderByWithAggregationInput[]
    by: LevelScalarFieldEnum[] | LevelScalarFieldEnum
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _avg?: LevelAvgAggregateInputType
    _sum?: LevelSumAggregateInputType
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }

  export type LevelGroupByOutputType = {
    id: string
    userId: string
    currentLevel: number
    totalPoints: number
    createdAt: Date
    updatedAt: Date
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentLevel?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>

  export type LevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentLevel?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>

  export type LevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentLevel?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>

  export type LevelSelectScalar = {
    id?: boolean
    userId?: boolean
    currentLevel?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currentLevel" | "totalPoints" | "createdAt" | "updatedAt", ExtArgs["result"]["level"]>
  export type LevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentLevel: number
      totalPoints: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["level"]>
    composites: {}
  }

  type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = $Result.GetResult<Prisma.$LevelPayload, S>

  type LevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Level'], meta: { name: 'Level' } }
    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelFindUniqueArgs>(args: SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelFindFirstArgs>(args?: SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelWithIdOnly = await prisma.level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelFindManyArgs>(args?: SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
     */
    create<T extends LevelCreateArgs>(args: SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelCreateManyArgs>(args?: SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Levels and returns the data saved in the database.
     * @param {LevelCreateManyAndReturnArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
     */
    delete<T extends LevelDeleteArgs>(args: SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelUpdateArgs>(args: SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelDeleteManyArgs>(args?: SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelUpdateManyArgs>(args: SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels and returns the data updated in the database.
     * @param {LevelUpdateManyAndReturnArgs} args - Arguments to update many Levels.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.updateManyAndReturn({
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
    updateManyAndReturn<T extends LevelUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
     */
    upsert<T extends LevelUpsertArgs>(args: SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
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
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Level model
   */
  readonly fields: LevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Level model
   */
  interface LevelFieldRefs {
    readonly id: FieldRef<"Level", 'String'>
    readonly userId: FieldRef<"Level", 'String'>
    readonly currentLevel: FieldRef<"Level", 'Int'>
    readonly totalPoints: FieldRef<"Level", 'Int'>
    readonly createdAt: FieldRef<"Level", 'DateTime'>
    readonly updatedAt: FieldRef<"Level", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Level findUnique
   */
  export type LevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findFirst
   */
  export type LevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findMany
   */
  export type LevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level create
   */
  export type LevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }

  /**
   * Level createMany
   */
  export type LevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level createManyAndReturn
   */
  export type LevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Level update
   */
  export type LevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level updateManyAndReturn
   */
  export type LevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Level upsert
   */
  export type LevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }

  /**
   * Level delete
   */
  export type LevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Level without action
   */
  export type LevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    target: number | null
    progress: number | null
  }

  export type GoalSumAggregateOutputType = {
    target: number | null
    progress: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.GoalType | null
    target: number | null
    progress: number | null
    period: $Enums.GoalPeriod | null
    startDate: Date | null
    endDate: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.GoalType | null
    target: number | null
    progress: number | null
    period: $Enums.GoalPeriod | null
    startDate: Date | null
    endDate: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    target: number
    progress: number
    period: number
    startDate: number
    endDate: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    target?: true
    progress?: true
  }

  export type GoalSumAggregateInputType = {
    target?: true
    progress?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    target?: true
    progress?: true
    period?: true
    startDate?: true
    endDate?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    target?: true
    progress?: true
    period?: true
    startDate?: true
    endDate?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    target?: true
    progress?: true
    period?: true
    startDate?: true
    endDate?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.GoalType
    target: number
    progress: number
    period: $Enums.GoalPeriod
    startDate: Date
    endDate: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    target?: boolean
    progress?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    target?: boolean
    progress?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    target?: boolean
    progress?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    target?: boolean
    progress?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "target" | "progress" | "period" | "startDate" | "endDate" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.GoalType
      target: number
      progress: number
      period: $Enums.GoalPeriod
      startDate: Date
      endDate: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly type: FieldRef<"Goal", 'GoalType'>
    readonly target: FieldRef<"Goal", 'Int'>
    readonly progress: FieldRef<"Goal", 'Int'>
    readonly period: FieldRef<"Goal", 'GoalPeriod'>
    readonly startDate: FieldRef<"Goal", 'DateTime'>
    readonly endDate: FieldRef<"Goal", 'DateTime'>
    readonly completedAt: FieldRef<"Goal", 'DateTime'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model StudySession
   */

  export type AggregateStudySession = {
    _count: StudySessionCountAggregateOutputType | null
    _avg: StudySessionAvgAggregateOutputType | null
    _sum: StudySessionSumAggregateOutputType | null
    _min: StudySessionMinAggregateOutputType | null
    _max: StudySessionMaxAggregateOutputType | null
  }

  export type StudySessionAvgAggregateOutputType = {
    duration: number | null
    textsRead: number | null
    flashcardsReviewed: number | null
  }

  export type StudySessionSumAggregateOutputType = {
    duration: number | null
    textsRead: number | null
    flashcardsReviewed: number | null
  }

  export type StudySessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    duration: number | null
    textsRead: number | null
    flashcardsReviewed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudySessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    duration: number | null
    textsRead: number | null
    flashcardsReviewed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudySessionCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    duration: number
    textsRead: number
    flashcardsReviewed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudySessionAvgAggregateInputType = {
    duration?: true
    textsRead?: true
    flashcardsReviewed?: true
  }

  export type StudySessionSumAggregateInputType = {
    duration?: true
    textsRead?: true
    flashcardsReviewed?: true
  }

  export type StudySessionMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    duration?: true
    textsRead?: true
    flashcardsReviewed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudySessionMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    duration?: true
    textsRead?: true
    flashcardsReviewed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudySessionCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    duration?: true
    textsRead?: true
    flashcardsReviewed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudySessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudySession to aggregate.
     */
    where?: StudySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySessions to fetch.
     */
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudySessions
    **/
    _count?: true | StudySessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudySessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudySessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudySessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudySessionMaxAggregateInputType
  }

  export type GetStudySessionAggregateType<T extends StudySessionAggregateArgs> = {
        [P in keyof T & keyof AggregateStudySession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudySession[P]>
      : GetScalarType<T[P], AggregateStudySession[P]>
  }




  export type StudySessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudySessionWhereInput
    orderBy?: StudySessionOrderByWithAggregationInput | StudySessionOrderByWithAggregationInput[]
    by: StudySessionScalarFieldEnum[] | StudySessionScalarFieldEnum
    having?: StudySessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudySessionCountAggregateInputType | true
    _avg?: StudySessionAvgAggregateInputType
    _sum?: StudySessionSumAggregateInputType
    _min?: StudySessionMinAggregateInputType
    _max?: StudySessionMaxAggregateInputType
  }

  export type StudySessionGroupByOutputType = {
    id: string
    userId: string
    date: Date
    duration: number
    textsRead: number
    flashcardsReviewed: number
    createdAt: Date
    updatedAt: Date
    _count: StudySessionCountAggregateOutputType | null
    _avg: StudySessionAvgAggregateOutputType | null
    _sum: StudySessionSumAggregateOutputType | null
    _min: StudySessionMinAggregateOutputType | null
    _max: StudySessionMaxAggregateOutputType | null
  }

  type GetStudySessionGroupByPayload<T extends StudySessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudySessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudySessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudySessionGroupByOutputType[P]>
            : GetScalarType<T[P], StudySessionGroupByOutputType[P]>
        }
      >
    >


  export type StudySessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    duration?: boolean
    textsRead?: boolean
    flashcardsReviewed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studySession"]>

  export type StudySessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    duration?: boolean
    textsRead?: boolean
    flashcardsReviewed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studySession"]>

  export type StudySessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    duration?: boolean
    textsRead?: boolean
    flashcardsReviewed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studySession"]>

  export type StudySessionSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    duration?: boolean
    textsRead?: boolean
    flashcardsReviewed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudySessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "duration" | "textsRead" | "flashcardsReviewed" | "createdAt" | "updatedAt", ExtArgs["result"]["studySession"]>
  export type StudySessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudySessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudySessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudySessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudySession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      duration: number
      textsRead: number
      flashcardsReviewed: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studySession"]>
    composites: {}
  }

  type StudySessionGetPayload<S extends boolean | null | undefined | StudySessionDefaultArgs> = $Result.GetResult<Prisma.$StudySessionPayload, S>

  type StudySessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudySessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudySessionCountAggregateInputType | true
    }

  export interface StudySessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudySession'], meta: { name: 'StudySession' } }
    /**
     * Find zero or one StudySession that matches the filter.
     * @param {StudySessionFindUniqueArgs} args - Arguments to find a StudySession
     * @example
     * // Get one StudySession
     * const studySession = await prisma.studySession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudySessionFindUniqueArgs>(args: SelectSubset<T, StudySessionFindUniqueArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudySession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudySessionFindUniqueOrThrowArgs} args - Arguments to find a StudySession
     * @example
     * // Get one StudySession
     * const studySession = await prisma.studySession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudySessionFindUniqueOrThrowArgs>(args: SelectSubset<T, StudySessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudySession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionFindFirstArgs} args - Arguments to find a StudySession
     * @example
     * // Get one StudySession
     * const studySession = await prisma.studySession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudySessionFindFirstArgs>(args?: SelectSubset<T, StudySessionFindFirstArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudySession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionFindFirstOrThrowArgs} args - Arguments to find a StudySession
     * @example
     * // Get one StudySession
     * const studySession = await prisma.studySession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudySessionFindFirstOrThrowArgs>(args?: SelectSubset<T, StudySessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudySessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudySessions
     * const studySessions = await prisma.studySession.findMany()
     * 
     * // Get first 10 StudySessions
     * const studySessions = await prisma.studySession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studySessionWithIdOnly = await prisma.studySession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudySessionFindManyArgs>(args?: SelectSubset<T, StudySessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudySession.
     * @param {StudySessionCreateArgs} args - Arguments to create a StudySession.
     * @example
     * // Create one StudySession
     * const StudySession = await prisma.studySession.create({
     *   data: {
     *     // ... data to create a StudySession
     *   }
     * })
     * 
     */
    create<T extends StudySessionCreateArgs>(args: SelectSubset<T, StudySessionCreateArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudySessions.
     * @param {StudySessionCreateManyArgs} args - Arguments to create many StudySessions.
     * @example
     * // Create many StudySessions
     * const studySession = await prisma.studySession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudySessionCreateManyArgs>(args?: SelectSubset<T, StudySessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudySessions and returns the data saved in the database.
     * @param {StudySessionCreateManyAndReturnArgs} args - Arguments to create many StudySessions.
     * @example
     * // Create many StudySessions
     * const studySession = await prisma.studySession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudySessions and only return the `id`
     * const studySessionWithIdOnly = await prisma.studySession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudySessionCreateManyAndReturnArgs>(args?: SelectSubset<T, StudySessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudySession.
     * @param {StudySessionDeleteArgs} args - Arguments to delete one StudySession.
     * @example
     * // Delete one StudySession
     * const StudySession = await prisma.studySession.delete({
     *   where: {
     *     // ... filter to delete one StudySession
     *   }
     * })
     * 
     */
    delete<T extends StudySessionDeleteArgs>(args: SelectSubset<T, StudySessionDeleteArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudySession.
     * @param {StudySessionUpdateArgs} args - Arguments to update one StudySession.
     * @example
     * // Update one StudySession
     * const studySession = await prisma.studySession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudySessionUpdateArgs>(args: SelectSubset<T, StudySessionUpdateArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudySessions.
     * @param {StudySessionDeleteManyArgs} args - Arguments to filter StudySessions to delete.
     * @example
     * // Delete a few StudySessions
     * const { count } = await prisma.studySession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudySessionDeleteManyArgs>(args?: SelectSubset<T, StudySessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudySessions
     * const studySession = await prisma.studySession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudySessionUpdateManyArgs>(args: SelectSubset<T, StudySessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudySessions and returns the data updated in the database.
     * @param {StudySessionUpdateManyAndReturnArgs} args - Arguments to update many StudySessions.
     * @example
     * // Update many StudySessions
     * const studySession = await prisma.studySession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudySessions and only return the `id`
     * const studySessionWithIdOnly = await prisma.studySession.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudySessionUpdateManyAndReturnArgs>(args: SelectSubset<T, StudySessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudySession.
     * @param {StudySessionUpsertArgs} args - Arguments to update or create a StudySession.
     * @example
     * // Update or create a StudySession
     * const studySession = await prisma.studySession.upsert({
     *   create: {
     *     // ... data to create a StudySession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudySession we want to update
     *   }
     * })
     */
    upsert<T extends StudySessionUpsertArgs>(args: SelectSubset<T, StudySessionUpsertArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionCountArgs} args - Arguments to filter StudySessions to count.
     * @example
     * // Count the number of StudySessions
     * const count = await prisma.studySession.count({
     *   where: {
     *     // ... the filter for the StudySessions we want to count
     *   }
     * })
    **/
    count<T extends StudySessionCountArgs>(
      args?: Subset<T, StudySessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudySessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudySessionAggregateArgs>(args: Subset<T, StudySessionAggregateArgs>): Prisma.PrismaPromise<GetStudySessionAggregateType<T>>

    /**
     * Group by StudySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionGroupByArgs} args - Group by arguments.
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
      T extends StudySessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudySessionGroupByArgs['orderBy'] }
        : { orderBy?: StudySessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudySessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudySessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudySession model
   */
  readonly fields: StudySessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudySession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudySessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudySession model
   */
  interface StudySessionFieldRefs {
    readonly id: FieldRef<"StudySession", 'String'>
    readonly userId: FieldRef<"StudySession", 'String'>
    readonly date: FieldRef<"StudySession", 'DateTime'>
    readonly duration: FieldRef<"StudySession", 'Int'>
    readonly textsRead: FieldRef<"StudySession", 'Int'>
    readonly flashcardsReviewed: FieldRef<"StudySession", 'Int'>
    readonly createdAt: FieldRef<"StudySession", 'DateTime'>
    readonly updatedAt: FieldRef<"StudySession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudySession findUnique
   */
  export type StudySessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySession to fetch.
     */
    where: StudySessionWhereUniqueInput
  }

  /**
   * StudySession findUniqueOrThrow
   */
  export type StudySessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySession to fetch.
     */
    where: StudySessionWhereUniqueInput
  }

  /**
   * StudySession findFirst
   */
  export type StudySessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySession to fetch.
     */
    where?: StudySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySessions to fetch.
     */
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudySessions.
     */
    cursor?: StudySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudySessions.
     */
    distinct?: StudySessionScalarFieldEnum | StudySessionScalarFieldEnum[]
  }

  /**
   * StudySession findFirstOrThrow
   */
  export type StudySessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySession to fetch.
     */
    where?: StudySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySessions to fetch.
     */
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudySessions.
     */
    cursor?: StudySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudySessions.
     */
    distinct?: StudySessionScalarFieldEnum | StudySessionScalarFieldEnum[]
  }

  /**
   * StudySession findMany
   */
  export type StudySessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySessions to fetch.
     */
    where?: StudySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySessions to fetch.
     */
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudySessions.
     */
    cursor?: StudySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySessions.
     */
    skip?: number
    distinct?: StudySessionScalarFieldEnum | StudySessionScalarFieldEnum[]
  }

  /**
   * StudySession create
   */
  export type StudySessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * The data needed to create a StudySession.
     */
    data: XOR<StudySessionCreateInput, StudySessionUncheckedCreateInput>
  }

  /**
   * StudySession createMany
   */
  export type StudySessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudySessions.
     */
    data: StudySessionCreateManyInput | StudySessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudySession createManyAndReturn
   */
  export type StudySessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * The data used to create many StudySessions.
     */
    data: StudySessionCreateManyInput | StudySessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudySession update
   */
  export type StudySessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * The data needed to update a StudySession.
     */
    data: XOR<StudySessionUpdateInput, StudySessionUncheckedUpdateInput>
    /**
     * Choose, which StudySession to update.
     */
    where: StudySessionWhereUniqueInput
  }

  /**
   * StudySession updateMany
   */
  export type StudySessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudySessions.
     */
    data: XOR<StudySessionUpdateManyMutationInput, StudySessionUncheckedUpdateManyInput>
    /**
     * Filter which StudySessions to update
     */
    where?: StudySessionWhereInput
    /**
     * Limit how many StudySessions to update.
     */
    limit?: number
  }

  /**
   * StudySession updateManyAndReturn
   */
  export type StudySessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * The data used to update StudySessions.
     */
    data: XOR<StudySessionUpdateManyMutationInput, StudySessionUncheckedUpdateManyInput>
    /**
     * Filter which StudySessions to update
     */
    where?: StudySessionWhereInput
    /**
     * Limit how many StudySessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudySession upsert
   */
  export type StudySessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * The filter to search for the StudySession to update in case it exists.
     */
    where: StudySessionWhereUniqueInput
    /**
     * In case the StudySession found by the `where` argument doesn't exist, create a new StudySession with this data.
     */
    create: XOR<StudySessionCreateInput, StudySessionUncheckedCreateInput>
    /**
     * In case the StudySession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudySessionUpdateInput, StudySessionUncheckedUpdateInput>
  }

  /**
   * StudySession delete
   */
  export type StudySessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter which StudySession to delete.
     */
    where: StudySessionWhereUniqueInput
  }

  /**
   * StudySession deleteMany
   */
  export type StudySessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudySessions to delete
     */
    where?: StudySessionWhereInput
    /**
     * Limit how many StudySessions to delete.
     */
    limit?: number
  }

  /**
   * StudySession without action
   */
  export type StudySessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
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
    userId: string | null
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
    userId: string | null
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
    userId: number
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
    userId?: true
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
    userId?: true
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
    userId?: true
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
    userId: string | null
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
    userId?: boolean
    ref?: boolean
    heRef?: boolean
    url?: boolean
    title?: boolean
    snippet?: boolean
    createdAt?: boolean
    user?: boolean | StudiedText$userArgs<ExtArgs>
  }, ExtArgs["result"]["studiedText"]>

  export type StudiedTextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userKey?: boolean
    userId?: boolean
    ref?: boolean
    heRef?: boolean
    url?: boolean
    title?: boolean
    snippet?: boolean
    createdAt?: boolean
    user?: boolean | StudiedText$userArgs<ExtArgs>
  }, ExtArgs["result"]["studiedText"]>

  export type StudiedTextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userKey?: boolean
    userId?: boolean
    ref?: boolean
    heRef?: boolean
    url?: boolean
    title?: boolean
    snippet?: boolean
    createdAt?: boolean
    user?: boolean | StudiedText$userArgs<ExtArgs>
  }, ExtArgs["result"]["studiedText"]>

  export type StudiedTextSelectScalar = {
    id?: boolean
    userKey?: boolean
    userId?: boolean
    ref?: boolean
    heRef?: boolean
    url?: boolean
    title?: boolean
    snippet?: boolean
    createdAt?: boolean
  }

  export type StudiedTextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userKey" | "userId" | "ref" | "heRef" | "url" | "title" | "snippet" | "createdAt", ExtArgs["result"]["studiedText"]>
  export type StudiedTextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | StudiedText$userArgs<ExtArgs>
  }
  export type StudiedTextIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | StudiedText$userArgs<ExtArgs>
  }
  export type StudiedTextIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | StudiedText$userArgs<ExtArgs>
  }

  export type $StudiedTextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudiedText"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userKey: string
      userId: string | null
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
    user<T extends StudiedText$userArgs<ExtArgs> = {}>(args?: Subset<T, StudiedText$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"StudiedText", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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
   * StudiedText.user
   */
  export type StudiedText$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudiedTextInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    userKey: 'userKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StreakScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentStreak: 'currentStreak',
    longestStreak: 'longestStreak',
    lastStudyDate: 'lastStudyDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreakScalarFieldEnum = (typeof StreakScalarFieldEnum)[keyof typeof StreakScalarFieldEnum]


  export const PointsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    points: 'points',
    metadata: 'metadata',
    earnedAt: 'earnedAt'
  };

  export type PointsScalarFieldEnum = (typeof PointsScalarFieldEnum)[keyof typeof PointsScalarFieldEnum]


  export const LevelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentLevel: 'currentLevel',
    totalPoints: 'totalPoints',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    target: 'target',
    progress: 'progress',
    period: 'period',
    startDate: 'startDate',
    endDate: 'endDate',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const StudySessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    duration: 'duration',
    textsRead: 'textsRead',
    flashcardsReviewed: 'flashcardsReviewed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudySessionScalarFieldEnum = (typeof StudySessionScalarFieldEnum)[keyof typeof StudySessionScalarFieldEnum]


  export const StudiedTextScalarFieldEnum: {
    id: 'id',
    userKey: 'userKey',
    userId: 'userId',
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


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'PointAction'
   */
  export type EnumPointActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointAction'>
    


  /**
   * Reference to a field of type 'PointAction[]'
   */
  export type ListEnumPointActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointAction[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'GoalType'
   */
  export type EnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalType'>
    


  /**
   * Reference to a field of type 'GoalType[]'
   */
  export type ListEnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalType[]'>
    


  /**
   * Reference to a field of type 'GoalPeriod'
   */
  export type EnumGoalPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalPeriod'>
    


  /**
   * Reference to a field of type 'GoalPeriod[]'
   */
  export type ListEnumGoalPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalPeriod[]'>
    
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

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userKey?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    streak?: XOR<StreakNullableScalarRelationFilter, StreakWhereInput> | null
    points?: PointsListRelationFilter
    level?: XOR<LevelNullableScalarRelationFilter, LevelWhereInput> | null
    goals?: GoalListRelationFilter
    studySessions?: StudySessionListRelationFilter
    studiedTexts?: StudiedTextListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streak?: StreakOrderByWithRelationInput
    points?: PointsOrderByRelationAggregateInput
    level?: LevelOrderByWithRelationInput
    goals?: GoalOrderByRelationAggregateInput
    studySessions?: StudySessionOrderByRelationAggregateInput
    studiedTexts?: StudiedTextOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userKey?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    streak?: XOR<StreakNullableScalarRelationFilter, StreakWhereInput> | null
    points?: PointsListRelationFilter
    level?: XOR<LevelNullableScalarRelationFilter, LevelWhereInput> | null
    goals?: GoalListRelationFilter
    studySessions?: StudySessionListRelationFilter
    studiedTexts?: StudiedTextListRelationFilter
  }, "id" | "userKey">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userKey?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    userKey?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StreakWhereInput = {
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    id?: StringFilter<"Streak"> | string
    userId?: StringFilter<"Streak"> | string
    currentStreak?: IntFilter<"Streak"> | number
    longestStreak?: IntFilter<"Streak"> | number
    lastStudyDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    createdAt?: DateTimeFilter<"Streak"> | Date | string
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StreakOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastStudyDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    currentStreak?: IntFilter<"Streak"> | number
    longestStreak?: IntFilter<"Streak"> | number
    lastStudyDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    createdAt?: DateTimeFilter<"Streak"> | Date | string
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StreakOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastStudyDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StreakCountOrderByAggregateInput
    _avg?: StreakAvgOrderByAggregateInput
    _max?: StreakMaxOrderByAggregateInput
    _min?: StreakMinOrderByAggregateInput
    _sum?: StreakSumOrderByAggregateInput
  }

  export type StreakScalarWhereWithAggregatesInput = {
    AND?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    OR?: StreakScalarWhereWithAggregatesInput[]
    NOT?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Streak"> | string
    userId?: StringWithAggregatesFilter<"Streak"> | string
    currentStreak?: IntWithAggregatesFilter<"Streak"> | number
    longestStreak?: IntWithAggregatesFilter<"Streak"> | number
    lastStudyDate?: DateTimeNullableWithAggregatesFilter<"Streak"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Streak"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Streak"> | Date | string
  }

  export type PointsWhereInput = {
    AND?: PointsWhereInput | PointsWhereInput[]
    OR?: PointsWhereInput[]
    NOT?: PointsWhereInput | PointsWhereInput[]
    id?: StringFilter<"Points"> | string
    userId?: StringFilter<"Points"> | string
    action?: EnumPointActionFilter<"Points"> | $Enums.PointAction
    points?: IntFilter<"Points"> | number
    metadata?: JsonNullableFilter<"Points">
    earnedAt?: DateTimeFilter<"Points"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PointsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    metadata?: SortOrderInput | SortOrder
    earnedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PointsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointsWhereInput | PointsWhereInput[]
    OR?: PointsWhereInput[]
    NOT?: PointsWhereInput | PointsWhereInput[]
    userId?: StringFilter<"Points"> | string
    action?: EnumPointActionFilter<"Points"> | $Enums.PointAction
    points?: IntFilter<"Points"> | number
    metadata?: JsonNullableFilter<"Points">
    earnedAt?: DateTimeFilter<"Points"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PointsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    metadata?: SortOrderInput | SortOrder
    earnedAt?: SortOrder
    _count?: PointsCountOrderByAggregateInput
    _avg?: PointsAvgOrderByAggregateInput
    _max?: PointsMaxOrderByAggregateInput
    _min?: PointsMinOrderByAggregateInput
    _sum?: PointsSumOrderByAggregateInput
  }

  export type PointsScalarWhereWithAggregatesInput = {
    AND?: PointsScalarWhereWithAggregatesInput | PointsScalarWhereWithAggregatesInput[]
    OR?: PointsScalarWhereWithAggregatesInput[]
    NOT?: PointsScalarWhereWithAggregatesInput | PointsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Points"> | string
    userId?: StringWithAggregatesFilter<"Points"> | string
    action?: EnumPointActionWithAggregatesFilter<"Points"> | $Enums.PointAction
    points?: IntWithAggregatesFilter<"Points"> | number
    metadata?: JsonNullableWithAggregatesFilter<"Points">
    earnedAt?: DateTimeWithAggregatesFilter<"Points"> | Date | string
  }

  export type LevelWhereInput = {
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    id?: StringFilter<"Level"> | string
    userId?: StringFilter<"Level"> | string
    currentLevel?: IntFilter<"Level"> | number
    totalPoints?: IntFilter<"Level"> | number
    createdAt?: DateTimeFilter<"Level"> | Date | string
    updatedAt?: DateTimeFilter<"Level"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    currentLevel?: IntFilter<"Level"> | number
    totalPoints?: IntFilter<"Level"> | number
    createdAt?: DateTimeFilter<"Level"> | Date | string
    updatedAt?: DateTimeFilter<"Level"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type LevelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LevelCountOrderByAggregateInput
    _avg?: LevelAvgOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
    _sum?: LevelSumOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    OR?: LevelScalarWhereWithAggregatesInput[]
    NOT?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Level"> | string
    userId?: StringWithAggregatesFilter<"Level"> | string
    currentLevel?: IntWithAggregatesFilter<"Level"> | number
    totalPoints?: IntWithAggregatesFilter<"Level"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Level"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Level"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    target?: IntFilter<"Goal"> | number
    progress?: IntFilter<"Goal"> | number
    period?: EnumGoalPeriodFilter<"Goal"> | $Enums.GoalPeriod
    startDate?: DateTimeFilter<"Goal"> | Date | string
    endDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    userId?: StringFilter<"Goal"> | string
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    target?: IntFilter<"Goal"> | number
    progress?: IntFilter<"Goal"> | number
    period?: EnumGoalPeriodFilter<"Goal"> | $Enums.GoalPeriod
    startDate?: DateTimeFilter<"Goal"> | Date | string
    endDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    userId?: StringWithAggregatesFilter<"Goal"> | string
    type?: EnumGoalTypeWithAggregatesFilter<"Goal"> | $Enums.GoalType
    target?: IntWithAggregatesFilter<"Goal"> | number
    progress?: IntWithAggregatesFilter<"Goal"> | number
    period?: EnumGoalPeriodWithAggregatesFilter<"Goal"> | $Enums.GoalPeriod
    startDate?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type StudySessionWhereInput = {
    AND?: StudySessionWhereInput | StudySessionWhereInput[]
    OR?: StudySessionWhereInput[]
    NOT?: StudySessionWhereInput | StudySessionWhereInput[]
    id?: StringFilter<"StudySession"> | string
    userId?: StringFilter<"StudySession"> | string
    date?: DateTimeFilter<"StudySession"> | Date | string
    duration?: IntFilter<"StudySession"> | number
    textsRead?: IntFilter<"StudySession"> | number
    flashcardsReviewed?: IntFilter<"StudySession"> | number
    createdAt?: DateTimeFilter<"StudySession"> | Date | string
    updatedAt?: DateTimeFilter<"StudySession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudySessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    textsRead?: SortOrder
    flashcardsReviewed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StudySessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: StudySessionUserIdDateCompoundUniqueInput
    AND?: StudySessionWhereInput | StudySessionWhereInput[]
    OR?: StudySessionWhereInput[]
    NOT?: StudySessionWhereInput | StudySessionWhereInput[]
    userId?: StringFilter<"StudySession"> | string
    date?: DateTimeFilter<"StudySession"> | Date | string
    duration?: IntFilter<"StudySession"> | number
    textsRead?: IntFilter<"StudySession"> | number
    flashcardsReviewed?: IntFilter<"StudySession"> | number
    createdAt?: DateTimeFilter<"StudySession"> | Date | string
    updatedAt?: DateTimeFilter<"StudySession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type StudySessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    textsRead?: SortOrder
    flashcardsReviewed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudySessionCountOrderByAggregateInput
    _avg?: StudySessionAvgOrderByAggregateInput
    _max?: StudySessionMaxOrderByAggregateInput
    _min?: StudySessionMinOrderByAggregateInput
    _sum?: StudySessionSumOrderByAggregateInput
  }

  export type StudySessionScalarWhereWithAggregatesInput = {
    AND?: StudySessionScalarWhereWithAggregatesInput | StudySessionScalarWhereWithAggregatesInput[]
    OR?: StudySessionScalarWhereWithAggregatesInput[]
    NOT?: StudySessionScalarWhereWithAggregatesInput | StudySessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudySession"> | string
    userId?: StringWithAggregatesFilter<"StudySession"> | string
    date?: DateTimeWithAggregatesFilter<"StudySession"> | Date | string
    duration?: IntWithAggregatesFilter<"StudySession"> | number
    textsRead?: IntWithAggregatesFilter<"StudySession"> | number
    flashcardsReviewed?: IntWithAggregatesFilter<"StudySession"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudySession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudySession"> | Date | string
  }

  export type StudiedTextWhereInput = {
    AND?: StudiedTextWhereInput | StudiedTextWhereInput[]
    OR?: StudiedTextWhereInput[]
    NOT?: StudiedTextWhereInput | StudiedTextWhereInput[]
    id?: StringFilter<"StudiedText"> | string
    userKey?: StringFilter<"StudiedText"> | string
    userId?: StringNullableFilter<"StudiedText"> | string | null
    ref?: StringFilter<"StudiedText"> | string
    heRef?: StringNullableFilter<"StudiedText"> | string | null
    url?: StringNullableFilter<"StudiedText"> | string | null
    title?: StringNullableFilter<"StudiedText"> | string | null
    snippet?: StringNullableFilter<"StudiedText"> | string | null
    createdAt?: DateTimeFilter<"StudiedText"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type StudiedTextOrderByWithRelationInput = {
    id?: SortOrder
    userKey?: SortOrder
    userId?: SortOrderInput | SortOrder
    ref?: SortOrder
    heRef?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    snippet?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StudiedTextWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userKey_ref?: StudiedTextUserKeyRefCompoundUniqueInput
    AND?: StudiedTextWhereInput | StudiedTextWhereInput[]
    OR?: StudiedTextWhereInput[]
    NOT?: StudiedTextWhereInput | StudiedTextWhereInput[]
    userKey?: StringFilter<"StudiedText"> | string
    userId?: StringNullableFilter<"StudiedText"> | string | null
    ref?: StringFilter<"StudiedText"> | string
    heRef?: StringNullableFilter<"StudiedText"> | string | null
    url?: StringNullableFilter<"StudiedText"> | string | null
    title?: StringNullableFilter<"StudiedText"> | string | null
    snippet?: StringNullableFilter<"StudiedText"> | string | null
    createdAt?: DateTimeFilter<"StudiedText"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userKey_ref">

  export type StudiedTextOrderByWithAggregationInput = {
    id?: SortOrder
    userKey?: SortOrder
    userId?: SortOrderInput | SortOrder
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
    userId?: StringNullableWithAggregatesFilter<"StudiedText"> | string | null
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

  export type UserCreateInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakCreateNestedOneWithoutUserInput
    points?: PointsCreateNestedManyWithoutUserInput
    level?: LevelCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakUncheckedCreateNestedOneWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
    level?: LevelUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUpdateOneWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUserNestedInput
    level?: LevelUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUncheckedUpdateOneWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
    level?: LevelUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakCreateInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastStudyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStreakInput
  }

  export type StreakUncheckedCreateInput = {
    id?: string
    userId: string
    currentStreak?: number
    longestStreak?: number
    lastStudyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastStudyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStreakNestedInput
  }

  export type StreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastStudyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakCreateManyInput = {
    id?: string
    userId: string
    currentStreak?: number
    longestStreak?: number
    lastStudyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastStudyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastStudyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsCreateInput = {
    id?: string
    action: $Enums.PointAction
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: Date | string
    user: UserCreateNestedOneWithoutPointsInput
  }

  export type PointsUncheckedCreateInput = {
    id?: string
    userId: string
    action: $Enums.PointAction
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: Date | string
  }

  export type PointsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionFieldUpdateOperationsInput | $Enums.PointAction
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionFieldUpdateOperationsInput | $Enums.PointAction
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsCreateManyInput = {
    id?: string
    userId: string
    action: $Enums.PointAction
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: Date | string
  }

  export type PointsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionFieldUpdateOperationsInput | $Enums.PointAction
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionFieldUpdateOperationsInput | $Enums.PointAction
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelCreateInput = {
    id?: string
    currentLevel?: number
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLevelInput
  }

  export type LevelUncheckedCreateInput = {
    id?: string
    userId: string
    currentLevel?: number
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelCreateManyInput = {
    id?: string
    userId: string
    currentLevel?: number
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    type: $Enums.GoalType
    target: number
    progress?: number
    period: $Enums.GoalPeriod
    startDate?: Date | string
    endDate?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.GoalType
    target: number
    progress?: number
    period: $Enums.GoalPeriod
    startDate?: Date | string
    endDate?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    period?: EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    period?: EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.GoalType
    target: number
    progress?: number
    period: $Enums.GoalPeriod
    startDate?: Date | string
    endDate?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    period?: EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    period?: EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudySessionCreateInput = {
    id?: string
    date: Date | string
    duration?: number
    textsRead?: number
    flashcardsReviewed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudySessionsInput
  }

  export type StudySessionUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    duration?: number
    textsRead?: number
    flashcardsReviewed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudySessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    textsRead?: IntFieldUpdateOperationsInput | number
    flashcardsReviewed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudySessionsNestedInput
  }

  export type StudySessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    textsRead?: IntFieldUpdateOperationsInput | number
    flashcardsReviewed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudySessionCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    duration?: number
    textsRead?: number
    flashcardsReviewed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudySessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    textsRead?: IntFieldUpdateOperationsInput | number
    flashcardsReviewed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudySessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    textsRead?: IntFieldUpdateOperationsInput | number
    flashcardsReviewed?: IntFieldUpdateOperationsInput | number
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
    user?: UserCreateNestedOneWithoutStudiedTextsInput
  }

  export type StudiedTextUncheckedCreateInput = {
    id?: string
    userKey: string
    userId?: string | null
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
    user?: UserUpdateOneWithoutStudiedTextsNestedInput
  }

  export type StudiedTextUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
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
    userId?: string | null
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
    userId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StreakNullableScalarRelationFilter = {
    is?: StreakWhereInput | null
    isNot?: StreakWhereInput | null
  }

  export type PointsListRelationFilter = {
    every?: PointsWhereInput
    some?: PointsWhereInput
    none?: PointsWhereInput
  }

  export type LevelNullableScalarRelationFilter = {
    is?: LevelWhereInput | null
    isNot?: LevelWhereInput | null
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type StudySessionListRelationFilter = {
    every?: StudySessionWhereInput
    some?: StudySessionWhereInput
    none?: StudySessionWhereInput
  }

  export type StudiedTextListRelationFilter = {
    every?: StudiedTextWhereInput
    some?: StudiedTextWhereInput
    none?: StudiedTextWhereInput
  }

  export type PointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudySessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudiedTextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StreakCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastStudyDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type StreakMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastStudyDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastStudyDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type EnumPointActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PointAction | EnumPointActionFieldRefInput<$PrismaModel>
    in?: $Enums.PointAction[] | ListEnumPointActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointAction[] | ListEnumPointActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPointActionFilter<$PrismaModel> | $Enums.PointAction
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PointsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    metadata?: SortOrder
    earnedAt?: SortOrder
  }

  export type PointsAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type PointsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    earnedAt?: SortOrder
  }

  export type PointsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    earnedAt?: SortOrder
  }

  export type PointsSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type EnumPointActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointAction | EnumPointActionFieldRefInput<$PrismaModel>
    in?: $Enums.PointAction[] | ListEnumPointActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointAction[] | ListEnumPointActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPointActionWithAggregatesFilter<$PrismaModel> | $Enums.PointAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointActionFilter<$PrismaModel>
    _max?: NestedEnumPointActionFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LevelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelAvgOrderByAggregateInput = {
    currentLevel?: SortOrder
    totalPoints?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelSumOrderByAggregateInput = {
    currentLevel?: SortOrder
    totalPoints?: SortOrder
  }

  export type EnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type EnumGoalPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalPeriod | EnumGoalPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.GoalPeriod[] | ListEnumGoalPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalPeriod[] | ListEnumGoalPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalPeriodFilter<$PrismaModel> | $Enums.GoalPeriod
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    target?: SortOrder
    progress?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    target?: SortOrder
    progress?: SortOrder
  }

  export type EnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type EnumGoalPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalPeriod | EnumGoalPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.GoalPeriod[] | ListEnumGoalPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalPeriod[] | ListEnumGoalPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalPeriodWithAggregatesFilter<$PrismaModel> | $Enums.GoalPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalPeriodFilter<$PrismaModel>
    _max?: NestedEnumGoalPeriodFilter<$PrismaModel>
  }

  export type StudySessionUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type StudySessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    textsRead?: SortOrder
    flashcardsReviewed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudySessionAvgOrderByAggregateInput = {
    duration?: SortOrder
    textsRead?: SortOrder
    flashcardsReviewed?: SortOrder
  }

  export type StudySessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    textsRead?: SortOrder
    flashcardsReviewed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudySessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    textsRead?: SortOrder
    flashcardsReviewed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudySessionSumOrderByAggregateInput = {
    duration?: SortOrder
    textsRead?: SortOrder
    flashcardsReviewed?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StudiedTextUserKeyRefCompoundUniqueInput = {
    userKey: string
    ref: string
  }

  export type StudiedTextCountOrderByAggregateInput = {
    id?: SortOrder
    userKey?: SortOrder
    userId?: SortOrder
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
    userId?: SortOrder
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
    userId?: SortOrder
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

  export type StreakCreateNestedOneWithoutUserInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput
    connect?: StreakWhereUniqueInput
  }

  export type PointsCreateNestedManyWithoutUserInput = {
    create?: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput> | PointsCreateWithoutUserInput[] | PointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUserInput | PointsCreateOrConnectWithoutUserInput[]
    createMany?: PointsCreateManyUserInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type LevelCreateNestedOneWithoutUserInput = {
    create?: XOR<LevelCreateWithoutUserInput, LevelUncheckedCreateWithoutUserInput>
    connectOrCreate?: LevelCreateOrConnectWithoutUserInput
    connect?: LevelWhereUniqueInput
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type StudySessionCreateNestedManyWithoutUserInput = {
    create?: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput> | StudySessionCreateWithoutUserInput[] | StudySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutUserInput | StudySessionCreateOrConnectWithoutUserInput[]
    createMany?: StudySessionCreateManyUserInputEnvelope
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
  }

  export type StudiedTextCreateNestedManyWithoutUserInput = {
    create?: XOR<StudiedTextCreateWithoutUserInput, StudiedTextUncheckedCreateWithoutUserInput> | StudiedTextCreateWithoutUserInput[] | StudiedTextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudiedTextCreateOrConnectWithoutUserInput | StudiedTextCreateOrConnectWithoutUserInput[]
    createMany?: StudiedTextCreateManyUserInputEnvelope
    connect?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
  }

  export type StreakUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput
    connect?: StreakWhereUniqueInput
  }

  export type PointsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput> | PointsCreateWithoutUserInput[] | PointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUserInput | PointsCreateOrConnectWithoutUserInput[]
    createMany?: PointsCreateManyUserInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type LevelUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LevelCreateWithoutUserInput, LevelUncheckedCreateWithoutUserInput>
    connectOrCreate?: LevelCreateOrConnectWithoutUserInput
    connect?: LevelWhereUniqueInput
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type StudySessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput> | StudySessionCreateWithoutUserInput[] | StudySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutUserInput | StudySessionCreateOrConnectWithoutUserInput[]
    createMany?: StudySessionCreateManyUserInputEnvelope
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
  }

  export type StudiedTextUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudiedTextCreateWithoutUserInput, StudiedTextUncheckedCreateWithoutUserInput> | StudiedTextCreateWithoutUserInput[] | StudiedTextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudiedTextCreateOrConnectWithoutUserInput | StudiedTextCreateOrConnectWithoutUserInput[]
    createMany?: StudiedTextCreateManyUserInputEnvelope
    connect?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
  }

  export type StreakUpdateOneWithoutUserNestedInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput
    upsert?: StreakUpsertWithoutUserInput
    disconnect?: StreakWhereInput | boolean
    delete?: StreakWhereInput | boolean
    connect?: StreakWhereUniqueInput
    update?: XOR<XOR<StreakUpdateToOneWithWhereWithoutUserInput, StreakUpdateWithoutUserInput>, StreakUncheckedUpdateWithoutUserInput>
  }

  export type PointsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput> | PointsCreateWithoutUserInput[] | PointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUserInput | PointsCreateOrConnectWithoutUserInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutUserInput | PointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointsCreateManyUserInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutUserInput | PointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutUserInput | PointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type LevelUpdateOneWithoutUserNestedInput = {
    create?: XOR<LevelCreateWithoutUserInput, LevelUncheckedCreateWithoutUserInput>
    connectOrCreate?: LevelCreateOrConnectWithoutUserInput
    upsert?: LevelUpsertWithoutUserInput
    disconnect?: LevelWhereInput | boolean
    delete?: LevelWhereInput | boolean
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutUserInput, LevelUpdateWithoutUserInput>, LevelUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type StudySessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput> | StudySessionCreateWithoutUserInput[] | StudySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutUserInput | StudySessionCreateOrConnectWithoutUserInput[]
    upsert?: StudySessionUpsertWithWhereUniqueWithoutUserInput | StudySessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudySessionCreateManyUserInputEnvelope
    set?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    disconnect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    delete?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    update?: StudySessionUpdateWithWhereUniqueWithoutUserInput | StudySessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudySessionUpdateManyWithWhereWithoutUserInput | StudySessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
  }

  export type StudiedTextUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudiedTextCreateWithoutUserInput, StudiedTextUncheckedCreateWithoutUserInput> | StudiedTextCreateWithoutUserInput[] | StudiedTextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudiedTextCreateOrConnectWithoutUserInput | StudiedTextCreateOrConnectWithoutUserInput[]
    upsert?: StudiedTextUpsertWithWhereUniqueWithoutUserInput | StudiedTextUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudiedTextCreateManyUserInputEnvelope
    set?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
    disconnect?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
    delete?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
    connect?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
    update?: StudiedTextUpdateWithWhereUniqueWithoutUserInput | StudiedTextUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudiedTextUpdateManyWithWhereWithoutUserInput | StudiedTextUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudiedTextScalarWhereInput | StudiedTextScalarWhereInput[]
  }

  export type StreakUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput
    upsert?: StreakUpsertWithoutUserInput
    disconnect?: StreakWhereInput | boolean
    delete?: StreakWhereInput | boolean
    connect?: StreakWhereUniqueInput
    update?: XOR<XOR<StreakUpdateToOneWithWhereWithoutUserInput, StreakUpdateWithoutUserInput>, StreakUncheckedUpdateWithoutUserInput>
  }

  export type PointsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput> | PointsCreateWithoutUserInput[] | PointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUserInput | PointsCreateOrConnectWithoutUserInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutUserInput | PointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointsCreateManyUserInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutUserInput | PointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutUserInput | PointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type LevelUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LevelCreateWithoutUserInput, LevelUncheckedCreateWithoutUserInput>
    connectOrCreate?: LevelCreateOrConnectWithoutUserInput
    upsert?: LevelUpsertWithoutUserInput
    disconnect?: LevelWhereInput | boolean
    delete?: LevelWhereInput | boolean
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutUserInput, LevelUpdateWithoutUserInput>, LevelUncheckedUpdateWithoutUserInput>
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type StudySessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput> | StudySessionCreateWithoutUserInput[] | StudySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutUserInput | StudySessionCreateOrConnectWithoutUserInput[]
    upsert?: StudySessionUpsertWithWhereUniqueWithoutUserInput | StudySessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudySessionCreateManyUserInputEnvelope
    set?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    disconnect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    delete?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    update?: StudySessionUpdateWithWhereUniqueWithoutUserInput | StudySessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudySessionUpdateManyWithWhereWithoutUserInput | StudySessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
  }

  export type StudiedTextUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudiedTextCreateWithoutUserInput, StudiedTextUncheckedCreateWithoutUserInput> | StudiedTextCreateWithoutUserInput[] | StudiedTextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudiedTextCreateOrConnectWithoutUserInput | StudiedTextCreateOrConnectWithoutUserInput[]
    upsert?: StudiedTextUpsertWithWhereUniqueWithoutUserInput | StudiedTextUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudiedTextCreateManyUserInputEnvelope
    set?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
    disconnect?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
    delete?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
    connect?: StudiedTextWhereUniqueInput | StudiedTextWhereUniqueInput[]
    update?: StudiedTextUpdateWithWhereUniqueWithoutUserInput | StudiedTextUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudiedTextUpdateManyWithWhereWithoutUserInput | StudiedTextUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudiedTextScalarWhereInput | StudiedTextScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStreakInput = {
    create?: XOR<UserCreateWithoutStreakInput, UserUncheckedCreateWithoutStreakInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreakInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStreakNestedInput = {
    create?: XOR<UserCreateWithoutStreakInput, UserUncheckedCreateWithoutStreakInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreakInput
    upsert?: UserUpsertWithoutStreakInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreakInput, UserUpdateWithoutStreakInput>, UserUncheckedUpdateWithoutStreakInput>
  }

  export type UserCreateNestedOneWithoutPointsInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPointActionFieldUpdateOperationsInput = {
    set?: $Enums.PointAction
  }

  export type UserUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    upsert?: UserUpsertWithoutPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsInput, UserUpdateWithoutPointsInput>, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserCreateNestedOneWithoutLevelInput = {
    create?: XOR<UserCreateWithoutLevelInput, UserUncheckedCreateWithoutLevelInput>
    connectOrCreate?: UserCreateOrConnectWithoutLevelInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLevelNestedInput = {
    create?: XOR<UserCreateWithoutLevelInput, UserUncheckedCreateWithoutLevelInput>
    connectOrCreate?: UserCreateOrConnectWithoutLevelInput
    upsert?: UserUpsertWithoutLevelInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLevelInput, UserUpdateWithoutLevelInput>, UserUncheckedUpdateWithoutLevelInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGoalTypeFieldUpdateOperationsInput = {
    set?: $Enums.GoalType
  }

  export type EnumGoalPeriodFieldUpdateOperationsInput = {
    set?: $Enums.GoalPeriod
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserCreateNestedOneWithoutStudySessionsInput = {
    create?: XOR<UserCreateWithoutStudySessionsInput, UserUncheckedCreateWithoutStudySessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudySessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStudySessionsNestedInput = {
    create?: XOR<UserCreateWithoutStudySessionsInput, UserUncheckedCreateWithoutStudySessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudySessionsInput
    upsert?: UserUpsertWithoutStudySessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudySessionsInput, UserUpdateWithoutStudySessionsInput>, UserUncheckedUpdateWithoutStudySessionsInput>
  }

  export type UserCreateNestedOneWithoutStudiedTextsInput = {
    create?: XOR<UserCreateWithoutStudiedTextsInput, UserUncheckedCreateWithoutStudiedTextsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudiedTextsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutStudiedTextsNestedInput = {
    create?: XOR<UserCreateWithoutStudiedTextsInput, UserUncheckedCreateWithoutStudiedTextsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudiedTextsInput
    upsert?: UserUpsertWithoutStudiedTextsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudiedTextsInput, UserUpdateWithoutStudiedTextsInput>, UserUncheckedUpdateWithoutStudiedTextsInput>
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

  export type NestedEnumPointActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PointAction | EnumPointActionFieldRefInput<$PrismaModel>
    in?: $Enums.PointAction[] | ListEnumPointActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointAction[] | ListEnumPointActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPointActionFilter<$PrismaModel> | $Enums.PointAction
  }

  export type NestedEnumPointActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointAction | EnumPointActionFieldRefInput<$PrismaModel>
    in?: $Enums.PointAction[] | ListEnumPointActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointAction[] | ListEnumPointActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPointActionWithAggregatesFilter<$PrismaModel> | $Enums.PointAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointActionFilter<$PrismaModel>
    _max?: NestedEnumPointActionFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type NestedEnumGoalPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalPeriod | EnumGoalPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.GoalPeriod[] | ListEnumGoalPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalPeriod[] | ListEnumGoalPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalPeriodFilter<$PrismaModel> | $Enums.GoalPeriod
  }

  export type NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type NestedEnumGoalPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalPeriod | EnumGoalPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.GoalPeriod[] | ListEnumGoalPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalPeriod[] | ListEnumGoalPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalPeriodWithAggregatesFilter<$PrismaModel> | $Enums.GoalPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalPeriodFilter<$PrismaModel>
    _max?: NestedEnumGoalPeriodFilter<$PrismaModel>
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

  export type StreakCreateWithoutUserInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastStudyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreakUncheckedCreateWithoutUserInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastStudyDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreakCreateOrConnectWithoutUserInput = {
    where: StreakWhereUniqueInput
    create: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
  }

  export type PointsCreateWithoutUserInput = {
    id?: string
    action: $Enums.PointAction
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: Date | string
  }

  export type PointsUncheckedCreateWithoutUserInput = {
    id?: string
    action: $Enums.PointAction
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: Date | string
  }

  export type PointsCreateOrConnectWithoutUserInput = {
    where: PointsWhereUniqueInput
    create: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput>
  }

  export type PointsCreateManyUserInputEnvelope = {
    data: PointsCreateManyUserInput | PointsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LevelCreateWithoutUserInput = {
    id?: string
    currentLevel?: number
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelUncheckedCreateWithoutUserInput = {
    id?: string
    currentLevel?: number
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelCreateOrConnectWithoutUserInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutUserInput, LevelUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    type: $Enums.GoalType
    target: number
    progress?: number
    period: $Enums.GoalPeriod
    startDate?: Date | string
    endDate?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.GoalType
    target: number
    progress?: number
    period: $Enums.GoalPeriod
    startDate?: Date | string
    endDate?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudySessionCreateWithoutUserInput = {
    id?: string
    date: Date | string
    duration?: number
    textsRead?: number
    flashcardsReviewed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudySessionUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    duration?: number
    textsRead?: number
    flashcardsReviewed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudySessionCreateOrConnectWithoutUserInput = {
    where: StudySessionWhereUniqueInput
    create: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput>
  }

  export type StudySessionCreateManyUserInputEnvelope = {
    data: StudySessionCreateManyUserInput | StudySessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudiedTextCreateWithoutUserInput = {
    id?: string
    userKey: string
    ref: string
    heRef?: string | null
    url?: string | null
    title?: string | null
    snippet?: string | null
    createdAt?: Date | string
  }

  export type StudiedTextUncheckedCreateWithoutUserInput = {
    id?: string
    userKey: string
    ref: string
    heRef?: string | null
    url?: string | null
    title?: string | null
    snippet?: string | null
    createdAt?: Date | string
  }

  export type StudiedTextCreateOrConnectWithoutUserInput = {
    where: StudiedTextWhereUniqueInput
    create: XOR<StudiedTextCreateWithoutUserInput, StudiedTextUncheckedCreateWithoutUserInput>
  }

  export type StudiedTextCreateManyUserInputEnvelope = {
    data: StudiedTextCreateManyUserInput | StudiedTextCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StreakUpsertWithoutUserInput = {
    update: XOR<StreakUpdateWithoutUserInput, StreakUncheckedUpdateWithoutUserInput>
    create: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    where?: StreakWhereInput
  }

  export type StreakUpdateToOneWithWhereWithoutUserInput = {
    where?: StreakWhereInput
    data: XOR<StreakUpdateWithoutUserInput, StreakUncheckedUpdateWithoutUserInput>
  }

  export type StreakUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastStudyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastStudyDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsUpsertWithWhereUniqueWithoutUserInput = {
    where: PointsWhereUniqueInput
    update: XOR<PointsUpdateWithoutUserInput, PointsUncheckedUpdateWithoutUserInput>
    create: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput>
  }

  export type PointsUpdateWithWhereUniqueWithoutUserInput = {
    where: PointsWhereUniqueInput
    data: XOR<PointsUpdateWithoutUserInput, PointsUncheckedUpdateWithoutUserInput>
  }

  export type PointsUpdateManyWithWhereWithoutUserInput = {
    where: PointsScalarWhereInput
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyWithoutUserInput>
  }

  export type PointsScalarWhereInput = {
    AND?: PointsScalarWhereInput | PointsScalarWhereInput[]
    OR?: PointsScalarWhereInput[]
    NOT?: PointsScalarWhereInput | PointsScalarWhereInput[]
    id?: StringFilter<"Points"> | string
    userId?: StringFilter<"Points"> | string
    action?: EnumPointActionFilter<"Points"> | $Enums.PointAction
    points?: IntFilter<"Points"> | number
    metadata?: JsonNullableFilter<"Points">
    earnedAt?: DateTimeFilter<"Points"> | Date | string
  }

  export type LevelUpsertWithoutUserInput = {
    update: XOR<LevelUpdateWithoutUserInput, LevelUncheckedUpdateWithoutUserInput>
    create: XOR<LevelCreateWithoutUserInput, LevelUncheckedCreateWithoutUserInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutUserInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutUserInput, LevelUncheckedUpdateWithoutUserInput>
  }

  export type LevelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    target?: IntFilter<"Goal"> | number
    progress?: IntFilter<"Goal"> | number
    period?: EnumGoalPeriodFilter<"Goal"> | $Enums.GoalPeriod
    startDate?: DateTimeFilter<"Goal"> | Date | string
    endDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type StudySessionUpsertWithWhereUniqueWithoutUserInput = {
    where: StudySessionWhereUniqueInput
    update: XOR<StudySessionUpdateWithoutUserInput, StudySessionUncheckedUpdateWithoutUserInput>
    create: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput>
  }

  export type StudySessionUpdateWithWhereUniqueWithoutUserInput = {
    where: StudySessionWhereUniqueInput
    data: XOR<StudySessionUpdateWithoutUserInput, StudySessionUncheckedUpdateWithoutUserInput>
  }

  export type StudySessionUpdateManyWithWhereWithoutUserInput = {
    where: StudySessionScalarWhereInput
    data: XOR<StudySessionUpdateManyMutationInput, StudySessionUncheckedUpdateManyWithoutUserInput>
  }

  export type StudySessionScalarWhereInput = {
    AND?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
    OR?: StudySessionScalarWhereInput[]
    NOT?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
    id?: StringFilter<"StudySession"> | string
    userId?: StringFilter<"StudySession"> | string
    date?: DateTimeFilter<"StudySession"> | Date | string
    duration?: IntFilter<"StudySession"> | number
    textsRead?: IntFilter<"StudySession"> | number
    flashcardsReviewed?: IntFilter<"StudySession"> | number
    createdAt?: DateTimeFilter<"StudySession"> | Date | string
    updatedAt?: DateTimeFilter<"StudySession"> | Date | string
  }

  export type StudiedTextUpsertWithWhereUniqueWithoutUserInput = {
    where: StudiedTextWhereUniqueInput
    update: XOR<StudiedTextUpdateWithoutUserInput, StudiedTextUncheckedUpdateWithoutUserInput>
    create: XOR<StudiedTextCreateWithoutUserInput, StudiedTextUncheckedCreateWithoutUserInput>
  }

  export type StudiedTextUpdateWithWhereUniqueWithoutUserInput = {
    where: StudiedTextWhereUniqueInput
    data: XOR<StudiedTextUpdateWithoutUserInput, StudiedTextUncheckedUpdateWithoutUserInput>
  }

  export type StudiedTextUpdateManyWithWhereWithoutUserInput = {
    where: StudiedTextScalarWhereInput
    data: XOR<StudiedTextUpdateManyMutationInput, StudiedTextUncheckedUpdateManyWithoutUserInput>
  }

  export type StudiedTextScalarWhereInput = {
    AND?: StudiedTextScalarWhereInput | StudiedTextScalarWhereInput[]
    OR?: StudiedTextScalarWhereInput[]
    NOT?: StudiedTextScalarWhereInput | StudiedTextScalarWhereInput[]
    id?: StringFilter<"StudiedText"> | string
    userKey?: StringFilter<"StudiedText"> | string
    userId?: StringNullableFilter<"StudiedText"> | string | null
    ref?: StringFilter<"StudiedText"> | string
    heRef?: StringNullableFilter<"StudiedText"> | string | null
    url?: StringNullableFilter<"StudiedText"> | string | null
    title?: StringNullableFilter<"StudiedText"> | string | null
    snippet?: StringNullableFilter<"StudiedText"> | string | null
    createdAt?: DateTimeFilter<"StudiedText"> | Date | string
  }

  export type UserCreateWithoutStreakInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: PointsCreateNestedManyWithoutUserInput
    level?: LevelCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreakInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
    level?: LevelUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreakInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreakInput, UserUncheckedCreateWithoutStreakInput>
  }

  export type UserUpsertWithoutStreakInput = {
    update: XOR<UserUpdateWithoutStreakInput, UserUncheckedUpdateWithoutStreakInput>
    create: XOR<UserCreateWithoutStreakInput, UserUncheckedCreateWithoutStreakInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreakInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreakInput, UserUncheckedUpdateWithoutStreakInput>
  }

  export type UserUpdateWithoutStreakInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: PointsUpdateManyWithoutUserNestedInput
    level?: LevelUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreakInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
    level?: LevelUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPointsInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakCreateNestedOneWithoutUserInput
    level?: LevelCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointsInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakUncheckedCreateNestedOneWithoutUserInput
    level?: LevelUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
  }

  export type UserUpsertWithoutPointsInput = {
    update: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUpdateOneWithoutUserNestedInput
    level?: LevelUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUncheckedUpdateOneWithoutUserNestedInput
    level?: LevelUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLevelInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakCreateNestedOneWithoutUserInput
    points?: PointsCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLevelInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakUncheckedCreateNestedOneWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLevelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLevelInput, UserUncheckedCreateWithoutLevelInput>
  }

  export type UserUpsertWithoutLevelInput = {
    update: XOR<UserUpdateWithoutLevelInput, UserUncheckedUpdateWithoutLevelInput>
    create: XOR<UserCreateWithoutLevelInput, UserUncheckedCreateWithoutLevelInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLevelInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLevelInput, UserUncheckedUpdateWithoutLevelInput>
  }

  export type UserUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUpdateOneWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUncheckedUpdateOneWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakCreateNestedOneWithoutUserInput
    points?: PointsCreateNestedManyWithoutUserInput
    level?: LevelCreateNestedOneWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakUncheckedCreateNestedOneWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
    level?: LevelUncheckedCreateNestedOneWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUpdateOneWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUserNestedInput
    level?: LevelUpdateOneWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUncheckedUpdateOneWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
    level?: LevelUncheckedUpdateOneWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStudySessionsInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakCreateNestedOneWithoutUserInput
    points?: PointsCreateNestedManyWithoutUserInput
    level?: LevelCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudySessionsInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakUncheckedCreateNestedOneWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
    level?: LevelUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    studiedTexts?: StudiedTextUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudySessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudySessionsInput, UserUncheckedCreateWithoutStudySessionsInput>
  }

  export type UserUpsertWithoutStudySessionsInput = {
    update: XOR<UserUpdateWithoutStudySessionsInput, UserUncheckedUpdateWithoutStudySessionsInput>
    create: XOR<UserCreateWithoutStudySessionsInput, UserUncheckedCreateWithoutStudySessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudySessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudySessionsInput, UserUncheckedUpdateWithoutStudySessionsInput>
  }

  export type UserUpdateWithoutStudySessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUpdateOneWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUserNestedInput
    level?: LevelUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudySessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUncheckedUpdateOneWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
    level?: LevelUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    studiedTexts?: StudiedTextUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStudiedTextsInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakCreateNestedOneWithoutUserInput
    points?: PointsCreateNestedManyWithoutUserInput
    level?: LevelCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudiedTextsInput = {
    id?: string
    userKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakUncheckedCreateNestedOneWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
    level?: LevelUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudiedTextsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudiedTextsInput, UserUncheckedCreateWithoutStudiedTextsInput>
  }

  export type UserUpsertWithoutStudiedTextsInput = {
    update: XOR<UserUpdateWithoutStudiedTextsInput, UserUncheckedUpdateWithoutStudiedTextsInput>
    create: XOR<UserCreateWithoutStudiedTextsInput, UserUncheckedCreateWithoutStudiedTextsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudiedTextsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudiedTextsInput, UserUncheckedUpdateWithoutStudiedTextsInput>
  }

  export type UserUpdateWithoutStudiedTextsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUpdateOneWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUserNestedInput
    level?: LevelUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudiedTextsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUncheckedUpdateOneWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
    level?: LevelUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
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

  export type PointsCreateManyUserInput = {
    id?: string
    action: $Enums.PointAction
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: Date | string
  }

  export type GoalCreateManyUserInput = {
    id?: string
    type: $Enums.GoalType
    target: number
    progress?: number
    period: $Enums.GoalPeriod
    startDate?: Date | string
    endDate?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudySessionCreateManyUserInput = {
    id?: string
    date: Date | string
    duration?: number
    textsRead?: number
    flashcardsReviewed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudiedTextCreateManyUserInput = {
    id?: string
    userKey: string
    ref: string
    heRef?: string | null
    url?: string | null
    title?: string | null
    snippet?: string | null
    createdAt?: Date | string
  }

  export type PointsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionFieldUpdateOperationsInput | $Enums.PointAction
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionFieldUpdateOperationsInput | $Enums.PointAction
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionFieldUpdateOperationsInput | $Enums.PointAction
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    period?: EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    period?: EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    period?: EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudySessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    textsRead?: IntFieldUpdateOperationsInput | number
    flashcardsReviewed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudySessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    textsRead?: IntFieldUpdateOperationsInput | number
    flashcardsReviewed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudySessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    textsRead?: IntFieldUpdateOperationsInput | number
    flashcardsReviewed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudiedTextUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    heRef?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudiedTextUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    heRef?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudiedTextUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userKey?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    heRef?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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