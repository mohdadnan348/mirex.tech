import { motion } from 'framer-motion';
import { texts } from '@/data/translationData';

const technologies = [
  // Frontend
  'React.js',
  'React Native',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Redux',
  // Backend
  'Node.js',
  'Express.js',
  'REST APIs',
  // Databases
  'PostgreSQL',
  'MongoDB',
  'Prisma ORM',
  'Redis',
  'ChromaDB',
  // AI & LLM
  'OpenAI API',
  'LangChain',
  'RAG',
  'Prompt Engineering',
  // Cloud & DevOps
  'Docker',
  'AWS',
  'Git',
  'GitHub',
  'GitHub Actions',
  'CI/CD',
  'Vercel',
  'Render',
  // Authentication
  'JWT',
  'RBAC',
  'OAuth',
  // Other
  'Agile/Scrum',
  'API Integration',
  'Performance Optimization',
  'Responsive Design',
];

export default function TrustedTechnologies() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          {texts.trusted}
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
              viewport={{ once: true }}
              className="px-4 py-2 glass rounded-full text-sm font-medium border border-white/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}