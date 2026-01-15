/**
 * Spacing Token System
 * 
 * This module defines the spacing scale for the Nexus UI design system.
 * All spacing values are derived from the Figma design system and follow
 * an 8px grid foundation with additional values for precise design needs.
 * 
 * Source: Figma Design System
 * - Scale/Space tokens
 * - Scale/Padding tokens
 * 
 * Figma References:
 * - https://www.figma.com/design/Q7IkrUEtB2SUAqDUjElOd9/Backup-Files?node-id=5088-5973
 * - https://www.figma.com/design/Q7IkrUEtB2SUAqDUjElOd9/Backup-Files?node-id=5088-62031
 * 
 * @module tokens/spacing
 */

/**
 * Spacing token keys for type-safe access to spacing values.
 * 
 * The naming convention follows a progressive scale:
 * - none: 0px (no spacing)
 * - xxs: 2px (extra extra small - fine adjustments)
 * - xs: 4px (extra small - minimal spacing)
 * - sm: 8px (small - base grid unit)
 * - md: 12px (medium - comfortable spacing)
 * - md-lg: 14px (between medium and large - specific design need)
 * - lg: 16px (large - double base unit)
 * - xl: 22px (extra large - specific design need)
 * - 2xl: 24px (2x large - triple base unit)
 * - 3xl: 40px (3x large - major spacing)
 */
export type SpacingKey =
  | 'none'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'md-lg'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl';

/**
 * Spacing scale object mapping semantic names to pixel values.
 * 
 * All values are in pixels and directly correspond to Figma design tokens.
 * The scale follows an 8px grid system as its foundation (0, 4, 8, 16, 24, 40)
 * with additional values (2, 12, 14, 22) for precise design requirements.
 * 
 * @constant
 */
export const spacing = {
  /** 0px - No spacing */
  none: 0,
  
  /** 2px - Extra extra small spacing (fine adjustments) */
  xxs: 2,
  
  /** 4px - Extra small spacing (minimal spacing, half base unit) */
  xs: 4,
  
  /** 8px - Small spacing (base grid unit) */
  sm: 8,
  
  /** 12px - Medium spacing (comfortable spacing) */
  md: 12,
  
  /** 14px - Medium-large spacing (specific design requirement) */
  'md-lg': 14,
  
  /** 16px - Large spacing (double base unit) */
  lg: 16,
  
  /** 22px - Extra large spacing (specific design requirement) */
  xl: 22,
  
  /** 24px - 2x large spacing (triple base unit) */
  '2xl': 24,
  
  /** 40px - 3x large spacing (major spacing, quintuple base unit) */
  '3xl': 40,
} as const;

/**
 * Type representing the spacing scale object.
 * Ensures type safety when accessing spacing values.
 */
export type SpacingScale = typeof spacing;

/**
 * Helper function to retrieve spacing values in a type-safe manner.
 * 
 * @param key - The spacing token key
 * @returns The spacing value in pixels
 * 
 * @example
 * ```typescript
 * const smallSpacing = getSpacing('sm'); // 8
 * const mediumSpacing = getSpacing('md'); // 12
 * ```
 */
export function getSpacing(key: SpacingKey): number {
  return spacing[key];
}

/**
 * Helper function to get spacing value as a CSS string with px unit.
 * 
 * @param key - The spacing token key
 * @returns The spacing value as a string with 'px' unit
 * 
 * @example
 * ```typescript
 * const padding = getSpacingPx('lg'); // '16px'
 * const margin = getSpacingPx('2xl'); // '24px'
 * ```
 */
export function getSpacingPx(key: SpacingKey): string {
  return `${spacing[key]}px`;
}

/**
 * Array of all spacing keys in ascending order of value.
 * Useful for iteration and validation.
 */
export const spacingKeys: ReadonlyArray<SpacingKey> = [
  'none',
  'xxs',
  'xs',
  'sm',
  'md',
  'md-lg',
  'lg',
  'xl',
  '2xl',
  '3xl',
] as const;

/**
 * Validates if a string is a valid spacing key.
 * 
 * @param key - The key to validate
 * @returns True if the key is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidSpacingKey('sm'); // true
 * isValidSpacingKey('invalid'); // false
 * ```
 */
export function isValidSpacingKey(key: string): key is SpacingKey {
  return spacingKeys.includes(key as SpacingKey);
}
