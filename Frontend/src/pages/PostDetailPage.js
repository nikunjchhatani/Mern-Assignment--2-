// PostDetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './PostDetailPage.css'; // Import custom CSS for styling

const PostDetailPage = () => {
  const { postId } = useParams();

  // Assuming you fetch post details based on postId from your backend or wherever you store post data
  // For demonstration purposes, let's assume you have an array of posts
  const posts = [
    { id: 1, title: 'GPU Prices Are Dropping: GPUs Are Now Affordable In 2023', content: 'Finally, the good news is on the way this year for gamers looking to upgrade their GPU. After a few years of crazy graphics card prices, GPU pricing has finally dropped this year and is expected to sell at the markets normal retail price. If you want to upgrade your PC or buy a good GPU for your new PC, this year may be the best time to do so. However, there are several important concerns that you must be aware of in order to purchase a GPU at the right time for the best buy. So, what are the reasons behind the decline in GPU pricing, and what is the current state of the graphics card market? Heres all you need to know about GPU pricing dropping in 2023:The reason behind the high price of the GPU Many people moved toward the world of video games as a result of the lockdown caused by COVID. To pass their free time at home, many people wanted to play expensive games and watch AAA movies. However, the majority of these non-gamers need a gaming PC, which forced them to purchase a graphics card for their PC in order to play video games in good quality. On the other hand, cryptocurrency miners are already growing increasingly greedy for high-performance GPUs and purchasing graphics cards as soon as they become available, causing a shortage of graphics cards in the market. Since there has been a rapid spike in demand and there is a limited supply, manufacturers saw this as an excellent opportunity to sell GPUs at high prices.' },
    { id: 2, title: 'What is metaverse? Why Facebook changed its name to Meta?', content: 'Metaverse and Facebooks transition to Meta is one of the hottest topics in the tech industry right now. Meta and Metaverse are two terms that every techie has heard of. So, what exactly is a metaverse, how does it work, and how will it affect the world? Heres everything you need to know about the metaverse, including its benefits and drawbacks, as well as why Facebook changed its name to Meta.This metaverse concept is being developed by major tech companies such as Tesla, NVIDIA, Epic games, Microsoft, as well as Meta (Facebook)Let’s understand in simple terms first, metaverse is nothing but a half real, half fictitious world where you can live in a virtual world by just wearing a VR headset. You may have heard of or played open world video games such as GTA V, Watchdog, Fortnite, and many others. These games are played on a television, computer, or mobile device. You control the game via console, keyboard or touch and watch it on a screen, but imagine being inside it; that is what the metaverse is.Yes, this concept is not new these days; you can even play virtual reality video games today; however, despite the fact that it is in the realm of future technology, this technology is still uncommon and quite expensive.' },
    // Add more posts as needed
  ];

  // Find the post with the matching postId
  const post = posts.find(post => post.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-detail-container">
      <h1 className="post-detail-title">{post.title}</h1>
      <p className="post-detail-content">{post.content}</p>
    </div>
  );
};

export default PostDetailPage;
