// ── Amrita Navigation Route Data ─────────────────────────────────────────────
// Each destination has: id, name, type, floor, description, checkpoints[]
// Each checkpoint has: id, label, description, instruction, nextInstruction, icon, x, y (SVG %)
// x, y are percentage positions on the map SVG (0-100)

const DESTINATIONS = {

  // ── CLASSROOMS ────────────────────────────────────────────────────────────
  classrooms: [
    {
      id: "cr1",
      name: "Classroom 1",
      type: "classroom",
      floor: "Ground Floor",
      description: "Main lecture hall, seats 60 students",
      checkpoints: [
        {
          id: "cr1_cp1",
          label: "Main Entrance",
          description: "Start at the college main entrance. The security desk is on your right.",
          instruction: "Enter through the main gate and head straight",
          nextInstruction: "Walk 20m straight to the lobby",
          icon: "🚪",
          x: 50, y: 88
        },
        {
          id: "cr1_cp2",
          label: "Reception Lobby",
          description: "The central lobby with the Amrita emblem on the floor. Notice boards are on both walls.",
          instruction: "At the lobby, turn LEFT",
          nextInstruction: "Walk past the staircase to the corridor",
          icon: "🏛️",
          x: 50, y: 65
        },
        {
          id: "cr1_cp3",
          label: "Ground Floor Staircase",
          description: "The main staircase landing. Fire exit is marked on the wall ahead.",
          instruction: "Pass the staircase and continue straight",
          nextInstruction: "Classroom 1 is the first door on your right",
          icon: "🪜",
          x: 30, y: 45
        },
        {
          id: "cr1_cp4",
          label: "Classroom 1 — Arrived! 🎉",
          description: "You have reached Classroom 1. The room number is marked above the door.",
          instruction: "You have arrived at Classroom 1!",
          nextInstruction: null,
          icon: "🎓",
          x: 20, y: 28
        }
      ]
    },
    {
      id: "cr2",
      name: "Classroom 2",
      type: "classroom",
      floor: "Ground Floor",
      description: "Seminar room, seats 40 students",
      checkpoints: [
        {
          id: "cr2_cp1",
          label: "Main Entrance",
          description: "Start at the college main entrance.",
          instruction: "Enter through the main gate and head straight",
          nextInstruction: "Walk to the central lobby",
          icon: "🚪",
          x: 50, y: 88
        },
        {
          id: "cr2_cp2",
          label: "Reception Lobby",
          description: "Central lobby with notice boards.",
          instruction: "At the lobby, turn RIGHT",
          nextInstruction: "Walk past the admin office",
          icon: "🏛️",
          x: 50, y: 65
        },
        {
          id: "cr2_cp3",
          label: "Admin Office",
          description: "Administration office corridor. Faculty rooms are numbered on the left.",
          instruction: "Continue past the admin office",
          nextInstruction: "Classroom 2 is the second door on your left",
          icon: "🗂️",
          x: 70, y: 45
        },
        {
          id: "cr2_cp4",
          label: "Classroom 2 — Arrived! 🎉",
          description: "You have reached Classroom 2.",
          instruction: "You have arrived at Classroom 2!",
          nextInstruction: null,
          icon: "🎓",
          x: 78, y: 28
        }
      ]
    },
    {
      id: "cr3",
      name: "Classroom 3",
      type: "classroom",
      floor: "First Floor",
      description: "Upper floor classroom, seats 55 students",
      checkpoints: [
        {
          id: "cr3_cp1",
          label: "Main Entrance",
          description: "Start at the college main entrance.",
          instruction: "Enter and head to the main lobby",
          nextInstruction: "Go to the central staircase",
          icon: "🚪",
          x: 50, y: 88
        },
        {
          id: "cr3_cp2",
          label: "Reception Lobby",
          description: "Central lobby — take the staircase straight ahead.",
          instruction: "Head straight to the staircase",
          nextInstruction: "Climb up to the first floor",
          icon: "🏛️",
          x: 50, y: 65
        },
        {
          id: "cr3_cp3",
          label: "First Floor Landing",
          description: "First floor landing. You'll see a corridor with classrooms on both sides.",
          instruction: "At the top, turn LEFT",
          nextInstruction: "Walk to the end of the corridor",
          icon: "🪜",
          x: 50, y: 40
        },
        {
          id: "cr3_cp4",
          label: "Classroom 3 — Arrived! 🎉",
          description: "You have reached Classroom 3 on the first floor.",
          instruction: "You have arrived at Classroom 3!",
          nextInstruction: null,
          icon: "🎓",
          x: 22, y: 22
        }
      ]
    }
  ],

  // ── LABS ──────────────────────────────────────────────────────────────────
  labs: [
    {
      id: "lab1",
      name: "Computer Lab 1",
      type: "lab",
      floor: "Ground Floor",
      description: "Linux lab, 40 workstations",
      checkpoints: [
        {
          id: "lab1_cp1",
          label: "Main Entrance",
          description: "Start at the college main entrance.",
          instruction: "Enter and walk straight",
          nextInstruction: "Head to the lobby",
          icon: "🚪",
          x: 50, y: 88
        },
        {
          id: "lab1_cp2",
          label: "Reception Lobby",
          description: "Central lobby. The labs block is in the left wing.",
          instruction: "Turn LEFT at the lobby",
          nextInstruction: "Follow the blue lab sign on the wall",
          icon: "🏛️",
          x: 50, y: 65
        },
        {
          id: "lab1_cp3",
          label: "Lab Block Entrance",
          description: "Lab block entrance. You'll see a board listing all labs.",
          instruction: "Enter the lab block",
          nextInstruction: "Computer Lab 1 is the first room on your right",
          icon: "🖥️",
          x: 28, y: 44
        },
        {
          id: "lab1_cp4",
          label: "Computer Lab 1 — Arrived! 🎉",
          description: "Computer Lab 1 — 40 Linux workstations. Remove footwear at the door.",
          instruction: "You have arrived at Computer Lab 1!",
          nextInstruction: null,
          icon: "💻",
          x: 18, y: 28
        }
      ]
    },
    {
      id: "lab2",
      name: "Computer Lab 2",
      type: "lab",
      floor: "Ground Floor",
      description: "Windows lab, 40 workstations",
      checkpoints: [
        {
          id: "lab2_cp1",
          label: "Main Entrance",
          description: "Start at the college main entrance.",
          instruction: "Enter and walk straight",
          nextInstruction: "Head to the lobby",
          icon: "🚪",
          x: 50, y: 88
        },
        {
          id: "lab2_cp2",
          label: "Reception Lobby",
          description: "Central lobby. Head left to the lab block.",
          instruction: "Turn LEFT at the lobby",
          nextInstruction: "Enter the lab block corridor",
          icon: "🏛️",
          x: 50, y: 65
        },
        {
          id: "lab2_cp3",
          label: "Lab Block Entrance",
          description: "Lab block entrance corridor.",
          instruction: "Enter the lab block",
          nextInstruction: "Computer Lab 2 is the second door on your right",
          icon: "🖥️",
          x: 28, y: 44
        },
        {
          id: "lab2_cp4",
          label: "Computer Lab 2 — Arrived! 🎉",
          description: "Computer Lab 2 — Windows workstations. Sign the register at the door.",
          instruction: "You have arrived at Computer Lab 2!",
          nextInstruction: null,
          icon: "💻",
          x: 18, y: 18
        }
      ]
    },
    {
      id: "lab3",
      name: "Electronics Lab",
      type: "lab",
      floor: "First Floor",
      description: "Electronics & circuit lab, upper floor",
      checkpoints: [
        {
          id: "lab3_cp1",
          label: "Main Entrance",
          description: "Start at the main entrance.",
          instruction: "Enter and walk straight to the lobby",
          nextInstruction: "Go to the central staircase",
          icon: "🚪",
          x: 50, y: 88
        },
        {
          id: "lab3_cp2",
          label: "Reception Lobby",
          description: "Head to the staircase for the first floor.",
          instruction: "Walk to the staircase",
          nextInstruction: "Climb to the first floor",
          icon: "🏛️",
          x: 50, y: 65
        },
        {
          id: "lab3_cp3",
          label: "First Floor Landing",
          description: "First floor landing. Labs are in the right wing.",
          instruction: "Turn RIGHT at the landing",
          nextInstruction: "Walk to the end of the right wing",
          icon: "🪜",
          x: 50, y: 40
        },
        {
          id: "lab3_cp4",
          label: "Electronics Lab — Arrived! 🎉",
          description: "Electronics Lab — bring your component kit. Entry with ID card only.",
          instruction: "You have arrived at the Electronics Lab!",
          nextInstruction: null,
          icon: "⚡",
          x: 78, y: 22
        }
      ]
    }
  ]
};

// Helper: get destination by id across all categories
function getDestination(id) {
  const all = [...DESTINATIONS.classrooms, ...DESTINATIONS.labs];
  return all.find(d => d.id === id) || null;
}
