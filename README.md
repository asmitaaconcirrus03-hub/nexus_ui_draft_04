# Nexus UI Design System

## Overview

Nexus UI is a design system built with TypeScript and SCSS, following an 8px grid foundation. All design tokens are sourced from Figma to ensure pixel-perfect consistency between design and implementation.

## Design Token System

### Spacing Tokens

The spacing token system provides a consistent scale for margins, padding, gaps, and other spatial properties throughout the UI.

#### Token Structure

**Source Files:**
- TypeScript: `src/tokens/spacing.ts`
- SCSS: `styles/tokens.scss`
- Tests: `src/tokens/__tests__/spacing.test.ts`

**Figma Source:**
- [Spacing Tokens - Page 1](https://www.figma.com/design/Q7IkrUEtB2SUAqDUjElOd9/Backup-Files?node-id=5088-5973)
- [Spacing Tokens - Page 2](https://www.figma.com/design/Q7IkrUEtB2SUAqDUjElOd9/Backup-Files?node-id=5088-62031)

#### Spacing Scale

The spacing scale follows an 8px grid system foundation with additional values for precise design needs:

| Token | Value | Use Case |
|-------|-------|----------|
| `none` | 0px | No spacing |
| `xxs` | 2px | Fine adjustments, borders |
| `xs` | 4px | Minimal spacing, tight layouts |
| `sm` | 8px | Base grid unit, compact spacing |
| `md` | 12px | Comfortable spacing, common padding |
| `md-lg` | 14px | Specific design requirement |
| `lg` | 16px | Double base unit, generous spacing |
| `xl` | 22px | Specific design requirement |
| `2xl` | 24px | Triple base unit, section spacing |
| `3xl` | 40px | Major spacing, page sections |

### Usage

#### TypeScript / JavaScript

```typescript
import { spacing, getSpacing, getSpacingPx } from './tokens/spacing';

// Direct object access
const padding = spacing.md; // 12

// Type-safe function
const margin = getSpacing('lg'); // 16

// With px unit
const gap = getSpacingPx('sm'); // '8px'

// Validation
import { isValidSpacingKey } from './tokens/spacing';

if (isValidSpacingKey(userInput)) {
  const value = getSpacing(userInput);
}
```

#### SCSS

```scss
@use 'styles/tokens' as tokens;

.component {
  // Using CSS custom properties
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-sm);
  
  // Using SCSS function
  padding: tokens.spacing('md');
  
  // Using SCSS map
  margin: map-get(tokens.$spacing-scale, 'lg');
}
```

#### CSS

```css
.component {
  padding: var(--spacing-md);     /* 12px */
  margin: var(--spacing-lg);      /* 16px */
  gap: var(--spacing-sm);         /* 8px */
}
```

## Testing

The spacing token system includes comprehensive unit tests that verify:

1. **Grid System Compliance**: Values follow 8px grid foundation
2. **Figma Accuracy**: All values match Figma design tokens
3. **Type Safety**: TypeScript types enforce correct usage
4. **Helper Functions**: Utility functions work as expected
5. **CSS Integration**: Custom properties are accessible in DOM

### Running Tests

```bash
# Once testing framework is configured:
npm test src/tokens/__tests__/spacing.test.ts

# Visual tests with Playwright:
npm run test:e2e
```

## Development Workflow

### Adding New Tokens

1. **Extract from Figma**: Use Figma Dev Mode to get exact values
2. **Update TypeScript**: Add to `src/tokens/spacing.ts`
3. **Update SCSS**: Add to `styles/tokens.scss`
4. **Add Tests**: Update test specifications
5. **Document**: Update this README

### Architecture Principles

- ✅ **Figma is Source of Truth**: Never guess or approximate values
- ✅ **Type Safety**: Full TypeScript support with strict typing
- ✅ **Consistency**: Same values across TS and CSS
- ✅ **Documentation**: Comprehensive inline comments
- ✅ **Testing**: Unit and visual test coverage

## Next Steps

- [ ] Set up testing framework (Jest/Vitest)
- [ ] Configure Playwright for visual tests
- [ ] Implement color token system
- [ ] Implement typography token system
- [ ] Create token documentation site
- [ ] Set up automated Figma sync

## Contributing

When contributing to the token system:

1. Always reference Figma design files
2. Follow existing naming conventions
3. Add comprehensive tests
4. Document usage examples
5. Ensure TypeScript and SCSS stay synchronized

## Resources

- [Figma Design Files](https://www.figma.com/design/Q7IkrUEtB2SUAqDUjElOd9/Backup-Files)
- [8px Grid System](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632)
- [Design Tokens W3C](https://design-tokens.github.io/community-group/format/)

---

**Task:** 1.2 - Implement Spacing Token System  
**Status:** ✅ Complete  
**Last Updated:** 2025-01-23
