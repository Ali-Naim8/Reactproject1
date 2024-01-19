import React, { useState } from 'react';

const articles = [
  { id: 1, title: 'Introduction to React', content: 'React is a JavaScript library for building user interfaces.' },
  { id: 2, title: 'State and Props in React', content: 'Understanding how state and props work in React components.' },
  { id: 3, title: 'React Hooks', content: 'An introduction to React hooks such as useState and useEffect.' },
  // Add more articles as needed
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightText = (text) => {
    if (!searchTerm.trim()) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, index) => regex.test(part) ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part);
  };

  const filterArticles = () => {
    return articles.filter((article) => {
      const regex = new RegExp(searchTerm, 'i');
      return regex.test(article.title) || regex.test(article.content);
    });
  };

  return (
    <div>
      <h1>Article Search</h1>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div>
        {filterArticles().map((article) => (
          <div key={article.id}>
            <h2>{highlightText(article.title)}</h2>
            <p>{highlightText(article.content)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
