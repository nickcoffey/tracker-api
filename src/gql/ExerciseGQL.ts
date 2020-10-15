import {gql, IResolvers} from 'apollo-server'
import {Exercise, BodyPart} from '../models'
import {filterOutFalsies} from '../utils'

export const exerciseTypeDefs = gql`
  "Exercise related data for reference in other objects"
  type Exercise {
    id: ID
    name: String
    desc: String
    bodyPart: BodyPart
  }

  input ExerciseCreateInput {
    name: String!
    desc: String
    bodyPartId: ID!
  }

  input ExerciseUpdateInput {
    id: ID!
    name: String
    desc: String
    bodyPartId: ID
  }

  extend type Query {
    exercise(id: ID!): Exercise
    exercises(bodyPartId: ID!): [Exercise]
  }

  extend type Mutation {
    addExercise(exercise: ExerciseCreateInput!): Exercise
    removeExercise(id: ID!): Exercise
    updateExercise(exercise: ExerciseUpdateInput!): Exercise
  }
`

export const exerciseResolvers: IResolvers<any, any> = {
  Query: {
    exercise: (_parent, args) => Exercise.findById(args.id),
    exercises: (_parent, args) => Exercise.find({bodyPartId: args.bodyPartId})
  },
  Mutation: {
    addExercise: (_parent, args) => {
      const exercise = new Exercise({
        ...args.exercise
      })
      return exercise.save()
    },
    removeExercise: (_parent, args) => Exercise.findByIdAndDelete(args.id),
    updateExercise: (_parent, args) => {
      const {id, name, bodyPartId} = args.exercise
      return Exercise.findByIdAndUpdate({_id: id}, filterOutFalsies({name, bodyPartId}), {new: true})
    }
  },
  Exercise: {bodyPart: (parent) => BodyPart.findById(parent.bodyPartId)}
}