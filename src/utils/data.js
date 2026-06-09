import { ThemeToggle } from "./codes/ThemeToggle";

export const CATEGORIES = [
  'All', 'Buttons', 'Cards', 'Forms', 'Navbars', 'Input', 'Dashboard',
  'Pricing', 'Modals', 'Tables', 'Inputs', 'Alerts', 'Badges', 'Spinners', 'Tooltips',
];

export const COMPONENTS = [
  {
    id: 1,
    name: 'SITE UNDER DEVELOPMENT',
    description: 'site under development',
    category: 'Cards',
    tags: ['react', 'html', 'tailwind'],
    preview: 'glass',
      code: `export default function GlassCard() {
      return (
        <div className="w-64 p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-xl">
          <div className="w-12 h-12 rounded-full bg-violet-400/40 mb-4" />
          <div className="h-3 w-32 rounded-full bg-white/30 mb-2" />
          <div className="h-2 w-24 rounded-full bg-white/20" />
        </div>
      );
    }`,
  },
  {
    id: 2,
    name: 'Theme Toggle',
    description: 'Smooth Theme Toggle button with hover animation .',
    category: 'Buttons',
    tags: ['button'],
    preview: 'theme',
    code : ThemeToggle,
  },
  // {
  //   id: 3,
  //   name: 'Animated Navbar',
  //   description: 'Responsive navbar with smooth scroll animations and mobile menu.',
  //   category: 'Navbars',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'navbar',
  // },
  // {
  //   id: 4,
  //   name: 'Data Table',
  //   description: 'Sortable data table with pagination, search and row selection support.',
  //   category: 'Tables',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'table',
  // },
  // {
  //   id: 5,
  //   name: 'Pricing Card',
  //   description: 'Beautiful pricing cards with feature lists, popular badge and CTA.',
  //   category: 'Pricing',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'pricing',
  // },
  // {
  //   id: 6,
  //   name: 'Alert Toast',
  //   description: 'Dismissable toast notifications with multiple variants and animations.',
  //   category: 'Alerts',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'toast',
  // },
  // {
  //   id: 7,
  //   name: 'Modal Dialog',
  //   description: 'Accessible modal with backdrop, animations and keyboard navigation.',
  //   category: 'Modals',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'modal',
  // },
  // {
  //   id: 8,
  //   name: 'Input Field',
  //   description: 'Floating label input with validation states and icon support.',
  //   category: 'Forms',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'input',
  // },
  // {
  //   id: 9,
  //   name: 'Badge Chip',
  //   description: 'Colorful badge chips with icon, dismissible and outlined variants.',
  //   category: 'Badges',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'badge',
  // },
  // {
  //   id: 10,
  //   name: 'Dashboard Widget',
  //   description: 'Stats widget with sparkline chart, trend indicator and icons.',
  //   category: 'Dashboard',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'dashboard',
  // },
  // {
  //   id: 11,
  //   name: 'Spinner Loader',
  //   description: 'Animated loading spinners in multiple sizes and color variants.',
  //   category: 'Spinners',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'spinner',
  // },
  // {
  //   id: 12,
  //   name: 'Tooltip',
  //   description: 'Hover tooltips with multiple positions and custom content support.',
  //   category: 'Tooltips',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'tooltip',
  // },
  // {
  //   id: 13,
  //   name: 'test',
  //   description: 'this is test component',
  //   category: 'Spinners',
  //   tags: ['react', 'html', 'tailwind'],
  //   preview: 'spinner',
  // },
];

export const STATS = [
  { value: '10+', label: 'Components' },
  { value: '100%', label: 'Free Forever' },
  { value: 'Zero', label: 'Backend Required' },
  { value: '1-Click', label: 'Copy & Paste' },
];
