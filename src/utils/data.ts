import { Contact, Note, Reminder } from './types';

export const mockContacts: Contact[] = [
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
  },
  {
    id: '2',
    name: 'Muhammad Faizal Bin Ismail',
    email: 'faizal.ismail@startup.my',
    phone: '+60 13-222 3344',
    lastContact: new Date('2024-01-08'),
    nextReminder: new Date('2024-01-20'),
    tags: ['rakan sekerja', 'startup', 'perlu-tindak-lanjut'],
    notes: [],
    starred: false,
    metAt: 'Meetup Teknologi',
    relationship: 'Rakan profesional',
    sentiment: 'neutral'
  },
  {
    id: '3',
    name: 'Nurul Izzati Binti Hassan',
    email: 'nurul.izzati@agensi.my',
    phone: '+60 16-987 6543',
    lastContact: new Date('2024-01-05'),
    nextReminder: new Date('2024-01-18'),
    tags: ['klien', 'kreatif', 'keutamaan-tinggi'],
    notes: [],
    starred: true,
    metAt: 'Rujukan Klien',
    relationship: 'Klien utama',
    sentiment: 'positive'
  },
  {
    id: '4',
    name: 'Lim Wei Jian',
    email: 'weijian.lim@techcorp.my',
    phone: '+60 19-888 7766',
    lastContact: new Date('2024-01-03'),
    tags: ['bekas-rakan sekerja', 'jurutera', 'perlu-berhubung'],
    notes: [],
    starred: false,
    metAt: 'Syarikat terdahulu',
    relationship: 'Bekas rakan sekerja',
    sentiment: 'needs-attention'
  }
];

export const mockNotes: Note[] = [
  {
    id: '1',
    contactId: '1',
    content: 'Berbual santai tentang kerja reka bentuk sistem baru beliau. Berminat untuk peluang kerjasama.',
    date: new Date('2024-01-10'),
    tags: ['kopi', 'kerjasama', 'sistem-reka-bentuk'],
    sentiment: 'positive',
    type: 'meeting'
  },
  {
    id: '2',
    contactId: '2',
    content: 'Panggilan ringkas tentang pembentangan startup. Nampak tertekan tentang pembiayaan tetapi teruja dengan hala tuju produk.',
    date: new Date('2024-01-08'),
    tags: ['startup', 'pembiayaan', 'produk'],
    sentiment: 'neutral',
    type: 'call'
  }
];

export const mockReminders: Reminder[] = [
  {
    id: '1',
    contactId: '1',
    contactName: 'Aisyah Binti Ahmad',
    message: 'Tindak lanjut projek kerjasama',
    date: new Date('2024-01-15'),
    completed: false
  },
  {
    id: '2',
    contactId: '3',
    contactName: 'Nurul Izzati Binti Hassan',
    message: 'Hantar draf cadangan projek',
    date: new Date('2024-01-18'),
    completed: false
  },
  {
    id: '3',
    contactId: '4',
    contactName: 'Lim Wei Jian',
    message: 'Jadualkan panggilan catch-up',
    date: new Date('2024-01-16'),
    completed: false
  }
];