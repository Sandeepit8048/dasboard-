import { useEffect, useState } from 'react';

export default function Feed() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const redditRes = await fetch('https://www.reddit.com/r/javascript.json');
      const redditData = await redditRes.json();
      const redditPosts = redditData.data.children.map(post => ({
        id: post.data.id,
        title: post.data.title,
        url: post.data.url,
        source: 'Reddit',
      }));

      setFeeds([...redditPosts]);
    };

    fetchFeeds();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Feed</h2>
      <div className="space-y-4">
        {feeds.map(feed => (
          <div key={feed.id} className="p-4 border rounded-lg shadow">
            <p className="font-semibold">{feed.title}</p>
            <a href={feed.url} target="_blank" className="text-blue-500">Visit</a>
            <div className="mt-2 space-x-2">
              <button className="text-sm text-green-500">Save</button>
              <button className="text-sm text-yellow-500">Share</button>
              <button className="text-sm text-red-500">Report</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
