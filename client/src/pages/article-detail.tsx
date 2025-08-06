import { useRoute } from "wouter";
import { getArticleBySlug } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Link } from "wouter";
import ScrollAnimation from "@/components/scroll-animation";

// Function to render markdown formatting
function renderMarkdown(text: string) {
  // Convert **bold** to <strong>
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Convert *italic* to <em>
  formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
  return formatted;
}

export default function ArticleDetail() {
  const [, params] = useRoute("/articles/:slug");
  const article = params?.slug ? getArticleBySlug(params.slug) : null;

  if (!article) {
    return (
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-secondary mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/articles">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Article Header */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation>
            <Link href="/articles">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
            </Link>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="flex items-center text-sm text-secondary">
                <Calendar className="h-4 w-4 mr-1" />
                {article.publishedAt}
              </div>
              <div className="flex items-center text-sm text-secondary">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-text-primary mb-6 leading-tight">{article.title}</h1>
            <p className="text-xl text-secondary leading-relaxed">{article.excerpt}</p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation>
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg" 
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation>
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-text-primary">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-2xl font-semibold mt-8 mb-4 text-text-primary">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('- ')) {
                  const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-secondary">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} 
                            dangerouslySetInnerHTML={{ __html: renderMarkdown(item.replace('- ', '')) }}>
                        </li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.trim() !== '') {
                  return (
                    <p key={index} className="mb-6 text-secondary leading-relaxed"
                       dangerouslySetInnerHTML={{ __html: renderMarkdown(paragraph) }}>
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Article Tags */}
      <section className="py-12 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation>
            <h3 className="font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Enjoyed This Article?</h2>
            <p className="text-xl text-secondary mb-8">
              I'd love to hear your thoughts and continue the conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:gordon.matthew@gmail.com?subject=Re: ${article.title}`}>
                <Button className="bg-primary text-white hover:bg-blue-700">
                  Share Your Thoughts
                </Button>
              </a>
              <Link href="/articles">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Read More Articles
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
