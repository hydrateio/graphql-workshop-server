import { gql } from 'apollo-server-express';

const typeDefs = gql`
type Query {
  episode(id: Int!): Episode
  episodes(name: String): [Episode]
  translate(targetLanguage: String!, text: String!): TranslatedText
}

type TranslatedText {
  translated: String
  text: String
  translation: String
}

type User {
  id: ID!
  email: String!
  name: String
  avatar: String
  identity: String
}

type Schedule {
  time: String
  days: [String]
}

type Rating {
  Rating: Int
}

type Country {
  name: String
  code: String
  timezone: String
}

type Network {
  id: Int
  name: String
  country: Country
}

type WebChannel {
  id: Int
  name: String
  country: Country
}

type Externals {
  tvrage: Int
  thetvdb: Int
  imdb: String
}

type Image {
  medium: String
  original: String
}

# Details for an episode
type Episode {
  id: Int
  url: String
  name: String
  season: Int
  number: Int
  airdate: String
  airtime: String
  airstamp: String
  runtime: Int
  image: Image
  summary: String
  show: Show
}

type Season {
  id: Int
  url: String
  number: Int
  name: String
  episodeOrder: Int
  premiereDate: String
  endDate: String
  network: Network
  webChannel: WebChannel
  image: Image
  summary: String
  episodes: [Episode]
}

# Information for a show including list of episodes
type Show {
  id: Int
  url: String
  name: String
  airedYears: String
  type: String
  language: String
  genres: [String]
  status: String
  officialSite: String
  runtime: Int
  premiered: String
  schedule: Schedule
  rating: Rating
  weight: Int
  network: Network
  webChannel: WebChannel
  externals: Externals
  image: Image
  summary: String
  updated: Int
  seasons: [Season]
  episodes: [Episode]
  previousEpisode: Episode
  nextEpisode: Episode
}
`;

export default typeDefs;
