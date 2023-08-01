import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  FeaturedImage?: Maybe<UploadFileEntityResponse>;
  Name: Scalars['String']['output'];
  Slug: Scalars['String']['output'];
  colour?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fontColour?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  colour?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fontColour?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  FeaturedImage?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  fontColour?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type Chapter = {
  __typename?: 'Chapter';
  Content?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Emogi?: Maybe<Scalars['String']['output']>;
  Excerpt?: Maybe<Scalars['String']['output']>;
  FeaturedImage?: Maybe<UploadFileEntityResponse>;
  Slug: Scalars['String']['output'];
  Title: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  tags?: Maybe<TagRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ChapterTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ChapterEntity = {
  __typename?: 'ChapterEntity';
  attributes?: Maybe<Chapter>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ChapterEntityResponse = {
  __typename?: 'ChapterEntityResponse';
  data?: Maybe<ChapterEntity>;
};

export type ChapterEntityResponseCollection = {
  __typename?: 'ChapterEntityResponseCollection';
  data: Array<ChapterEntity>;
  meta: ResponseCollectionMeta;
};

export type ChapterFiltersInput = {
  Content?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Emogi?: InputMaybe<StringFilterInput>;
  Excerpt?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ChapterFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ChapterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChapterFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  tags?: InputMaybe<TagFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChapterInput = {
  Content?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Emogi?: InputMaybe<Scalars['String']['input']>;
  Excerpt?: InputMaybe<Scalars['String']['input']>;
  FeaturedImage?: InputMaybe<Scalars['ID']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentChapterChapter = {
  __typename?: 'ComponentChapterChapter';
  Emogi?: Maybe<Scalars['String']['output']>;
  Section: Scalars['String']['output'];
  chapter?: Maybe<ChapterEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentChapterChapterFiltersInput = {
  Emogi?: InputMaybe<StringFilterInput>;
  Section?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentChapterChapterFiltersInput>>>;
  chapter?: InputMaybe<ChapterFiltersInput>;
  not?: InputMaybe<ComponentChapterChapterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentChapterChapterFiltersInput>>>;
};

export type ComponentChapterChapterInput = {
  Emogi?: InputMaybe<Scalars['String']['input']>;
  Section?: InputMaybe<Scalars['String']['input']>;
  chapter?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type Course = {
  __typename?: 'Course';
  CourseOverview?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Emogi?: Maybe<Scalars['String']['output']>;
  Excerpt: Scalars['String']['output'];
  FeaturedImage?: Maybe<UploadFileEntityResponse>;
  Slug: Scalars['String']['output'];
  Title: Scalars['String']['output'];
  category?: Maybe<CategoryEntityResponse>;
  chapters?: Maybe<Array<Maybe<ComponentChapterChapter>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  tags?: Maybe<TagRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CourseChaptersArgs = {
  filters?: InputMaybe<ComponentChapterChapterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CourseTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
  attributes?: Maybe<Course>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CourseEntityResponse = {
  __typename?: 'CourseEntityResponse';
  data?: Maybe<CourseEntity>;
};

export type CourseEntityResponseCollection = {
  __typename?: 'CourseEntityResponseCollection';
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseFiltersInput = {
  CourseOverview?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Emogi?: InputMaybe<StringFilterInput>;
  Excerpt?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  chapters?: InputMaybe<ComponentChapterChapterFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CourseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  tags?: InputMaybe<TagFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseInput = {
  CourseOverview?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Emogi?: InputMaybe<Scalars['String']['input']>;
  Excerpt?: InputMaybe<Scalars['String']['input']>;
  FeaturedImage?: InputMaybe<Scalars['ID']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  chapters?: InputMaybe<Array<InputMaybe<ComponentChapterChapterInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Category | Chapter | ComponentChapterChapter | ComponentSharedMetaSocial | ComponentSharedSeo | Course | I18NLocale | Post | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createChapter?: Maybe<ChapterEntityResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteChapter?: Maybe<ChapterEntityResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateChapter?: Maybe<ChapterEntityResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updatePost?: Maybe<PostEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateChapterArgs = {
  data: ChapterInput;
};


export type MutationCreateCourseArgs = {
  data: CourseInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteChapterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateChapterArgs = {
  data: ChapterInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCourseArgs = {
  data: CourseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  __typename?: 'Post';
  Content?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Emogi?: Maybe<Scalars['String']['output']>;
  Excerpt?: Maybe<Scalars['String']['output']>;
  FeaturedImage?: Maybe<UploadFileEntityResponse>;
  Slug: Scalars['String']['output'];
  Title: Scalars['String']['output'];
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  tags?: Maybe<TagRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  Content?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Emogi?: InputMaybe<StringFilterInput>;
  Excerpt?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  tags?: InputMaybe<TagFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  Content?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Emogi?: InputMaybe<Scalars['String']['input']>;
  Excerpt?: InputMaybe<Scalars['String']['input']>;
  FeaturedImage?: InputMaybe<Scalars['ID']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  chapter?: Maybe<ChapterEntityResponse>;
  chapters?: Maybe<ChapterEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  courses?: Maybe<CourseEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryChapterArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryChaptersArgs = {
  filters?: InputMaybe<ChapterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  FeaturedImage?: Maybe<UploadFileEntityResponse>;
  Name: Scalars['String']['output'];
  Slug: Scalars['String']['output'];
  colour?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fontColour?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<Array<Maybe<ComponentSharedSeo>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagSeoArgs = {
  filters?: InputMaybe<ComponentSharedSeoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  colour?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fontColour?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  FeaturedImage?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  fontColour?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<Array<InputMaybe<ComponentSharedSeoInput>>>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type BlogPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type BlogPageQuery = { __typename?: 'Query', post?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', attributes?: { __typename?: 'Post', Slug: string, Title: string, Excerpt?: string | null, Description?: string | null, Content?: string | null, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null } | null } | null }, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null } | null } | null } | null } | null> | null } | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', Name: string, Slug: string } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', Name: string, Slug: string } | null }> } | null } | null } | null } | null };

export type BlogRoutesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BlogRoutesQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', attributes?: { __typename?: 'Post', Slug: string, updatedAt?: any | null } | null }> } | null };

export type BlogsPageQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BlogsPageQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', Title: string, Slug: string, Description?: string | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', Name: string, Slug: string, colour?: string | null, fontColour?: string | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string } | null } | null } | null } | null }> } | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', caption?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type ChapterPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ChapterPageQuery = { __typename?: 'Query', chapter?: { __typename?: 'ChapterEntityResponse', data?: { __typename?: 'ChapterEntity', attributes?: { __typename?: 'Chapter', Slug: string, Title: string, Excerpt?: string | null, Description?: string | null, Content?: string | null, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null } | null } | null }, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null } | null } | null } | null } | null> | null } | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', Name: string, Slug: string, colour?: string | null, fontColour?: string | null } | null }> } | null } | null } | null } | null };

export type CoursePageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CoursePageQuery = { __typename?: 'Query', course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', Slug: string, Title: string, Excerpt: string, Description?: string | null, CourseOverview?: string | null, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null } | null } | null }, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null } | null } | null } | null } | null> | null } | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', Name: string, Slug: string } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', Name: string, Slug: string, colour?: string | null, fontColour?: string | null } | null }> } | null, chapters?: Array<{ __typename?: 'ComponentChapterChapter', Section: string, id: string, chapter?: { __typename?: 'ChapterEntityResponse', data?: { __typename?: 'ChapterEntity', attributes?: { __typename?: 'Chapter', Slug: string, Title: string } | null } | null } | null } | null> | null } | null } | null } | null };

export type CourseRoutesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CourseRoutesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', Slug: string, updatedAt?: any | null, chapters?: Array<{ __typename?: 'ComponentChapterChapter', chapter?: { __typename?: 'ChapterEntityResponse', data?: { __typename?: 'ChapterEntity', attributes?: { __typename?: 'Chapter', Slug: string, updatedAt?: any | null } | null } | null } | null } | null> | null } | null }> } | null };

export type CourseSidebarQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CourseSidebarQuery = { __typename?: 'Query', course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', Slug: string, Title: string, Emogi?: string | null, chapters?: Array<{ __typename?: 'ComponentChapterChapter', id: string, Section: string, Emogi?: string | null, chapter?: { __typename?: 'ChapterEntityResponse', data?: { __typename?: 'ChapterEntity', attributes?: { __typename?: 'Chapter', Emogi?: string | null, Slug: string, Title: string } | null } | null } | null } | null> | null } | null } | null } | null };

export type CoursesPageQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CoursesPageQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null, attributes?: { __typename?: 'Course', Title: string, Slug: string, Description?: string | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', Name: string, Slug: string, colour?: string | null, fontColour?: string | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string } | null } | null } | null } | null }> } | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', caption?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type HomePageQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type HomePageQuery = { __typename?: 'Query', blogs?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', Title: string, Slug: string, Description?: string | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', Name: string, Slug: string, colour?: string | null, fontColour?: string | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string } | null } | null } | null } | null }> } | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', caption?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null, courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null, attributes?: { __typename?: 'Course', Title: string, Slug: string, Description?: string | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', Name: string, Slug: string, colour?: string | null, fontColour?: string | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string } | null } | null } | null } | null }> } | null, FeaturedImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', caption?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type RevalidateCourseQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type RevalidateCourseQuery = { __typename?: 'Query', course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', chapters?: Array<{ __typename?: 'ComponentChapterChapter', chapter?: { __typename?: 'ChapterEntityResponse', data?: { __typename?: 'ChapterEntity', attributes?: { __typename?: 'Chapter', Slug: string } | null } | null } | null } | null> | null } | null } | null } | null };


