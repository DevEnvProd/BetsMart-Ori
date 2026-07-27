import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, BookOpen, ChevronRight, X, ArrowRight, Share2, Printer, Check, Copy, Tag, Eye } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map(post => post.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // Helper function to parse markdown links safely into React nodes
  const parseContentWithLinks = (text: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [_, linkText, linkUrl] = match;
      const matchIndex = match.index;

      if (matchIndex > lastIndex) {
        parts.push(text.substring(lastIndex, matchIndex));
      }

      parts.push(
        <a
          key={matchIndex}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-black hover:underline hover:text-primary-dark transition-all"
        >
          {linkText}
        </a>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}/blog?id=${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header section */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Education & Insights Portal
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-black text-gray-900 tracking-tight">
          Winbox Educational Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Stay informed with our latest research, deep-dives, and guides on ASEAN's premier gaming platform. Enjoy high-quality insights on system security, slot payouts, and mobile convenience.
        </p>
      </div>

      {/* Control Bar: Search & Categories */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-10 space-y-6 md:space-y-0 md:flex md:items-center md:justify-between gap-6">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles, guides, security tips..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-bg-soft border border-gray-200 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-800"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Categories Scroller */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-bg-soft text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.4) }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <Card className="h-full overflow-hidden border border-gray-150 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300 flex flex-col rounded-3xl bg-white">
                {/* Visual Cover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Date and Read Time */}
                    <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-heading font-black text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  {/* Footer call to action */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-xs font-black text-primary uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8">
          <p className="text-gray-500 font-medium mb-4">No articles match your search or category filter.</p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="btn-primary"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Featured Statistics section or promotion card to reinforce single-view design */}
      <div className="mt-16 bg-gradient-to-br from-primary to-primary-dark rounded-[3rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-32 -mb-32 blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold tracking-widest uppercase">
            <Tag className="w-3.5 h-3.5" />
            ASEAN Gaming Standard
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black leading-tight">
            Comprehensive Licensing & Certified Fair Payouts
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Our educational portal documents how licensed platforms handle transactions securely. Read our daily analytical coverage to understand RTP mechanics, secure APK verification, and correct limit setups.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://winbox666.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-6 py-3.5 rounded-full font-black text-sm hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg"
            >
              Verify on Winbox Portal
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Immersive Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-3xl overflow-hidden max-h-[90vh] flex flex-col text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Visual with Close Button */}
              <div className="relative aspect-[21/9] bg-gray-100 shrink-0">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2.5 rounded-full transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Meta details over gradient */}
                <div className="absolute bottom-4 left-6 right-6 text-white space-y-2">
                  <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-heading font-black leading-snug text-white drop-shadow-md">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Article Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-gray-700">
                {/* Inline Metadata */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100 pb-4">
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <Calendar className="w-4 h-4 text-primary" />
                    Published: {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-4 h-4 text-primary" />
                    Estimated Read: {selectedPost.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <Eye className="w-4 h-4 text-primary" />
                    Verified Authenticated
                  </span>
                </div>

                {/* Large Intro Quote / Summary */}
                <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-2xl italic text-gray-600 text-sm md:text-base leading-relaxed">
                  "{selectedPost.summary}"
                </div>

                {/* Main Article Paragraph */}
                <div className="text-gray-800 text-base leading-relaxed md:text-lg whitespace-pre-wrap font-sans space-y-4">
                  <p>{parseContentWithLinks(selectedPost.content)}</p>
                </div>

                {/* Information Callout Box */}
                <div className="bg-bg-soft rounded-2xl p-5 border border-gray-150 space-y-3">
                  <h4 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-secondary" />
                    Official Platform Portal Verification
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    This article references only verified, official regional portal links for Winbox. These secure connections direct exclusively to authorized domains: winbox666.com, winbox666my.com, and winboxmy666.com to ensure players access authentic, secure registration guides and resources.
                  </p>
                </div>
              </div>

              {/* Reader Action Bar (Footer) */}
              <div className="px-6 py-4 bg-bg-soft border-t border-gray-100 shrink-0 flex items-center justify-between gap-4">
                <button
                  onClick={() => handleCopyLink(selectedPost.id)}
                  className="inline-flex items-center gap-2 text-xs font-black text-gray-600 hover:text-primary uppercase tracking-wider transition-colors bg-white border border-gray-200 px-4 py-2.5 rounded-xl shadow-sm"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-green-500 animate-bounce" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      Share Article
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-gray-500 hover:text-gray-700 bg-white border border-gray-200 p-2.5 rounded-xl shadow-sm transition-all"
                    title="Print Article"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="bg-primary text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors shadow-sm"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
