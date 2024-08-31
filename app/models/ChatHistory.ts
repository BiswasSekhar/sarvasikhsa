import mongoose from 'mongoose';

const ChatHistorySchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  messages: [
    {
      role: {
        type: String,
        enum: ['user', 'model'],
        required: true,
      },
      parts: [
        {
          text: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
  name: { type: String }, // Added name field
  grade: { type: Number }, // Added grade field
});

const ChatHistory = mongoose.models.ChatHistory || mongoose.model('ChatHistory', ChatHistorySchema);

export default ChatHistory;