export const BlogPageDocument = gql`
    query blogPage($slug: String!) {
  post(slug: $slug) {
    data {
      attributes {
        Slug
        seo {
          id
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                formats
                caption
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
            image {
              data {
                attributes {
                  formats
                  caption
                }
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        Title
        Excerpt
        Description
        Content
        FeaturedImage {
          data {
            attributes {
              formats
            }
          }
        }
        category {
          data {
            attributes {
              Name
              Slug
            }
          }
        }
        tags {
          data {
            attributes {
              Name
              Slug
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useBlogPageQuery__
 *
 * To run a query within a React component, call `useBlogPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBlogPageQuery(baseOptions: Apollo.QueryHookOptions<BlogPageQuery, BlogPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPageQuery, BlogPageQueryVariables>(BlogPageDocument, options);
      }
export function useBlogPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPageQuery, BlogPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPageQuery, BlogPageQueryVariables>(BlogPageDocument, options);
        }
export type BlogPageQueryHookResult = ReturnType<typeof useBlogPageQuery>;
export type BlogPageLazyQueryHookResult = ReturnType<typeof useBlogPageLazyQuery>;
export type BlogPageQueryResult = Apollo.QueryResult<BlogPageQuery, BlogPageQueryVariables>;
export const BlogRoutesDocument = gql`
    query blogRoutes($page: Int = 1, $pageSize: Int = 100) {
  posts(sort: ["updatedAt:desc"], pagination: {page: $page, pageSize: $pageSize}) {
    data {
      attributes {
        Slug
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useBlogRoutesQuery__
 *
 * To run a query within a React component, call `useBlogRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogRoutesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useBlogRoutesQuery(baseOptions?: Apollo.QueryHookOptions<BlogRoutesQuery, BlogRoutesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogRoutesQuery, BlogRoutesQueryVariables>(BlogRoutesDocument, options);
      }
