import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { articles } from "@/data/articles";
import { ArrowRight, Clock, Search } from "lucide-react";
import { Link } from "wouter";
import ScrollAnimation from "@/components/scroll-animation";
import SEOHead from "@/components/seo-head";

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(articles.map(article => article.category)));

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead
        title="Gordon Frois Articles - Product Strategy & Leadership Insights"
        description="Read Gordon Frois's thoughts on product strategy, team leadership, startup building, and innovation. Insights from 15+ years experience in SaaS, fintech, and insurtech across Singapore and Southeast Asia."
        keywords="Gordon Frois articles, product strategy insights, leadership articles, startup advice, fintech insights, product management blog, Singapore tech leader"
        canonicalUrl="https://gordonfrois.com/articles"
      />
      <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl font-bold text-text-primary mb-6">Articles & Insights</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Thoughts on product strategy, leadership, innovation, and the evolving landscape of technology across different markets and industries.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {filteredArticles.length === 0 ? (
            <ScrollAnimation>
              <div className="text-center py-12">
                <p className="text-secondary text-lg">No articles found matching your criteria.</p>
              </div>
            </ScrollAnimation>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ScrollAnimation key={article.id} delay={index * 0.1}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-48 object-cover rounded-t-lg" 
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center text-sm text-secondary mb-3">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.publishedAt} • {article.readTime}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex-grow">
                          <Link href={`/articles/${article.slug}`} className="hover:underline">
                            {article.title}
                          </Link>
                        </h3>
                        
                        <p className="text-secondary mb-4 flex-grow">{article.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Link href={`/articles/${article.slug}`}>
                          <Button variant="ghost" className="inline-flex items-center text-primary font-medium hover:text-blue-700 p-0">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </section>
      </main>
    </>
  );
}
