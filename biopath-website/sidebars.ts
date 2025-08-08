import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome to BioPath',
    },
    {
      type: 'category',
      label: '📖 Complete Peptide Guide',
      collapsed: false,
      items: [
        'ebook/introduction',
        'ebook/what-are-peptides',
      ],
    },
    {
      type: 'category',
      label: '📋 Quick Reference',
      collapsed: false,
      items: [
        'reference/cheat-sheet',
      ],
    },
    {
      type: 'category',
      label: '🧬 Individual Peptides',
      collapsed: true,
      items: [
        'peptides/bpc-157',
        'peptides/tb-500',
      ],
    },
    {
      type: 'category',
      label: '🎯 Protocol Templates',
      collapsed: true,
      items: [
        'protocols/injury-recovery',
      ],
    },
    {
      type: 'category',
      label: '🔬 Research & Science',
      collapsed: true,
      items: [
        'research/clinical-studies',
      ],
    },
    {
      type: 'category',
      label: '🏢 Business Strategy',
      collapsed: true,
      items: [
        'business/overview',
      ],
    },
  ],
};

export default sidebars;