export function useBlogRoutesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogRoutesQuery, BlogRoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogRoutesQuery, BlogRoutesQueryVariables>(BlogRoutesDocument, options);
        }
export type BlogRoutesQueryHookResult = ReturnType<typeof useBlogRoutesQuery>;
export type BlogRoutesLazyQueryHookResult = ReturnType<typeof useBlogRoutesLazyQuery>;
export type BlogRoutesQueryResult = Apollo.QueryResult<BlogRoutesQuery, BlogRoutesQueryVariables>;
export const BlogsPageDocument = gql`
    query blogsPage($page: Int = 1, $pageSize: Int = 5) {
  posts(sort: ["updatedAt:desc"], pagination: {page: $page, pageSize: $pageSize}) {
    data {
      id
      attributes {
        tags {
          data {
            attributes {
              Name
              Slug
              colour
              fontColour
              FeaturedImage {
                data {
                  id
                  attributes {
                    url
                    name
                  }
                }
              }
            }
          }
        }
        Title
        Slug
        Description
        FeaturedImage {
          data {
            attributes {
              caption
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useBlogsPageQuery__
 *
 * To run a query within a React component, call `useBlogsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogsPageQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useBlogsPageQuery(baseOptions?: Apollo.QueryHookOptions<BlogsPageQuery, BlogsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogsPageQuery, BlogsPageQueryVariables>(BlogsPageDocument, options);
      }
export function useBlogsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogsPageQuery, BlogsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogsPageQuery, BlogsPageQueryVariables>(BlogsPageDocument, options);
        }
