import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// By using strings directly, we make this script independent of the generated Prisma Client enums.
// Prisma is smart enough to validate these strings against your schema's enums upon insertion.
const exercises = [
  // ================== CHEST ==================
  { 
    name: 'Barbell Bench Press', 
    primaryMuscleGroup: 'CHEST',
    secondaryMuscleGroups: ['SHOULDERS', 'TRICEPS'],
    equipmentNeeded: 'BARBELL' 
  },
  { 
    name: 'Dumbbell Bench Press', 
    primaryMuscleGroup: 'CHEST',
    secondaryMuscleGroups: ['SHOULDERS', 'TRICEPS'],
    equipmentNeeded: 'DUMBBELL' 
  },
  { 
    name: 'Incline Dumbbell Press', 
    primaryMuscleGroup: 'CHEST',
    secondaryMuscleGroups: ['SHOULDERS', 'TRICEPS'],
    equipmentNeeded: 'DUMBBELL' 
  },
  { 
    name: 'Push-up', 
    primaryMuscleGroup: 'CHEST',
    secondaryMuscleGroups: ['SHOULDERS', 'TRICEPS'],
    equipmentNeeded: 'BODYWEIGHT' 
  },
  { 
    name: 'Dumbbell Flye',
    primaryMuscleGroup: 'CHEST',
    secondaryMuscleGroups: ['SHOULDERS'],
    equipmentNeeded: 'DUMBBELL'
  },
  { 
    name: 'Cable Crossover', 
    primaryMuscleGroup: 'CHEST',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'CABLE' 
  },

  // ================== BACK ==================
  { 
    name: 'Deadlift', 
    primaryMuscleGroup: 'BACK',
    secondaryMuscleGroups: ['HAMSTRINGS', 'GLUTES'],
    equipmentNeeded: 'BARBELL' 
  },
  { 
    name: 'Pull-up', 
    primaryMuscleGroup: 'BACK',
    secondaryMuscleGroups: ['BICEPS'],
    equipmentNeeded: 'BODYWEIGHT' 
  },
  { 
    name: 'Bent-over Row', 
    primaryMuscleGroup: 'BACK',
    secondaryMuscleGroups: ['BICEPS'],
    equipmentNeeded: 'BARBELL' 
  },
  { 
    name: 'Lat Pulldown', 
    primaryMuscleGroup: 'BACK',
    secondaryMuscleGroups: ['BICEPS'],
    equipmentNeeded: 'MACHINE' 
  },
  { 
    name: 'Seated Cable Row',
    primaryMuscleGroup: 'BACK',
    secondaryMuscleGroups: ['BICEPS'],
    equipmentNeeded: 'CABLE'
  },

  // ================== LEGS ==================
  { 
    name: 'Barbell Squat', 
    primaryMuscleGroup: 'QUADS',
    secondaryMuscleGroups: ['GLUTES', 'HAMSTRINGS'],
    equipmentNeeded: 'BARBELL' 
  },
  { 
    name: 'Leg Press', 
    primaryMuscleGroup: 'QUADS',
    secondaryMuscleGroups: ['GLUTES'],
    equipmentNeeded: 'MACHINE' 
  },
  { 
    name: 'Dumbbell Lunge', 
    primaryMuscleGroup: 'QUADS',
    secondaryMuscleGroups: ['GLUTES'],
    equipmentNeeded: 'DUMBBELL' 
  },
  { 
    name: 'Romanian Deadlift', 
    primaryMuscleGroup: 'HAMSTRINGS',
    secondaryMuscleGroups: ['GLUTES', 'BACK'],
    equipmentNeeded: 'BARBELL' 
  },
  {
    name: 'Barbell Hip Thrust',
    primaryMuscleGroup: 'GLUTES',
    secondaryMuscleGroups: ['HAMSTRINGS'],
    equipmentNeeded: 'BARBELL'
  },
  { 
    name: 'Leg Curl', 
    primaryMuscleGroup: 'HAMSTRINGS',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'MACHINE' 
  },
  { 
    name: 'Standing Calf Raise', 
    primaryMuscleGroup: 'CALVES',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'MACHINE' 
  },

  // ================== SHOULDERS ==================
  { 
    name: 'Overhead Press', 
    primaryMuscleGroup: 'SHOULDERS',
    secondaryMuscleGroups: ['TRICEPS'],
    equipmentNeeded: 'BARBELL' 
  },
  { 
    name: 'Dumbbell Shoulder Press', 
    primaryMuscleGroup: 'SHOULDERS',
    secondaryMuscleGroups: ['TRICEPS'],
    equipmentNeeded: 'DUMBBELL' 
  },
  { 
    name: 'Dumbbell Lateral Raise', 
    primaryMuscleGroup: 'SHOULDERS',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'DUMBBELL' 
  },
  { 
    name: 'Face Pull', 
    primaryMuscleGroup: 'SHOULDERS',
    secondaryMuscleGroups: ['BACK'],
    equipmentNeeded: 'CABLE' 
  },

  // ================== ARMS ==================
  { 
    name: 'Barbell Curl', 
    primaryMuscleGroup: 'BICEPS',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'BARBELL' 
  },
  { 
    name: 'Dumbbell Hammer Curl', 
    primaryMuscleGroup: 'BICEPS',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'DUMBBELL' 
  },
  { 
    name: 'Close-Grip Bench Press', 
    primaryMuscleGroup: 'TRICEPS',
    secondaryMuscleGroups: ['CHEST', 'SHOULDERS'],
    equipmentNeeded: 'BARBELL' 
  },
  { 
    name: 'Tricep Pushdown', 
    primaryMuscleGroup: 'TRICEPS',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'CABLE' 
  },
  {
    name: 'Dip',
    primaryMuscleGroup: 'TRICEPS',
    secondaryMuscleGroups: ['CHEST', 'SHOULDERS'],
    equipmentNeeded: 'BODYWEIGHT'
  },

  // ================== CORE ==================
  {
    name: 'Crunch',
    primaryMuscleGroup: 'ABS',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'BODYWEIGHT'
  },
  {
    name: 'Hanging Leg Raise',
    primaryMuscleGroup: 'ABS',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'BODYWEIGHT'
  },
  {
    name: 'Plank',
    primaryMuscleGroup: 'ABS',
    secondaryMuscleGroups: [],
    equipmentNeeded: 'BODYWEIGHT'
  }
];

async function main() {
  console.log(`Clearing existing exercises...`);
  await prisma.exercise.deleteMany({});
  
  console.log(`Start seeding: Adding ${exercises.length} exercises...`);
  for (const ex of exercises) {
    // The 'as any' is used here to bypass strict TypeScript checks on the string enums,
    // as Prisma will perform its own validation during the create operation.
    await prisma.exercise.create({
      data: ex as any,
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

