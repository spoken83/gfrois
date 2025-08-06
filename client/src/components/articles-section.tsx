import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { articles } from "@/data/articles";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import ScrollAnimation from "./scroll-animation";
import { trackEvent } from "@/lib/analytics";

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Insights & Articles</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Insights on product strategy, leadership, and the evolving landscape of technology and innovation.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ScrollAnimation key={article.id} delay={index * 0.1}>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mr-3">
                      {article.category}
                    </Badge>
                    <span className="text-secondary text-sm flex items-center mt-2">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.publishedAt} • {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex-grow">
                    <Link 
                      href={`/articles/${article.slug}`} 
                      className="hover:underline"
                      onClick={() => trackEvent('article_click', 'article_engagement', article.title)}
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-secondary mb-4 flex-grow">{article.excerpt}</p>
                  <Link 
                    href={`/articles/${article.slug}`}
                    onClick={() => trackEvent('read_more_article', 'article_engagement', article.title)}
                  >
                    <Button variant="ghost" className="inline-flex items-center text-primary font-medium hover:text-blue-700 p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="text-center mt-12">
            <Link 
              href="/articles"
              onClick={() => trackEvent('view_all_articles', 'navigation', 'homepage_articles_section')}
            >
              <Button variant="outline" className="border-2 border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white transition-all duration-200">
                View All Articles
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
