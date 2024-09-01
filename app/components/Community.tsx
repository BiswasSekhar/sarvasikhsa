import React, { useState } from "react";
import { FaUser, FaComment } from "react-icons/fa";

interface Post {
  id: number;
  user: string;
  content: string;
  replies: { user: string; content: string }[];
}

const initialPosts: Post[] = [
  {
    id: 1,
    user: "User1",
    content: "Can anyone help me with the syllabus for Class 10 Math?",
    replies: [
      { user: "User2", content: "Sure, I can help! What specifically do you need help with?" },
    ],
  },
  {
    id: 2,
    user: "User3",
    content: "I have a question about the upcoming exams. Any tips?",
    replies: [],
  },
];

const CommunityTab: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPost, setNewPost] = useState("");
  const [replyContent, setReplyContent] = useState<string | null>(null);
  const [replyPostId, setReplyPostId] = useState<number | null>(null);

  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: Date.now(), user: "User", content: newPost, replies: [] }]);
      setNewPost("");
    }
  };

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyContent(e.target.value);
  };

  const handleReplySubmit = (postId: number) => {
    if (replyContent?.trim()) {
      const updatedPosts = posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            replies: [...post.replies, { user: "User", content: replyContent }],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setReplyContent(null);
      setReplyPostId(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">Community</h2>

      <div className="mb-4">
        <textarea
          value={newPost}
          onChange={handlePostChange}
          placeholder="Write a new post..."
          className="w-full p-2 border rounded-lg"
          rows={3}
        />
        <button
          onClick={handlePostSubmit}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Post
        </button>
      </div>

      <div>
        {posts.map(post => (
          <div key={post.id} className="mb-4 p-4 border rounded-lg">
            <div className="flex items-center mb-2">
              <FaUser size={24} className="mr-2" />
              <span className="font-bold">{post.user}</span>
            </div>
            <p>{post.content}</p>

            {post.replies.length > 0 && (
              <div className="mt-2">
                {post.replies.map((reply, index) => (
                  <div key={index} className="flex items-start mb-2">
                    <FaComment size={20} className="mr-2" />
                    <div>
                      <span className="font-bold">{reply.user}:</span> {reply.content}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-2">
              <textarea
                value={replyContent || ""}
                onChange={handleReplyChange}
                placeholder="Write a reply..."
                className="w-full p-2 border rounded-lg"
                rows={2}
              />
              <button
                onClick={() => handleReplySubmit(post.id)}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityTab;
