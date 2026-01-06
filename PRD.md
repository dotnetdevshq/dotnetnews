# .NET Digest Newsletter Website

A professional newsletter landing page for The .NET Insider, featuring subscription management and newsletter showcases for C# and .NET development content.

**Experience Qualities**:
1. **Professional** - Clean, technical aesthetic that appeals to developers
2. **Focused** - Clear emphasis on newsletter subscription and content discovery
3. **Trustworthy** - Transparent privacy messaging and established social proof

**Complexity Level**: Content Showcase (information-focused) - This is a marketing landing page designed to convert visitors into newsletter subscribers while showcasing past content.

## Essential Features

### Newsletter Subscription Form
- **Functionality**: Email capture form with validation
- **Purpose**: Convert visitors into newsletter subscribers
- **Trigger**: User enters email and clicks Subscribe button
- **Progression**: Enter email → Click Subscribe → See success toast → Email field clears
- **Success criteria**: Form validates email format, displays success message, and clears after submission

### Newsletter Archive Display
- **Functionality**: Grid of past newsletter issues with preview cards
- **Purpose**: Showcase newsletter quality and encourage subscriptions
- **Trigger**: Page load
- **Progression**: View cards → Click "Read More" → Navigate to full issue
- **Success criteria**: Cards display consistently, hover effects work, links are functional

### Navigation
- **Functionality**: Sticky header with brand and navigation links
- **Purpose**: Provide consistent site navigation and branding
- **Trigger**: Always visible
- **Progression**: Sticky on scroll → Links navigate to sections
- **Success criteria**: Header remains visible during scroll, links work properly

## Edge Case Handling
- **Empty Email**: Form validation prevents submission
- **Invalid Email Format**: HTML5 email validation provides feedback
- **Duplicate Subscriptions**: Success message shown regardless (no error exposure)
- **Slow Network**: Toast notifications work offline once page loads

## Design Direction
The design should feel technical and professional while remaining approachable - reflecting the serious yet collaborative nature of the .NET development community.

## Color Selection
Purple-based color scheme inspired by .NET branding with warm orange accents for calls-to-action.

- **Primary Color**: Deep Purple (oklch(0.45 0.18 264)) - Represents the .NET brand identity and technical expertise
- **Secondary Colors**: Light purple-gray backgrounds (oklch(0.92 0.02 264)) for subtle contrast and hierarchy
- **Accent Color**: Warm Orange (oklch(0.55 0.22 45)) - Creates energy and draws attention to CTAs
- **Foreground/Background Pairings**: 
  - Primary (Deep Purple): White text (oklch(0.98 0.01 264)) - Ratio 8.2:1 ✓
  - Background (Off-White): Dark text (oklch(0.15 0.02 264)) - Ratio 14.1:1 ✓
  - Accent (Warm Orange): White text (oklch(0.98 0.01 264)) - Ratio 5.1:1 ✓

## Font Selection
Inter for its excellent readability on screens and modern, technical appearance that suits developer-focused content.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold/48px/tight tracking (-0.02em)
  - H2 (Section Titles): Inter Bold/36px/tight tracking (-0.01em)
  - Card Titles: Inter Semibold/24px/normal tracking
  - Body Text: Inter Regular/16px/1.5 line height
  - Small Text: Inter Regular/14px/muted color

## Animations
Animations are subtle and functional - primarily hover states and transitions that provide feedback without distracting from content. Toast notifications slide in smoothly to confirm actions.

## Component Selection
- **Components**: Shadcn Button (primary CTA), Input (email field), Card (newsletter previews), all with Tailwind customizations for the purple theme
- **Customizations**: Custom gradient backgrounds on newsletter cards (primary to accent), custom logo badge in navigation
- **States**: Buttons have hover brightness changes, inputs show ring focus states, cards lift with shadow on hover
- **Icon Selection**: Phosphor Icons for their clean, consistent style - EnvelopeSimple for subscribe, social media logos for footer
- **Spacing**: Consistent 16px/24px padding using Tailwind's spacing scale (py-16/py-24 for sections, p-6 for cards)
- **Mobile**: Navigation collapses on mobile (hidden md:flex), cards stack vertically, subscribe button goes full-width
