import {bodyPartTypeDefs, bodyPartResolvers} from './BodyPartGQL'
import {exerciseTypeDefs, exerciseResolvers} from './ExerciseGQL'
import {routineFolderTypeDefs, routineFolderResolvers} from './RoutineFolderGQL'
import {routineTypeDefs, routineResolvers} from './RoutineGQL'
import {workoutExerciseTypeDefs, workoutExerciseResolvers} from './WorkoutExerciseGQL'
import {workoutTypeDefs, workoutResolvers} from './WorkoutGQL'
import {workoutSetTypeDefs, workoutSetResolvers} from './WorkoutSetGQL'

export const trackerTypeDefs = [
  bodyPartTypeDefs,
  exerciseTypeDefs,
  routineFolderTypeDefs,
  routineTypeDefs,
  workoutExerciseTypeDefs,
  workoutTypeDefs,
  workoutSetTypeDefs
]

export const trackerResolvers = [
  bodyPartResolvers,
  exerciseResolvers,
  routineFolderResolvers,
  routineResolvers,
  workoutExerciseResolvers,
  workoutResolvers,
  workoutSetResolvers
]