import {
  LayoutDashboard,
  Briefcase,
  GraduationCap,
  Target,
  Wallet,
  BarChart3,
  Sparkles,
  Heart,
  Grid2x2,
  BookOpen,

  CalendarDays,
  CheckSquare,
  School,
  NotebookPen,
  FolderOpen,
  FolderGit2,
  Layers3,
  Trophy,
  BookHeart,
  BriefcaseBusiness,
  Inbox,
  Users,
  Receipt,
  PiggyBank,
  Coins,
  Shield,
  Landmark,
  Lightbulb,
  Handshake,
  HeartPulse,
} from "lucide-react";

export const sidebarConfig = {
  student: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },

    {
      title: "Workspace",
      icon: Briefcase,
      children: [
        { title: "Calendar",
          icon: CalendarDays,
          path: "/calendar" 
        },
        { title: "Tasks", 
          icon: CheckSquare,
          path: "/tasks" 
        },
        { title: "School",
          icon: School,
          path: "/school" 
        },
      ],
    },

    {
      title: "Study",
      icon: GraduationCap,
      children: [
        { title: "Curriculum", 
          icon: GraduationCap,
          path: "/curriculum" 
        },
        { title: "Notes", 
          icon: NotebookPen,
          path: "/notes" 
        },
        { title: "Custom Spaces", 
          icon: FolderOpen,
          path: "/spaces" 
        },
        { title: "Projects", 
          icon: FolderGit2,
          path: "/projects" 
        },
        { title: "Flashcards", 
          icon: Layers3,
          path: "/flashcards" 
        },
      ],
    },

    {
      title: "Growth",
      icon: Target,
      children: [
        { title: "Habit Tracker",
          icon: Target, 
          path: "/habits" 
        },
        { title: "Goals", 
          icon: Trophy, 
          path: "/goals" 
        },
        { title: "Journal",
          icon: BookHeart,  
          path: "/journal" 
        },
        { title: "Career",
          icon: BriefcaseBusiness,  
          path: "/career" 
        },
      ],
    },

    {
      title: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
  ],

  professional: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },

    {
      title: "Workspace",
      icon: Briefcase,
      children: [
        { title: "Calendar", 
          icon: CalendarDays, 
          path: "/calendar" 
        },
        { title: "Tasks",
          icon: CheckSquare,  
          path: "/tasks" 
        },
        {
          title: "Inbox",
          icon: Inbox, 
          path: "/inbox",
          comingSoon: true,
        },
      ],
    },

    {
      title: "Growth",
      icon: Target,
      children: [
        { title: "Career", 
          icon: BriefcaseBusiness, 
          path: "/career" 
        },
        { title: "Projects", 
          icon: FolderGit2, 
          path: "/projects" 
        },
        { title: "Notes", 
          icon: NotebookPen, 
          path: "/notes" 
        },
        { title: "Meetings",
          icon: Users,  
          path: "/meetings" 
        },
      ],
    },

    {
      title: "Finance",
      icon: Wallet,
      children: [
        { title: "Expenses", 
          icon: Receipt, 
          path: "/expenses" 
        },
        { title: "Budget", 
          icon: PiggyBank, 
          path: "/budget" 
        },
        { title: "Savings", 
          icon: Coins, 
          path: "/savings" 
        },
        { title: "Investments",
          icon: Landmark,  
          path: "/investments" 
        },
        { title: "Insurance", 
          icon: Shield, 
          path: "/insurance" 
        },
      ],
    },

    {
      title: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
  ],

  creator: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },

    {
      title: "Workspace",
      icon: Briefcase,
      children: [
        { title: "Calendar",
          icon: CalendarDays,  
          path: "/calendar" 
        },
        {
          title: "Inbox",
          icon: Inbox, 
          path: "/inbox",
          comingSoon: true,
        },
        { title: "Meetings",
          icon: Users,  
          path: "/meetings" 
        },
      ],
    },

    {
      title: "Content",
      icon: Sparkles,
      children: [
        { title: "Tasks", 
          icon: CheckSquare, 
          path: "/tasks" 
        },
        { title: "Ideas Vault", 
          icon: Lightbulb, 
          path: "/ideas" 
        },
        { title: "Brand Deals", 
          icon: Handshake, 
          path: "/brands" 
        },
        { title: "Custom Spaces", 
          icon: FolderOpen, 
          path: "/spaces" 
        },
      ],
    },

    {
      title: "Finance",
      icon: Wallet,
      children: [
        { title: "Tracker", 
          icon: Receipt, 
          path: "/finance" 
        },
      ],
    },

    {
      title: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
  ],

  hobbyist: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },

    {
      title: "Workspace",
      icon: Briefcase,
      children: [
        { title: "Calendar", 
          icon: CalendarDays, 
          path: "/calendar" 
        },
        { title: "Tasks",
          icon: CheckSquare,  
          path: "/tasks" 
        },
      ],
    },

    {
      title: "Learning",
      icon: BookOpen,
      children: [
        { title: "Curriculum", 
          icon: GraduationCap, 
          path: "/curriculum" 
        },
        { title: "Custom Spaces", 
          icon: FolderOpen, 
          path: "/spaces" 
        },
        { title: "Notes", 
          icon: NotebookPen, 
          path: "/notes" 
        },
      ],
    },

    {
      title: "Personal",
      icon: Heart,
      children: [
        { title: "Habit Tracker", 
          icon: Target, 
          path: "/habits" 
        },
        { title: "Goals", 
          icon: Trophy, 
          path: "/goals" 
        },
        { title: "Journal",
          icon: BookHeart,  
          path: "/journal" 
        },
      ],
    },

    {
      title: "More",
      icon: Grid2x2,
      children: [
        { title: "Health", 
          icon: HeartPulse, 
          path: "/health" 
        },
        { title: "Finance", 
          icon: Wallet, 
          path: "/finance" 
        },
      ],
    },

    {
      title: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
  ],

  other: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },

    {
      title: "Workspace",
      icon: Briefcase,
      children: [
        { title: "Calendar", 
          icon: CalendarDays, 
          path: "/calendar" 
        },
        { title: "Tasks",
          icon: CheckSquare,  
          path: "/tasks" 
        },
      ],
    },

    {
      title: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
  ],
};