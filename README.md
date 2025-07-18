# Personal CRM – Warm & Human Relationship Tracker

A modern, personal CRM (Customer Relationship Management) app for tracking your relationships, interactions, and reminders. Built with React, TypeScript, and Tailwind CSS, it helps you nurture your network in a warm, human way.

---

## ✨ Features

- **Dashboard**: See today's reminders, starred contacts, and recent activity at a glance.
- **Contacts Management**: Add, search, filter, and star people in your network. View relationship details and tags.
- **Notes & Timeline**: Log meetings, calls, emails, and notes for each contact. View a chronological memory feed.
- **Reminders**: Get reminded to follow up with important contacts.
- **Sentiment Tracking**: Mark interactions as positive, neutral, or needing attention.
- **Tags**: Organize contacts and notes with custom tags.
- **Dark/Light/System Theme**: Beautiful, responsive UI with theme toggle.

---

## 🛠️ Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)
- [Lucide React](https://lucide.dev/) (icons)
- ESLint, PostCSS, modern tooling

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

---

## 🏗️ Project Structure

```
crm/
  src/
    components/    # UI components (Contacts, Timeline, NoteEntry, etc.)
    contexts/      # React Contexts (Theme management)
    utils/         # Data models, mock data
    App.tsx        # Main app logic
    index.css      # Tailwind styles
    main.tsx       # Entry point
  index.html       # HTML template
  tailwind.config.js, postcss.config.js, etc.
```

---

## 📒 Data Model

### Contact
```ts
interface Contact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  avatar?: string;
  lastContact?: Date;
  nextReminder?: Date;
  tags: string[];
  notes: Note[];
  starred: boolean;
  metAt?: string;
  relationship: string;
  sentiment: 'positive' | 'neutral' | 'needs-attention';
}
```

### Note
```ts
interface Note {
  id: string;
  contactId: string;
  content: string;
  date: Date;
  tags: string[];
  sentiment: 'positive' | 'neutral' | 'needs-attention';
  type: 'note' | 'call' | 'meeting' | 'email';
}
```

### Reminder
```ts
interface Reminder {
  id: string;
  contactId: string;
  contactName: string;
  message: string;
  date: Date;
  completed: boolean;
}
```

---

## 🧑‍💻 Example Data (Malaysian)

The app uses mock data for demo purposes. Example contacts, notes, and reminders are now based on Malaysian names and contact info:

```
// Example Contact
{
  id: '1',
  name: 'Aisyah Binti Ahmad',
  email: 'aisyah.ahmad@example.my',
  phone: '+60 12-345 6789',
  lastContact: new Date('2024-01-10'),
  nextReminder: new Date('2024-01-15'),
  tags: ['kawan', 'pereka', 'mentor'],
  notes: [],
  starred: true,
  metAt: 'Persidangan Reka Bentuk 2023',
  relationship: 'Kawan rapat & mentor',
  sentiment: 'positive'
}

// Example Note
{
  id: '1',
  contactId: '1',
  content: 'Berbual santai tentang kerja reka bentuk sistem baru beliau. Berminat untuk peluang kerjasama.',
  date: new Date('2024-01-10'),
  tags: ['kopi', 'kerjasama', 'sistem-reka-bentuk'],
  sentiment: 'positive',
  type: 'meeting'
}

// Example Reminder
{
  id: '1',
  contactId: '1',
  contactName: 'Aisyah Binti Ahmad',
  message: 'Tindak lanjut projek kerjasama',
  date: new Date('2024-01-15'),
  completed: false
}
```

---

## 🎨 Theming

- Toggle between Light, Dark, and System themes using the theme switcher in the header.
- Theme preference is saved in localStorage and respects system settings.

---

## 📄 License

MIT 