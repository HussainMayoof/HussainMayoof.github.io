import {
    Flower2,
    BookOpen,
    FileText,
    CodeXml,
    Mail,
    User,
    Briefcase,
    GraduationCap,
    Star,
    Heart,
    Lightbulb,
    Rocket,
    Folder,
    Terminal,
    Link,
    MessageCircleCode,
    Phone,
    MessageSquare,
    Send,
    Pickaxe,
    Hammer,
    Wrench,
    FolderCode,
} from '@lucide/astro';

// Social media icon components
import GitHub from '../components/Icons/GitHub.astro';
import LinkedIn from '../components/Icons/LinkedIn.astro';
import Twitter from '../components/Icons/Twitter.astro';
import Bluesky from '../components/Icons/Bluesky.astro';
import Instagram from '../components/Icons/Instagram.astro';
import YouTube from '../components/Icons/YouTube.astro';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export type IconName =
    | 'Flower2'
    | 'BookOpen'
    | 'FileText'
    | 'CodeXml'
    | 'Mail'
    | 'User'
    | 'Briefcase'
    | 'GraduationCap'
    | 'Star'
    | 'Heart'
    | 'Lightbulb'
    | 'Rocket'
    | 'Folder'
    | 'Terminal'
    | 'Link'
    | 'MessageCircleCode'
    | 'Phone'
    | 'MessageSquare'
    | 'Send'
    | 'Pickaxe'
    | 'Hammer'
    | 'Wrench'
    | 'FolderCode'
    | 'GitHub'
    | 'LinkedIn'
    | 'Twitter'
    | 'Bluesky'
    | 'Instagram'
    | 'YouTube'
    | 'Email';

export const iconMap: Record<IconName, AstroComponentFactory> = {
    Flower2,
    BookOpen,
    FileText,
    CodeXml,
    Mail,
    User,
    Briefcase,
    GraduationCap,
    Star,
    Heart,
    Lightbulb,
    Rocket,
    Folder,
    Terminal,
    Link,
    MessageCircleCode,
    Phone,
    MessageSquare,
    Send,
    Pickaxe,
    Hammer,
    Wrench,
    FolderCode,
    GitHub,
    LinkedIn,
    Twitter,
    Bluesky,
    Instagram,
    YouTube,
    Email: Mail,
};

export const getIcon = (iconName: IconName) => {
    return iconMap[iconName];
};
