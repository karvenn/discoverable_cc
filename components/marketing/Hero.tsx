'use client';

import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getHeroContent, getBrand } from '@/lib/content';

export function Hero() {
  const hero = getHeroContent();
  const brand = getBrand();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Neural network connections */}
          <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none" opacity="0.6">
            {/* Layer 1 to Layer 2 connections */}
            <path d="M150 150 Q400 200 600 180" className="animate-pulse-slow" />
            <path d="M150 250 Q400 200 600 280" />
            <path d="M150 350 Q400 400 600 380" className="animate-pulse-slow" />
            <path d="M150 150 Q400 300 600 280" />
            <path d="M150 250 Q400 400 600 380" />
            <path d="M150 350 Q400 200 600 180" className="animate-pulse-slow" />
            
            {/* Layer 2 to Layer 3 connections */}
            <path d="M600 180 Q800 250 1000 200" />
            <path d="M600 280 Q800 250 1000 300" className="animate-pulse-slow" />
            <path d="M600 380 Q800 350 1000 400" />
            <path d="M600 180 Q800 350 1000 300" />
            <path d="M600 280 Q800 350 1000 400" className="animate-pulse-slow" />
            <path d="M600 380 Q800 250 1000 200" />
            
            {/* Additional cross connections */}
            <path d="M150 450 Q400 500 600 480" />
            <path d="M600 480 Q800 450 1000 500" className="animate-pulse-slow" />
            <path d="M150 550 Q600 500 1000 550" />
          </g>
          
          {/* Neural network nodes */}
          <g fill="url(#neuralGradient)" filter="url(#glow)">
            {/* Input layer */}
            <circle cx="150" cy="150" r="8" opacity="0.8" />
            <circle cx="150" cy="250" r="8" opacity="0.6" />
            <circle cx="150" cy="350" r="8" opacity="0.8" />
            <circle cx="150" cy="450" r="8" opacity="0.4" />
            <circle cx="150" cy="550" r="8" opacity="0.7" />
            
            {/* Hidden layer */}
            <circle cx="600" cy="180" r="6" opacity="0.9" />
            <circle cx="600" cy="280" r="6" opacity="0.5" />
            <circle cx="600" cy="380" r="6" opacity="0.8" />
            <circle cx="600" cy="480" r="6" opacity="0.6" />
            
            {/* Output layer */}
            <circle cx="1000" cy="200" r="10" opacity="0.9" />
            <circle cx="1000" cy="300" r="10" opacity="0.7" />
            <circle cx="1000" cy="400" r="10" opacity="0.8" />
            <circle cx="1000" cy="500" r="10" opacity="0.6" />
            <circle cx="1000" cy="550" r="10" opacity="0.5" />
          </g>
          
          {/* Data flow particles */}
          <g fill="url(#neuralGradient)" opacity="0.4">
            <circle cx="300" cy="200" r="2" className="animate-ping">
              <animate attributeName="cx" values="150;600" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="450" cy="350" r="2" className="animate-ping">
              <animate attributeName="cx" values="150;600" dur="4s" repeatCount="indefinite" />
              <animate attributeName="cy" values="350;380" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="250" r="2" className="animate-ping">
              <animate attributeName="cx" values="600;1000" dur="3.5s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
        
        {/* Tech grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="info" size="md">
            {hero.badge}
          </Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            {hero.title.line1}
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {hero.title.line2}
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            {brand.tagline}. {hero.description}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/analyze">
              <Button size="lg" className="shadow-lg hover:shadow-xl">
                {hero.cta.primary}
              </Button>
            </a>
            <Button variant="outline" size="lg">
              {hero.cta.secondary}
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {hero.features[0]}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {hero.features[1]}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {hero.features[2]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}