export type BlogsPageQueryHookResult = ReturnType<typeof useBlogsPageQuery>;
export type BlogsPageLazyQueryHookResult = ReturnType<typeof useBlogsPageLazyQuery>;
export type BlogsPageQueryResult = Apollo.QueryResult<BlogsPageQuery, BlogsPageQueryVariables>;
export const ChapterPageDocument = gql`
    query chapterPage($slug: String!) {
  chapter(slug: $slug) {
    data {
      attributes {
        seo {
          id
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                formats
                caption
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
            image {
              data {
                attributes {
                  formats
                  caption
                }
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        Slug
        Title
        Excerpt
        Description
        Content
        FeaturedImage {
          data {
            attributes {
              formats
            }
          }
        }
        tags {
          data {
            attributes {
              Name
              Slug
              colour
              fontColour
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useChapterPageQuery__
 *
 * To run a query within a React component, call `useChapterPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useChapterPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChapterPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useChapterPageQuery(baseOptions: Apollo.QueryHookOptions<ChapterPageQuery, ChapterPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChapterPageQuery, ChapterPageQueryVariables>(ChapterPageDocument, options);
      }
export function useChapterPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChapterPageQuery, ChapterPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChapterPageQuery, ChapterPageQueryVariables>(ChapterPageDocument, options);
        }
export type ChapterPageQueryHookResult = ReturnType<typeof useChapterPageQuery>;
export type ChapterPageLazyQueryHookResult = ReturnType<typeof useChapterPageLazyQuery>;
export type ChapterPageQueryResult = Apollo.QueryResult<ChapterPageQuery, ChapterPageQueryVariables>;
export const CoursePageDocument = gql`
    query coursePage($slug: String!) {
  course(slug: $slug) {
    data {
      attributes {
        seo {
          id
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                formats
                caption
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
            image {
              data {
                attributes {
                  formats
                  caption
                }
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        Slug
        Title
        Excerpt
        Description
        CourseOverview
        FeaturedImage {
          data {
            attributes {
              formats
            }
          }
        }
        category {
          data {
            attributes {
              Name
              Slug
            }
          }
        }
        tags {
          data {
            attributes {
              Name
              Slug
              colour
              fontColour
            }
          }
        }
        chapters {
          Section
          id
          chapter {
            data {
              attributes {
                Slug
                Title
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCoursePageQuery__
 *
 * To run a query within a React component, call `useCoursePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCoursePageQuery(baseOptions: Apollo.QueryHookOptions<CoursePageQuery, CoursePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursePageQuery, CoursePageQueryVariables>(CoursePageDocument, options);
      }
export function useCoursePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursePageQuery, CoursePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursePageQuery, CoursePageQueryVariables>(CoursePageDocument, options);
        }
export type CoursePageQueryHookResult = ReturnType<typeof useCoursePageQuery>;
export type CoursePageLazyQueryHookResult = ReturnType<typeof useCoursePageLazyQuery>;
export type CoursePageQueryResult = Apollo.QueryResult<CoursePageQuery, CoursePageQueryVariables>;
export const CourseRoutesDocument = gql`
    query courseRoutes($page: Int = 1, $pageSize: Int = 100) {
  courses(
    sort: ["updatedAt:desc"]
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    data {
      attributes {
        Slug
        updatedAt
        chapters {
          chapter {
            data {
              attributes {
                Slug
                updatedAt
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCourseRoutesQuery__
 *
 * To run a query within a React component, call `useCourseRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseRoutesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useCourseRoutesQuery(baseOptions?: Apollo.QueryHookOptions<CourseRoutesQuery, CourseRoutesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseRoutesQuery, CourseRoutesQueryVariables>(CourseRoutesDocument, options);
      }
export function useCourseRoutesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseRoutesQuery, CourseRoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseRoutesQuery, CourseRoutesQueryVariables>(CourseRoutesDocument, options);
        }
export type CourseRoutesQueryHookResult = ReturnType<typeof useCourseRoutesQuery>;
export type CourseRoutesLazyQueryHookResult = ReturnType<typeof useCourseRoutesLazyQuery>;
export type CourseRoutesQueryResult = Apollo.QueryResult<CourseRoutesQuery, CourseRoutesQueryVariables>;
export const CourseSidebarDocument = gql`
    query courseSidebar($slug: String!) {
  course(slug: $slug) {
    data {
      attributes {
        Slug
        Title
        Emogi
        chapters {
          id
          Section
          Emogi
          chapter {
            data {
              attributes {
                Emogi
                Slug
                Title
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCourseSidebarQuery__
 *
 * To run a query within a React component, call `useCourseSidebarQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseSidebarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseSidebarQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCourseSidebarQuery(baseOptions: Apollo.QueryHookOptions<CourseSidebarQuery, CourseSidebarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseSidebarQuery, CourseSidebarQueryVariables>(CourseSidebarDocument, options);
      }
