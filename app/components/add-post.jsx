'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const onAdd = async () => {
    try {
      const info = await fetch('api/add-post', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
        method: 'POST',
      });

      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="border">
      <input
        type="text"
        value={title}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        value={content}
        onInput={(e) => {
          setContent(e.target.value);
        }}
      />
      <button onClick={onAdd}>add</button>
    </div>
  );
}
