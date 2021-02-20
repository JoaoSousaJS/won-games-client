/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryGameBySlug
// ====================================================

export interface QueryGameBySlug_games_gallery {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryGameBySlug_games_cover {
  __typename: "UploadFile";
  src: string;
}

export interface QueryGameBySlug_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGameBySlug_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryGameBySlug_games_categories {
  __typename: "Category";
  name: string;
}

export interface QueryGameBySlug_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryGameBySlug_games {
  __typename: "Game";
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING | null;
  release_date: any | null;
  gallery: QueryGameBySlug_games_gallery[];
  cover: QueryGameBySlug_games_cover | null;
  developers: QueryGameBySlug_games_developers[];
  publisher: QueryGameBySlug_games_publisher | null;
  categories: QueryGameBySlug_games_categories[];
  platforms: QueryGameBySlug_games_platforms[];
}

export interface QueryGameBySlug_recommended_section_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGameBySlug_recommended_section_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGameBySlug_recommended_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryGameBySlug_recommended_section_highlight_background | null;
  floatImage: QueryGameBySlug_recommended_section_highlight_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryGameBySlug_recommended_section_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGameBySlug_recommended_section_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGameBySlug_recommended_section_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryGameBySlug_recommended_section_games_cover | null;
  developers: QueryGameBySlug_recommended_section_games_developers[];
  price: number;
}

export interface QueryGameBySlug_recommended_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryGameBySlug_recommended_section_highlight | null;
  games: QueryGameBySlug_recommended_section_games[];
}

export interface QueryGameBySlug_recommended {
  __typename: "Recommended";
  section: QueryGameBySlug_recommended_section | null;
}

export interface QueryGameBySlug {
  games: QueryGameBySlug_games[];
  recommended: QueryGameBySlug_recommended | null;
}

export interface QueryGameBySlugVariables {
  slug: string;
}