export function useCourseSidebarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseSidebarQuery, CourseSidebarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseSidebarQuery, CourseSidebarQueryVariables>(CourseSidebarDocument, options);
        }
export type CourseSidebarQueryHookResult = ReturnType<typeof useCourseSidebarQuery>;
export type CourseSidebarLazyQueryHookResult = ReturnType<typeof useCourseSidebarLazyQuery>;
export type CourseSidebarQueryResult = Apollo.QueryResult<CourseSidebarQuery, CourseSidebarQueryVariables>;
export const CoursesPageDocument = gql`
    query coursesPage($page: Int = 1, $pageSize: Int = 5) {
  courses(
    sort: ["updatedAt:desc"]
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    data {
      id
      attributes {
        tags {
          data {
            attributes {
              Name
              Slug
              colour
              fontColour
              FeaturedImage {
                data {
                  id
                  attributes {
                    url
                    name
                  }
                }
              }
            }
          }
        }
        Title
        Slug
        Description
        FeaturedImage {
          data {
            attributes {
              caption
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCoursesPageQuery__
 *
 * To run a query within a React component, call `useCoursesPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesPageQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useCoursesPageQuery(baseOptions?: Apollo.QueryHookOptions<CoursesPageQuery, CoursesPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursesPageQuery, CoursesPageQueryVariables>(CoursesPageDocument, options);
      }
export function useCoursesPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursesPageQuery, CoursesPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursesPageQuery, CoursesPageQueryVariables>(CoursesPageDocument, options);
        }
export type CoursesPageQueryHookResult = ReturnType<typeof useCoursesPageQuery>;
export type CoursesPageLazyQueryHookResult = ReturnType<typeof useCoursesPageLazyQuery>;
export type CoursesPageQueryResult = Apollo.QueryResult<CoursesPageQuery, CoursesPageQueryVariables>;
export const HomePageDocument = gql`
    query HomePage($page: Int = 0, $pageSize: Int = 5) {
  blogs: posts(
    sort: ["updatedAt:desc"]
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    data {
      id
      attributes {
        tags {
          data {
            attributes {
              Name
              Slug
              colour
              fontColour
              FeaturedImage {
                data {
                  id
                  attributes {
                    url
                    name
                  }
                }
              }
            }
          }
        }
        Title
        Slug
        Description
        FeaturedImage {
          data {
            attributes {
              caption
              formats
            }
          }
        }
      }
    }
  }
  courses: courses(
    sort: ["updatedAt:desc"]
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    data {
      id
      attributes {
        tags {
          data {
            attributes {
              Name
              Slug
              colour
              fontColour
              FeaturedImage {
                data {
                  id
                  attributes {
                    url
                    name
                  }
                }
              }
            }
          }
        }
        Title
        Slug
        Description
        FeaturedImage {
          data {
            attributes {
              caption
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const RevalidateCourseDocument = gql`
    query revalidateCourse($slug: String!) {
  course(slug: $slug) {
    data {
      attributes {
        chapters {
          chapter {
            data {
              attributes {
                Slug
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useRevalidateCourseQuery__
 *
 * To run a query within a React component, call `useRevalidateCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useRevalidateCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRevalidateCourseQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useRevalidateCourseQuery(baseOptions: Apollo.QueryHookOptions<RevalidateCourseQuery, RevalidateCourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RevalidateCourseQuery, RevalidateCourseQueryVariables>(RevalidateCourseDocument, options);
      }
export function useRevalidateCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RevalidateCourseQuery, RevalidateCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RevalidateCourseQuery, RevalidateCourseQueryVariables>(RevalidateCourseDocument, options);
        }
export type RevalidateCourseQueryHookResult = ReturnType<typeof useRevalidateCourseQuery>;
export type RevalidateCourseLazyQueryHookResult = ReturnType<typeof useRevalidateCourseLazyQuery>;
export type RevalidateCourseQueryResult = Apollo.QueryResult<RevalidateCourseQuery, RevalidateCourseQueryVariables>;