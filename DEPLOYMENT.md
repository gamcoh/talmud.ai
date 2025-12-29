# 🚀 Deployment Guide

## Production Checklist

### Environment Variables
```bash
DATABASE_URL="postgresql://..."
NODE_ENV="production"
NEXT_PUBLIC_URL="https://your-domain.com"
```

### Database Setup
```bash
pnpm db:migrate
pnpm db:seed  # Optional: seed with initial data
```

### Build & Start
```bash
pnpm build
pnpm start
```

## Performance Optimizations

### ✅ Implemented
- **Server Components** with data fetching on the server
- **Caching Strategy** with `unstable_cache` and revalidation tags
- **Parallel Data Fetching** with Promise.all
- **Security Headers** via next.config.js
- **Rate Limiting** in middleware
- **Input Validation** with Zod schemas
- **Font Optimization** with next/font
- **Image Optimization** ready for next/image
- **Suspense Boundaries** for progressive loading
- **Error Boundaries** for graceful failures
- **Database Connection Pooling** via Prisma
- **Proper Indexing** on frequently queried fields

### Security Features
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ Rate limiting (100 req/min per IP)
- ✅ Input validation on all API routes
- ✅ SQL injection protection via Prisma
- ✅ XSS protection via React
- ✅ HTTPS enforcement in production

## Vercel Deployment

1. Connect your GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

## Docker Deployment

```dockerfile
FROM node:20-alpine AS base
RUN corepack enable pnpm

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV SKIP_ENV_VALIDATION=true
RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

## Performance Monitoring

Monitor these metrics in production:
- Time to First Byte (TTFB) < 200ms
- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Cumulative Layout Shift (CLS) < 0.1
- First Input Delay (FID) < 100ms

## Database Optimization

### Connection Pooling
Prisma automatically handles connection pooling. For production, consider:
- Connection limit: 10-20 per instance
- Connection timeout: 30s
- Use PgBouncer for large-scale deployments

### Query Optimization
- All frequently accessed fields are indexed
- Use `select` to fetch only needed fields
- Implement cursor-based pagination for large datasets

## Caching Strategy

### Page-level Caching
- Dashboard: 60s revalidation
- Studied texts: 30s revalidation
- Sefaria API: 1 hour revalidation

### Cache Invalidation
Use revalidation tags for targeted invalidation:
- `user-${userKey}` - Invalidate user data
- `dashboard` - Invalidate all dashboard data
- `studied-texts` - Invalidate studied texts list

## Scaling Considerations

### Horizontal Scaling
- App is stateless and can be horizontally scaled
- Rate limiting uses in-memory Map (consider Redis for multi-instance)
- Database connection pooling handles concurrent requests

### Database Scaling
- Implement read replicas for heavy read workloads
- Use database triggers for complex aggregations
- Consider materialized views for analytics

## Monitoring & Logging

```javascript
// Recommended tools
- Vercel Analytics (built-in)
- Sentry for error tracking
- LogRocket for session replay
- New Relic for APM
```
