import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { Contact } from '../utils/types';

interface ReminderEntryProps {
  isOpen: boolean;
  onClose: () => void;
  contacts: Contact[];
  onSave: (reminder: { contactId: string; contactName: string; message: string; date: Date; completed?: boolean }) => void;
}

const ReminderEntry: React.FC<ReminderEntryProps> = ({ isOpen, onClose, contacts, onSave }) => {
  const [selectedContact, setSelectedContact] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!selectedContact || !message.trim() || !date) return;
    setIsSaving(true);
    const contact = contacts.find(c => c.id === selectedContact);
    if (!contact) return;
    const reminder = {
      contactId: contact.id,
      contactName: contact.name,
      message: message.trim(),
      date: new Date(date),
      completed: false
    };
    await new Promise(resolve => setTimeout(resolve, 500));
    onSave(reminder);
    setSelectedContact('');
    setMessage('');
    setDate('');
    setIsSaving(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Reminder</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          {/* Contact Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Person
            </label>
            <select
              value={selectedContact}
              onChange={e => setSelectedContact(e.target.value)}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            >
              <option value="">Select a person...</option>
              {contacts.map(contact => (
                <option key={contact.id} value={contact.id}>{contact.name}</option>
              ))}
            </select>
          </div>
          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Reminder Message
            </label>
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="What do you want to be reminded about?"
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
          </div>
          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Date
            </label>
            <input
              type="datetime-local"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
          </div>
          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              disabled={isSaving || !selectedContact || !message.trim() || !date}
              className="flex items-center space-x-2 bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : 'Save Reminder'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderEntry; 